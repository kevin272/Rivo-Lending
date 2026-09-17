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
import { Toast } from "@/components/Toast";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const heroVideos = [
    "/herovideo/1.mp4",
    "/herovideo/2.mp4"
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
      setToast({ message: "Your callback request has been sent successfully.", type: "success" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "We couldn't send your request. Please try again.";
      setSubmitError(message);
      setToast({ message, type: "error" });
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

    // Removed GSAP entrance animations for SSR visibility

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



    // Removed GSAP testimonial animations for SSR visibility

  }, { scope: containerRef });


  const faqs = [
    { q: "Does it cost me anything to use Rivo?", a: "In most cases, our services come at no out-of-pocket cost to you. We are typically paid a commission by the lender once your loan settles. We are fully transparent and will disclose any commissions upfront." },
    { q: "How many lenders do you work with?", a: "We have access to a broad panel of over 30 leading Australian lenders, including the major banks and specialist lenders, ensuring we can compare a wide range of products." },
    { q: "Can you help if I’m self-employed or have a complex income?", a: "Absolutely. We know exactly which lenders have policies that are friendly to self-employed individuals and complex income structures." },
    { q: "Do you only work with people in Sydney?", a: "No, while we are born in Sydney, we serve clients Australia-wide thanks to our digital-first process." },
    { q: "What is the Best Interests Duty?", a: "The Best Interests Duty is a legal obligation for mortgage brokers to always act in your best interests when providing credit assistance. We take this seriously and ensure our recommendations are genuinely a suitable option from our approved lender panel." },
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
      {toast && <Toast {...toast} onDismiss={() => setToast(null)} />}
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
        <div className="hidden md:block absolute inset-y-0 right-0 left-0 z-0 bg-brand-navy w-full h-full">
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
        <div className="hidden md:block absolute top-0 left-0 w-full h-full z-10 overflow-hidden pointer-events-none opacity-40">
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
        <div className="w-full max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 relative z-20 h-full flex flex-col justify-center pb-8 md:pb-20">
          <div className="w-full max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="w-full text-left"
            >
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-[75px] 2xl:text-[90px] 3xl:text-[104px] text-white leading-[1.05] font-black tracking-tighter drop-shadow-md">
                Unlock your<br/>
                next move.
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="/contact" className="px-8 py-3.5 2xl:px-10 2xl:py-4 bg-brand-navy text-white text-sm 2xl:text-base font-bold rounded-full hover:bg-[#1a4470] transition-colors shadow-xl uppercase tracking-wider">
                  Free Assessment
                </Link>
                <Link href="/services" className="px-8 py-3.5 2xl:px-10 2xl:py-4 bg-transparent border-2 border-white text-white text-sm 2xl:text-base font-bold rounded-full hover:bg-white hover:text-brand-navy transition-colors shadow-xl uppercase tracking-wider">
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
          <p className="text-brand-navy font-bold text-sm md:text-base uppercase tracking-widest">Access to 30+ Leading Lenders</p>
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
      <section id="services" className="py-24 2xl:py-32 bg-white border-y border-slate-100 relative">
        <RibbonStripes position="right" />
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-16 2xl:mb-20">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs 2xl:text-sm uppercase mb-4">Our Services</p>
            <h2 className="font-sans text-3xl md:text-5xl 2xl:text-6xl text-brand-navy mb-6">Home Loan Solutions for Every Journey</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-brand-text-muted text-lg 2xl:text-xl leading-relaxed">
              We provide extensive assistance for all your financing requirements. Regardless of your situation, our skilled team is dedicated to identifying the right options for you.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
            {[
              { title: "Home Loans", description: "Find the perfect home loan with competitive rates and flexible features to suit your lifestyle.", img: "https://images.pexels.com/photos/32269918/pexels-photo-32269918.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/home-loans" },
              { title: "First Home Buyers", description: "Take your first step on the property ladder with expert guidance and tailored financing options.", img: "https://images.pexels.com/photos/8482895/pexels-photo-8482895.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/first-home-buyers" },
              { title: "Refinance", description: "Unlock better rates, lower your repayments, or access equity by refinancing your current mortgage.", img: "https://images.pexels.com/photos/29336323/pexels-photo-29336323.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/refinancing" },
              { title: "Investing", description: "Build your property portfolio with expert guidance and access to competitive Investment Loan options.", img: "https://images.pexels.com/photos/5849570/pexels-photo-5849570.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/investment-loans" },
              { title: "Pre Approval", description: "Know your borrowing capacity before making offers with our streamlined pre-approval process.", img: "https://images.pexels.com/photos/8850721/pexels-photo-8850721.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/pre-approval" },
              { title: "Personal Loans", description: "Spread the cost of major expenses into manageable payments with a consistent repayment plan.", img: "https://images.pexels.com/photos/6328899/pexels-photo-6328899.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/personal-loans" },
              { title: "Registered Nurse", description: "Access exclusive LMI waivers and professional rates specially tailored for healthcare workers.", img: "https://images.pexels.com/photos/6129691/pexels-photo-6129691.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/healthcare-professionals" },
              { title: "Commercial Loans", description: "Secure ideal commercial financing tailored to your business structure, cash flow, and financial standing.", img: "https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/commercial-loans" },
              { title: "Construction Loans", description: "Navigate funding smoothly with progress payments aligned perfectly to your building timeline.", img: "https://images.pexels.com/photos/6082416/pexels-photo-6082416.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/construction-loans" },
              { title: "Business Lending", description: "Support cash flow, enable expansion, or facilitate new ventures with solutions that fit your operations.", img: "https://images.pexels.com/photos/6949865/pexels-photo-6949865.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/business-lending" },
              { title: "Vehicle Finance", description: "Access competitive rates and maintain manageable repayment terms for your personal or business vehicle.", img: "https://images.pexels.com/photos/15549900/pexels-photo-15549900.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/vehicle-finance" },
              { title: "SMSF Finance", description: "Examine lending possibilities and navigate specific regulations to purchase property via your SMSF.", img: "https://images.pexels.com/photos/11743789/pexels-photo-11743789.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/smsf-loans" },
              { title: "Asset Finance", description: "Acquire essential equipment, tools, and machinery without depleting your business cash reserves.", img: "https://images.pexels.com/photos/39345876/pexels-photo-39345876.png?auto=compress&cs=tinysrgb&h=350", href: "/services/asset-finance" },
              { title: "Debt Consolidation", description: "Consolidate multiple personal loans and credit cards into your home loan to reduce monthly commitments.", img: "https://images.pexels.com/photos/7821726/pexels-photo-7821726.jpeg?auto=compress&cs=tinysrgb&h=350", href: "/services/debt-consolidation" }
            ].map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href} 
                className="gsap-service-card group bg-white border border-slate-200 hover:border-brand-teal hover:shadow-xl hover:-translate-y-1 flex flex-col items-start transition-all duration-300 rounded-[1.25rem] overflow-hidden"
              >
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-105" unoptimized referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow w-full">
                  <h4 className="font-sans text-xl text-slate-500 mb-3 transition-colors group-hover:text-brand-teal">{service.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-auto font-bold text-brand-navy flex items-center gap-2 text-sm transition-colors group-hover:text-brand-teal">
                    {service.title}
                  </div>
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
        <section id="why" className="py-24 2xl:py-32 bg-gradient-to-b from-brand-teal-light to-brand-teal text-white border-y border-brand-teal">
          <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
            <div className="text-center mb-16 2xl:mb-20">
            <p className="gsap-hero-el text-white/90 font-bold tracking-widest text-xs 2xl:text-sm uppercase mb-4">Our promise to you</p>
            <h2 className="font-sans text-4xl md:text-5xl 2xl:text-6xl text-white mb-6 leading-[1.15]">Smart technology, old-fashioned service</h2>
            <div className="w-16 h-1 bg-white/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl 3xl:max-w-[110rem] mx-auto">
            <div className="gsap-why-item flex flex-col items-center text-center">
              <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-brand-teal mb-6"><Clock className="w-8 h-8 2xl:w-10 2xl:h-10" /></div>
              <h4 className="font-bold text-2xl 2xl:text-3xl text-white mb-4">Hours, not days</h4>
              <p className="text-white/80 2xl:text-lg leading-relaxed">A digital-first process means less paperwork and faster approvals - so you can move quickly on the right property.</p>
            </div>
            <div className="gsap-why-item flex flex-col items-center text-center">
              <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-brand-teal mb-6"><ShieldCheck className="w-8 h-8 2xl:w-10 2xl:h-10" /></div>
              <h4 className="font-bold text-2xl 2xl:text-3xl text-white mb-4">Tailored strategy</h4>
              <p className="text-white/80 2xl:text-lg leading-relaxed">We don't just quote rates. We analyse your goals and structure a loan that genuinely fits - and grows with you.</p>
            </div>
            <div className="gsap-why-item flex flex-col items-center text-center">
              <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-brand-teal mb-6"><CheckCircle2 className="w-8 h-8 2xl:w-10 2xl:h-10" /></div>
              <h4 className="font-bold text-2xl 2xl:text-3xl text-white mb-4">Best interests, always</h4>
              <p className="text-white/80 2xl:text-lg leading-relaxed">As licensed brokers we're bound by a Best Interests Duty. Our job isn't done at settlement - free annual reviews ensure your loan remains competitive.</p>
            </div>
          </div>
        </div>
      </section>

        {/* 5. HOW IT WORKS */}
        <section id="process" className="py-24 md:py-32 2xl:py-36 bg-gradient-to-b from-brand-teal to-brand-teal-light text-white">
          <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
            <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-16 2xl:mb-20">
              <p className="gsap-hero-el text-white/90 font-bold tracking-widest text-xs 2xl:text-sm uppercase mb-4">How it works</p>
              <h2 className="font-sans text-4xl md:text-5xl 2xl:text-6xl text-white mb-6">Four simple steps to settled</h2>
              <p className="text-white/80 text-lg 2xl:text-xl">No jargon, no pressure. Just a clear path from first chat to keys in hand.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 2xl:gap-12 relative max-w-7xl 3xl:max-w-[110rem] mx-auto">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 2xl:top-14 left-[10%] right-[10%] h-0.5 bg-white/30 -z-10"></div>
              
              {[
                { step: 1, title: "Discovery", desc: "We start with you - your income, lifestyle and goals - to understand the full picture." },
                { step: 2, title: "Smart strategy", desc: "We compare policies from 30+ lenders to find a suitable option from our approved lender panel for your exact situation." },
                { step: 3, title: "The heavy lifting", desc: "We package your application for first-time approval and handle the bank negotiations." },
                { step: 4, title: "Annual health check", desc: "Every year we review your loan to make sure it's still a suitable option from our approved lender panel as life changes." }
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="gsap-step-bubble w-24 h-24 2xl:w-28 2xl:h-28 mx-auto bg-white rounded-full flex items-center justify-center text-3xl 2xl:text-4xl font-sans text-brand-teal border-4 border-brand-teal-light/50 shadow-md mb-6 z-10 relative">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-xl 2xl:text-2xl text-white mb-3">{item.title}</h4>
                  <p className="text-white/80 2xl:text-white/90 leading-relaxed text-sm 2xl:text-base px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 6. STATS STRIP */}
      <section className="bg-brand-navy py-16 2xl:py-20 text-center relative overflow-hidden">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 2xl:gap-12">
            {[
              { stat: "30+", label: "Lenders on our panel" },
              { stat: "1000s", label: "Loan products compared" },
              { stat: "100%", label: "Credit assistance guided by your best interests" },
              { stat: "$0", label: "Broker fee in most standard cases*" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="gsap-stat-num font-sans text-4xl md:text-5xl 2xl:text-6xl text-brand-teal mb-2" data-target={item.stat}>{item.stat}</span>
                <span className="text-white/80 font-bold text-sm 2xl:text-base uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. TESTIMONIALS */}
      <section className="py-24 2xl:py-32 bg-brand-soft-teal/30 relative">
        <RibbonStripes position="right" />
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="text-center mb-16 2xl:mb-20">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs 2xl:text-sm uppercase mb-4">What our clients say</p>
            <h2 className="font-sans text-4xl md:text-5xl 2xl:text-6xl text-brand-navy">Australians who bought smarter</h2>
          </div>
          <div className="gsap-testimonial-container grid md:grid-cols-3 gap-8 2xl:gap-10">
            {[
              {
                text: "Took a while to get our documents sorted, but the team at Rivo walked us through the exact requirements. We ended up with a slightly better rate than our bank offered directly.",
                name: "Michael & Elena C.", role: "First home buyers · Parramatta, NSW", initial: "M"
              },
              {
                text: "I needed to restructure two existing loans to buy an investment property. Rivo handled the discharge and setup without too much fuss. Good communication throughout.",
                name: "James R.", role: "Investor · Inner West, NSW", initial: "J"
              },
              {
                text: "Getting a loan as a contractor is always a bit tedious with the extra paperwork. Rivo helped narrow down the lenders who actually understand self-employed income, which saved a lot of back-and-forth.",
                name: "Anna T.", role: "Self-employed · Northern Beaches, NSW", initial: "A"
              }
            ].map((review, idx) => (
              <div key={idx} className="gsap-testimonial-card bg-white p-6 md:p-8 2xl:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-teal text-brand-teal" />)}
                </div>
                <p className="text-brand-text-muted italic mb-8 flex-grow leading-relaxed font-sans text-lg 2xl:text-xl">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-sans text-lg 2xl:text-xl">{review.initial}</div>
                  <div>
                    <p className="font-bold text-brand-navy 2xl:text-lg">{review.name}</p>
                    <p className="text-xs 2xl:text-sm text-brand-text-muted uppercase tracking-wider mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM */}
      <section id="contact" className="py-24 md:py-32 2xl:py-36 bg-white relative">
        <RibbonStripes position="left" />
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 2xl:gap-24 items-center">
            <div>
              <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs 2xl:text-sm uppercase mb-4">Let’s talk</p>
              <h2 className="font-sans text-4xl md:text-5xl 2xl:text-6xl text-brand-navy mb-6">Request a free call back</h2>
              <p className="text-brand-text-muted text-lg 2xl:text-xl leading-relaxed mb-10">
                Whether you’re buying your first home, refinancing or investing, send your details and we’ll call you to talk through your options — no obligation.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft-teal p-3 2xl:p-4 rounded-xl text-brand-teal"><Phone className="w-6 h-6 2xl:w-7 2xl:h-7" /></div>
                  <div>
                    <h4 className="font-bold text-lg 2xl:text-xl text-brand-navy">0451 178 375</h4>
                    <p className="text-brand-text-muted text-sm 2xl:text-base">Mon–Sat, after-hours by appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft-teal p-3 2xl:p-4 rounded-xl text-brand-teal"><Mail className="w-6 h-6 2xl:w-7 2xl:h-7" /></div>
                  <div>
                    <h4 className="font-bold text-lg 2xl:text-xl text-brand-navy">info@rivolending.com.au</h4>
                    <p className="text-brand-text-muted text-sm 2xl:text-base">We reply within one business day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft-teal p-3 2xl:p-4 rounded-xl text-brand-teal"><MapPin className="w-6 h-6 2xl:w-7 2xl:h-7" /></div>
                  <div>
                    <h4 className="font-bold text-lg 2xl:text-xl text-brand-navy">Sydney, NSW</h4>
                    <p className="text-brand-text-muted text-sm 2xl:text-base">Serving clients Australia-wide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-warm p-6 md:p-12 2xl:p-14 rounded-[2rem] border border-slate-100 shadow-lg">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input name="name" type="text" placeholder="Full name" required className="w-full px-5 py-4 rounded-xl border border-slate-300/80 shadow-xs focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition-all bg-white text-brand-navy placeholder:text-slate-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input name="phone" type="tel" placeholder="Phone" required className="w-full px-5 py-4 rounded-xl border border-slate-300/80 shadow-xs focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition-all bg-white text-brand-navy placeholder:text-slate-400" />
                  <input name="email" type="email" placeholder="Email" required className="w-full px-5 py-4 rounded-xl border border-slate-300/80 shadow-xs focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition-all bg-white text-brand-navy placeholder:text-slate-400" />
                </div>
                <div>
                  <select name="loanPurpose" className="w-full px-5 py-4 rounded-xl border border-slate-300/80 shadow-xs focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition-all bg-white text-brand-navy/80 appearance-none">
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
                  <textarea name="message" placeholder="Message (optional)" rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-300/80 shadow-xs focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition-all bg-white resize-none text-brand-navy placeholder:text-slate-400"></textarea>
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
      <section id="faq" className="py-24 2xl:py-32 bg-brand-warm border-t border-slate-200 relative overflow-hidden">
        <RibbonStripes position="right" />
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="gsap-hero-el text-brand-teal font-bold tracking-widest text-xs 2xl:text-sm uppercase mb-4">Good to know</p>
            <h2 className="font-sans text-4xl md:text-5xl 2xl:text-6xl text-brand-navy mb-4">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between text-left py-5 px-6 focus:outline-none group">
                  <span className="font-bold text-lg 2xl:text-xl text-brand-navy pr-8">{faq.q}</span>
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-brand-warm flex items-center justify-center flex-shrink-0 text-brand-navy group-hover:text-brand-teal transition-colors">
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="px-6 pb-5 text-brand-text-muted 2xl:text-lg leading-relaxed">
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
      <section className="bg-gradient-to-b from-brand-navy to-[#18181b] py-20 md:py-32 2xl:py-40 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
           <div className="w-[100vw] h-[100vw] max-w-[800px] 2xl:max-w-[1200px] max-h-[800px] 2xl:max-h-[1200px] rounded-full border-[1px] border-white absolute"></div>
           <div className="w-[150vw] h-[150vw] max-w-[1200px] 2xl:max-w-[1800px] max-h-[1200px] 2xl:max-h-[1800px] rounded-full border-[1px] border-white absolute"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 leading-[1.15]">Ready to take the first step?</h2>
          <p className="text-lg md:text-xl 2xl:text-2xl text-white/90 mb-10 max-w-2xl 2xl:max-w-3xl mx-auto">
            Book a free, no-obligation assessment and we’ll show you what’s possible — and how much you could save.
          </p>
          <Link href="#contact" className="gsap-hero-el inline-flex items-center justify-center h-14 md:h-16 2xl:h-18 px-10 md:px-12 2xl:px-14 bg-white text-brand-navy text-lg 2xl:text-xl font-bold rounded-full hover:bg-brand-teal hover:text-white transition-all shadow-xl hover:-translate-y-1">
            Book a Free Assessment
          </Link>
        </div>
      </section>

    </div>
  );
}






