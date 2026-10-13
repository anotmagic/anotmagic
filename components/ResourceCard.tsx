import Link from "next/link";
import type { ResourceDoc } from "../lib/resources";

export default function ResourceCard({
  doc,
  compact = false,
}: {
  doc: ResourceDoc;
  compact?: boolean;
}) {
  const isOpen = doc.access === "open";

  return (
    <article className="bg-white border-t-[3px] border-[#17787a] p-[22px] flex flex-col">
      {/* Eyebrow */}
      <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
        {doc.kind}
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-[19px] mb-1.5 text-[#10262e]">
        {doc.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-[1.5] text-[#37535e] mb-1">
        {doc.description}
      </p>

      {/* Audience */}
      {!compact && (
        <p className="text-[13px] leading-[1.5] text-[#37535e] italic mb-4">
          {doc.audience}
        </p>
      )}

      {/* Metadata */}
      <div className="text-[12px] font-mono text-[#37535e] mb-4">
        {doc.pages} page{doc.pages > 1 ? "s" : ""} · updated {doc.updated}
      </div>

      {/* Actions */}
      <div className="mt-auto flex gap-2.5 flex-wrap">
        {/* Every resource can be viewed on its own resource page */}
        <Link
          href={`/resources/${doc.slug}`}
          className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors no-underline"
        >
          {isOpen ? "View in browser" : "Read summary"}
        </Link>

        {/* ONLY open resources receive a direct PDF link */}
        {isOpen && doc.file && (
          <a
            href={doc.file}
            download
            className="inline-block bg-transparent text-[#10262e] font-sans text-[14px] px-[18px] py-[9px] border border-[#c3d0d2] hover:border-[#17787a] hover:text-[#17787a] transition-colors no-underline"
          >
            Download PDF
          </a>
        )}

        {/* Gated document */}
        {!isOpen && (
          <Link
            href={`/resources/${doc.slug}#request`}
            className="inline-block bg-transparent text-[#10262e] font-sans text-[14px] px-[18px] py-[9px] border border-[#c3d0d2] hover:border-[#17787a] hover:text-[#17787a] transition-colors no-underline"
          >
            Request full paper
          </Link>
        )}
      </div>
    </article>
  );
}
