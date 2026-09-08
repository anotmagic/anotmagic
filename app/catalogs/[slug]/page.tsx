import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CATALOGS, getCatalog } from '../../../lib/catalogs';

export function generateStaticParams() {
  return CATALOGS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getCatalog(params.slug);
  return { title: doc ? `${doc.title} · M Sciences` : 'Catalog · M Sciences' };
}

export default function CatalogViewerPage({ params }: { params: { slug: string } }) {
  const doc = getCatalog(params.slug);
  if (!doc) notFound();

  const others = CATALOGS.filter((c) => c.slug !== doc.slug);

  return (
    <section className="bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <Link href="/catalogs" className="text-[14px] text-[#37535e] hover:text-[#17787a] no-underline">
          ← All catalogs
        </Link>

        <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-6">
          <div>
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2">
              {doc.kind}
            </div>
            <h1 className="font-serif font-bold text-[clamp(28px,4vw,40px)] leading-[1.1]">
              {doc.title}
            </h1>
            <p className="text-[15px] text-[#37535e] mt-2 max-w-[60ch]">{doc.description}</p>
          </div>

          <a
            href={doc.file}
            download
            className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors no-underline whitespace-nowrap"
          >
            Download
          </a>
        </div>

        <div className="border border-[#c3d0d2] bg-[#eef2f1] flex items-center justify-center p-4">
          <Image
            src={doc.file}
            alt={doc.title}
            width={doc.width}
            height={doc.height}
            className="max-h-[85vh] w-auto h-auto"
          />
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <div className="border-b border-[#10262e] pb-2.5 mb-7">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase">
                Other catalogs
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  href={`/catalogs/${c.slug}`}
                  className="block bg-white border-t-[3px] border-[#17787a] p-[22px] no-underline hover:bg-[#eef2f1] transition-colors"
                >
                  <h4 className="font-serif font-bold text-[17px] text-[#10262e] mb-1">{c.title}</h4>
                  <p className="text-[14px] text-[#37535e] m-0">{c.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
