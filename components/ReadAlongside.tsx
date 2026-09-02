import Link from 'next/link';
import { getResource } from '../app/lib/resources';

export default function ReadAlongside({ slug, note }: { slug: string; note?: string }) {
  const doc = getResource(slug);
  if (!doc) return null;

  return (
    <div className="bg-[#eef2f1] border-l-[3px] border-[#17787a] p-5 mt-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="text-[#17787a] font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5">
          Read alongside this page
        </div>
        <p className="text-[15px] text-[#10262e] font-bold m-0">{doc.title}</p>
        {note && <p className="text-[13px] text-[#37535e] mt-1 mb-0">{note}</p>}
      </div>
      <Link
        href={`/resources/${doc.slug}`}
        className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors no-underline whitespace-nowrap"
      >
        View · Download
      </Link>
    </div>
  );
}
