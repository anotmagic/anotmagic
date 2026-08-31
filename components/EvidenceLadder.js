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
      <div className="ladder">
        {RUNGS.map(([name], i) => (
          <button
            key={name}
            className={'rung' + (active === i ? ' on' : '')}
            onClick={() => setActive(i)}
          >
            <span className="n">{i + 1}</span>
            <span className="nm">{name}</span>
            <span className="bar">
              <i style={{ width: `${((i + 1) / RUNGS.length) * 100}%` }} />
            </span>
          </button>
        ))}
      </div>
      <div className="rungout">
        {active === null
          ? 'Select a rung to see what evidence it requires — and what may be claimed at it.'
          : RUNGS[active][1]}
      </div>
    </>
  );
}
