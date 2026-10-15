import Link from "next/link";

export const metadata = {
  title: "The Water Problem · M Sciences",
  description:
    "Why industrial treatment costs what it costs — how the cost migrates through a plant, and the eight questions to answer before evaluating any technology.",
};

const SHIFTS = [
  {
    label: "Variable load",
    body: "Production changes, product mix changes, cleaning chemistry changes. The design basis does not.",
  },
  {
    label: "Cost migrates",
    body: "Chemical dosing rises, sludge increases, membranes foul, tertiary takes load it was never sized for.",
  },
  {
    label: "Hydraulics",
    body: "Peak flows, surge and equalisation the train was not sized to absorb.",
  },
  {
    label: "Capacity binds",
    body: "The plant is called undersized. Often the constraint sits somewhere else in the train entirely.",
  },
  {
    label: "Reliability",
    body: "Upsets, downtime and operator intervention that appear in no single parameter.",
  },
  {
    label: "Residuals",
    body: "Sludge volume, dewatering and disposal route — often where a treatment saving quietly reappears.",
  },
];

const QUESTIONS = [
  {
    lead: "Freshwater and discharge",
    body: "Can more water become fit for a defined reuse here, and what does that displace?",
  },
  {
    lead: "Energy",
    body: "Does an intervention change complete-system energy, including downstream assets?",
  },
  {
    lead: "Membranes and tertiary",
    body: "Does upstream performance change cleaning frequency, fouling or replacement?",
  },
  {
    lead: "Reliability",
    body: "Does it reduce upset risk, downtime or operator intervention?",
  },
  {
    lead: "Chemicals",
    body: "What is the total chemical programme, not one line of it?",
  },
  {
    lead: "Sludge and residuals",
    body: "What happens to net solids generation, handling and disposal?",
  },
  {
    lead: "Capacity and capital",
    body: "Can sustained performance defer, resize or avoid a planned expansion?",
  },
  {
    lead: "Compliance",
    body: "Does the train reliably achieve this site's regulatory or reuse endpoint?",
  },
];

const READ_ALONGSIDE = [
  { href: "/executive-brief", label: "Executive Brief" },
  { href: "/portfolio", label: "Portfolio & Capabilities" },
  { href: "/white-paper", label: "The white paper" },
];

export default function WaterProblemPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#10262e] text-white pt-16 pb-[clamp(48px,7vw,96px)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#a9c6c8] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            The water problem
          </div>

          <h1 className="font-serif font-bold text-[clamp(34px,5vw,54px)] leading-[1.08] tracking-[-0.015em] max-w-[22ch]">
            Your plant was designed for water that no longer arrives.
          </h1>

          <p className="font-serif text-[20px] leading-[1.5] text-[#a9c6c8] mt-[18px] max-w-[60ch]">
            Production changed. The product mix changed. The cleaning chemistry
            changed. The design basis did not — and the cost of that difference
            rarely appears as a line called treatment.
          </p>
        </div>
      </section>

      {/* 01 WHAT ACTUALLY CHANGED */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              01
            </div>

            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              What actually changed
            </h2>
          </div>

          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] max-w-[60ch]">
            Water has moved from a utility line item to a constraint on
            production, expansion and licence to operate. The change is not that
            treatment became harder. It is that the cost of treating badly
            became visible.
          </p>

          <p className="text-[15px] text-[#37535e] mt-6 max-w-[68ch]">
            Three forces converged. Freshwater became more expensive to buy and
            less certain to arrive. Discharge became more tightly regulated,
            more closely monitored and more publicly visible. And the influent
            itself changed — assets built for one feed now receive another, more
            variable and less biodegradable than the design basis assumed.
          </p>
        </div>
      </section>

      {/* 02 WHY IT DOES NOT ANNOUNCE ITSELF */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#eef2f1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              02
            </div>

            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              Why it does not announce itself
            </h2>
          </div>

          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] max-w-[60ch]">
            The cost of a mismatched treatment train does not sit in one place.
            It migrates — which is why a plant can be technically compliant and
            economically inefficient at the same time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {SHIFTS.map((item) => (
              <div
                key={item.label}
                className="bg-white border-t-[3px] border-[#17787a] p-[22px]"
              >
                <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                  {item.label}
                </div>

                <p className="text-[15px] text-[#37535e] m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 THE INSTINCT THAT USUALLY COSTS MOST */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              03
            </div>

            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              The instinct that usually costs most
            </h2>
          </div>

          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] max-w-[60ch]">
            The instinctive response to any of these is to add treatment
            capacity. Sometimes that is right.
          </p>

          <blockquote className="border-l-[3px] border-[#17787a] pl-6 my-8 max-w-[62ch]">
            <p className="font-serif text-[clamp(22px,2.6vw,28px)] leading-[1.35] font-bold text-[#10262e] m-0">
              Where the binding constraint lies elsewhere in the train, more
              capacity adds capital without solving the underlying problem — and
              the problem returns, now with the capital spent.
            </p>
          </blockquote>
        </div>
      </section>

      {/* 04 WHAT TO ESTABLISH FIRST */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#eef2f1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              04
            </div>

            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              What to establish first
            </h2>
          </div>

          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] max-w-[60ch]">
            Before evaluating any technology, establish what the existing system
            actually costs to run. Not the reagent price — the whole picture.
            Eight questions, answered from measured data, will tell you more
            than any vendor comparison.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-8">
            {QUESTIONS.map((q) => (
              <div
                key={q.lead}
                className="border-b border-[#c3d0d2] py-4 first:pt-0 sm:[&:nth-child(2)]:pt-0"
              >
                <p className="text-[15px] text-[#37535e] m-0">
                  <span className="font-bold text-[#10262e]">{q.lead}.</span>{" "}
                  {q.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 A PRACTICAL FIRST STEP */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              05
            </div>

            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              A practical first step
            </h2>
          </div>

          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] max-w-[60ch]">
            One site. One defined water problem. Establish the baseline before
            evaluating any intervention — and advance only if the evidence and
            the economics support it.
          </p>

          <p className="text-[15px] text-[#37535e] mt-6 max-w-[68ch]">
            M Sciences is an applications-led water technology company. We work
            on the question above: what the existing system costs, where the
            binding constraint sits, and whether a targeted intervention would
            change it. Sometimes the answer is that it would not, and we say so.
          </p>

          <div className="bg-[#10262e] text-white p-[38px_40px] mt-8">
            <div className="text-[#2fa9a6] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              Read alongside
            </div>

            <div className="mt-1">
              {READ_ALONGSIDE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline justify-between gap-6 border-b border-[#37535e] py-3.5 text-white hover:text-[#2fa9a6] transition-colors"
                >
                  <span className="font-sans text-[15px]">{item.label}</span>

                  <span
                    aria-hidden="true"
                    className="font-mono text-[13px] text-[#5c8a96] group-hover:text-[#2fa9a6] transition-colors"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
