'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/industries', label: 'Industries' },
  { href: '/evidence', label: 'Evidence' },
  { href: '/tool', label: 'Is this for you?' },
  { href: '/map', label: 'Nav map' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#fbfbf9]/94 backdrop-blur-[8px] border-b border-[#c3d0d2]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-7 py-3.5 relative">
          {/* Logo – stays left */}
          <Link className="font-serif font-bold text-[20px] tracking-[-0.01em] text-[#10262e] no-underline z-10" href="/">
            M <span className="text-[#17787a]">Sciences</span>
          </Link>

          {/* Navigation – pushed to the right on desktop */}
          <nav
            className={`
              fixed top-0 right-0 h-full w-[min(320px,84vw)] bg-[#fbfbf9] 
              flex flex-col items-stretch gap-0 p-[88px_28px_28px] 
              transform transition-transform duration-250 ease 
              ${open ? 'translate-x-0' : 'translate-x-full'}
              md:static md:translate-x-0 md:flex-row md:items-center md:gap-5 
              md:p-0 md:bg-transparent md:h-auto md:w-auto md:shadow-none
              md:ml-auto   /* <--- this pushes the nav to the right */
              z-41 shadow-[-8px_0_24px_rgba(16,38,46,0.12)] overflow-y-auto
            `}
            aria-label="Main"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`
                  text-[17px] md:text-[14px] py-3.5 md:py-1.5 
                  border-b border-[#c3d0d2] md:border-b-2 md:border-transparent
                  text-[#37535e] hover:text-[#17787a] no-underline
                  ${pathname === l.href ? 'text-[#10262e] md:border-b-[#17787a] relative md:static' : ''}
                  ${pathname === l.href ? 'before:content-[""] before:absolute before:left-[-28px] before:top-0 before:bottom-0 before:w-[3px] before:bg-[#17787a] md:before:hidden' : ''}
                `}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {/* Mobile CTA – inside the drawer */}
            <Link
              className="inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors mt-5 md:hidden text-center"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Start a conversation
            </Link>
          </nav>

          {/* Desktop CTA – sits next to the nav (which is now on the right) */}
          <Link
            className="hidden md:inline-block bg-[#10262e] text-white font-sans text-[14px] px-[18px] py-[9px] hover:bg-[#17787a] transition-colors whitespace-nowrap"
            href="/contact"
          >
            Start a conversation
          </Link>

          {/* Hamburger toggle – visible only on mobile */}
          <button
            className={`
              md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 p-0 border-0 bg-transparent cursor-pointer z-10
              transition-transform duration-200
            `}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`
                block w-[22px] h-[2px] bg-[#10262e] transition-transform duration-200 ease
                ${open ? 'translate-y-[7px] rotate-45' : ''}
              `}
            />
            <span
              className={`
                block w-[22px] h-[2px] bg-[#10262e] transition-opacity duration-200 ease
                ${open ? 'opacity-0' : ''}
              `}
            />
            <span
              className={`
                block w-[22px] h-[2px] bg-[#10262e] transition-transform duration-200 ease
                ${open ? '-translate-y-[7px] -rotate-45' : ''}
              `}
            />
          </button>
        </div>
      </header>

      {/* Scrim overlay when mobile menu is open */}
      {open && (
        <div
          className="fixed inset-0 top-0 bg-[#10262e]/35 z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}