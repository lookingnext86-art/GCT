import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { LogOut } from 'lucide-react';
import { api, clearToken, getToken, setToken } from '../../lib/adminApi';
import AdminLogin from './AdminLogin';

const AdminAuthContext = createContext(null);
export const useAdminAuth = () => useContext(AdminAuthContext);

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) setUser(false);
    else api.get('/auth/me').then((r) => setUser(r.data)).catch(() => setUser(false));
    const onLogout = () => setUser(false);
    window.addEventListener('gct-admin-logout', onLogout);
    return () => window.removeEventListener('gct-admin-logout', onLogout);
  }, []);

  const login = useCallback((token, u) => {
    setToken(token);
    setUser(u);
  }, []);

  const logout = () => {
    clearToken();
    setUser(false);
    navigate('/admin');
  };

  return (
    <AdminAuthContext.Provider value={{ user, login, logout }}>
      <Helmet>
        <title>Admin – Green Continent Tours</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Toaster position="top-right" richColors />
      {user === null && <div className="min-h-screen bg-[#f4f7f6]" data-testid="admin-loading" />}
      {user === false && <AdminLogin />}
      {user && (
        <div className="min-h-screen bg-[#f4f7f6]" data-testid="admin-shell">
          <header className="bg-[#0f4f47] text-white">
            <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
              <button type="button" onClick={() => navigate('/admin')} className="flex items-center gap-3" data-testid="admin-home-link">
                <img src="/GCT-asset/logo.svg" alt="Green Continent Tours" className="h-8 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#4dd4ac] font-semibold">Travel Guide Studio</span>
              </button>
              <div className="flex items-center gap-4 text-sm">
                <span className="hidden sm:inline text-white/70" data-testid="admin-user-email">{user.email}</span>
                <button type="button" onClick={logout} data-testid="admin-logout-btn" className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#4dd4ac] transition-colors">
                  <LogOut className="w-4 h-4" /> Sign out
                </button>
              </div>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
            <Outlet />
          </main>
        </div>
      )}
    </AdminAuthContext.Provider>
  );
};

export default AdminLayout;
