import axios from 'axios';

const TOKEN_KEY = 'gct_admin_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const api = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URL}/api` });

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401 && !err.config.url.includes('/auth/login')) {
      clearToken();
      window.dispatchEvent(new Event('gct-admin-logout'));
    }
    return Promise.reject(err);
  }
);

export function errorText(err) {
  const detail = err?.response?.data?.detail;
  if (!detail) return err?.message || 'Something went wrong. Please try again.';
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail)) return detail.map((e) => e?.msg || JSON.stringify(e)).join(' ');
  return String(detail);
}

export const CATEGORY_OPTIONS = [
  { id: 'krakow', label: 'Krakow' },
  { id: 'family-travel', label: 'Family Travel' },
  { id: 'poland-tips', label: 'Poland Tips' },
  { id: 'winter-travel', label: 'Winter Travel' },
  { id: 'europe', label: 'Europe' },
];

export const MODEL_OPTIONS = [
  { id: 'claude', label: 'Claude Sonnet 5.5' },
  { id: 'gpt', label: 'GPT 6 Luna' },
];
