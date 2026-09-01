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

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>


      <header>
        <div className="wrap hbar">
          <Link className="logo" href="/">
            M <span>Sciences</span>
          </Link>

          <nav className={'main' + (open ? ' open' : '')} aria-label="Main">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link className="cta-btn nav-cta-mobile" href="/contact" onClick={() => setOpen(false)}>
              Start a conversation
            </Link>
          </nav>

          <Link className="cta-btn nav-cta-desktop" href="/contact">
            Start a conversation
          </Link>

          <button
            className={'menu-toggle' + (open ? ' is-open' : '')}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && <div className="nav-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}