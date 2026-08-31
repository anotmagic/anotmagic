import Link from 'next/link';
import Image from 'next/image';
import TreatmentTrain from '../components/TreatmentTrain';

export default function HomePage() {
  return (
    <>
      <section className="band dark" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--mute)' }}>
            M Sciences · Industrial water performance
          </div>
          <h1>
            Improve the water system
            <br />
            you already own.
          </h1>
          <p className="lead" style={{ color: 'var(--mute)', marginTop: 18, maxWidth: '60ch' }}>
            A brownfield pathway to better treatment economics, fit-for-purpose reuse and operating
            resilience — evaluated against your site, your baseline and your economics before you
            scale.
          </p>
          <div style={{ margin: '26px 0 40px' }}>
            <Link className="cta-btn" style={{ background: 'var(--water)' }} href="/contact">
              Start a conversation
            </Link>
            <Link
              className="cta-btn"
              style={{ background: 'transparent', border: '1px solid var(--mute)', marginLeft: 8 }}
              href="/evidence"
            >
              See how a claim earns its place
            </Link>
          </div>

          <div className="eyebrow" style={{ color: '#5c8a96' }}>
            A treatment train you already own
          </div>
          <TreatmentTrain />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">The problem we work on</div>
            <h2>The plant was designed for water that no longer arrives</h2>
          </div>
          <div className="grid g4">
            <div className="card">
              <div className="eyebrow">Variable load</div>
              <p>
                Production changes, product mix changes, cleaning chemistry changes. The design
                basis does not.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">Cost migrates</div>
              <p>
                Chemical dosing rises, sludge increases, membranes foul, tertiary takes load it was
                never sized for.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">Capacity binds</div>
              <p>
                The plant is called undersized. Often the constraint sits somewhere else in the
                train entirely.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">Reuse is rejected</div>
              <p>Water that could be reused is discharged, and freshwater is bought to replace it.</p>
            </div>
          </div>
          <p className="lead" style={{ marginTop: 32 }}>
            So the first question is never which technology. It is what is actually binding at this
            site.
          </p>
        </div>
      </section>

      <section className="band mineral">
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">What we bring</div>
            <h2>Technology, chemistry, systems and process</h2>
          </div>
          <div className="grid g4">
            <div className="prod">
              <h3>
                ANOT<sup>®</sup>
              </h3>
              <div className="eyebrow">The technology</div>
              <p>
                Advanced Nano Oxidation Technology, applied to defined oxidation-relevant targets.
              </p>
              <span className="chip">Deployed</span>
            </div>
            <div className="prod">
              <h3>
                NOXXALL<sup>®</sup>
              </h3>
              <div className="eyebrow">The chemistry</div>
              <p>The proprietary chemistry in which the technology is supplied.</p>
              <span className="chip">Deployed · independently evaluated</span>
            </div>
            <div className="prod">
              <h3>
                Sugofil<sup>®</sup>
              </h3>
              <div className="eyebrow">Engineered systems</div>
              <p>Treatment plants, conventional and containerised, configured to the application.</p>
              <span className="chip">Deployed</span>
            </div>
            <div className="prod">
              <h3>
                S Astra<sup>™</sup>
              </h3>
              <div className="eyebrow b">Electric, non-chemical</div>
              <p>Patented multistage process, Indian Patent 590324.</p>
              <span className="chip oc">Patented · lab-validated · not yet commercial</span>
            </div>
          </div>
          <p style={{ marginTop: 22, fontSize: 15, color: 'var(--slate)' }}>
            We state where each one currently stands. Three are commercially deployed. S Astra™ is
            patented and laboratory-validated, and we do not present it as commercial.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="eyebrow b">The single boundary that matters most</div>
          <div className="boundary">
            <p style={{ fontSize: 19, fontFamily: 'var(--serif)', lineHeight: 1.45 }}>
              Advanced oxidation degrades susceptible compounds. It does not remove dissolved
              salts, TDS or most dissolved metals.
            </p>
            <p>
              Where those are your binding constraint, membrane, evaporative, precipitation or
              ion-exchange processes remain necessary. We position alongside them — not instead of
              them.
            </p>
            <p style={{ fontSize: 14, color: 'var(--slate)' }}>
              Our process ends at micron filtration. Ultrafiltration and reverse osmosis are
              separate technologies with their own expertise requirements, integrated downstream.
              Treated water is not for drinking purposes.
            </p>
          </div>
          <p style={{ fontSize: 14, color: 'var(--slate)', fontStyle: 'italic' }}>
            Design note — this panel is the signature device. Ochre is reserved for boundaries and
            is never used decoratively.
          </p>
        </div>
      </section>

      <section className="band mineral">
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">In the field</div>
            <h2>Plants, containers and a demonstration unit</h2>
          </div>
          <div className="grid g2">
            <figure>
              <Image
                src="/images/effluent-samples.jpg"
                alt="Raw and treated effluent samples side by side against a dark ground"
                width={900}
                height={600}
              />
              <figcaption>
                Raw and treated effluent samples. Colour and turbidity change; dissolved load is
                not visible in a photograph.
                <span className="capnote">Caption field is mandatory — see specification §12.2</span>
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/images/outlet-sample.jpg"
                alt="Operator drawing treated water at the outlet of a containerised unit"
                width={900}
                height={600}
              />
              <figcaption>
                Treated water drawn at the outlet of a containerised unit, Muscat. Client details
                on labels are obscured under confidentiality agreements.
                <span className="capnote">Caption field is mandatory — see specification §12.2</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="ctablock">
            <div className="eyebrow" style={{ color: 'var(--teal-br)' }}>
              A practical first step
            </div>
            <h2>One site. One defined water problem.</h2>
            <p>Establish the baseline. Advance only if the evidence and the economics support it.</p>
            <Link
              className="cta-btn"
              style={{ background: 'var(--water)', marginTop: 12 }}
              href="/contact"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
