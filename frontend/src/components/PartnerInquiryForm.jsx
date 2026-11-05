import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const FORM_KEY = '7ad9491f-74c2-4199-8f2b-acc66677deaa';
const input = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#4dd4ac] focus:ring-2 focus:ring-[#4dd4ac]/30 transition-[border-color,box-shadow]';

const FIELDS = [
  ['company', 'Company name', 'text', 'Your travel agency or tour operator'],
  ['country', 'Country', 'text', 'Where your agency is based'],
  ['email', 'Email', 'email', 'So we can reply to you'],
  ['group_size', 'Group size', 'text', 'e.g. 25 travellers'],
  ['dates', 'Travel dates', 'text', 'e.g. 12–18 May 2027'],
];

export const PartnerInquiryForm = () => {
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get('botcheck')) return;
    setStatus({ sending: true, ok: null, msg: 'Sending your request...' });
    try {
      const res = await (await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })).json();
      if (!res.success) throw new Error(res.message);
      trackEvent('generate_lead', { form_name: 'partner_form', lead_source: 'for_travel_agencies' });
      e.target.reset();
      setStatus({ sending: false, ok: true, msg: 'Thank you! Your request has been sent to our Kraków team.' });
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: 'Sorry, something went wrong. Please try again or email info@greencontinenttours.com.' });
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-[#f6faf9] border border-gray-100 rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-5" data-testid="partner-form">
      <input type="hidden" name="access_key" value={FORM_KEY} />
      <input type="hidden" name="subject" value="New partner inquiry – For Travel Agencies page" />
      <input type="hidden" name="from_name" value="Green Continent Tours website" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      {FIELDS.map(([name, label, type, placeholder]) => (
        <label key={name} className={name === 'company' ? 'sm:col-span-2' : ''}>
          <span className="block text-[13px] font-semibold text-[#0f4f47] mb-1.5">{label}</span>
          <input name={name} type={type} required placeholder={placeholder} className={input} data-testid={`partner-form-${name}`} />
        </label>
      ))}
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status.sending} data-testid="partner-form-submit"
          className="inline-flex items-center gap-2 bg-[#0f4f47] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1a6b5f] transition-colors disabled:opacity-60">
          <Send className="w-4 h-4" aria-hidden="true" /> {status.sending ? 'Sending...' : 'Send partner inquiry'}
        </button>
        {status.msg && (
          <p role="status" data-testid="partner-form-status" className={`text-sm ${status.ok === false ? 'text-red-600' : 'text-[#0f4f47]'}`}>{status.msg}</p>
        )}
      </div>
    </form>
  );
};
