"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Why Rivo", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceCategories = [
    {
      title: "Home Loans",
      links: [
        { name: "First Home Buyers", href: "/services/first-home-buyers" },
        { name: "Refinance", href: "/services/refinancing" },
      ]
    },
    {
      title: "Other Loans",
      links: [
        { name: "Specialist Home loans", href: "/services/home-loans" },
        { name: "Commercial Loans", href: "/services/commercial-loans" },
        { name: "Business Lending", href: "/services/business-lending" },
        { name: "Pre Approval", href: "/services/pre-approval" },
        { name: "Asset Finance", href: "/services/asset-finance" },
        { name: "Investment Property", href: "/services/investment-loans" },
        { name: "Land & Construction Loans", href: "/services/construction-loans" },
        { name: "Home Loan For RN", href: "/services/healthcare-professionals" },
        { name: "Personal Loans", href: "/services/personal-loans" },
        { name: "SMSF Finance", href: "/services/smsf-loans" },
        { name: "Vehicle Finance", href: "/services/vehicle-finance" },
        { name: "Debt Consolidation", href: "/services/debt-consolidation" },
      ]
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white transition-all duration-300 shadow-sm border-b border-slate-200">

      {/* Mobile Top Bar */}
      <div className={`lg:hidden w-full bg-slate-50 border-b border-slate-200 px-4 flex items-center justify-between transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0 py-0 border-transparent' : 'h-12 py-2.5 opacity-100'}`}>
        <Link href="tel:0451178375" className="flex items-center gap-2 text-[#4673A6] font-semibold text-sm">
          <Phone className="w-4 h-4 text-[#4673A6]" /> 0451 178 375
        </Link>
        <Link href="/contact" className="px-4 py-1.5 bg-[#4673A6] text-white text-xs font-bold rounded-full shadow-sm hover:bg-[#365b92] transition-colors">
          Free Assessment
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20 lg:h-28'}`}>
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0 relative z-50 flex items-center">
            {isScrolled ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center pt-2"
              >
                <Image
                  src="/logo_rl_compact.png"
                  alt="RL"
                  width={80}
                  height={80}
                  className="w-auto object-contain h-10 lg:h-12 mix-blend-multiply"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-1"
              >
                <Image
                  src="/logo_rivo.png"
                  alt="Rivo Lending"
                  width={220}
                  height={70}
                  className="w-auto object-contain h-10 lg:h-14 transition-all duration-300"
                  priority
                />
              </motion.div>
            )}
          </Link>

          {/* Right: Two Rows (Desktop) */}
          <div className="hidden lg:flex flex-col items-end h-full justify-center">
            {/* Top Row */}
            <div className={`flex items-center gap-4 transition-all duration-300 overflow-hidden transform origin-top ${isScrolled ? 'h-0 opacity-0 scale-y-0 mb-0' : 'h-8 opacity-100 scale-y-100 mb-2'}`}>
              <Link href="tel:0451178375" className="flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-teal transition-colors">
                <Phone className="w-4 h-4" /> 0451 178 375
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full border border-brand-navy flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors text-xs font-bold">
                in
              </Link>
              <Link href="/contact" className="px-5 py-1.5 bg-[#4673A6] text-white text-sm font-bold rounded-full hover:bg-[#365b92] transition-colors ml-2">
                Free Assessment
              </Link>
            </div>

            {/* Bottom Row */}
            <nav className="flex items-center gap-6">
              <div
                className="relative"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[13px] font-bold text-slate-800 hover:text-brand-teal uppercase tracking-wide transition-colors">
                  LOAN SERVICES <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-4 w-[600px]"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex text-left normal-case">
                        {/* Home Loans Column */}
                        <div className="w-1/3 bg-slate-50 p-6 border-r border-slate-100">
                          <h4 className="font-sans font-bold text-brand-navy mb-4">{serviceCategories[0].title}</h4>
                          <div className="flex flex-col gap-3">
                            {serviceCategories[0].links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-brand-text-muted hover:text-brand-teal transition-colors"
                                onClick={() => setIsDesktopServicesOpen(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {/* Other Loans Column */}
                        <div className="w-2/3 p-6">
                          <h4 className="font-sans font-bold text-brand-navy mb-4">{serviceCategories[1].title}</h4>
                          <div className="grid grid-cols-2 gap-3 gap-x-6">
                            {serviceCategories[1].links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-brand-text-muted hover:text-brand-teal transition-colors"
                                onClick={() => setIsDesktopServicesOpen(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-bold text-slate-800 hover:text-brand-teal uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-50 text-[#4673A6]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="lg:hidden fixed inset-0 top-0 pt-28 bg-white z-40 h-screen overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-2 max-w-md mx-auto pb-32">

              <div className="flex flex-col border-b border-slate-50 mb-2">
                <button
                  className="flex items-center justify-between text-lg font-bold text-slate-800 py-3 px-4 hover:bg-slate-50 rounded-lg uppercase tracking-wide w-full text-left"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  LOAN SERVICES
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col px-4 py-2 gap-4">
                        {serviceCategories.map((cat, idx) => (
                          <div key={idx} className="mb-2">
                            <h4 className="font-bold text-brand-navy mb-2 text-sm uppercase tracking-widest">{cat.title}</h4>
                            <div className="flex flex-col gap-2 pl-2 border-l-2 border-brand-teal/20">
                              {cat.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="text-[15px] font-medium text-brand-text-muted py-1 hover:text-brand-teal transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-800 py-3 px-4 hover:bg-slate-50 rounded-lg uppercase tracking-wide border-b border-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-4 px-4">
                <Link href="tel:0451178375" className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 text-brand-navy font-bold rounded-xl" onClick={() => setIsOpen(false)}>
                  <Phone className="w-5 h-5" /> 0451 178 375
                </Link>
                <Link href="/contact" className="flex items-center justify-center px-6 py-4 bg-[#4673A6] text-white font-bold rounded-xl shadow-md" onClick={() => setIsOpen(false)}>
                  Free Assessment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

