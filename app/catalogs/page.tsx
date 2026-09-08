import { CATALOGS } from '../../lib/catalogs';
import CatalogCard from '../../components/CatalogCard';

export const metadata = { title: 'Catalogs · M Sciences' };

export default function CatalogsPage() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          Catalogs
        </div>
        <h1 className="font-serif font-bold text-[clamp(34px,5vw,54px)] leading-[1.08] tracking-[-0.015em]">
          Product catalogs
        </h1>
        <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-4 max-w-[60ch]">
          Sugofil and containerized treatment systems, one sheet each. View in browser or
          download.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {CATALOGS.map((doc) => (
            <CatalogCard key={doc.slug} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
