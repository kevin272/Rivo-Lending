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
import { ArrowRight, Home, RefreshCcw, TrendingUp, Tractor, Landmark, CreditCard, Stethoscope, ChevronRight, CheckCircle2, FileText, Handshake, HeartHandshake, PhoneCall, Star, Plus, Minus, Users, Key, FileCheck, User, Building2, Briefcase, Car, Layers, Clock, ShieldCheck, MapPin, Phone, Mail, HeartPulse } from "lucide-react";

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

  

  const lenderLogos = [
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/Bank_Of_Melbourne-e1776064806377.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/Bankwest_new_logo-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/Commonwealth_Bank.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/ING_Group_N.V._Logo.svg-1-1024x260-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/St_George_Bank_logo-1-1024x321-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/Suncorp-Bank-Logo-1-1024x576-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/anz-2-logo-png-transparent-1-1024x323-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/firstmac-limited-logo-vector-1-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/png-transparent-nab-national-australia-bank-logo-thumbnail-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/westpac-logo-png_seeklogo-152472-1.png",
    "https://laxmihomeloans.com.au/wp-content/uploads/2026/04/peppermoney.png"
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

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-4">
                <Link href="#contact" className="gsap-hero-el inline-flex items-center justify-center px-8 h-14 bg-white text-brand-navy font-bold rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wider text-sm">
                  I want to buy a home
                </Link>
                <Link href="#contact" className="gsap-hero-el inline-flex items-center justify-center px-8 h-14 bg-brand-teal text-white font-bold rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wider text-sm">
                  I want to refinance
                </Link>
              </div>
              <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
                <Link href="/contact" className="gsap-hero-el text-white/80 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white underline-offset-4 text-sm font-medium">
                  Need help finding property?
                </Link>
              </div>

              {/* Rating Block */}
              <div className="gsap-hero-el mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-center sm:text-left">
                <div className="flex gap-1 text-[#FFB800]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="text-white text-sm">
                  <span className="font-bold">5.0</span>
                  <span className="opacity-80 ml-2">400+ combined verified reviews across all platforms</span>
                </div>
              </div>


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

        
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100 overflow-hidden">
        <div className="text-center mb-10">
          <p className="text-brand-navy font-bold text-sm md:text-base uppercase tracking-widest">Access to 50+ Leading Lenders</p>
        </div>
        
        <div className="relative flex overflow-hidden group w-full">
          {/* First Marquee Track */}
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 px-6 md:px-12 flex-shrink-0 group-hover:[animation-play-state:paused]">
            {lenderLogos.map((src, idx) => (
              <div key={`m1-${idx}`} className="flex-shrink-0 w-32 h-12 md:w-40 md:h-16 relative flex items-center justify-center">
                <Image src={src} alt="Lender Logo" fill className="object-contain opacity-90" unoptimized referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          {/* Second Marquee Track (Clone) */}
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 px-6 md:px-12 flex-shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {lenderLogos.map((src, idx) => (
              <div key={`m2-${idx}`} className="flex-shrink-0 w-32 h-12 md:w-40 md:h-16 relative flex items-center justify-center">
                <Image src={src} alt="Lender Logo" fill className="object-contain opacity-90" unoptimized referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

                        {/* 3. SERVICES OVERVIEW */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Our Services</p>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-navy mb-4">Home Loan Solutions for Every Journey</h2>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              We provide extensive assistance for all your financing requirements. Regardless of your situation, our skilled team is dedicated to identifying the right options for you.
            </p>
          </div>
          
          {/* Top 4 Core Services as Pills */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 max-w-4xl mx-auto">
            {[
              { label: "Home Loans", icon: Home, href: "/services/home-loans" },
              { label: "First Home Buyers", icon: Key, href: "/services/first-home-buyers" },
              { label: "Refinance", icon: RefreshCcw, href: "/services/refinancing" },
              { label: "Investing", icon: TrendingUp, href: "/services/investment-loans" },
            ].map((pill, idx) => (
              <Link 
                key={idx} 
                href={pill.href} 
                className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-brand-teal/20 bg-white text-brand-navy font-bold hover:bg-brand-teal/10 hover:border-brand-teal transition-all text-sm shadow-sm justify-center sm:justify-start"
              >
                <pill.icon className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <span className="truncate">{pill.label}</span>
              </Link>
            ))}
          </div>

          <div className="w-full h-px bg-slate-200 mb-16 max-w-5xl mx-auto"></div>
          
          {/* Remaining Specialist Services as Compact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                title: "Pre Approval",
                description: "Know your borrowing capacity before making offers with our streamlined pre-approval process.",
                icon: FileCheck,
                href: "/services/pre-approval"
              },
              {
                title: "Personal Loans",
                description: "Spread the cost of major expenses into manageable payments with a consistent repayment plan.",
                icon: User,
                href: "/services/personal-loans"
              },
              {
                title: "Registered Nurse",
                description: "Access exclusive LMI waivers and professional rates specially tailored for healthcare workers.",
                icon: Stethoscope,
                href: "/services/healthcare-professionals"
              },
              {
                title: "Commercial Loans",
                description: "Secure ideal commercial financing tailored to your business structure, cash flow, and financial standing.",
                icon: Building2,
                href: "/services/commercial-loans"
              },
              {
                title: "Construction Loans",
                description: "Navigate funding smoothly with progress payments aligned perfectly to your building timeline.",
                icon: Tractor,
                href: "/services/construction-loans"
              },
              {
                title: "Business Lending",
                description: "Support cash flow, enable expansion, or facilitate new ventures with solutions that fit your operations.",
                icon: Briefcase,
                href: "/services/business-lending"
              },
              {
                title: "Vehicle Finance",
                description: "Access competitive rates and maintain manageable repayment terms for your personal or business vehicle.",
                icon: Car,
                href: "/services/vehicle-finance"
              },
              {
                title: "SMSF Finance",
                description: "Examine lending possibilities and navigate specific regulations to purchase property via your SMSF.",
                icon: Landmark,
                href: "/services/smsf-loans"
              },
              {
                title: "Asset Finance",
                description: "Acquire essential equipment, tools, and machinery without depleting your business cash reserves.",
                icon: Layers,
                href: "/services/asset-finance"
              },
              {
                title: "Debt Consolidation",
                description: "Consolidate multiple personal loans and credit cards into your home loan to reduce monthly commitments.",
                icon: CreditCard,
                href: "/services/debt-consolidation"
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="gsap-service-card bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex-shrink-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-navy leading-tight">{service.title}</h3>
                </div>
                <p className="text-brand-text-muted text-sm mb-4 flex-grow leading-relaxed">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-navy transition-colors mt-auto">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
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
                <p className="text-brand-text-muted italic mb-8 flex-grow leading-relaxed font-serif text-lg">&quot;{review.text}&quot;</p>
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
                    <h4 className="font-bold text-lg text-brand-navy">0451 178 375</h4>
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
                    <option value="">I&apos;m looking to…</option>
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
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between text-left py-5 px-6 focus:outline-none group">
                  <span className="font-bold text-lg text-brand-navy pr-8">{faq.q}</span>
                  <div className="w-10 h-10 rounded-full bg-brand-warm flex items-center justify-center flex-shrink-0 text-brand-navy group-hover:text-brand-teal transition-colors">
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="px-6 pb-5 text-brand-text-muted leading-relaxed">
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
