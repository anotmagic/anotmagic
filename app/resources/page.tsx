import { RESOURCES } from '../lib/resources';
import ResourceCard from '../../components/ResourceCard';

export const metadata = { title: 'Resources · M Sciences' };

export default function ResourcesPage() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          Resources
        </div>
        <h1 className="font-serif font-bold text-[clamp(34px,5vw,54px)] leading-[1.08] tracking-[-0.015em]">
          Read alongside
          <br />
          the conversation
        </h1>
        <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-4 max-w-[60ch]">
          Three documents, three audiences. Each is written for a specific moment in the
          conversation — the box on each card says who it&rsquo;s for.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {RESOURCES.map((doc) => (
            <ResourceCard key={doc.slug} doc={doc} />
          ))}
        </div>

        <div className="relative bg-[#f7efe2] border border-[#a8600f] border-l-4 p-[26px_28px] mt-10">
          <p className="text-[#10262e] mb-2">
            <strong>Evidence note.</strong> These documents contain no M Sciences performance
            statistics. Application-specific claims are released only within the supporting
            evidence boundary.
          </p>
          <p className="text-[14px] text-[#37535e] mb-0">Treated water is not for drinking purposes.</p>
        </div>
      </div>
    </section>
  );
}
