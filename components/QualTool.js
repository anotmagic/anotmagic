'use client';

import { useState } from 'react';
import Link from 'next/link';

const OPTIONS = [
  { label: 'High or variable organic load, COD, colour or odour', outcome: 'pos' },
  { label: 'Biological process operating outside its design envelope', outcome: 'pos' },
  { label: 'Reuse endpoint we cannot currently meet', outcome: 'pos' },
  { label: 'Dissolved salts or TDS', outcome: 'neg' },
  { label: 'Generic heavy-metals removal', outcome: 'neg' },
  { label: 'Solids separation', outcome: 'neg' },
];

export default function QualTool() {
  const [result, setResult] = useState(null);

  return (
    <div className="qbox" style={{ marginTop: 28 }}>
      <div className="eyebrow">Question 1 of 6</div>
      <h3 style={{ marginBottom: 16 }}>What is the binding constraint at your site?</h3>
      <div>
        {OPTIONS.map((o) => (
          <button key={o.label} className="opt" onClick={() => setResult(o.outcome)}>
            {o.label}
          </button>
        ))}
      </div>

      {result === 'neg' && (
        <div className="result neg">
          <div className="eyebrow b">Oxidation is probably not your mechanism</div>
          <p style={{ marginBottom: 8 }}>
            Advanced oxidation degrades susceptible compounds. It does not remove dissolved salts,
            TDS or most dissolved metals, and it does not separate solids.
          </p>
          <p style={{ marginBottom: 0 }}>
            Where those are the binding constraint, the correct answer is another unit operation —
            membrane, evaporative, precipitation, adsorption or ion exchange. Saying so now costs us
            an opportunity. Discovering it after a pilot costs you a year.
          </p>
        </div>
      )}

      {result === 'pos' && (
        <div className="result pos">
          <div className="eyebrow">Worth a conversation</div>
          <p style={{ marginBottom: 8 }}>
            That is the kind of problem oxidation may be mechanistically relevant to — which is not
            the same as saying it will work at your site.
          </p>
          <p style={{ marginBottom: 0 }}>
            The next five questions establish flow, endpoint and existing assets, then hand you a
            pre-filled enquiry. <Link href="/contact">Start that conversation →</Link>
          </p>
        </div>
      )}
    </div>
  );
}
