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
    <div className="bg-white border border-[#c3d0d2] p-[26px] mt-7">
      <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
        Question 1 of 6
      </div>
      <h3 className="text-[19px] font-bold mb-4">What is the binding constraint at your site?</h3>
      <div>
        {OPTIONS.map((o) => (
          <button
            key={o.label}
            className="block w-full text-left bg-[#fbfbf9] border border-[#c3d0d2] px-4 py-3.25 mb-[9px] cursor-pointer font-sans text-[15px] text-[#10262e] hover:border-[#17787a] hover:bg-[#d6e6e5] transition-colors"
            onClick={() => setResult(o.outcome)}
          >
            {o.label}
          </button>
        ))}
      </div>

      {result === 'neg' && (
        <div className="p-6 mt-[18px] bg-[#f7efe2] border-l-4 border-l-[#a8600f]">
          <div className="text-[#a8600f] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            Oxidation is probably not your mechanism
          </div>
          <p className="mb-2 text-[#10262e]">
            Advanced oxidation degrades susceptible compounds. It does not remove dissolved salts,
            TDS or most dissolved metals, and it does not separate solids.
          </p>
          <p className="mb-0 text-[#10262e]">
            Where those are the binding constraint, the correct answer is another unit operation —
            membrane, evaporative, precipitation, adsorption or ion exchange. Saying so now costs us
            an opportunity. Discovering it after a pilot costs you a year.
          </p>
        </div>
      )}

      {result === 'pos' && (
        <div className="p-6 mt-[18px] bg-[#d6e6e5] border-l-4 border-l-[#17787a]">
          <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            Worth a conversation
          </div>
          <p className="mb-2 text-[#10262e]">
            That is the kind of problem oxidation may be mechanistically relevant to — which is not
            the same as saying it will work at your site.
          </p>
          <p className="mb-0 text-[#10262e]">
            The next five questions establish flow, endpoint and existing assets, then hand you a
            pre-filled enquiry. <Link href="/contact" className="text-[#17787a] hover:underline">Start that conversation →</Link>
          </p>
        </div>
      )}
    </div>
  );
}