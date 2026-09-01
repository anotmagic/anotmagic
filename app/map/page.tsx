export const metadata = { title: 'Nav map · M Sciences' };

export default function MapPage() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          Navigation flow
        </div>
        <h1 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2]">
          Twenty-four pages,
          <br />
          seven sections
        </h1>
        <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-3.5 max-w-[60ch]">
          Six items in primary navigation. Evidence sits in the top bar rather than buried in
          About — its presence there is itself an argument.
        </p>

        {/* Map grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5">
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              The Water Problem
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Why water became a constraint</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">System, not contaminant</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">The decision lens</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              Solutions
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Overview</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Targeted betterment</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Hybrid integration</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Standalone / containerised</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              Technology
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Portfolio overview</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">ANOT®</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">NOXXALL®</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Sugofil®</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">S Astra™</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Where our process ends</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              Industries
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Where we engage</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Seven sector pages</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              Evidence
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">How a claim earns its place</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Technical boundaries</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Independent evaluation</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              Insights
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Article index</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Article template</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">White paper</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              About
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Company and heritage</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Institutional capability</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">How we engage and deliver</li>
            </ul>
          </div>
          <div className="bg-[#eef2f1] p-4">
            <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#17787a] mb-2.5">
              Convert
            </h4>
            <ul className="list-none text-[14px] space-y-1">
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#10262e] font-bold">Start a conversation</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Self-qualification tool</li>
              <li className="py-1.25 border-b border-[#c3d0d2] text-[#37535e]">Water Economics Assessment</li>
            </ul>
          </div>
        </div>

        {/* Three journeys */}
        <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mt-13">
          The three journeys the site is built for
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[18px]">
          <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              Plant owner
            </div>
            <p className="text-[15px] text-[#37535e] m-0">
              <strong>Home → The Water Problem → Industries → Start a conversation.</strong> Wants
              to know where the cost sits and whether M Sciences engages at their kind of site.
            </p>
          </div>
          <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              Engineer / reviewer
            </div>
            <p className="text-[15px] text-[#37535e] m-0">
              <strong>Search → Insights → Technology → Evidence → White paper.</strong> Tests
              whether the thinking holds. Goes to Evidence first and looks for the limits.
            </p>
          </div>
          <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              Approver
            </div>
            <p className="text-[15px] text-[#37535e] m-0">
              <strong>Home → Water Economics Assessment → How we engage → Contact.</strong> Wants
              the gated path and what a decision protects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}