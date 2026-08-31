import QualTool from '../../components/QualTool';

export const metadata = { title: 'Is this for you? · M Sciences' };

export default function ToolPage() {
  return (
    <section className="band">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <div className="eyebrow">Self-qualification</div>
        <h1>Is oxidation your mechanism?</h1>
        <p className="lead" style={{ marginTop: 14 }}>
          Six questions. If the answer is no, we say so and explain what is — and we will not ask
          for your contact details.
        </p>
        <QualTool />
        <p style={{ fontSize: 14, color: 'var(--slate)', fontStyle: 'italic', marginTop: 20 }}>
          Design note — three of the six outcomes are negative and end without a lead-capture form.
          This is the strongest single demonstration of the discipline the rest of the site argues
          for.
        </p>
      </div>
    </section>
  );
}
