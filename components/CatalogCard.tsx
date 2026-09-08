import Link from 'next/link';
import Image from 'next/image';
import type { CatalogDoc } from '../lib/catalogs';

export default function CatalogCard({ doc }: { doc: CatalogDoc }) {
  return (
    <div className="bg-white border-t-[3px] border-[#17787a] flex flex-col">
      <Link href={`/catalogs/${doc.slug}`} className="block">
        <div className="w-full aspect-[2/3] bg-[#eef2f1] flex items-center justify-center overflow-hidden">
          <Image
            src={doc.file}
            alt={doc.title}
            width={doc.width}
            height={doc.height}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
      <div className="p-[22px] flex flex-col flex-1">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          {doc.kind}
        </div>
        <h3 className="font-serif font-bold text-[19px] mb-1.5">{doc.title}</h3>
        <p className="text-[15px] text-[#37535e] mb-4">{doc.description}</p>
        <div className="mt-auto flex gap-2.5 flex-wrap">
          <Link
            href={`/catalogs/${doc.slug}`}
            className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors no-underline"
          >
            View
          </Link>
          <a
            href={doc.file}
            download
            className="inline-block bg-transparent text-[#10262e] font-sans text-[14px] px-[18px] py-[9px] border border-[#c3d0d2] hover:border-[#17787a] hover:text-[#17787a] transition-colors no-underline"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
