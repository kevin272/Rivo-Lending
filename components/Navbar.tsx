"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Loan Services", href: "#services" },
    { name: "Why Rivo", href: "#why" },
    { name: "How It Works", href: "#process" },
    { name: "Calculator", href: "#calculator" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Rivo Logo */}
        <Link href="#top" className="relative flex items-center z-50">
          <Image 
            src="/logo_rivo.jpeg" 
            alt="Rivo Lending" 
            width={180} 
            height={50} 
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors tracking-wide">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-4 pl-6 border-l border-brand-navy/10">
            <Link href="tel:0400000000" className="text-brand-navy flex items-center gap-2 text-sm font-bold hover:text-brand-teal transition-colors">
              <Phone className="w-4 h-4" /> 0400 000 000
            </Link>
            <Link href="#contact" className="px-6 py-3 bg-brand-teal text-white text-sm font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-[0_4px_14px_0_rgba(8,178,176,0.39)] hover:shadow-[0_6px_20px_rgba(8,178,176,0.23)] hover:-translate-y-0.5">
              Free Assessment
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-brand-navy relative z-50"
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
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 pt-24 bg-white z-40 h-screen overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-4 max-w-md mx-auto">
              {links.map((link) => (
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
                  href="#contact" 
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
