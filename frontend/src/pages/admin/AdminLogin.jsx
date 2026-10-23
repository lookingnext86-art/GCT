import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { api, errorText } from '../../lib/adminApi';
import { useAdminAuth } from './AdminLayout';

const AdminLogin = () => {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const { data } = await api.post('/auth/login', { email, password });
      login(data.token, data.user);
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const inputCls = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f4f47] focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]';

  return (
    <div className="min-h-screen bg-[#0f4f47] flex items-center justify-center px-5" data-testid="admin-login-page">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]" data-testid="admin-login-form">
        <div className="w-11 h-11 rounded-full bg-[#4dd4ac]/15 flex items-center justify-center mb-5">
          <Lock className="w-5 h-5 text-[#0f4f47]" />
        </div>
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#4dd4ac] font-semibold mb-1">Travel Guide Studio</p>
        <h1 className="text-2xl font-bold text-[#0f4f47] tracking-tight mb-6">Sign in to review articles</h1>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5" htmlFor="admin-email">Email</label>
        <input id="admin-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputCls} mb-4`} data-testid="admin-login-email" />
        <label className="block text-xs font-semibold text-gray-500 mb-1.5" htmlFor="admin-password">Password</label>
        <input id="admin-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={`${inputCls} mb-5`} data-testid="admin-login-password" />
        {error && <p className="text-sm text-red-600 mb-4" data-testid="admin-login-error">{error}</p>}
        <button type="submit" disabled={busy} data-testid="admin-login-submit" className="w-full rounded-full bg-[#0f4f47] text-white py-3 font-bold text-sm tracking-wide hover:bg-[#0a3a35] disabled:opacity-60 transition-colors">
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
