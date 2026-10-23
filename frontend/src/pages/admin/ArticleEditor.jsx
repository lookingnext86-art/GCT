import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { api, errorText, CATEGORY_OPTIONS } from '../../lib/adminApi';
import { STATUS_STYLES } from './AdminDashboard';
import CoverUploader from './CoverUploader';
import '../../styles/guide-prose.css';

const FIELDS = ['title', 'slug', 'meta_title', 'meta_description', 'excerpt', 'category', 'image_alt', 'body_md'];
const inputCls = 'w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-[#0f4f47] focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]';

const Field = ({ label, hint, children }) => (
  <label className="block">
    <span className="flex justify-between text-xs font-semibold text-gray-500 mb-1.5"><span>{label}</span>{hint}</span>
    {children}
  </label>
);

const Counter = ({ value, max }) => (
  <span className={(value || '').length > max ? 'text-red-500' : 'text-gray-400'}>{(value || '').length}/{max}</span>
);

const ArticleEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [form, setForm] = useState({});
  const [view, setView] = useState('edit');
  const [busy, setBusy] = useState('');

  const apply = (a) => {
    setArticle(a);
    setForm({ ...Object.fromEntries(FIELDS.map((f) => [f, a[f] || ''])), keywords: (a.keywords || []).join(', ') });
  };
  const load = useCallback(() => api.get(`/admin/articles/${id}`).then((r) => apply(r.data)).catch(() => navigate('/admin')), [id, navigate]);
  useEffect(() => { load(); }, [load]);

  if (!article) return <div className="h-64" data-testid="editor-loading" />;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const payload = () => ({ ...form, keywords: form.keywords.split(',').map((k) => k.trim()).filter(Boolean) });

  const act = async (key, fn, msg) => {
    setBusy(key);
    try {
      await fn();
      if (msg) toast.success(msg);
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy('');
    }
  };

  const save = () => act('save', async () => apply((await api.put(`/admin/articles/${id}`, payload())).data), 'Changes saved');
  const publish = () => act('publish', async () => {
    await api.put(`/admin/articles/${id}`, payload());
    apply((await api.post(`/admin/articles/${id}/publish`)).data);
  }, article.status === 'published' ? 'Live article updated' : 'Approved and published to your website');
  const unpublish = () => act('unpublish', async () => apply((await api.post(`/admin/articles/${id}/unpublish`)).data), 'Article removed from website');
  const reject = () => act('reject', async () => { await api.post(`/admin/articles/${id}/reject`); navigate('/admin'); }, 'Draft rejected');
  const restore = () => act('restore', async () => { await api.post(`/admin/articles/${id}/restore`); await load(); }, 'Draft restored');

  const [statusLabel, statusCls] = STATUS_STYLES[article.status];
  const editable = ['draft', 'published'].includes(article.status);
  const btn = 'rounded-full px-5 py-2.5 text-sm font-bold transition-colors disabled:opacity-60';

  return (
    <div data-testid="article-editor">
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#0f4f47] mb-5" data-testid="editor-back-link">
        <ArrowLeft className="w-4 h-4" /> All articles
      </Link>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${statusCls}`} data-testid="editor-status">{statusLabel}</span>
        <span className="text-xs text-gray-400">{article.model_label} · {article.read_time}</span>
        {article.live_url && (
          <a href={article.live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#0f4f47] hover:text-[#4dd4ac]" data-testid="editor-live-link">
            View live <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
      <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 min-w-0">
          <Field label="Title" hint={<Counter value={form.title} max={70} />}>
            <input value={form.title} onChange={set('title')} className={`${inputCls} text-base font-semibold`} disabled={!editable} data-testid="editor-title" />
          </Field>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Web address" hint={<span className="text-gray-400">/travel-guide/…</span>}>
              <input value={form.slug} onChange={set('slug')} className={inputCls} disabled={!editable || article.status === 'published'} data-testid="editor-slug" />
            </Field>
            <Field label="Category">
              <select value={form.category} onChange={set('category')} className={inputCls} disabled={!editable} data-testid="editor-category">
                {CATEGORY_OPTIONS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Google title" hint={<Counter value={form.meta_title} max={60} />}>
            <input value={form.meta_title} onChange={set('meta_title')} className={inputCls} disabled={!editable} data-testid="editor-meta-title" />
          </Field>
          <Field label="Google description" hint={<Counter value={form.meta_description} max={155} />}>
            <textarea rows={2} value={form.meta_description} onChange={set('meta_description')} className={inputCls} disabled={!editable} data-testid="editor-meta-description" />
          </Field>
          <Field label="Card teaser" hint={<Counter value={form.excerpt} max={160} />}>
            <textarea rows={2} value={form.excerpt} onChange={set('excerpt')} className={inputCls} disabled={!editable} data-testid="editor-excerpt" />
          </Field>
          <Field label="Keywords (comma separated)">
            <input value={form.keywords} onChange={set('keywords')} className={inputCls} disabled={!editable} data-testid="editor-keywords" />
          </Field>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-500">Article</span>
              <div className="flex gap-1 bg-[#f4f7f6] rounded-full p-1">
                {['edit', 'preview'].map((v) => (
                  <button key={v} type="button" onClick={() => setView(v)} data-testid={`editor-view-${v}`} className={`px-3.5 py-1 rounded-full text-xs font-semibold capitalize ${view === v ? 'bg-white text-[#0f4f47] shadow-sm' : 'text-gray-500'}`}>{v}</button>
                ))}
              </div>
            </div>
            {view === 'edit' ? (
              <textarea rows={28} value={form.body_md} onChange={set('body_md')} className={`${inputCls} font-mono text-[13px] leading-relaxed`} disabled={!editable} data-testid="editor-body" />
            ) : (
              <div className="guide-prose border border-gray-100 rounded-xl p-5 max-h-[720px] overflow-y-auto" data-testid="editor-preview" dangerouslySetInnerHTML={{ __html: article.body_html || '' }} />
            )}
            {view === 'preview' && <p className="text-[11px] text-gray-400 mt-2">Preview shows the last saved version.</p>}
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
            <CoverUploader article={article} onUploaded={load} />
            <Field label="Photo description (alt text)">
              <textarea rows={2} value={form.image_alt} onChange={set('image_alt')} className={inputCls} disabled={!editable} data-testid="editor-image-alt" />
            </Field>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-2.5" data-testid="editor-actions">
            {editable && (
              <>
                <button type="button" onClick={publish} disabled={!!busy} data-testid="editor-publish-btn" className={`${btn} bg-[#4dd4ac] text-[#0f4f47] hover:bg-[#3cc39b]`}>
                  {busy === 'publish' ? 'Publishing…' : article.status === 'published' ? 'Update live article' : 'Approve & publish'}
                </button>
                <button type="button" onClick={save} disabled={!!busy} data-testid="editor-save-btn" className={`${btn} bg-[#0f4f47] text-white hover:bg-[#0a3a35]`}>
                  {busy === 'save' ? 'Saving…' : 'Save changes'}
                </button>
              </>
            )}
            {article.status === 'published' && (
              <button type="button" onClick={unpublish} disabled={!!busy} data-testid="editor-unpublish-btn" className={`${btn} border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600`}>Remove from website</button>
            )}
            {['draft', 'failed'].includes(article.status) && (
              <button type="button" onClick={reject} disabled={!!busy} data-testid="editor-reject-btn" className={`${btn} border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600`}>Reject draft</button>
            )}
            {article.status === 'rejected' && (
              <button type="button" onClick={restore} disabled={!!busy} data-testid="editor-restore-btn" className={`${btn} bg-[#0f4f47] text-white`}>Restore draft</button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleEditor;
