import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { api } from '../../lib/adminApi';
import { GenerateCard, SettingsCard } from './DashboardCards';

const TABS = [
  { id: 'review', label: 'To review', match: ['draft', 'generating', 'failed'] },
  { id: 'published', label: 'Published', match: ['published'] },
  { id: 'rejected', label: 'Rejected', match: ['rejected'] },
];

export const STATUS_STYLES = {
  draft: ['Awaiting approval', 'bg-amber-100 text-amber-800'],
  generating: ['Writing…', 'bg-sky-100 text-sky-800'],
  failed: ['Failed', 'bg-red-100 text-red-700'],
  published: ['Live', 'bg-[#4dd4ac]/20 text-[#0f4f47]'],
  rejected: ['Rejected', 'bg-gray-100 text-gray-500'],
};

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

const ArticleRow = ({ a }) => {
  const [label, cls] = STATUS_STYLES[a.status];
  const body = (
    <>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${cls}`} data-testid={`article-status-${a.id}`}>
            {a.status === 'generating' && <Loader2 className="inline w-3 h-3 mr-1 animate-spin" />}{label}
          </span>
          <span className="text-[11px] text-gray-400">{a.model_label} · {a.source === 'schedule' ? 'Scheduled' : 'Manual'} · {formatDate(a.created_at)}</span>
        </div>
        <p className="font-semibold text-[#0f4f47] truncate">{a.title}</p>
        {a.status === 'failed' && <p className="text-xs text-red-600 mt-1 truncate">{a.error}</p>}
        {a.status === 'draft' && a.alert_sent === false && <p className="text-xs text-amber-700 mt-1" data-testid={`alert-failed-${a.id}`}>Email alert was not delivered{a.alert_to ? ` to ${a.alert_to}` : ''} — check the alert email in settings.</p>}
        {a.excerpt && a.status !== 'failed' && <p className="text-[13px] text-gray-500 truncate mt-0.5">{a.excerpt}</p>}
      </div>
      {a.status !== 'generating' && <ArrowRight className="w-4 h-4 text-[#4dd4ac] shrink-0" />}
    </>
  );
  const cls2 = 'flex items-center gap-4 bg-white rounded-2xl border border-gray-100 px-5 py-4 transition-[border-color,transform] duration-300';
  return a.status === 'generating' ? (
    <div className={cls2} data-testid={`article-row-${a.id}`}>{body}</div>
  ) : (
    <Link to={`/admin/articles/${a.id}`} className={`${cls2} hover:border-[#4dd4ac] hover:-translate-y-0.5`} data-testid={`article-row-${a.id}`}>{body}</Link>
  );
};

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [settings, setSettings] = useState(null);
  const [tab, setTab] = useState('review');

  const load = useCallback(() => api.get('/admin/articles').then((r) => setArticles(r.data)), []);

  useEffect(() => {
    load();
    api.get('/admin/settings').then((r) => setSettings(r.data));
  }, [load]);

  const writing = articles.some((a) => a.status === 'generating');
  useEffect(() => {
    if (!writing) return undefined;
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, [writing, load]);

  const current = TABS.find((t) => t.id === tab);
  const shown = articles.filter((a) => current.match.includes(a.status));

  return (
    <div data-testid="admin-dashboard">
      <p className="text-[11px] tracking-[0.3em] uppercase text-[#4dd4ac] font-semibold mb-1">Travel Guide</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#0f4f47] tracking-tight mb-8">Articles</h1>
      <div className="grid lg:grid-cols-[1fr_340px] gap-6 items-start">
        <div className="space-y-6 min-w-0">
          {settings && <GenerateCard defaultModel={settings.default_model} onCreated={load} />}
          <div>
            <div className="flex gap-2 mb-4" role="tablist">
              {TABS.map((t) => {
                const count = articles.filter((a) => t.match.includes(a.status)).length;
                return (
                  <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)} data-testid={`tab-${t.id}`}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${tab === t.id ? 'bg-[#0f4f47] text-white' : 'bg-white text-[#0f4f47] border border-gray-200 hover:border-[#4dd4ac]'}`}>
                    {t.label} <span className="opacity-60 ml-1">{count}</span>
                  </button>
                );
              })}
            </div>
            <div className="space-y-3" data-testid="article-list">
              {shown.map((a) => <ArticleRow key={a.id} a={a} />)}
              {shown.length === 0 && (
                <div className="text-center py-14 border border-dashed border-gray-200 rounded-2xl text-sm text-gray-500 bg-white/50" data-testid="article-list-empty">
                  Nothing here yet.
                </div>
              )}
            </div>
          </div>
        </div>
        {settings && <SettingsCard settings={settings} onChange={setSettings} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
