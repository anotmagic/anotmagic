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
      {/* Name */}
      <div className="mb-4">
        <label htmlFor="f1" className="block text-[13px] font-bold mb-1.25">
          Name
        </label>
        <input
          id="f1"
          value={values.name}
          onChange={update('name')}
          required
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="femail" className="block text-[13px] font-bold mb-1.25">
          Email
        </label>
        <input
          id="femail"
          type="email"
          value={values.email}
          onChange={update('email')}
          required
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        />
      </div>

      {/* Organisation */}
      <div className="mb-4">
        <label htmlFor="f2" className="block text-[13px] font-bold mb-1.25">
          Organisation
        </label>
        <input
          id="f2"
          value={values.organisation}
          onChange={update('organisation')}
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        />
      </div>

      {/* Industry */}
      <div className="mb-4">
        <label htmlFor="f3" className="block text-[13px] font-bold mb-1.25">
          Industry
        </label>
        <select
          id="f3"
          value={values.industry}
          onChange={update('industry')}
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        >
          <option value="">Select…</option>
          {INDUSTRIES.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>

        {/* Tanneries warning */}
        {values.industry === 'Tanneries and leather' && (
          <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 border-l-[#a8600f] p-[14px_16px] mt-2.5">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `repeating-linear-gradient(45deg, rgba(168,96,15,0.16) 0px 1px, transparent 1px 8px)`,
                mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '12px',
              }}
            />
            <div className="relative z-10">
              <p className="text-[14px] m-0 text-[#10262e]">
                Chrome-bearing applications remain controlled laboratory evaluation only, behind an
                independent Cr(III)/Cr(VI) speciation and safety gate. No commercial pilot proceeds
                before that gate is passed.
              </p>
            </div>
          </div>
        )}

        {/* Mining warning */}
        {values.industry === 'Mining and metals' && (
          <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 border-l-[#a8600f] p-[14px_16px] mt-2.5">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `repeating-linear-gradient(45deg, rgba(168,96,15,0.16) 0px 1px, transparent 1px 8px)`,
                mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '12px',
              }}
            />
            <div className="relative z-10">
              <p className="text-[14px] m-0 text-[#10262e]">
                Mining applications are qualified by named contaminant, circuit and mechanism. Please
                name the contaminant in the target-endpoint field below.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Flow */}
      <div className="mb-4">
        <label htmlFor="f4" className="block text-[13px] font-bold mb-1.25">
          Approximate flow
        </label>
        <select
          id="f4"
          value={values.flow}
          onChange={update('flow')}
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        >
          <option value="">Select…</option>
          {FLOWS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Primary constraint */}
      <div className="mb-4">
        <label htmlFor="f5" className="block text-[13px] font-bold mb-1.25">
          Primary constraint
        </label>
        <select
          id="f5"
          value={values.constraint}
          onChange={update('constraint')}
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        >
          <option value="">Select…</option>
          {CONSTRAINTS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* TDS / Metals warning */}
        {(values.constraint === 'Dissolved salts / TDS' || values.constraint === 'Metals') && (
          <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 border-l-[#a8600f] p-[14px_16px] mt-2.5">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `repeating-linear-gradient(45deg, rgba(168,96,15,0.16) 0px 1px, transparent 1px 8px)`,
                mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '12px',
              }}
            />
            <div className="relative z-10">
              <p className="text-[14px] m-0 text-[#10262e]">
                Worth saying now: oxidation does not remove dissolved salts, TDS or most dissolved
                metals. If that is your binding constraint we will tell you at the first conversation
                rather than after a pilot.
              </p>
            </div>
          </div>
        )}

        <div className="text-[12.5px] text-[#37535e] mt-1">
          The single most useful field on this form.
        </div>
      </div>

      {/* Target endpoint */}
      <div className="mb-4">
        <label htmlFor="f6" className="block text-[13px] font-bold mb-1.25">
          Target endpoint
        </label>
        <textarea
          id="f6"
          rows={3}
          value={values.endpoint}
          onChange={update('endpoint')}
          className="w-full font-sans text-[15px] px-3 py-2.5 border border-[#c3d0d2] bg-white text-[#10262e]"
        />
      </div>

      {/* Submit button */}
      <button
        className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </button>

      {/* Status messages */}
      {status === 'success' && (
        <p className="text-[#17787a] mt-3.5 text-[14px]">
          Thank you — your enquiry has been sent. We will reply from a member of the team directly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-[#a8600f] mt-3.5 text-[14px]">{errorMessage}</p>
      )}
    </form>
  );
}