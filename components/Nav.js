'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <>
      <div className="proto">
        <span>
          <b>Prototype</b> — visual direction &amp; navigation flow, not the finished site
        </span>
        <span>Click the navigation and the interactive elements</span>
      </div>

      <header>
        <div className="wrap hbar">
          <Link className="logo" href="/">
            M <span>Sciences</span>
          </Link>
          <nav className="main" aria-label="Main">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link className="cta-btn" href="/contact">
            Start a conversation
          </Link>
        </div>
      </header>
    </>
  );
}
