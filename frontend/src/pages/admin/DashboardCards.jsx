import React, { useState } from 'react';
import { toast } from 'sonner';
import { Sparkles, RefreshCw, PlugZap, CalendarClock, Mail } from 'lucide-react';
import { Switch } from '../../components/ui/switch';
import { api, errorText, MODEL_OPTIONS } from '../../lib/adminApi';

const card = 'bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]';
const selectCls = 'rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#0f4f47] focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]';

export const GenerateCard = ({ defaultModel, onCreated }) => {
  const [topic, setTopic] = useState('');
  const [model, setModel] = useState(defaultModel || 'claude');
  const [busy, setBusy] = useState(false);

  const generate = async () => {
    setBusy(true);
    try {
      await api.post('/admin/articles/generate', { topic: topic || null, model });
      toast.success('Writing a new draft — this takes 1–3 minutes.');
      setTopic('');
      onCreated();
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={card} data-testid="generate-card">
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-4 h-4 text-[#4dd4ac]" />
        <h2 className="text-base font-bold text-[#0f4f47]">Write a new draft now</h2>
      </div>
      <p className="text-[13px] text-gray-500 mb-4">Leave the topic empty and the writer picks a fresh Poland travel topic we haven't covered.</p>
      <div className="flex flex-col md:flex-row gap-3">
        <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Optional topic, e.g. Zakopane in winter with kids" className={`${selectCls} flex-1`} data-testid="generate-topic-input" />
        <select value={model} onChange={(e) => setModel(e.target.value)} className={selectCls} data-testid="generate-model-select">
          {MODEL_OPTIONS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
        </select>
        <button type="button" onClick={generate} disabled={busy} data-testid="generate-article-btn" className="rounded-full bg-[#0f4f47] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#0a3a35] disabled:opacity-60 transition-colors">
          {busy ? 'Starting…' : 'Generate draft'}
        </button>
      </div>
    </div>
  );
};

export const SettingsCard = ({ settings, onChange }) => {
  const [busy, setBusy] = useState('');

  const save = async (patch) => {
    try {
      const { data } = await api.put('/admin/settings', { default_model: settings.default_model, auto_generate: settings.auto_generate, ...patch });
      onChange(data);
      toast.success('Settings saved');
    } catch (err) {
      toast.error(errorText(err));
    }
  };

  const run = async (key, url, okMsg) => {
    setBusy(key);
    try {
      const { data } = await api.post(url);
      data.ok === false ? toast.error(data.message) : toast.success(data.message || okMsg(data));
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy('');
    }
  };

  const connected = settings.sftp_configured;

  return (
    <div className={`${card} space-y-5`} data-testid="settings-card">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-[#4dd4ac]" />
            <h2 className="text-base font-bold text-[#0f4f47]">Automatic drafts</h2>
          </div>
          <Switch checked={settings.auto_generate} onCheckedChange={(v) => save({ auto_generate: v })} className="data-[state=checked]:bg-[#0f4f47]" data-testid="auto-generate-switch" />
        </div>
        <p className="text-[13px] text-gray-500 mt-1.5">A new draft is written on the 1st and 15th of every month. Nothing goes live until you approve it.</p>
        <select value={settings.default_model} onChange={(e) => save({ default_model: e.target.value })} className={`${selectCls} mt-3 w-full`} data-testid="default-model-select">
          {MODEL_OPTIONS.map((m) => <option key={m.id} value={m.id}>Scheduled writer: {m.label}</option>)}
        </select>
      </div>
      <div className="flex items-start gap-2 text-[13px] text-gray-500 border-t border-gray-100 pt-4">
        <Mail className="w-4 h-4 text-[#4dd4ac] mt-0.5 shrink-0" />
        <span>Email alerts go to <strong className="text-[#0f4f47]" data-testid="alert-email">{settings.alert_email}</strong></span>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2 mb-1.5">
          <PlugZap className="w-4 h-4 text-[#4dd4ac]" />
          <h3 className="text-sm font-bold text-[#0f4f47]">Website connection</h3>
          <span data-testid="site-connection-status" className={`ml-auto text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${connected ? 'bg-[#4dd4ac]/20 text-[#0f4f47]' : 'bg-amber-100 text-amber-700'}`}>
            {connected ? 'Connected' : 'Not set up'}
          </span>
        </div>
        <p className="text-[13px] text-gray-500 mb-3">
          {connected ? `Approved articles upload straight to ${settings.site_url}.` : 'Add your one.com SFTP details so approved articles upload to your live site automatically.'}
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" disabled={!!busy} onClick={() => run('test', '/admin/site/test', () => 'Connected')} data-testid="test-connection-btn" className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-[#0f4f47] hover:border-[#4dd4ac] disabled:opacity-60">
            {busy === 'test' ? 'Testing…' : 'Test connection'}
          </button>
          <button type="button" disabled={!!busy} onClick={() => run('sync', '/admin/site/resync', (d) => `Re-uploaded ${d.files} files`)} data-testid="resync-site-btn" className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-[#0f4f47] hover:border-[#4dd4ac] disabled:opacity-60">
            <RefreshCw className={`w-3.5 h-3.5 ${busy === 'sync' ? 'animate-spin' : ''}`} /> Re-sync website
          </button>
        </div>
      </div>
    </div>
  );
};
