'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ComplianceSidebar() {
  const pathname = usePathname();
  
  const links = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Credit Guide', href: '/credit-guide' },
    { name: 'Complaints', href: '/complaints' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <h3 className="text-lg font-bold text-brand-navy mb-4">Legal & Compliance</h3>
      <nav className="flex flex-col space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                isActive 
                  ? 'bg-brand-soft-teal text-brand-navy font-semibold' 
                  : 'text-brand-text-muted hover:bg-slate-50 hover:text-brand-navy'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
