"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, Search, CreditCard, Home, ShieldCheck } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Fact Find",
      icon: Search,
      desc: "We start by understanding your current situation, lifestyle, and goals. We'll look at your income, expenses, and what you're hoping to achieve.",
      details: [
        "Initial 15-minute introductory call",
        "Deep dive into your financial position",
        "Clarifying your short and long-term property goals"
      ]
    },
    {
      num: "02",
      title: "Strategy & Comparison",
      icon: FileText,
      desc: "We take your data and run it across our panel of 30+ lenders. We don't just look for the lowest rate; we look for the policy that fits you best.",
      details: [
        "Borrowing power calculations across multiple lenders",
        "Structuring advice (e.g. offset accounts, fixed vs variable)",
        "Presentation of your top 3 loan options"
      ]
    },
    {
      num: "03",
      title: "Application & Approval",
      icon: CreditCard,
      desc: "Once you select a loan, we handle the heavy lifting. We package your application to ensure it's approved the first time.",
      details: [
        "We collect and verify all required documents",
        "Submission to the lender's credit team",
        "Handling all bank queries so you don't have to"
      ]
    },
    {
      num: "04",
      title: "Settlement",
      icon: Home,
      desc: "The big day. We coordinate with the lender, your solicitor/conveyancer, and the real estate agent to ensure funds are transferred smoothly.",
      details: [
        "Final checks of loan documents",
        "Liaising with your legal team",
        "Confirmation when the keys are yours"
      ]
    },
    {
      num: "05",
      title: "Post-Settlement & Reviews",
      icon: ShieldCheck,
      desc: "Our job isn't done when you move in. We proactively monitor your loan to ensure you're always on a competitive rate.",
      details: [
        "Annual rate reviews against the market",
        "Renegotiating with your lender on your behalf",
        "Assistance with accessing equity for future plans"
      ]
    }
  ];


  return (
    <div className="bg-white min-h-screen overflow-x-hidden relative">
      
      {/* GLOBAL CONTINUOUS ORGANIC SIDEBAR */}
      <div className="hidden lg:block absolute left-0 top-0 w-full h-[1400px] z-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 1024" className="absolute top-0 left-[-20%] md:left-0 w-[140%] md:w-[60%] h-full opacity-95" preserveAspectRatio="none">
          <path d="M0,0 L800,0 C600,300 900,700 0,950 Z" fill="url(#sidebar-gradient)" />
          <defs>
            <linearGradient id="sidebar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-brand-teal)" />
              <stop offset="100%" stopColor="var(--color-brand-teal-light)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
         <Image 
           src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920" 
           alt="Team working" 
           fill 
           className="object-cover object-center" 
           priority
         />
         <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* MAIN CONTENT SECTION (3-Column Layout) */}
      <section className="relative pb-12 z-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative pt-4 lg:pt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* 1. Left Spacer */}
            <div className="hidden lg:block lg:w-[28%] xl:w-[28%] flex-shrink-0"></div>

            {/* 2. Middle Text Content */}
            <div className="w-full lg:w-[42%] xl:w-[42%]">
               {/* Breadcrumb */}
               <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-12">
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">HOW IT WORKS</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-bold text-brand-navy mb-8 leading-[1.1]">
                 A clear path to property, minus the stress.
               </h1>
               
               <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-12">
                 <p>
                   We handle the paperwork, the bank negotiations, and the endless follow-ups. Here is exactly what happens when you work with us.
                 </p>
               </div>
            </div>
            
            {/* 3. Right Media (Empty for now) */}
            <div className="w-full lg:w-[30%]"></div>
          </div>
        </div>
      </section>

      {/* DETAILED TIMELINE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                key={idx} 
                className="relative flex flex-col md:flex-row gap-8 md:gap-12 group"
              >
                {/* Connecting Line (Desktop) */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-[3.5rem] top-24 bottom-[-4rem] w-0.5 bg-slate-100 group-hover:bg-brand-teal/30 transition-colors z-0"></div>
                )}
                
                <div className="flex-shrink-0 z-10 flex items-center md:items-start gap-6 md:gap-0">
                  <div className="w-16 h-16 md:w-28 md:h-28 bg-brand-warm rounded-2xl md:rounded-[2rem] flex items-center justify-center border-2 border-slate-100 group-hover:border-brand-teal group-hover:bg-brand-soft-teal transition-all duration-300 shadow-sm">
                     <step.icon className="w-8 h-8 md:w-12 md:h-12 text-brand-teal" />
                  </div>
                  <div className="md:hidden text-4xl font-sans text-slate-200 font-bold">{step.num}</div>
                </div>
                
                <div className="pt-2 md:pt-4 flex-grow">
                  <div className="flex items-end gap-4 mb-4">
                    <h3 className="font-sans text-2xl md:text-3xl text-brand-navy">{step.title}</h3>
                    <span className="hidden md:block text-5xl font-sans text-slate-100 font-bold leading-none -mb-1">{step.num}</span>
                  </div>
                  <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <ul className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span className="text-brand-navy font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY USE A BROKER */}
      <section className="py-24 bg-brand-warm border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">The Rivo Advantage</p>
            <h3 className="font-sans text-4xl md:text-5xl text-brand-navy mb-6">Why use a broker instead of going to a bank?</h3>
            <div className="space-y-8 mt-6">
              <div>
                <h4 className="font-bold text-xl text-brand-navy mb-2">Choice & Competition</h4>
                <p className="text-brand-text-muted leading-relaxed">A bank can only offer you their own products. We compare thousands of products across 30+ lenders to force them to compete for your business.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-brand-navy mb-2">Protecting Your Credit Score</h4>
                <p className="text-brand-text-muted leading-relaxed">Applying directly to multiple banks leaves marks on your credit file. We run the numbers behind the scenes and only apply when we are confident of approval.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-brand-navy mb-2">Expert Structuring</h4>
                <p className="text-brand-text-muted leading-relaxed">It's not just about the rate. We advise on offset accounts, redraw facilities, and split loans to help you pay less interest and maximize tax benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-6">Ready to get started?</h2>
            <p className="text-brand-text-muted text-lg mb-10">Book a free 15-minute discovery call and we'll let you know exactly where you stand.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 h-16 bg-brand-teal text-white text-lg font-bold rounded-full hover:bg-brand-navy transition-colors shadow-lg hover:-translate-y-1">
              Book a Free Call <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
         </div>
      </section>

    </div>
  );
}
