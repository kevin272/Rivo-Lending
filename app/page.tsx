"use client";

import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, Plus, Minus, Star, Home, RefreshCcw, Building2, Briefcase, 
  CheckCircle2, Clock, ShieldCheck, MapPin, Phone, Mail, ChevronRight
} from "lucide-react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"
  ];

    useGSAP(() => {
    // 1. Hero Parallax
    gsap.to(".gsap-hero-parallax", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".gsap-hero-image-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // 1b. Hero Text Stagger
    gsap.fromTo(".gsap-hero-el", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );

    // 2. Lenders Strip Stagger
    gsap.fromTo(".gsap-lender",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "power2.out", 
        scrollTrigger: { trigger: ".gsap-lenders-container", start: "top 90%", toggleActions: "play none none none" }
      }
    );

    // 3. Services 3D Flip
    gsap.fromTo(".gsap-service-card",
      { opacity: 0, y: 50, rotationX: -15 },
      { opacity: 1, y: 0, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)",
        scrollTrigger: { trigger: "#services", start: "top 85%", toggleActions: "play none none none" }
      }
    );

    // 4. Why Rivo - Image Unveil & List Stagger
    gsap.fromTo(".gsap-why-image",
      { clipPath: "inset(10% 10% 10% 10% round 2rem)", scale: 1.1 },
      { clipPath: "inset(0% 0% 0% 0% round 2rem)", scale: 1, duration: 1.2, ease: "power3.inOut",
        scrollTrigger: { trigger: "#why", start: "top 80%", toggleActions: "play none none none" }
      }
    );
    gsap.fromTo(".gsap-why-item",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: "#why", start: "top 75%", toggleActions: "play none none none" }
      }
    );

    // 5. How It Works - Bubbles
    gsap.fromTo(".gsap-step-bubble",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)",
        scrollTrigger: { trigger: "#process", start: "top 80%", toggleActions: "play none none none" }
      }
    );

    // 6. Stats Counters
    const stats = gsap.utils.toArray(".gsap-stat-num");
    stats.forEach((stat: any) => {
      const targetStr = stat.getAttribute("data-target") || "0";
      const suffix = targetStr.replace(/[0-9.]/g, '');
      const targetNum = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
      
      gsap.fromTo(stat, 
        { innerHTML: 0 }, 
        {
          innerHTML: targetNum,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function() {
            stat.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
          },
          scrollTrigger: { trigger: stat, start: "top 90%", toggleActions: "play none none none" }
        }
      );
    });

    // 7. Calculator Progress Bars
    gsap.fromTo(".gsap-progress-fill",
      { width: "0%" },
      { width: (idx, target) => target.getAttribute("data-width"), duration: 1.5, ease: "power3.out", stagger: 0.2,
        scrollTrigger: { trigger: "#calculator", start: "top 75%", toggleActions: "play none none none" }
      }
    );
    gsap.fromTo(".gsap-progress-handle",
      { left: "0%" },
      { left: (idx, target) => target.getAttribute("data-left"), duration: 1.5, ease: "power3.out", stagger: 0.2,
        scrollTrigger: { trigger: "#calculator", start: "top 75%", toggleActions: "play none none none" }
      }
    );

    // 8. Testimonials Slide-in
    gsap.fromTo(".gsap-testimonial-card",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-testimonial-container", start: "top 85%", toggleActions: "play none none none" }
      }
    );

  }, { scope: containerRef });


  const faqs = [
    { q: "Does it cost me anything to use Rivo?", a: "In most cases, our services come at no out-of-pocket cost to you. We are typically paid a commission by the lender once your loan settles. We are fully transparent and will disclose any commissions upfront." },
    { q: "How many lenders do you work with?", a: "We have access to a broad panel of over 30 leading Australian lenders, including the major banks and specialist lenders, ensuring we can compare a wide range of products." },
    { q: "Can you help if I’m self-employed or have a complex income?", a: "Absolutely. We know exactly which lenders have policies that are friendly to self-employed individuals and complex income structures." },
    { q: "Do you only work with people in Sydney?", a: "No, while we are born in Sydney, we serve clients Australia-wide thanks to our digital-first process." },
    { q: "What is the Best Interests Duty?", a: "The Best Interests Duty is a legal obligation for mortgage brokers to always act in your best interests when providing credit assistance. We take this seriously and ensure our recommendations are genuinely the best fit for you." },
  ];

  const services = [
    { title: "First Home Buyers", desc: "Grants, schemes and guarantor options explained in plain English. We’ll help you buy sooner, with confidence.", icon: Home, linkText: "Check eligibility", href: "/services/first-home-buyers" },
    { title: "Refinancing", desc: "Pay less, save more. We review your current loan and hunt down a sharper rate to lower your repayments.", icon: RefreshCcw, linkText: "Review my rate", href: "/services/refinancing" },
    { title: "Investment Lending", desc: "Build your portfolio with the right structure — interest-only, equity release and tax-smart strategies.", icon: Building2, linkText: "Grow my portfolio", href: "/services/investment-loans" },
    { title: "Self-Employed", desc: "Non-standard income? We know the lenders and policies that say yes — alt-doc and specialist solutions.", icon: Briefcase, linkText: "Talk to us", href: "/services/self-employed" },
    { title: "Owner-Occupier Loans", desc: "Upgrading, building or bridging? We structure a loan that fits your life now and flexes as it changes.", icon: Home, linkText: "Get started", href: "/services/owner-occupier" },
    { title: "Debt Consolidation", desc: "One loan, less stress. Roll multiple debts into your home loan to simplify payments and reduce interest.", icon: ShieldCheck, linkText: "Simplify my debts", href: "/services/debt-consolidation" }
  ];

  return (
    <div ref={containerRef} className="flex flex-col font-sans overflow-x-hidden bg-brand-warm">
      
      {/* 1. HERO */}
      {/* 1. HERO */}
      <section id="top" className="relative min-h-[90vh] flex items-center pt-24 pb-24 overflow-hidden bg-gradient-to-br from-[#1a2f4c] to-[#2a456c]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#2a456c]/30 skew-x-12 origin-top-right transform translate-x-20"></div>
        <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-[#3a5a8c]/20 rounded-full blur-[100px]"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[60vh]">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ type: "spring", stiffness: 80, damping: 20 }} 
              className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 relative pt-10 lg:pt-0"
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] text-white leading-[1.1] mb-6 font-bold tracking-tight">
                Your Path To<br />Property,<br />Made Simple.
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                Low Rates, Fast Approvals, And Personal Guidance Every Step Of The Way. We Guide You From Application To Settlement.
              </p>

              <div className="flex justify-center lg:justify-start mb-16 lg:mb-0">
                <Link href="#contact" className="gsap-hero-el inline-flex items-center justify-center px-10 h-14 bg-white text-brand-navy font-bold rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wider text-sm">
                  Get Pre-Approved
                </Link>
              </div>

              {/* Floating House Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="hidden lg:block mt-8 w-48 h-48 bg-white p-2 rounded-xl shadow-2xl z-20"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" alt="Home" fill className="object-cover" unoptimized referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Large Bleeding Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, type: "spring", bounce: 0.2 }} 
              className="relative w-full h-[50vh] lg:h-[75vh] w-[110%] lg:w-[130%] right-[-5%] lg:right-[-15%] z-10 gsap-hero-image-container"
            >
              {/* SVG Mask Definition */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
                    <path d="M0.05,0 C0.1,0.3 0,0.7 0.05,1 L1,1 L1,0 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div 
                className="absolute inset-0 shadow-2xl" 
                style={{ clipPath: 'url(#hero-mask)', WebkitClipPath: 'url(#hero-mask)' }}
              >
                 <div className="absolute inset-[-20%] gsap-hero-parallax">
                   <Image src={heroImages[0]} alt="Modern Home" fill className="object-cover" priority unoptimized referrerPolicy="no-referrer" />
                 </div>
                 {/* Inner gradient shadow for depth */}
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer z-20"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/70"></div>
          <ArrowRight className="w-4 h-4 rotate-90" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        </motion.div>
      </section>

      {/* 2. RATES / TRUST STRIP */}
      <section className="bg-brand-navy py-10 md:py-16 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-3 md:space-y-4">
              <p className="text-brand-teal font-bold tracking-widest text-xs md:text-sm uppercase">Indicative rates today</p>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <p className="text-white/70 text-xs md:text-sm mb-1">Variable from</p>
                  <p className="text-3xl md:text-4xl font-serif leading-none">5.88<span className="text-xl md:text-2xl">% p.a.*</span></p>
                </div>
                <div>
                  <p className="text-white/70 text-xs md:text-sm mb-1">Comparison rate</p>
                  <p className="text-3xl md:text-4xl font-serif leading-none">6.08<span className="text-xl md:text-2xl">% p.a.*</span></p>
                </div>
              </div>
              <p className="text-xs md:text-sm font-bold text-white/90 pt-1">Owner-occupied · P&I · ≤80% LVR <span className="text-brand-teal mx-1">|</span> 30+ lenders</p>
              <p className="text-[10px] md:text-xs text-white/50 max-w-md leading-tight">*Indicative only. Serviceability & lending criteria apply. Rates change — ask us for a live comparison.</p>
            </div>
            <div className="md:border-l md:border-white/20 md:pl-12 pt-6 md:pt-0 border-t border-white/10 md:border-t-0 mt-2 md:mt-0">
              <p className="text-white/70 text-xs md:text-sm mb-4 font-bold">Access to Australia’s leading lenders:</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 opacity-80">
                <span className="font-serif text-xl md:text-2xl font-bold">CBA</span>
                <span className="font-serif text-xl md:text-2xl font-bold">Westpac</span>
                <span className="font-serif text-xl md:text-2xl font-bold">NAB</span>
                <span className="font-serif text-xl md:text-2xl font-bold">ANZ</span>
                <span className="font-serif text-xl md:text-2xl font-bold">Macquarie</span>
                <span className="font-serif text-xl md:text-2xl font-bold">ING</span>
                <span className="text-[10px] md:text-sm font-bold bg-white/10 px-2 py-1 rounded-full">+ 25 more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section id="services" className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">What we do</p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Finance for every stage of property</h2>
          <p className="text-brand-text-muted text-lg">
            Whatever you’re trying to achieve, we match you to the right loan from our whole-of-market lender panel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="gsap-service-card bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-soft-teal rounded-2xl flex items-center justify-center mb-8 text-brand-teal group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">{service.title}</h3>
              <p className="text-brand-text-muted leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <Link href={service.href} className="gsap-hero-el inline-flex items-center text-sm font-bold text-brand-teal group-hover:text-brand-navy transition-colors mt-auto">
                {service.linkText} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY RIVO */}
      <section id="why" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="gsap-why-image order-2 lg:order-1 relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" alt="Consultation" fill className="object-cover" unoptimized referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Our promise to you</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-10 leading-[1.15]">Smart technology, old-fashioned service</h2>
              
              <div className="space-y-8">
                <div className="gsap-why-item flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-soft-teal rounded-full flex items-center justify-center text-brand-teal"><Clock className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-navy mb-2">Hours, not days</h4>
                    <p className="text-brand-text-muted leading-relaxed">A digital-first process means less paperwork and faster approvals — so you can move quickly on the right property.</p>
                  </div>
                </div>
                <div className="gsap-why-item flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-soft-teal rounded-full flex items-center justify-center text-brand-teal"><ShieldCheck className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-navy mb-2">Tailored strategy</h4>
                    <p className="text-brand-text-muted leading-relaxed">We don’t just quote rates. We analyse your goals and structure a loan that genuinely fits — and grows with you.</p>
                  </div>
                </div>
                <div className="gsap-why-item flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-soft-teal rounded-full flex items-center justify-center text-brand-teal"><CheckCircle2 className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-navy mb-2">Best interests, always</h4>
                    <p className="text-brand-text-muted leading-relaxed">As licensed brokers we’re bound by a Best Interests Duty. Our job isn’t done at settlement — free annual reviews keep you on the sharpest deal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="process" className="py-24 md:py-32 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">How it works</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Four simple steps to settled</h2>
            <p className="text-brand-text-muted text-lg">No jargon, no pressure. Just a clear path from first chat to keys in hand.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-teal/20 -z-10"></div>
            
            {[
              { step: 1, title: "Discovery", desc: "We start with you — your income, lifestyle and goals — to understand the full picture." },
              { step: 2, title: "Smart strategy", desc: "We compare policies from 30+ lenders to find the one that fits your exact situation." },
              { step: 3, title: "The heavy lifting", desc: "We package your application for first-time approval and handle the bank negotiations." },
              { step: 4, title: "Annual health check", desc: "Every year we review your loan to make sure it’s still the best fit as life changes." }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="gsap-step-bubble w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-3xl font-serif text-brand-teal border-4 border-brand-warm shadow-md mb-6 z-10 relative">
                  {item.step}
                </div>
                <h4 className="font-bold text-xl text-brand-navy mb-3">{item.title}</h4>
                <p className="text-brand-text-muted leading-relaxed text-sm px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS STRIP */}
      <section className="bg-brand-navy py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "30+", label: "Lenders on our panel" },
              { stat: "1000s", label: "Loan products compared" },
              { stat: "100%", label: "Independent advice" },
              { stat: "$0", label: "Cost to you*" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="gsap-stat-num font-serif text-4xl md:text-5xl text-brand-teal mb-2" data-target={item.stat}>{item.stat}</span>
                <span className="text-white/80 font-bold text-sm uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALCULATOR */}
      <section id="calculator" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Plan with confidence</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Estimate your repayments</h2>
              <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
                Guesswork can be expensive. Slide to estimate your repayments, then talk to us for a live, tailored comparison across 30+ lenders.
              </p>
              <Link href="#contact" className="gsap-hero-el inline-flex items-center justify-center px-8 h-14 bg-brand-teal text-white font-bold rounded-full hover:bg-brand-teal/90 transition-colors shadow-lg">
                Get a tailored quote
              </Link>
            </div>

            {/* Static Visual Mockup of Calculator */}
            <div className="bg-brand-warm p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm relative">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-brand-navy">Loan amount</span>
                    <span className="font-bold text-brand-teal text-lg">$650,000</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full relative">
                    <div className="gsap-progress-fill absolute top-0 left-0 h-full bg-brand-teal rounded-full w-[0%]" data-width="65%"></div>
                    <div className="gsap-progress-handle absolute top-1/2 -translate-y-1/2 left-[0%] w-5 h-5 bg-white border-2 border-brand-teal rounded-full shadow" data-left="65%"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-brand-navy">Interest rate</span>
                    <span className="font-bold text-brand-teal text-lg">5.88%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full relative">
                    <div className="gsap-progress-fill absolute top-0 left-0 h-full bg-brand-teal rounded-full w-[0%]" data-width="45%"></div>
                    <div className="gsap-progress-handle absolute top-1/2 -translate-y-1/2 left-[0%] w-5 h-5 bg-white border-2 border-brand-teal rounded-full shadow" data-left="45%"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-brand-navy">Loan term</span>
                    <span className="font-bold text-brand-teal text-lg">30 years</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full relative">
                    <div className="gsap-progress-fill absolute top-0 left-0 h-full bg-brand-teal rounded-full w-[0%]" data-width="100%"></div>
                    <div className="gsap-progress-handle absolute top-1/2 -translate-y-1/2 left-[0%] w-5 h-5 bg-white border-2 border-brand-teal rounded-full shadow" data-left="100%"></div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-brand-navy/10 text-center">
                  <p className="text-5xl font-serif text-brand-navy mb-2">$3,847</p>
                  <p className="text-brand-text-muted font-bold text-sm">estimated monthly repayment (principal & interest)</p>
                </div>
              </div>
              <p className="text-[10px] text-brand-text-muted mt-8 text-center leading-tight">
                Estimate only and not an offer of credit. Actual repayments depend on the lender, product, fees and your circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-brand-soft-teal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">What our clients say</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy">Australians who bought smarter</h2>
          </div>
          <div className="gsap-testimonial-container grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Rivo found me a loan I didn’t think I’d qualify for and made my first home feel achievable. Clear advice the whole way.",
                name: "David T.", role: "First home buyer · Newtown, NSW", initial: "D"
              },
              {
                text: "The strategy call was a game-changer. They understood my investment goals and structured everything perfectly.",
                name: "Mark W.", role: "Investor · Rockdale, NSW", initial: "M"
              },
              {
                text: "Being self-employed I expected a nightmare. Rivo knew exactly which lender to approach. Forever grateful.",
                name: "Sarah J.", role: "Self-employed · Manly, NSW", initial: "S"
              }
            ].map((review, idx) => (
              <div key={idx} className="gsap-testimonial-card bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-teal text-brand-teal" />)}
                </div>
                <p className="text-brand-text-muted italic mb-8 flex-grow leading-relaxed font-serif text-lg">"{review.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-serif text-lg">{review.initial}</div>
                  <div>
                    <p className="font-bold text-brand-navy">{review.name}</p>
                    <p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Let’s talk</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Request a free call back</h2>
              <p className="text-brand-text-muted text-lg leading-relaxed mb-10">
                Whether you’re buying your first home, refinancing or investing, send your details and we’ll call you to talk through your options — no obligation.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft-teal p-3 rounded-xl text-brand-teal"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">0400 000 000</h4>
                    <p className="text-brand-text-muted text-sm">Mon–Sat, after-hours by appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft-teal p-3 rounded-xl text-brand-teal"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">hello@rivolending.com.au</h4>
                    <p className="text-brand-text-muted text-sm">We reply within one business day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft-teal p-3 rounded-xl text-brand-teal"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">Sydney, NSW</h4>
                    <p className="text-brand-text-muted text-sm">Serving clients Australia-wide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-warm p-6 md:p-12 rounded-[2rem] border border-slate-100 shadow-lg">
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Full name" className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone" className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white" />
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white" />
                </div>
                <div>
                  <select className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white text-brand-navy/70 appearance-none">
                    <option value="">I'm looking to…</option>
                    <option value="first">Buy my first home</option>
                    <option value="upgrade">Buy a home (upgrade/owner-occupier)</option>
                    <option value="refinance">Refinance my current loan</option>
                    <option value="invest">Buy an investment property</option>
                    <option value="preapprove">Get pre-approved</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Message (optional)" rows={4} className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white resize-none"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-teal transition-colors shadow-lg flex items-center justify-center gap-2">
                  Request a Call Back <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-brand-text-muted text-center mt-4">By submitting you agree to be contacted about your enquiry. We never sell your data.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQS */}
      <section id="faq" className="py-24 bg-brand-warm border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Good to know</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-4">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between text-left p-6 focus:outline-none group">
                  <span className="font-bold text-lg text-brand-navy pr-8">{faq.q}</span>
                  <div className="w-10 h-10 rounded-full bg-brand-warm flex items-center justify-center flex-shrink-0 text-brand-navy group-hover:text-brand-teal transition-colors">
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="px-6 pb-6 text-brand-text-muted leading-relaxed">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="bg-brand-teal py-20 md:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
           <div className="w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] rounded-full border-[1px] border-white absolute"></div>
           <div className="w-[150vw] h-[150vw] max-w-[1200px] max-h-[1200px] rounded-full border-[1px] border-white absolute"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.15]">Ready to take the first step?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book a free, no-obligation assessment and we’ll show you what’s possible — and how much you could save.
          </p>
          <Link href="#contact" className="gsap-hero-el inline-flex items-center justify-center h-14 md:h-16 px-10 md:px-12 bg-white text-brand-navy text-lg font-bold rounded-full hover:bg-brand-navy hover:text-white transition-all shadow-xl hover:-translate-y-1">
            Book a Free Assessment
          </Link>
        </div>
      </section>

    </div>
  );
}
