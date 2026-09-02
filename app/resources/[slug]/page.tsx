import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RESOURCES, getResource } from '../../lib/resources';

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getResource(params.slug);
  return { title: doc ? `${doc.title} · M Sciences` : 'Resource · M Sciences' };
}

export default function ResourceViewerPage({ params }: { params: { slug: string } }) {
  const doc = getResource(params.slug);
  if (!doc) notFound();

  const related = (doc.readAlongside ?? [])
    .map((slug) => getResource(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section className="bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <Link
          href="/resources"
          className="text-[14px] text-[#37535e] hover:text-[#17787a] no-underline"
        >
          ← All resources
        </Link>

        <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-6">
          <div>
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2">
              {doc.kind}
            </div>
            <h1 className="font-serif font-bold text-[clamp(28px,4vw,40px)] leading-[1.1]">
              {doc.title}
            </h1>
            <p className="text-[15px] text-[#37535e] italic mt-2 max-w-[60ch]">{doc.audience}</p>
          </div>

          <div className="flex gap-2.5 flex-wrap">
            <a
              href={doc.file}
              download
              className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors no-underline"
            >
              Download PDF
            </a>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-[#10262e] font-sans text-[14px] px-[18px] py-[9px] border border-[#c3d0d2] hover:border-[#17787a] hover:text-[#17787a] transition-colors no-underline"
            >
              Open in new tab
            </a>
          </div>
        </div>

        {/* Inline viewer. object gives a broader native-PDF-viewer fallback than iframe alone. */}
        <div className="border border-[#c3d0d2] bg-[#eef2f1]" style={{ height: '82vh' }}>
          <object data={doc.file} type="application/pdf" width="100%" height="100%">
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <p className="text-[15px] text-[#37535e] mb-4">
                Your browser can&rsquo;t display the PDF inline.
              </p>
              <a
                href={doc.file}
                download
                className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors no-underline"
              >
                Download {doc.title}
              </a>
            </div>
          </object>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <div className="border-b border-[#10262e] pb-2.5 mb-7">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase">
                Read alongside
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="block bg-white border-t-[3px] border-[#17787a] p-[22px] no-underline hover:bg-[#eef2f1] transition-colors"
                >
                  <div className="text-[#17787a] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5">
                    {r.kind}
                  </div>
                  <h4 className="font-serif font-bold text-[17px] text-[#10262e] mb-1">
                    {r.title}
                  </h4>
                  <p className="text-[14px] text-[#37535e] m-0">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
