'use client';

import { useState } from 'react';

const INDUSTRIES = [
  'Decentralised STP / industrial reuse',
  'Textiles and dyeing',
  'Food and beverage',
  'Refining and petrochemicals',
  'Pharmaceuticals / specialty chemicals',
  'Tanneries and leather',
  'Mining and metals',
  'Other',
];

const FLOWS = ['Under 50 KL/day', '50–200 KL/day', '200–500 KL/day', 'Over 500 KL/day', 'Not sure'];

const CONSTRAINTS = [
  'Organics and colour',
  'Capacity',
  'Reuse endpoint',
  'Discharge compliance',
  'Operating cost',
  'Sludge',
  'Dissolved salts / TDS',
  'Metals',
  'Not sure',
];

const initialState = {
  name: '',
  organisation: '',
  email: '',
  industry: '',
  flow: '',
  constraint: '',
  endpoint: '',
};

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!values.name || !values.email) {
      setStatus('error');
      setErrorMessage('Name and email are required.');
      return;
    }
    setStatus('submitting');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'The enquiry could not be sent. Please try again.');
      }
      setStatus('success');
      setValues(initialState);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="f1">Name</label>
        <input id="f1" value={values.name} onChange={update('name')} required />
      </div>

      <div className="field">
        <label htmlFor="femail">Email</label>
        <input
          id="femail"
          type="email"
          value={values.email}
          onChange={update('email')}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="f2">Organisation</label>
        <input id="f2" value={values.organisation} onChange={update('organisation')} />
      </div>

      <div className="field">
        <label htmlFor="f3">Industry</label>
        <select id="f3" value={values.industry} onChange={update('industry')}>
          <option value="">Select…</option>
          {INDUSTRIES.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        {values.industry === 'Tanneries and leather' && (
          <div className="boundary" style={{ margin: '10px 0 0', padding: '14px 16px' }}>
            <p style={{ fontSize: 14, margin: 0 }}>
              Chrome-bearing applications remain controlled laboratory evaluation only, behind an
              independent Cr(III)/Cr(VI) speciation and safety gate. No commercial pilot proceeds
              before that gate is passed.
            </p>
          </div>
        )}
        {values.industry === 'Mining and metals' && (
          <div className="boundary" style={{ margin: '10px 0 0', padding: '14px 16px' }}>
            <p style={{ fontSize: 14, margin: 0 }}>
              Mining applications are qualified by named contaminant, circuit and mechanism. Please
              name the contaminant in the target-endpoint field below.
            </p>
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor="f4">Approximate flow</label>
        <select id="f4" value={values.flow} onChange={update('flow')}>
          <option value="">Select…</option>
          {FLOWS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f5">Primary constraint</label>
        <select id="f5" value={values.constraint} onChange={update('constraint')}>
          <option value="">Select…</option>
          {CONSTRAINTS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {(values.constraint === 'Dissolved salts / TDS' || values.constraint === 'Metals') && (
          <div className="boundary" style={{ margin: '10px 0 0', padding: '14px 16px' }}>
            <p style={{ fontSize: 14, margin: 0 }}>
              Worth saying now: oxidation does not remove dissolved salts, TDS or most dissolved
              metals. If that is your binding constraint we will tell you at the first conversation
              rather than after a pilot.
            </p>
          </div>
        )}
        <div className="hint">The single most useful field on this form.</div>
      </div>

      <div className="field">
        <label htmlFor="f6">Target endpoint</label>
        <textarea id="f6" rows={3} value={values.endpoint} onChange={update('endpoint')} />
      </div>

      <button className="cta-btn" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </button>

      {status === 'success' && (
        <p style={{ color: 'var(--water)', marginTop: 14, fontSize: 14 }}>
          Thank you — your enquiry has been sent. We will reply from a member of the team directly.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: 'var(--ochre)', marginTop: 14, fontSize: 14 }}>{errorMessage}</p>
      )}
    </form>
  );
}
