import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCES, getResource } from "../../../lib/resources";
import WhitePaperRequestForm from "../../../components/WhitePaperRequestForm";

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({
    slug: resource.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getResource(params.slug);

  return {
    title: doc ? `${doc.title} · M Sciences` : "Resource · M Sciences",
  };
}

export default function ResourceViewerPage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = getResource(params.slug);

  if (!doc) {
    notFound();
  }

  const related = (doc.readAlongside ?? [])
    .map((slug) => getResource(slug))
    .filter((resource): resource is NonNullable<typeof resource> =>
      Boolean(resource),
    );

  const isOpen = doc.access === "open";

  return (
    <section className="bg-[#fbfbf9] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Back */}
        <Link
          href="/resources"
          className="text-[14px] text-[#37535e] hover:text-[#17787a] no-underline"
        >
          ← All resources
        </Link>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-6">
          <div>
            <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2">
              {doc.kind}
            </div>

            <h1 className="font-serif font-bold text-[clamp(28px,4vw,40px)] leading-[1.1] text-[#10262e]">
              {doc.title}
            </h1>

            <p className="text-[15px] text-[#37535e] italic mt-2 max-w-[60ch]">
              {doc.audience}
            </p>
          </div>

          {/* Open-document actions only */}
          {isOpen && doc.file && (
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
          )}
        </div>

        {/* =========================================================
            OPEN DOCUMENT
            ========================================================= */}
        {isOpen && doc.file && (
          <div
            className="border border-[#c3d0d2] bg-[#eef2f1]"
            style={{ height: "82vh" }}
          >
            <object
              data={doc.file}
              type="application/pdf"
              width="100%"
              height="100%"
            >
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
        )}

        {/* =========================================================
            GATED DOCUMENT
            ========================================================= */}
        {!isOpen && (
          <>
            {/* Summary */}
            <div className="max-w-[820px]">
              <div className="border-b border-[#10262e] pb-2.5 mb-7">
                <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase">
                  Approved summary
                </div>
              </div>

              <div className="space-y-5">
                {doc.summary?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-serif text-[19px] leading-[1.6] text-[#37535e]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Request section */}
            <div
              id="request"
              className="mt-12 bg-[#10262e] text-white p-[32px_34px] max-w-[820px]"
            >
              <div className="text-[#2fa9a6] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Full paper
              </div>

              <h2 className="font-serif font-bold text-[clamp(25px,3vw,34px)] leading-[1.2] text-white mb-3">
                Request the full white paper
              </h2>

              <p className="text-[#a9c6c8] leading-[1.6] mb-6 max-w-[65ch]">
                Complete the form to request the full paper. The full document
                is not publicly downloadable from this page.
              </p>

              <WhitePaperRequestForm />
            </div>
          </>
        )}

        {/* =========================================================
            READ ALONGSIDE
            ========================================================= */}
        {related.length > 0 && (
          <div className="mt-12">
            <div className="border-b border-[#10262e] pb-2.5 mb-7">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase">
                Read alongside
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="block bg-white border-t-[3px] border-[#17787a] p-[22px] no-underline hover:bg-[#eef2f1] transition-colors"
                >
                  <div className="text-[#17787a] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5">
                    {resource.kind}
                  </div>

                  <h4 className="font-serif font-bold text-[17px] text-[#10262e] mb-1">
                    {resource.title}
                  </h4>

                  <p className="text-[14px] text-[#37535e] m-0">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
