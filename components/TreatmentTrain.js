'use client';

import { useState } from 'react';

const STAGES = [
  ['INTAKE', false, 'Screening and equalisation. Variability here shapes everything downstream — but this is not an oxidation problem.'],
  ['PRIMARY', false, 'Solids separation. If solids separation is your binding constraint, oxidation is not your mechanism and we will say so.'],
  ['BIOLOGY', true, 'A · Candidate pre-biological intervention. Target: oxidisable organic load, colour and emulsified FOG entering biology.'],
  ['CLARIFY', false, 'Settling and sludge handling. We measure the effect here, but we do not intervene here.'],
  ['TERTIARY', true, 'B · Candidate post-biological polishing. Target: residual colour, odour and oxidisable organics limiting reuse.'],
  ['REUSE', false, 'The endpoint that settles the decision. Dissolved salts and TDS are addressed by separate technologies, integrated downstream.'],
];

export default function TreatmentTrain() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Train row */}
      <div className="flex gap-2.5 items-end overflow-x-auto pb-1.5">
        {STAGES.map(([label, marked, out], i) => (
          <button
            key={label}
            className={`
              flex-1 min-w-[104px] bg-[#17323c] text-[#a9c6c8] font-mono text-[11px] tracking-[0.06em] 
              py-4 px-2 border-0 cursor-pointer relative text-center 
              hover:bg-[#1e4250] hover:text-white
              ${marked ? 'text-white shadow-[inset_0_3px_0_#2fa9a6]' : ''}
              ${active === i ? 'bg-[#1e4250] text-white' : ''}
            `}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {marked && (
              <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#2fa9a6] text-[#10262e] font-bold text-[11px] leading-[22px] text-center">
                {i === 2 ? 'A' : 'B'}
              </span>
            )}
            {label}
          </button>
        ))}
      </div>

      {/* Description line */}
      <div
        className={`
          min-h-[44px] text-[14px] text-[#a9c6c8] border-t border-[#2a4a57] pt-3 mt-1
          ${active !== null && !STAGES[active][1] ? 'text-[#e8b87a]' : ''}
        `}
      >
        {active === null
          ? 'Select a stage to see what typically constrains it — and whether oxidation has a role there.'
          : STAGES[active][2]}
      </div>
    </>
  );
}