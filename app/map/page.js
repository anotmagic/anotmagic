export const metadata = { title: 'Nav map · M Sciences' };

export default function MapPage() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="eyebrow">Navigation flow</div>
        <h1>
          Twenty-four pages,
          <br />
          seven sections
        </h1>
        <p className="lead" style={{ marginTop: 14 }}>
          Six items in primary navigation. Evidence sits in the top bar rather than buried in
          About — its presence there is itself an argument.
        </p>
        <div className="map">
          <div className="mapcol">
            <h4>The Water Problem</h4>
            <ul>
              <li className="hi">Why water became a constraint</li>
              <li>System, not contaminant</li>
              <li>The decision lens</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>Solutions</h4>
            <ul>
              <li className="hi">Overview</li>
              <li>Targeted betterment</li>
              <li>Hybrid integration</li>
              <li>Standalone / containerised</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>Technology</h4>
            <ul>
              <li className="hi">Portfolio overview</li>
              <li>ANOT®</li>
              <li>NOXXALL®</li>
              <li>Sugofil®</li>
              <li>S Astra™</li>
              <li>Where our process ends</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>Industries</h4>
            <ul>
              <li className="hi">Where we engage</li>
              <li>Seven sector pages</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>Evidence</h4>
            <ul>
              <li className="hi">How a claim earns its place</li>
              <li>Technical boundaries</li>
              <li>Independent evaluation</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>Insights</h4>
            <ul>
              <li className="hi">Article index</li>
              <li>Article template</li>
              <li>White paper</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>About</h4>
            <ul>
              <li className="hi">Company and heritage</li>
              <li>Institutional capability</li>
              <li>How we engage and deliver</li>
            </ul>
          </div>
          <div className="mapcol">
            <h4>Convert</h4>
            <ul>
              <li className="hi">Start a conversation</li>
              <li>Self-qualification tool</li>
              <li>Water Economics Assessment</li>
            </ul>
          </div>
        </div>

        <h2 style={{ marginTop: 52 }}>The three journeys the site is built for</h2>
        <div className="grid g3" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="eyebrow">Plant owner</div>
            <p>
              <strong>Home → The Water Problem → Industries → Start a conversation.</strong> Wants
              to know where the cost sits and whether M Sciences engages at their kind of site.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Engineer / reviewer</div>
            <p>
              <strong>Search → Insights → Technology → Evidence → White paper.</strong> Tests
              whether the thinking holds. Goes to Evidence first and looks for the limits.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Approver</div>
            <p>
              <strong>Home → Water Economics Assessment → How we engage → Contact.</strong> Wants
              the gated path and what a decision protects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
