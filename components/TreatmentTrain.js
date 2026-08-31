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
      <div className="train">
        {STAGES.map(([label, marked, out], i) => (
          <button
            key={label}
            className={'stage' + (marked ? ' mk' : '')}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {marked && <span className="tag">{i === 2 ? 'A' : 'B'}</span>}
            {label}
          </button>
        ))}
      </div>
      <div className={'trainout' + (active !== null && !STAGES[active][1] ? ' neg' : '')}>
        {active === null
          ? 'Select a stage to see what typically constrains it — and whether oxidation has a role there.'
          : STAGES[active][2]}
      </div>
    </>
  );
}
