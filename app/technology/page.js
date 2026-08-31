export const metadata = { title: 'Technology · M Sciences' };

export default function TechnologyPage() {
  return (
    <>
      <section className="band">
        <div className="wrap">
          <div className="eyebrow">Technology · ANOT®</div>
          <h1>
            What targeted oxidation is
            <br />
            designed to do
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            ANOT is evaluated as a targeted oxidation intervention for defined,
            oxidation-relevant problems inside a broader treatment train.
          </p>
          <span className="chip" style={{ marginTop: 18 }}>
            Deployed
          </span>
        </div>
      </section>

      <section className="band mineral">
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">The chain that has to hold</div>
            <h2>From influent problem to business endpoint</h2>
          </div>
          <div className="grid g4">
            <div className="card">
              <div className="eyebrow">01 · Influent problem</div>
              <p>
                Refractory organics, colour bodies, biological inhibition, emulsified FOG, or a
                named oxidisable species identified at your site.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">02 · Intervention</div>
              <p>
                Dose, contact time, pH and redox range, insertion point and failure envelope —
                established for your matrix.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">03 · System effect</div>
              <p>Whether that delivers biological preconditioning, polishing or reduced downstream burden.</p>
            </div>
            <div className="card">
              <div className="eyebrow">04 · Business endpoint</div>
              <p>
                Reuse, released capacity, operating reliability or treatment economics — measured
                against your own baseline.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 22, fontSize: 15, color: 'var(--slate)' }}>
            None of these outcomes is claimed as generally proven. Each is a hypothesis about your
            site until an independent baseline and controlled dose-response testing establish
            otherwise.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="eyebrow b">What it is not</div>
          <div className="boundary">
            <p style={{ fontSize: 19, fontFamily: 'var(--serif)' }}>
              ANOT is not desalination. It is not generic dissolved-metals removal. It is not a
              universal disinfectant. And it is not a replacement for every STP or ETP process.
            </p>
          </div>
          <p style={{ marginTop: 26 }}>
            <strong>Where our process ends.</strong> Micron filtration. Ultrafiltration and reverse
            osmosis are distinct technologies with their own expertise requirements — where an
            endpoint needs them, they are integrated downstream and we say so. The higher the reuse
            quality you need, the more of the train you are buying, and some of it is not ours.
            Treated water is not for drinking purposes.
          </p>
          <div style={{ background: 'var(--mineral)', padding: 22, marginTop: 12 }}>
            <div className="eyebrow">Independently evaluated</div>
            <p style={{ fontSize: 15, margin: 0 }}>
              NOXXALL has been evaluated by the Department of Chemical Engineering, Indian
              Institute of Science, Bengaluru, under a consultancy project covering biotoxicology,
              formulation toxicity, heavy-metal content, material safety data and industrial
              applications. Trial testing was earlier conducted at the Department of Environmental
              Science, Bangalore University. That work addresses the technology, not your site.
            </p>
            <p style={{ fontSize: 13, color: 'var(--slate)', fontStyle: 'italic', margin: '10px 0 0' }}>
              Both evaluations were conducted under the company&rsquo;s former name, Ozo Nano
              Sciences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
