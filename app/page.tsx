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
import { useState, useEffect, useRef, type FormEvent } from "react";
import { ArrowRight, Home, RefreshCcw, TrendingUp, Tractor, Landmark, CreditCard, Stethoscope, ChevronRight, CheckCircle2, FileText, Handshake, HeartHandshake, PhoneCall, Star, Plus, Minus, Users, Key, FileCheck, User, Building2, Briefcase, Car, Layers, Clock, ShieldCheck, MapPin, Phone, Mail, HeartPulse } from "lucide-react";
import { RibbonStripes } from "@/components/RibbonStripes";
import { submitWeb3Form } from "@/lib/web3forms";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const heroVideos = [
    "/herovideo/1.mp4",
    "/herovideo/2.mp4",
    "/herovideo/3.mp4"
  ];

  const handleVideoEnded = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % heroVideos.length);
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    setIsSubmitting(true);
    setIsSuccess(false);
    setSubmitError(null);

    try {
      await submitWeb3Form(fields, "New callback request from Rivo Lending");
      form.reset();
      setIsSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We couldn't send your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section id="top" className="relative h-[450px] md:h-[calc(100vh-7rem)] mt-[124px] md:mt-28 min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden bg-brand-teal">
        
        {/* Mobile Background Image (Team) */}
        <div className="md:hidden absolute inset-0 z-0 bg-brand-navy">
          <Image 
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Modern Luxury Home" 
            fill 
            className="object-cover object-center" 
            priority 
            unoptimized 
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>

        {/* Desktop Background Video */}
        <div className="hidden md:block absolute inset-y-0 right-0 left-0 z-0 bg-brand-navy">
          <video
            key={heroVideos[currentVideoIdx]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="absolute inset-0 w-full h-full object-cover object-center"
            poster="https://images.pexels.com/photos/37079556/pexels-photo-37079556.jpeg?auto=compress&cs=tinysrgb&w=2000"
          >
            <source src={heroVideos[currentVideoIdx]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[#103050]/60 mix-blend-multiply z-10"></div>
        </div>
        
        {/* Organic Wave Overlay */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full z-10 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 1024" className="absolute top-0 left-[-20%] md:left-0 w-[140%] md:w-full h-full" preserveAspectRatio="none">
            <path 
              d="M0,0 L800,0 C650,300 900,700 450,1024 L0,1024 Z" 
              fill="url(#wave-gradient)" 
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-brand-teal)" />
                <stop offset="100%" stopColor="var(--color-brand-teal-light)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col justify-center pb-8 md:pb-20">
          <div className="w-full max-w-3xl">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="w-full text-left"
            >
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-[75px] text-white leading-[1.05] font-black tracking-tighter drop-shadow-md">
                Unlock your<br/>
                next move.
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="/contact" className="px-8 py-3.5 bg-brand-navy text-white text-sm font-bold rounded-full hover:bg-[#1a4470] transition-colors shadow-xl uppercase tracking-wider">
                  Free Assessment
                </Link>
                <Link href="/services" className="px-8 py-3.5 bg-transparent border-2 border-white text-white text-sm font-bold rounded-full hover:bg-white hover:text-brand-navy transition-colors shadow-xl uppercase tracking-wider">
                  Our Services
                </Link>
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
      <section id="services" className="py-24 bg-white border-y border-slate-100 relative">
        <RibbonStripes position="right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Our Services</p>
            <h2 className="font-sans text-3xl md:text-5xl text-brand-navy mb-6">Home Loan Solutions for Every Journey</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              We provide extensive assistance for all your financing requirements. Regardless of your situation, our skilled team is dedicated to identifying the right options for you.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Home Loans", description: "", icon: Home, href: "/services/home-loans" },
              { title: "First Home Buyers", description: "", icon: Key, href: "/services/first-home-buyers" },
              { title: "Refinance", description: "", icon: RefreshCcw, href: "/services/refinancing" },
              { title: "Investing", description: "", icon: TrendingUp, href: "/services/investment-loans" },
              { title: "Pre Approval", description: "Know your borrowing capacity before making offers with our streamlined pre-approval process.", icon: FileCheck, href: "/services/pre-approval" },
              { title: "Personal Loans", description: "Spread the cost of major expenses into manageable payments with a consistent repayment plan.", icon: User, href: "/services/personal-loans" },
              { title: "Registered Nurse", description: "Access exclusive LMI waivers and professional rates specially tailored for healthcare workers.", icon: Stethoscope, href: "/services/healthcare-professionals" },
              { title: "Commercial Loans", description: "Secure ideal commercial financing tailored to your business structure, cash flow, and financial standing.", icon: Building2, href: "/services/commercial-loans" },
              { title: "Construction Loans", description: "Navigate funding smoothly with progress payments aligned perfectly to your building timeline.", icon: Tractor, href: "/services/construction-loans" },
              { title: "Business Lending", description: "Support cash flow, enable expansion, or facilitate new ventures with solutions that fit your operations.", icon: Briefcase, href: "/services/business-lending" },
              { title: "Vehicle Finance", description: "Access competitive rates and maintain manageable repayment terms for your personal or business vehicle.", icon: Car, href: "/services/vehicle-finance" },
              { title: "SMSF Finance", description: "Examine lending possibilities and navigate specific regulations to purchase property via your SMSF.", icon: Landmark, href: "/services/smsf-loans" },
              { title: "Asset Finance", description: "Acquire essential equipment, tools, and machinery without depleting your business cash reserves.", icon: Layers, href: "/services/asset-finance" },
              { title: "Debt Consolidation", description: "Consolidate multiple personal loans and credit cards into your home loan to reduce monthly commitments.", icon: CreditCard, href: "/services/debt-consolidation" }
            ].map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href} 
                className="gsap-service-card group bg-white border border-slate-200 hover:border-brand-teal hover:shadow-lg p-8 flex flex-col items-start transition-all duration-300 rounded-xl"
              >
                <div className="w-12 h-12 bg-brand-warm group-hover:bg-brand-teal flex items-center justify-center rounded-full mb-6 transition-colors">
                  <service.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-sans font-bold text-xl text-brand-navy mb-3 transition-colors">{service.title}</h4>
                {service.description && (
                  <p className="text-brand-text-muted leading-relaxed transition-colors text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                )}
                <div className="mt-auto font-bold text-brand-teal group-hover:text-brand-navy transition-colors flex items-center gap-2 text-sm">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. COMBINED RIBBON WRAPPER */}
      <div className="relative overflow-hidden">
        <RibbonStripes position="left" />

        {/* 4. WHY RIVO */}
        <section id="why" className="py-24 bg-gradient-to-b from-brand-teal-light to-brand-teal text-white border-y border-brand-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
            <p className="gsap-hero-el text-white/90 font-bold tracking-widest text-xs uppercase mb-4">Our promise to you</p>
            <h2 className="font-sans text-4xl md:text-5xl text-white mb-6 leading-[1.15]">Smart technology, old-fashioned service</h2>
            <div className="w-16 h-1 bg-white/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="gsap-why-item flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-brand-teal mb-6"><Clock className="w-8 h-8" /></div>
              <h4 className="font-bold text-2xl text-white mb-4">Hours, not days</h4>
              <p className="text-white/80 leading-relaxed">A digital-first process means less paperwork and faster approvals - so you can move quickly on the right property.</p>
            </div>
            <div className="gsap-why-item flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-brand-teal mb-6"><ShieldCheck className="w-8 h-8" /></div>
              <h4 className="font-bold text-2xl text-white mb-4">Tailored strategy</h4>
              <p className="text-white/80 leading-relaxed">We don't just quote rates. We analyse your goals and structure a loan that genuinely fits - and grows with you.</p>
            </div>
            <div className="gsap-why-item flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-brand-teal mb-6"><CheckCircle2 className="w-8 h-8" /></div>
              <h4 className="font-bold text-2xl text-white mb-4">Best interests, always</h4>
              <p className="text-white/80 leading-relaxed">As licensed brokers we're bound by a Best Interests Duty. Our job isn't done at settlement - free annual reviews keep you on the sharpest deal.</p>
            </div>
          </div>
        </div>
      </section>

        {/* 5. HOW IT WORKS */}
        <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-brand-teal to-brand-teal-light text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="gsap-hero-el text-white/90 font-bold tracking-widest text-xs uppercase mb-4">How it works</p>
              <h2 className="font-sans text-4xl md:text-5xl text-white mb-6">Four simple steps to settled</h2>
              <p className="text-white/80 text-lg">No jargon, no pressure. Just a clear path from first chat to keys in hand.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/30 -z-10"></div>
              
              {[
                { step: 1, title: "Discovery", desc: "We start with you - your income, lifestyle and goals - to understand the full picture." },
                { step: 2, title: "Smart strategy", desc: "We compare policies from 30+ lenders to find the one that fits your exact situation." },
                { step: 3, title: "The heavy lifting", desc: "We package your application for first-time approval and handle the bank negotiations." },
                { step: 4, title: "Annual health check", desc: "Every year we review your loan to make sure it's still the best fit as life changes." }
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="gsap-step-bubble w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-3xl font-sans text-brand-teal border-4 border-brand-teal-light/50 shadow-md mb-6 z-10 relative">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-xl text-white mb-3">{item.title}</h4>
                  <p className="text-white/80 leading-relaxed text-sm px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 6. STATS STRIP */}
      <section className="bg-brand-navy py-16 text-center relative overflow-hidden">
        <RibbonStripes position="left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "30+", label: "Lenders on our panel" },
              { stat: "1000s", label: "Loan products compared" },
              { stat: "100%", label: "Independent advice" },
              { stat: "$0", label: "Cost to you*" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="gsap-stat-num font-sans text-4xl md:text-5xl text-brand-teal mb-2" data-target={item.stat}>{item.stat}</span>
                <span className="text-white/80 font-bold text-sm uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-brand-soft-teal/30 relative">
        <RibbonStripes position="right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">What our clients say</p>
            <h2 className="font-sans text-4xl md:text-5xl text-brand-navy">Australians who bought smarter</h2>
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
                <p className="text-brand-text-muted italic mb-8 flex-grow leading-relaxed font-sans text-lg">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-sans text-lg">{review.initial}</div>
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
      <section id="contact" className="py-24 md:py-32 bg-white relative">
        <RibbonStripes position="left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Let’s talk</p>
              <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-6">Request a free call back</h2>
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
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input name="name" type="text" placeholder="Full name" required className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input name="phone" type="tel" placeholder="Phone" required className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white" />
                  <input name="email" type="email" placeholder="Email" required className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white" />
                </div>
                <div>
                  <select name="loanPurpose" className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white text-brand-navy/70 appearance-none">
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
                  <textarea name="message" placeholder="Message (optional)" rows={4} className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-teal bg-white resize-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-teal transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Request a Call Back"} {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                </button>
                {isSuccess && <p className="text-sm text-teal-700 text-center">Thanks, your request has been sent. We&apos;ll be in touch shortly.</p>}
                {submitError && <p className="text-sm text-red-600 text-center">{submitError}</p>}
                <p className="text-xs text-brand-text-muted text-center mt-4">By submitting you agree to be contacted about your enquiry. We never sell your data.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQS */}
      <section id="faq" className="py-24 bg-brand-warm border-t border-slate-200 relative overflow-hidden">
        <RibbonStripes position="right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Good to know</p>
            <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-4">Frequently asked questions</h2>
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
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.15]">Ready to take the first step?</h2>
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






