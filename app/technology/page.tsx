import Link from 'next/link';
import ReadAlongside from '../../components/ReadAlongside';

export const metadata = { title: 'Technology · M Sciences' };

export default function TechnologyPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            Technology · ANOT®
          </div>
          <h1 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2]">
            What targeted oxidation is
            <br />
            designed to do
          </h1>
          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-4 max-w-[60ch]">
            ANOT is evaluated as a targeted oxidation intervention for defined,
            oxidation-relevant problems inside a broader treatment train.
          </p>
          <span className="inline-block font-mono text-[10px] tracking-[0.1em] uppercase text-[#17787a] border border-[#17787a] px-2 py-[3px] mt-[18px]">
            Deployed
          </span>
        </div>
      </section>

      {/* THE CHAIN */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#eef2f1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              The chain that has to hold
            </div>
            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              From influent problem to business endpoint
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                01 · Influent problem
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Refractory organics, colour bodies, biological inhibition, emulsified FOG, or a
                named oxidisable species identified at your site.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                02 · Intervention
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Dose, contact time, pH and redox range, insertion point and failure envelope —
                established for your matrix.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                03 · System effect
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Whether that delivers biological preconditioning, polishing or reduced downstream burden.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                04 · Business endpoint
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Reuse, released capacity, operating reliability or treatment economics — measured
                against your own baseline.
              </p>
            </div>
          </div>
          <p className="mt-[22px] text-[15px] text-[#37535e]">
            None of these outcomes is claimed as generally proven. Each is a hypothesis about your
            site until an independent baseline and controlled dose-response testing establish
            otherwise.
          </p>
        </div>
      </section>

      {/* BOUNDARY / WHAT IT IS NOT */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#a8600f] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            What it is not
          </div>
          <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 border-l-[#a8600f] p-[26px_28px] my-[26px]">
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
              <p className="text-[19px] font-serif leading-[1.45] text-[#10262e] m-0">
                ANOT is not desalination. It is not generic dissolved-metals removal. It is not a
                universal disinfectant. And it is not a replacement for every STP or ETP process.
              </p>
            </div>
          </div>
          <p className="mt-[26px] text-[#10262e]">
            <strong>Where our process ends.</strong> Micron filtration. Ultrafiltration and reverse
            osmosis are distinct technologies with their own expertise requirements — where an
            endpoint needs them, they are integrated downstream and we say so. The higher the reuse
            quality you need, the more of the train you are buying, and some of it is not ours.
            Treated water is not for drinking purposes.
          </p>
          <div className="bg-[#eef2f1] p-[22px] mt-3">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              Independently evaluated
            </div>
            <p className="text-[15px] m-0">
              NOXXALL has been evaluated by the Department of Chemical Engineering, Indian
              Institute of Science, Bengaluru, under a consultancy project covering biotoxicology,
              formulation toxicity, heavy-metal content, material safety data and industrial
              applications. Trial testing was earlier conducted at the Department of Environmental
              Science, Bangalore University. That work addresses the technology, not your site.
            </p>
            <p className="text-[13px] text-[#37535e] italic mt-2.5 mb-0">
              Both evaluations were conducted under the company&rsquo;s former name, Ozo Nano
              Sciences.
            </p>
            <ReadAlongside
  slug="portfolio-capability-profile"
  note="Full technology portfolio, services and deployment experience in one page."
/>
          </div>
        </div>
      </section>
    </>
  );
}