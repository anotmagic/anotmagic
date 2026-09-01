'use client';

import { useState } from 'react';

const RUNGS = [
  ['Hypothesis / design intent', 'Mechanism argument only. Not a claim. Nothing may be presented to a client as evidence at this rung.'],
  ['Controlled laboratory evidence', 'Dose-response with controls, in our own or a partner laboratory. Indicative only — not representative of your matrix.'],
  ['Independent laboratory verification', 'Accredited third party, protocol agreed in writing beforehand. This is the first rung at which a result may be quoted.'],
  ['Site pilot', 'Your matrix, your variability, pre-agreed success and kill criteria fixed before dosing begins.'],
  ['Replication', 'Repeat performance across operators and conditions. One good result is not a repeatable one.'],
  ['Commercial-scale evidence', 'Sustained operation, and only then a referenceable case.'],
];

export default function EvidenceLadder() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="mt-2">
        {RUNGS.map(([name], i) => (
          <button
            key={name}
            className={`
              grid grid-cols-[34px_190px_1fr] gap-3.5 items-center py-[11px] px-0
              border-b border-[#c3d0d2] w-full text-left bg-transparent
              hover:bg-[#eef2f1] transition-colors cursor-pointer
              ${active === i ? 'bg-[#eef2f1]' : ''}
            `}
            onClick={() => setActive(i)}
          >
            <span className="font-mono text-[13px] text-[#17787a]">{i + 1}</span>
            <span className="font-bold text-[15px]">{name}</span>
            <span className="h-[9px] bg-[#eef2f1] relative">
              <span
                className="absolute inset-0 right-auto bg-[#d6e6e5]"
                style={{ width: `${((i + 1) / RUNGS.length) * 100}%` }}
              />
              {active === i && (
                <span
                  className="absolute inset-0 right-auto bg-[#17787a]"
                  style={{ width: `${((i + 1) / RUNGS.length) * 100}%` }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
      <div className="bg-[#eef2f1] p-[18px_20px] mt-3.5 text-[15px]">
        {active === null
          ? 'Select a rung to see what evidence it requires — and what may be claimed at it.'
          : RUNGS[active][1]}
      </div>
    </>
  );
}