"use client";

import { useState } from "react";

const STAGES = [
  [
    "INTAKE",
    false,
    "Screening and equalisation. Variability here shapes everything downstream — but this is not an oxidation problem.",
  ],
  [
    "PRIMARY",
    false,
    "Solids separation. If solids separation is your binding constraint, oxidation is not your mechanism and we will say so.",
  ],
  [
    "BIOLOGY",
    true,
    "A · Candidate pre-biological intervention. Target: oxidisable organic load, colour and emulsified FOG entering biology.",
  ],
  [
    "CLARIFY",
    false,
    "Settling and sludge handling. We measure the effect here, but we do not intervene here.",
  ],
  [
    "TERTIARY",
    true,
    "B · Candidate post-biological polishing. Target: residual colour, odour and oxidisable organics limiting reuse.",
  ],
  [
    "REUSE",
    false,
    "The endpoint that settles the decision. Dissolved salts and TDS are addressed by separate technologies, integrated downstream.",
  ],
];

export default function TreatmentTrain() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Train row */}
      <div className="flex gap-2.5 items-stretch overflow-x-auto px-1 pb-1.5">
        {STAGES.map(([label, marked, out], i) => (
          <div
            key={label}
            className="flex-1 min-w-[104px] flex flex-col items-center"
          >
            {/* Badge slot — always occupies space so buttons stay aligned */}
            <span
              aria-hidden={!marked}
              className={`
                relative z-10 -mb-[11px] h-[22px] w-[22px] rounded-full
                grid place-items-center text-[11px] font-bold leading-none
                ${marked ? "bg-[#2fa9a6] text-[#10262e]" : "opacity-0"}
              `}
            >
              {i === 2 ? "A" : "B"}
            </span>

            <button
              className={`
                w-full bg-[#17323c] text-[#a9c6c8] font-mono text-[11px] tracking-[0.06em]
                pt-5 pb-4 px-2 border-0 cursor-pointer text-center
                hover:bg-[#1e4250] hover:text-white
                ${marked ? "text-white shadow-[inset_0_3px_0_#2fa9a6]" : ""}
                ${active === i ? "bg-[#1e4250] text-white" : ""}
              `}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              {label}
            </button>
          </div>
        ))}
      </div>

      {/* Description line */}
      <div
        className={`
          min-h-[44px] text-[14px] text-[#a9c6c8] border-t border-[#2a4a57] pt-3 mt-1
          ${active !== null && !STAGES[active][1] ? "text-[#e8b87a]" : ""}
        `}
      >
        {active === null
          ? "Select a stage to see what typically constrains it — and whether oxidation has a role there."
          : STAGES[active][2]}
      </div>
    </>
  );
}
