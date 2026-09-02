import Link from 'next/link';
import Image from 'next/image';
import TreatmentTrain from '../components/TreatmentTrain';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#10262e] text-white pt-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#a9c6c8] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            M Sciences · Industrial water performance
          </div>
          <h1 className="font-serif font-bold text-[clamp(34px,5vw,54px)] leading-[1.08] tracking-[-0.015em]">
            Improve the water system
            <br />
            you already own.
          </h1>
          <p className="font-serif text-[20px] leading-[1.5] text-[#a9c6c8] mt-[18px] max-w-[60ch]">
            A brownfield pathway to better treatment economics, fit-for-purpose reuse and operating
            resilience — evaluated against your site, your baseline and your economics before you
            scale.
          </p>
          <div className="mt-[26px] mb-10">
            <Link
              className="inline-block bg-[#17787a] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#2fa9a6] transition-colors"
              href="/contact"
            >
              Start a conversation
            </Link>
            <Link
              className="inline-block bg-transparent border border-[#a9c6c8] text-white font-sans text-[14px] px-[18px] py-[9px] ml-2 hover:bg-[#17787a] hover:border-[#17787a] transition-colors"
              href="/evidence"
            >
              See how a claim earns its place
            </Link>
          </div>

          <div className="text-[#5c8a96] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            A treatment train you already own
          </div>
          <TreatmentTrain />
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              The problem we work on
            </div>
            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              The plant was designed for water that no longer arrives
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Variable load
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Production changes, product mix changes, cleaning chemistry changes. The design
                basis does not.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Cost migrates
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Chemical dosing rises, sludge increases, membranes foul, tertiary takes load it was
                never sized for.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Capacity binds
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                The plant is called undersized. Often the constraint sits somewhere else in the
                train entirely.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-[#17787a] p-[22px]">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Reuse is rejected
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Water that could be reused is discharged, and freshwater is bought to replace it.
              </p>
            </div>
          </div>
          <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-8">
            So the first question is never which technology. It is what is actually binding at this
            site.
          </p>
        </div>
      </section>

      {/* WHAT WE BRING */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#eef2f1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-[#10262e] pb-2.5 mb-7">
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              What we bring
            </div>
            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
              Technology, chemistry, systems and process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#eef2f1] border-l-[3px] border-[#17787a] p-5">
              <h3 className="font-serif text-[22px] font-bold mb-1.5">
                ANOT<sup>®</sup>
              </h3>
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                The technology
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Advanced Nano Oxidation Technology, applied to defined oxidation-relevant targets.
              </p>
              <span className="inline-block font-mono text-[10px] tracking-[0.1em] uppercase text-[#17787a] border border-[#17787a] px-2 py-[3px] mt-3">
                Deployed
              </span>
            </div>
            <div className="bg-[#eef2f1] border-l-[3px] border-[#17787a] p-5">
              <h3 className="font-serif text-[22px] font-bold mb-1.5">
                NOXXALL<sup>®</sup>
              </h3>
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                The chemistry
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                The proprietary chemistry in which the technology is supplied.
              </p>
              <span className="inline-block font-mono text-[10px] tracking-[0.1em] uppercase text-[#17787a] border border-[#17787a] px-2 py-[3px] mt-3">
                Deployed · independently evaluated
              </span>
            </div>
            <div className="bg-[#eef2f1] border-l-[3px] border-[#17787a] p-5">
              <h3 className="font-serif text-[22px] font-bold mb-1.5">
                Sugofil<sup>®</sup>
              </h3>
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Engineered systems
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Treatment plants, conventional and containerised, configured to the application.
              </p>
              <span className="inline-block font-mono text-[10px] tracking-[0.1em] uppercase text-[#17787a] border border-[#17787a] px-2 py-[3px] mt-3">
                Deployed
              </span>
            </div>
            <div className="bg-[#eef2f1] border-l-[3px] border-[#17787a] p-5">
              <h3 className="font-serif text-[22px] font-bold mb-1.5">
                S Astra<sup>™</sup>
              </h3>
              <div className="text-[#a8600f] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Electric, non-chemical
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Patented multistage process, Indian Patent 590324.
              </p>
              <span className="inline-block font-mono text-[10px] tracking-[0.1em] uppercase text-[#a8600f] border border-[#a8600f] px-2 py-[3px] mt-3">
                Patented · lab-validated · not yet commercial
              </span>
            </div>
          </div>
          <p className="mt-[22px] text-[15px] text-[#37535e]">
            We state where each one currently stands. Three are commercially deployed. S Astra™ is
            patented and laboratory-validated, and we do not present it as commercial.
          </p>
        </div>
      </section>

      {/* BOUNDARY / SIGNATURE DEVICE */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[#a8600f] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
            The single boundary that matters most
          </div>
          <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 border-l-[#a8600f] p-[26px_28px] my-[26px]">
            {/* Pattern overlay – mimics the hash background */}
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
              <p className="text-[19px] font-serif leading-[1.45] text-[#10262e] mb-2">
                Advanced oxidation degrades susceptible compounds. It does not remove dissolved
                salts, TDS or most dissolved metals.
              </p>
              <p className="text-[#10262e] mb-2">
                Where those are your binding constraint, membrane, evaporative, precipitation or
                ion-exchange processes remain necessary. We position alongside them — not instead of
                them.
              </p>
              <p className="text-[14px] text-[#37535e] mb-0">
                Our process ends at micron filtration. Ultrafiltration and reverse osmosis are
                separate technologies with their own expertise requirements, integrated downstream.
                Treated water is not for drinking purposes.
              </p>
            </div>
          </div>
          <p className="text-[14px] text-[#37535e] italic">
            Design note — this panel is the signature device. Ochre is reserved for boundaries and
            is never used decoratively.
          </p>
        </div>
      </section>

      {/* IN THE FIELD (IMAGES) */}
      {/* IN THE FIELD (IMAGES) */}
<section className="py-[clamp(48px,7vw,96px)] bg-[#eef2f1]">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="border-b border-[#10262e] pb-2.5 mb-7">
      <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
        In the field
      </div>
      <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] mb-3.5">
        Plants, containers and a demonstration unit
      </h2>
    </div>

    {/*
      Every card uses the SAME frame shape (aspect-[4/3]) and object-contain,
      regardless of the source image's own orientation. object-contain scales
      the image to fill that shape as much as possible on whichever axis is
      the limiting one — width for a wide image, height for a tall one — and
      never crops. A portrait photo will letterbox left/right; a landscape
      photo will letterbox top/bottom slightly less; neither shrinks smaller
      than the frame allows. One consistent mat colour keeps all four
      looking like a set instead of four different treatments.
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <figure className="m-0 flex flex-col">
        <div className="w-full aspect-[4/3] bg-white border border-[#c3d0d2] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/effluent-samples.jpg"
            alt="Raw and treated effluent samples side by side against a dark ground"
            width={900}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>
        <figcaption className="text-[13px] text-[#37535e] pt-2.5 leading-[1.45]">
          Raw and treated effluent samples. Colour and turbidity change; dissolved load is
          not visible in a photograph.
          <span className="block font-mono text-[9.5px] tracking-[0.09em] uppercase text-[#a8600f] mt-1.5">
            Caption field is mandatory — see specification §12.2
          </span>
        </figcaption>
      </figure>

      <figure className="m-0 flex flex-col">
        <div className="w-full aspect-[4/3] bg-white border border-[#c3d0d2] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/outlet-sample.jpg"
            alt="Operator drawing treated water at the outlet of a containerised unit"
            width={900}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>
        <figcaption className="text-[13px] text-[#37535e] pt-2.5 leading-[1.45]">
          Treated water drawn at the outlet of a containerised unit, Muscat. Client details
          on labels are obscured under confidentiality agreements.
          <span className="block font-mono text-[9.5px] tracking-[0.09em] uppercase text-[#a8600f] mt-1.5">
            Caption field is mandatory — see specification §12.2
          </span>
        </figcaption>
      </figure>

      <figure className="m-0 flex flex-col">
        <div className="w-full aspect-[4/3] bg-white border border-[#c3d0d2] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/water-comparison-hand.jpg"
            alt="Two bottles held side by side: untreated effluent and treated, clear water"
            width={1080}
            height={1555}
            className="w-full h-full object-contain"
          />
        </div>
        <figcaption className="text-[13px] text-[#37535e] pt-2.5 leading-[1.45]">
          Untreated and treated water held side by side for direct visual comparison.
          <span className="block font-mono text-[9.5px] tracking-[0.09em] uppercase text-[#a8600f] mt-1.5">
            Caption field is mandatory — see specification §12.2
          </span>
        </figcaption>
      </figure>

      <figure className="m-0 flex flex-col">
        <div className="w-full aspect-[4/3] bg-white border border-[#c3d0d2] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/treated-samples-grid-CROPPED-REVIEW.jpg"
            alt="Raw and treated water samples from field trials across multiple industries, held for internal reference"
            width={1080}
            height={1036}
            className="w-full h-full object-contain"
          />
        </div>
        <figcaption className="text-[13px] text-[#37535e] pt-2.5 leading-[1.45]">
          Field reference photos from historical trials across multiple industries — held under
          client confidentiality.
          <span className="block font-mono text-[9.5px] tracking-[0.09em] uppercase text-[#a8600f] mt-1.5">
            Rung 1 material only — not independently verified against a pre-agreed protocol
          </span>
        </figcaption>
      </figure>
    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#10262e] text-white p-[38px_40px] mt-5">
            <div className="text-[#2fa9a6] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
              A practical first step
            </div>
            <h2 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2] text-white mb-2">
              One site. One defined water problem.
            </h2>
            <p className="text-[#a9c6c8]">
              Establish the baseline. Advance only if the evidence and the economics support it.
            </p>
            <Link
              className="inline-block bg-[#17787a] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#2fa9a6] transition-colors mt-3"
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
