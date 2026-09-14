"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, FileText, Key, ChevronRight, AlertCircle, Info, ShieldAlert } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import type { ServiceData } from "@/lib/services";

export function ServiceDetailClient({ data }: { data: ServiceData }) {
  return (
    <div className="flex flex-col font-sans overflow-x-hidden bg-white relative">
      
      {/* GLOBAL CONTINUOUS ORGANIC SIDEBAR */}
      <div className="hidden lg:block absolute left-0 top-0 w-full h-[1400px] z-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 1024" className="absolute top-0 left-[-20%] md:left-0 w-[140%] md:w-[60%] lg:w-[45%] xl:w-[38%] 2xl:w-[30%] 3xl:w-[26%] max-w-[820px] h-full opacity-95" preserveAspectRatio="none">
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
      <div className="relative h-[40vh] md:h-[50vh] 3xl:h-[55vh] w-full">
         <Image 
           src={data.image} 
           alt={data.title} 
           fill 
           className="object-cover object-top" 
           priority
           unoptimized
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* MAIN CONTENT SECTION (3-Column Layout) */}
      <section className="relative pb-12 z-20">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 relative pt-4 lg:pt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* 1. Left Spacer */}
            <div className="hidden lg:block lg:w-[28%] xl:w-[28%] 2xl:w-[25%] flex-shrink-0"></div>

            {/* 2. Middle Text Content */}
            <div className="w-full lg:w-[42%] xl:w-[42%] 2xl:w-[50%]">
               {/* Breadcrumb */}
               <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-12">
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <Link href="/services" className="hover:text-brand-navy transition-colors pointer-events-auto">SERVICES</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">{data.title.toUpperCase()}</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[56px] 2xl:text-[64px] font-bold text-brand-navy mb-8 leading-[1.1]">
                 {data.subtitle}
               </h1>
               
               <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-10 whitespace-pre-line">
                 <p>{data.description}</p>
               </div>

               <Link href="/#contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-teal text-white font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-[0_4px_14px_0_rgba(0,157,218,0.39)] hover:shadow-[0_6px_20px_rgba(0,157,218,0.23)] hover:-translate-y-0.5 pointer-events-auto relative z-30">
                 Book a consultation
               </Link>
            </div>
            
            {/* 3. Right Media (Empty) */}
            <div className="w-full lg:w-[30%]"></div>
          </div>
        </div>
      </section>

      {/* 2. PROCESS / TIMELINE */}
      {data.process && data.process.length > 0 && (
        <section className="py-16 md:py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-4">
                {data.processTitle}
              </h2>
              {data.processSubtitle && (
                <p className="text-lg text-brand-text-muted">{data.processSubtitle}</p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative"
                >
                  <div className="text-brand-teal/20 font-sans text-5xl font-bold absolute top-6 right-6 pointer-events-none">
                    {step.number}
                  </div>
                  <h3 className="font-sans text-2xl md:text-3xl text-brand-navy mb-4 pr-12">{step.title}</h3>
                  <p className="text-brand-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. CONTENT BLOCKS */}
      {data.contentBlocks && data.contentBlocks.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {data.contentBlocks.map((block, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white border-l-4 border-brand-teal pl-6 md:pl-10"
                >
                  <h3 className="font-sans text-2xl md:text-3xl text-brand-navy mb-4">{block.title}</h3>
                  {block.description && (
                    <p className="text-lg text-brand-text-muted leading-relaxed mb-6 whitespace-pre-line">
                      {block.description}
                    </p>
                  )}
                  
                  {block.listTitle && (
                    <p className="font-medium text-brand-navy mb-4">{block.listTitle}</p>
                  )}

                  {block.list && block.list.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {block.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {block.listDetailed && block.listDetailed.length > 0 && (
                    <div className="space-y-6 mt-6">
                      {block.listDetailed.map((item, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                          <h4 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h4>
                          <p className="text-brand-text-muted leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. CONSIDERATIONS / WARNINGS */}
      {data.considerations && data.considerations.length > 0 && (
        <section className="py-16 md:py-24 bg-brand-warm">
          <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-teal">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-4">
                {data.considerationsTitle || "Things to consider"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {data.considerations.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                  <div className="text-brand-teal flex-shrink-0 mt-1">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{item.title}</h4>
                    <p className="text-brand-text-muted leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CUSTOM CTA */}
      <section className="bg-brand-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center">
           <div className="w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] rounded-full border-[2px] border-white absolute"></div>
        </div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {data.cta.title}
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            {data.cta.description}
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 h-16 bg-brand-teal text-white font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-xl hover:-translate-y-1">
            {data.cta.buttonText}
          </Link>
        </div>
      </section>

      {/* 6. FAQ & CONTACT */}
      <FaqSection />
      <ContactSection />
    </div>
  );
}
