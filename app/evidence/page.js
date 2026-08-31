import EvidenceLadder from '../../components/EvidenceLadder';

export const metadata = { title: 'Evidence · M Sciences' };

export default function EvidencePage() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="eyebrow">Evidence</div>
        <h1>How a claim earns its place</h1>
        <p className="lead" style={{ marginTop: 16 }}>
          External claims expand only as evidence expands. We state where each application
          currently sits on this ladder, and we do not borrow confidence from a rung we have not
          reached.
        </p>
        <EvidenceLadder />
        <div className="boundary" style={{ marginTop: 34 }}>
          <p>
            <strong>We present no performance statistics.</strong> No application-specific result
            has yet been independently verified against a pre-agreed protocol. Independent
            laboratory analysis exists across trials in diverse industries, held under client
            confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
