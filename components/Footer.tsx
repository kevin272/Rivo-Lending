import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-16 md:pt-20 pb-10 text-white/80 relative overflow-hidden">
      {/* Top White Wave Background - Desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[240px] z-0 pointer-events-none">
        <svg viewBox="0 0 1440 240" className="w-full h-full text-white fill-current" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,30 C1000,20 800,30 500,40 C350,50 350,240 0,200 Z" />
        </svg>
      </div>
      {/* Top White Wave Background - Mobile */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[220px] z-0 pointer-events-none">
        <svg viewBox="0 0 400 220" className="w-full h-full text-white fill-current" preserveAspectRatio="none">
          <path d="M0,0 L400,0 L400,30 C300,15 280,20 280,60 C280,180 150,200 0,160 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block relative group">
              <Image 
                src="/logo_rivo.png" 
                alt="Rivo Lending" 
                width={280} 
                height={80} 
                className="relative z-10 h-16 md:h-20 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 mt-16 md:mt-24 relative z-20">
              A premium, advice-led mortgage brokerage. Sydney born, serving all of Australia.
            </p>
          </div>

          {/* Column 2: Loan Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Loan Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/first-home-buyers" className="hover:text-brand-teal transition-colors">First Home Buyers</Link></li>
              <li><Link href="/services/refinancing" className="hover:text-brand-teal transition-colors">Refinancing</Link></li>
              <li><Link href="/services/investment-loans" className="hover:text-brand-teal transition-colors">Investment Loans</Link></li>
              <li><Link href="/services/self-employed" className="hover:text-brand-teal transition-colors">Self-Employed</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">Why Rivo</Link></li>
              <li><Link href="/how-it-works" className="hover:text-brand-teal transition-colors">How It Works</Link></li>
              <li><Link href="/faqs" className="hover:text-brand-teal transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6">Get in touch</h4>
            <div className="space-y-6 text-sm">
              <div className="space-y-2">
                <p className="font-bold text-white/90">Arun Rizal <span className="text-white/50 font-normal ml-1">Principal</span></p>
                <a href="tel:0451178375" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Phone className="w-4 h-4 text-brand-teal" /> 0451 178 375
                </a>
                <a href="mailto:arun@rivolending.com.au" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Mail className="w-4 h-4 text-brand-teal" /> arun@rivolending.com.au
                </a>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white/90">Amit Kumar Basnet <span className="text-white/50 font-normal ml-1">Director</span></p>
                <a href="tel:0492911299" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Phone className="w-4 h-4 text-brand-teal" /> 0492 911 299
                </a>
                <a href="mailto:amit@rivolending.com.au" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Mail className="w-4 h-4 text-brand-teal" /> amit@rivolending.com.au
                </a>
              </div>
              <Link href="/contact" className="inline-block mt-2 text-brand-teal font-bold hover:text-white transition-colors">
                Request a call back &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-white/10 pt-8 text-xs text-white/50 leading-relaxed">
          <p className="mb-4">
            Rivo Lending Pty Ltd ABN 00 000 000 000 is an Authorised Credit Representative / holds Australian Credit Licence 000000. *Our service is free in most cases as lenders pay commission on settlement.
          </p>
          <p className="mb-8">
            This website provides general information only and does not constitute credit assistance or a credit quote. Lending criteria, fees, terms and conditions apply. Indicative rates are subject to change.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Rivo Lending Pty Ltd. All rights reserved.</p>
            <Link href="/contact" className="flex items-center gap-2 font-bold text-white hover:text-brand-teal transition-colors">
              <Phone className="w-3 h-3" /> Free call back
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
