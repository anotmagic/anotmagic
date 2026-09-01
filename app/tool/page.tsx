import QualTool from '../../components/QualTool';

export const metadata = { title: 'Is this for you? · M Sciences' };

export default function ToolPage() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
      <div className="max-w-[820px] mx-auto px-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          Self-qualification
        </div>
        <h1 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2]">
          Is oxidation your mechanism?
        </h1>
        <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-3.5 max-w-[60ch]">
          Six questions. If the answer is no, we say so and explain what is — and we will not ask
          for your contact details.
        </p>

        {/* The QualTool component – imported and rendered */}
        <QualTool />

        <p className="text-[14px] text-[#37535e] italic mt-5">
          Design note — three of the six outcomes are negative and end without a lead-capture form.
          This is the strongest single demonstration of the discipline the rest of the site argues
          for.
        </p>
      </div>
    </section>
  );
}