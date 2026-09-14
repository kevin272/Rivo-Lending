import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#18181b] pt-12 md:pt-16 pb-24 md:pb-8 text-neutral-300 relative overflow-hidden">
      <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 h-full flex flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-8 mb-10 flex-shrink-0">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col items-start col-span-2 lg:col-span-1 mb-2 lg:mb-0">
            <Link href="/" className="inline-block relative group mb-4">
              <Image 
                src="/logo_rivo.png" 
                alt="Rivo Lending" 
                width={280} 
                height={80} 
                className="relative z-10 h-16 md:h-20 w-auto object-contain brightness-0 invert" 
              />
            </Link>

            {/* Industry Accreditations (AFCA & MFAA) */}
            <div className="flex items-center gap-3.5 mb-6">
              <a 
                href="https://www.afca.org.au" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Australian Financial Complaints Authority (AFCA) Member"
                className="bg-white rounded-xl px-3.5 py-2 flex items-center justify-center shadow-sm border border-white/10 hover:opacity-95 hover:scale-[1.03] transition-all duration-200"
              >
                <Image 
                  src="/afca-logo.svg" 
                  alt="Australian Financial Complaints Authority (AFCA)" 
                  width={150} 
                  height={45} 
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </a>
              <a 
                href="https://www.mfaa.com.au" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Mortgage & Finance Association of Australia (MFAA) Member"
                className="bg-white rounded-xl px-3.5 py-2 flex items-center justify-center shadow-sm border border-white/10 hover:opacity-95 hover:scale-[1.03] transition-all duration-200"
              >
                <Image 
                  src="/mfaa-logo.jpg" 
                  alt="Mortgage & Finance Association of Australia (MFAA)" 
                  width={150} 
                  height={45} 
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </a>
            </div>

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

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800/60 flex items-center justify-center text-neutral-300 hover:bg-[#4673A6] hover:text-white hover:border-[#4673A6] transition-all duration-200 hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800/60 flex items-center justify-center text-neutral-300 hover:bg-[#4673A6] hover:text-white hover:border-[#4673A6] transition-all duration-200 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800/60 flex items-center justify-center text-neutral-300 hover:bg-[#4673A6] hover:text-white hover:border-[#4673A6] transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Personal Loans */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm">Personal & Home</h4>
            <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-sm">
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
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm">Commercial & Specialist</h4>
            <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-sm">
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
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm">More Loan Options</h4>
            <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-sm">
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
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Why Rivo</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Mortgage Insights & Blog</Link></li>
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
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

