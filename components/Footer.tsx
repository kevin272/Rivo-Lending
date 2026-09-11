import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#18181b] pt-12 md:pt-16 pb-8 text-neutral-300 relative overflow-hidden">
      <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 h-full flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 flex-shrink-0">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="inline-block relative group mb-6">
              <Image 
                src="/logo_rivo.png" 
                alt="Rivo Lending" 
                width={280} 
                height={80} 
                className="relative z-10 h-16 md:h-20 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-neutral-400">
              Premium, advice-led mortgage broking. Sydney born, serving clients right across Australia.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:0451178375" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-neutral-400" /> 0451 178 375
              </a>
              <a href="mailto:info@rivolending.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-neutral-400" /> info@rivolending.com.au
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" /> 
                <span>Sydney, NSW &middot; Serving all of Australia</span>
              </div>
            </div>
          </div>

          {/* Column 2: Personal Loans */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">Personal & Home</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/first-home-buyers" className="hover:text-white transition-colors">First Home Buyers</Link></li>
              <li><Link href="/services/refinancing" className="hover:text-white transition-colors">Refinancing</Link></li>
              <li><Link href="/services/investment-loans" className="hover:text-white transition-colors">Investment Lending</Link></li>
              <li><Link href="/services/owner-occupier" className="hover:text-white transition-colors">Owner-Occupier Loans</Link></li>
              <li><Link href="/services/construction-loans" className="hover:text-white transition-colors">Construction Loans</Link></li>
              <li><Link href="/services/debt-consolidation" className="hover:text-white transition-colors">Debt Consolidation</Link></li>
            </ul>
          </div>

          {/* Column 3: Commercial & Specialist */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">Commercial & Specialist</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/commercial-loans" className="hover:text-white transition-colors">Commercial Loans</Link></li>
              <li><Link href="/services/business-lending" className="hover:text-white transition-colors">Business Lending</Link></li>
              <li><Link href="/services/smsf-loans" className="hover:text-white transition-colors">SMSF Finance</Link></li>
              <li><Link href="/services/asset-finance" className="hover:text-white transition-colors">Asset Finance</Link></li>
              <li><Link href="/services/vehicle-finance" className="hover:text-white transition-colors">Vehicle Finance</Link></li>
              <li><Link href="/services/healthcare-professionals" className="hover:text-white transition-colors">Healthcare Professionals</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">More Loan Options</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/home-loans" className="hover:text-white transition-colors">General Home Loans</Link></li>
              <li><Link href="/services/personal-loans" className="hover:text-white transition-colors">Personal Loans</Link></li>
              <li><Link href="/services/pre-approval" className="hover:text-white transition-colors">Pre-Approval</Link></li>
              <li><Link href="/services/self-employed" className="hover:text-white transition-colors">Self-Employed & Low-Doc</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Why Rivo</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book a Free Assessment</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Request a Call Back</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-neutral-800 pt-6 mt-auto text-[11px] text-neutral-500 leading-relaxed flex-shrink-0">
          <p className="mb-3 text-neutral-400 uppercase tracking-wide">
            SERVICE AREAS
          </p>
          <p className="mb-6">
            Sydney CBD &middot; Inner West &middot; Eastern Suburbs &middot; Lower & Upper North Shore &middot; Northern Beaches &middot; Hills District &middot; Western Sydney &middot; Sutherland Shire &middot; Central Coast &middot; Newcastle & the Hunter &middot; Wollongong & the Illawarra &mdash; and clients Australia-wide, including Melbourne, Brisbane, Perth, Adelaide and Canberra.
          </p>
          
          <div className="border-t border-neutral-800 pt-6">
            <p className="mb-4">
              SANSKRITI HOLDINGS PTY LTD ABN 91 699 074 390 (CREDIT REPRESENTATIVE NO. 550551) IS AUTHORISED UNDER AUSTRALIAN CREDIT LICENCE NO. 389087.
            </p>
            <p className="mb-8">
              This website provides general information only and does not constitute credit assistance or a credit quote. Lending criteria, fees, terms and conditions apply. Indicative rates are subject to change.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; 2026 Rivo Lending Pty Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

