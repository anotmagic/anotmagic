export const metadata = { title: 'Industries · M Sciences' };

export default function IndustriesPage() {
  return (
    <>
      <section className="band">
        <div className="wrap">
          <div className="eyebrow">Industries</div>
          <h1>
            Where we engage —
            <br />
            and on what condition
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Validation is deliberately selective, so that evidence quality and
            applications-engineering capacity are not diluted across too many matrices at once.
          </p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Application area</th>
                  <th>Engagement posture</th>
                  <th>What governs progression</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="dot v" />
                    Decentralised STP and industrial reuse
                  </td>
                  <td>Validating</td>
                  <td>A defined reuse endpoint and a representative independent baseline</td>
                </tr>
                <tr>
                  <td>
                    <span className="dot v" />
                    Textiles and dyeing
                  </td>
                  <td>Validating</td>
                  <td>Organics and colour separated explicitly from TDS and salt management</td>
                </tr>
                <tr>
                  <td>
                    <span className="dot v" />
                    Food and beverage
                  </td>
                  <td>Validating</td>
                  <td>Matrix variability, hygiene endpoint and complete-system reuse economics</td>
                </tr>
                <tr>
                  <td>
                    <span className="dot s" />
                    Refining and petrochemicals
                  </td>
                  <td>Selective</td>
                  <td>Strict matrix, safety, by-product and evidence gates</td>
                </tr>
                <tr>
                  <td>
                    <span className="dot s" />
                    Pharmaceuticals and specialty chemicals
                  </td>
                  <td>Selective</td>
                  <td>Compound-specific validation and transformation-product discipline</td>
                </tr>
                <tr>
                  <td>
                    <span className="dot g" />
                    Tanneries and leather
                  </td>
                  <td>Controlled laboratory evaluation only</td>
                  <td>
                    Independent chromium speciation and safety gate before any commercial pilot
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="dot g" />
                    Mining and metals
                  </td>
                  <td>Named contaminant only</td>
                  <td>
                    A named contaminant, circuit and mechanism. The word &lsquo;mining&rsquo; is
                    not an application definition
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 20, fontSize: 15, color: 'var(--slate)' }}>
            A narrow validation portfolio is not a narrow market. It is what protects the quality
            of the answer you receive.
          </p>
        </div>
      </section>

      <section className="band mineral">
        <div className="wrap">
          <div className="eyebrow b">Tanneries and leather · the gate</div>
          <h2 style={{ marginBottom: 18 }}>We do not run a commercial pilot here</h2>
          <div className="boundary">
            <p>
              Chrome-bearing applications remain <strong>controlled laboratory evaluation only</strong>,
              behind an independent Cr(III)/Cr(VI) speciation and safety gate. No commercial pilot
              proceeds before that gate is passed.
            </p>
            <p style={{ fontSize: 14, color: 'var(--slate)' }}>
              A safety or toxicity failure stops the work regardless of commercial attractiveness,
              schedule, or the origin of the pressure to continue.
            </p>
          </div>
          <p style={{ fontSize: 14, color: 'var(--slate)', fontStyle: 'italic' }}>
            Design note — this page is deliberately restrained. It is the clearest demonstration on
            the site that the company declines business on safety grounds, and conversion
            optimisation must not soften it.
          </p>
        </div>
      </section>
    </>
  );
}
