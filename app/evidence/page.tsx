import EvidenceLadder from '../../components/EvidenceLadder';

export const metadata = { title: 'Evidence · M Sciences' };

export default function EvidencePage() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          Evidence
        </div>
        <h1 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2]">
          How a claim earns its place
        </h1>
        <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-4 max-w-[60ch]">
          External claims expand only as evidence expands. We state where each application
          currently sits on this ladder, and we do not borrow confidence from a rung we have not
          reached.
        </p>
        <EvidenceLadder />
        <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 border-l-[#a8600f] p-[26px_28px] mt-[34px]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(45deg, rgba(168,96,15,0.16) 0px 1px, transparent 1px 8px)`,
              mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '12px',
            }}
          />
          <div className="relative z-10">
            <p className="text-[#10262e] m-0">
              <strong>We present no performance statistics.</strong> No application-specific result
              has yet been independently verified against a pre-agreed protocol. Independent
              laboratory analysis exists across trials in diverse industries, held under client
              confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}