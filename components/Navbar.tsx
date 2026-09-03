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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Rivo Logo */}
        <Link href="/" className="relative flex items-center z-50">
          <Image 
            src="/logo_rivo.png" 
            alt="Rivo Lending" 
            width={180} 
            height={50} 
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          
          <div 
            className="relative"
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-bold transition-colors tracking-wide ${isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white drop-shadow-md'}`}>
              Loan Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {isDesktopServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-4 w-[600px]"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex">
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
            <Link key={link.name} href={link.href} className={`text-sm font-bold transition-colors tracking-wide ${isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white drop-shadow-md'}`}>
              {link.name}
            </Link>
          ))}
          <div className={`flex items-center gap-6 ml-4 pl-6 border-l ${isScrolled ? 'border-brand-navy/10' : 'border-white/20'}`}>
            <Link href="tel:0451178375" className={`flex items-center gap-2 text-sm font-bold transition-colors ${isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white drop-shadow-md'}`}>
              <Phone className="w-4 h-4" /> 0451 178 375
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-brand-teal text-white text-sm font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-[0_4px_14px_0_rgba(0,157,218,0.39)] hover:shadow-[0_6px_20px_rgba(0,157,218,0.23)] hover:-translate-y-0.5">
              Free Assessment
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-2 relative z-50 transition-colors ${isScrolled || isOpen ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="lg:hidden fixed inset-0 top-0 pt-24 bg-white z-40 h-screen overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-4 max-w-md mx-auto pb-32">
              
              <div className="flex flex-col border-b border-slate-50">
                <button 
                  className="flex items-center justify-between text-xl font-sans text-brand-navy py-3 px-4 hover:bg-brand-soft-teal rounded-xl transition-colors w-full text-left"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Loan Services
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
                                  className="text-lg text-brand-text-muted py-1 hover:text-brand-teal transition-colors"
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
                  className="text-xl font-sans text-brand-navy py-3 px-4 hover:bg-brand-soft-teal rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-8 flex flex-col gap-4 px-4">
                <Link href="tel:0451178375" className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-warm text-brand-navy font-bold rounded-xl" onClick={() => setIsOpen(false)}>
                  <Phone className="w-5 h-5" /> 0451 178 375
                </Link>
                <Link href="/contact" className="flex items-center justify-center px-6 py-4 bg-brand-teal text-white font-bold rounded-xl shadow-lg" onClick={() => setIsOpen(false)}>
                  Get Your Free Assessment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

