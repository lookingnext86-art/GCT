export const trackEvent = (name, params = {}) => {
  const data = { page_path: window.location.pathname, ...params };
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') window.gtag('event', name, { ...data, transport_type: 'beacon' });
  window.dataLayer.push({ event: name, ...data });
};

const isWhatsApp = (href) => /(^https?:\/\/)?(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i.test(href || '');

export const trackWhatsAppClick = (location) => trackEvent('whatsapp_click', { link_location: location });

export const installWhatsAppLinkTracking = () => {
  const onClick = (e) => {
    const link = e.target.closest && e.target.closest('a[href]');
    if (!link || !isWhatsApp(link.getAttribute('href'))) return;
    const label = (link.getAttribute('aria-label') || link.textContent || '').trim().slice(0, 80);
    trackWhatsAppClick(link.dataset.testid || label || 'link');
  };
  document.addEventListener('click', onClick, true);
  return () => document.removeEventListener('click', onClick, true);
};
