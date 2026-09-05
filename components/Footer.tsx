import Link from 'next/link';
import FooterVideo from './FooterVideo';

export default function Footer() {
  return (
    <footer className="bg-[#10262e] text-[#a9c6c8] mt-0">
      {/* Video strip — full-bleed, sits above the column grid.
          Native aspect ratio (1920x584) is banner-shaped, so it reads as a
          deliberate cinematic strip rather than a cropped photo/video. */}
      <FooterVideo />

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Four‑column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Navigate */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.11em] uppercase text-[#2fa9a6] font-normal mb-3">
              Navigate
            </h4>
            <ul className="list-none text-[14px] space-y-1.5">
              <li className="py-0.5"><Link href="/"className="hover:text-white transition-colors">Home</Link></li>
              <li className="py-0.5"><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li className="py-0.5"><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li className="py-0.5"><Link href="/evidence" className="hover:text-white transition-colors">Evidence</Link></li>
              <li className="py-0.5"><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li className="py-0.5"><Link href="/tool" className="hover:text-white transition-colors">Is this for you?</Link></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.11em] uppercase text-[#2fa9a6] font-normal mb-3">
              Technology
            </h4>
            <ul className="list-none text-[14px] space-y-1.5">
              <li className="py-0.5">ANOT®</li>
              <li className="py-0.5">NOXXALL®</li>
              <li className="py-0.5">Sugofil®</li>
              <li className="py-0.5">S Astra®</li>
              <li className="py-0.5">Where our process ends</li>
            </ul>
          </div>

          {/* Resources – now linking to actual PDFs */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.11em] uppercase text-[#2fa9a6] font-normal mb-3">
              Resources
            </h4>
            <ul className="list-none text-[14px] space-y-1.5">
              <li className="py-0.5">
                <Link href="/resources/white-paper" className="hover:text-white transition-colors">
                  Client white paper
                </Link>
              </li>
              <li className="py-0.5">
                <Link href="/resources/executive-brief" className="hover:text-white transition-colors">
                  Executive brief
                </Link>
              </li>
              <li className="py-0.5">
                <Link href="/resources/portfolio-capability-profile" className="hover:text-white transition-colors">
                  Portfolio &amp; capability profile
                </Link>
              </li>
              <li className="py-0.5">
                <Link href="/resources" className="hover:text-white transition-colors">
                  All resources →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.11em] uppercase text-[#2fa9a6] font-normal mb-3">
              Contact
            </h4>
            <ul className="list-none text-[14px] space-y-1.5">
              <li className="py-0.5 font-mono text-[#2fa9a6] text-[13px]">drmadan@anotmagic.com</li>
              <li className="py-0.5 font-mono text-[#2fa9a6] text-[13px]">+91 98450 16035</li>
              <li className="py-0.5 font-mono text-[#2fa9a6] text-[13px]"> Phoenix Kessaku, Dr Rajkumar Rd, Opp: Orion mall, Rajajinagar, Bengaluru, Karnataka -10 Republic of Bharat</li>
            </ul>
          </div>
        </div>

        {/* Legal & disclaimer */}
        <div className="border-t border-[#2a4a57] mt-[30px] pt-[18px] text-[12.5px] text-[#7e9aa3]">
          This site contains no M Sciences performance statistics. Application-specific claims are
          released only within the supporting evidence boundary. Treated water is not for drinking
          purposes. ANOT®, NOXXALL® and Sugofil® are registered marks; S Astra™ is a trademark of M
          Sciences.
        </div>
      </div>
    </footer>
  );
}
