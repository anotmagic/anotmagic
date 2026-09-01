export const metadata = { title: 'Industries · M Sciences' };

export default function IndustriesPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            Industries
          </div>
          <h1 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2]">
            Where we engage —
            <br />
            and on what condition
          </h1>
          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-4 max-w-[60ch]">
            Validation is deliberately selective, so that evidence quality and
            applications-engineering capacity are not diluted across too many matrices at once.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr>
                  <th className="bg-[#10262e] text-white font-mono text-[10.5px] tracking-[0.1em] uppercase text-left font-normal px-3.5 py-[11px]">
                    Application area
                  </th>
                  <th className="bg-[#10262e] text-white font-mono text-[10.5px] tracking-[0.1em] uppercase text-left font-normal px-3.5 py-[11px]">
                    Engagement posture
                  </th>
                  <th className="bg-[#10262e] text-white font-mono text-[10.5px] tracking-[0.1em] uppercase text-left font-normal px-3.5 py-[11px]">
                    What governs progression
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#17787a]" />
                    Decentralised STP and industrial reuse
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">Validating</td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    A defined reuse endpoint and a representative independent baseline
                  </td>
                </tr>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#17787a]" />
                    Textiles and dyeing
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">Validating</td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Organics and colour separated explicitly from TDS and salt management
                  </td>
                </tr>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#17787a]" />
                    Food and beverage
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">Validating</td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Matrix variability, hygiene endpoint and complete-system reuse economics
                  </td>
                </tr>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#37535e]" />
                    Refining and petrochemicals
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">Selective</td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Strict matrix, safety, by-product and evidence gates
                  </td>
                </tr>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#37535e]" />
                    Pharmaceuticals and specialty chemicals
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">Selective</td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Compound-specific validation and transformation-product discipline
                  </td>
                </tr>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#a8600f]" />
                    Tanneries and leather
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Controlled laboratory evaluation only
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Independent chromium speciation and safety gate before any commercial pilot
                  </td>
                </tr>
                <tr className="odd:bg-[#eef2f1]">
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    <span className="inline-block w-[9px] h-[9px] mr-[9px] align-middle bg-[#a8600f]" />
                    Mining and metals
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    Named contaminant only
                  </td>
                  <td className="px-3.5 py-[11px] border-b border-[#c3d0d2] align-top">
                    A named contaminant, circuit and mechanism. The word &lsquo;mining&rsquo; is
                    not an application definition
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] text-[#37535e]">
            A narrow validation portfolio is not a narrow market. It is what protects the quality
            of the answer you receive.
          </p>
        </div>
      </section>

      {/* TANNERIES GATE */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#eef2f1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#a8600f] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            Tanneries and leather · the gate
          </div>
          <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-[18px]">
            We do not run a commercial pilot here
          </h2>
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
              <p className="text-[#10262e] mb-2">
                Chrome-bearing applications remain <strong>controlled laboratory evaluation only</strong>,
                behind an independent Cr(III)/Cr(VI) speciation and safety gate. No commercial pilot
                proceeds before that gate is passed.
              </p>
              <p className="text-[14px] text-[#37535e] mb-0">
                A safety or toxicity failure stops the work regardless of commercial attractiveness,
                schedule, or the origin of the pressure to continue.
              </p>
            </div>
          </div>
          <p className="text-[14px] text-[#37535e] italic">
            Design note — this page is deliberately restrained. It is the clearest demonstration on
            the site that the company declines business on safety grounds, and conversion
            optimisation must not soften it.
          </p>
        </div>
      </section>
    </>
  );
}