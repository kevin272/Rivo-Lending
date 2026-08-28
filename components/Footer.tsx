import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="#top" className="inline-block mb-6 relative">
              <Image 
                src="/logo_rivo.jpeg" 
                alt="Rivo Lending" 
                width={180} 
                height={50} 
                className="h-12 w-auto object-contain bg-white/10 rounded-md p-1" 
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
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
              <li><Link href="#why" className="hover:text-brand-teal transition-colors">Why Rivo</Link></li>
              <li><Link href="#process" className="hover:text-brand-teal transition-colors">How It Works</Link></li>
              <li><Link href="#faq" className="hover:text-brand-teal transition-colors">FAQs</Link></li>
              <li><Link href="#contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in touch</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:0400000000" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Phone className="w-4 h-4" /> 0400 000 000
                </a>
              </li>
              <li>
                <a href="mailto:hello@rivolending.com.au" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Mail className="w-4 h-4" /> hello@rivolending.com.au
                </a>
              </li>
              <li>
                <Link href="#contact" className="inline-block mt-2 text-brand-teal font-bold hover:text-white transition-colors">
                  Request a call back &rarr;
                </Link>
              </li>
            </ul>
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
            <Link href="#contact" className="flex items-center gap-2 font-bold text-white hover:text-brand-teal transition-colors">
              <Phone className="w-3 h-3" /> Free call back
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
