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
    { name: "Calculator", href: "/calculator" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "First Home Buyers", href: "/services/first-home-buyers" },
    { name: "Refinancing", href: "/services/refinancing" },
    { name: "Investment Lending", href: "/services/investment-loans" },
    { name: "Self-Employed Loans", href: "/services/self-employed" },
    { name: "Owner-Occupier Loans", href: "/services/owner-occupier" },
    { name: "Debt Consolidation", href: "/services/debt-consolidation" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Rivo Logo */}
        <Link href="/" className="relative flex items-center z-50">
          <Image 
            src="/logo_rivo.jpeg" 
            alt="Rivo Lending" 
            width={180} 
            height={50} 
            className={`h-10 w-auto object-contain ${!isScrolled && !isOpen ? 'bg-white/90 rounded-md p-1' : ''}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-bold transition-colors tracking-wide ${isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
              Loan Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {isDesktopServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-4 w-64"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2 flex flex-col">
                    {serviceLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        className="px-4 py-3 text-sm font-medium text-brand-navy hover:bg-brand-soft-teal hover:text-brand-teal transition-colors"
                        onClick={() => setIsDesktopServicesOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mainLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-bold transition-colors tracking-wide ${isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
              {link.name}
            </Link>
          ))}
          <div className={`flex items-center gap-6 ml-4 pl-6 border-l ${isScrolled ? 'border-brand-navy/10' : 'border-white/20'}`}>
            <Link href="tel:0400000000" className={`flex items-center gap-2 text-sm font-bold transition-colors ${isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
              <Phone className="w-4 h-4" /> 0400 000 000
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-brand-teal text-white text-sm font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-[0_4px_14px_0_rgba(8,178,176,0.39)] hover:shadow-[0_6px_20px_rgba(8,178,176,0.23)] hover:-translate-y-0.5">
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
            <nav className="flex flex-col p-6 gap-4 max-w-md mx-auto">
              
              <div className="flex flex-col border-b border-slate-50">
                <button 
                  className="flex items-center justify-between text-xl font-serif text-brand-navy py-3 px-4 hover:bg-brand-soft-teal rounded-xl transition-colors w-full text-left"
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
                      <div className="flex flex-col pl-8 py-2 gap-2">
                        {serviceLinks.map((link) => (
                          <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-lg text-brand-text-muted py-2 hover:text-brand-teal transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
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
                  className="text-xl font-serif text-brand-navy py-3 px-4 hover:bg-brand-soft-teal rounded-xl transition-colors border-b border-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 space-y-4">
                <Link href="tel:0400000000" className="py-4 flex items-center justify-center gap-3 text-brand-navy font-bold text-lg bg-slate-50 rounded-2xl">
                  <Phone className="w-5 h-5 text-brand-teal" /> 0400 000 000
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full text-center px-5 py-4 bg-brand-teal text-white font-bold text-lg rounded-2xl flex justify-center items-center shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
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
