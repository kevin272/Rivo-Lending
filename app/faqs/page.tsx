"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, ArrowRight, Search, PhoneCall } from "lucide-react";

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = ["All", "General", "Process & Timelines", "First Home Buyers", "Refinancing", "Self-Employed"];

  const allFaqs = [
    { cat: "General", q: "Does it cost me anything to use Rivo?", a: "In most cases, our services come at no out-of-pocket cost to you. We are typically paid a commission by the lender once your loan settles. We are fully transparent and will disclose any commissions upfront." },
    { cat: "General", q: "How many lenders do you work with?", a: "We have access to a broad panel of over 30 leading Australian lenders, including the major banks and specialist lenders, ensuring we can compare a wide range of products." },
    { cat: "General", q: "What is the Best Interests Duty?", a: "The Best Interests Duty is a legal obligation for mortgage brokers to always act in your best interests when providing credit assistance. We take this seriously and ensure our recommendations are genuinely the best fit for you, unlike a bank which only sells its own products." },
    
    { cat: "Process & Timelines", q: "How long does the loan approval process take?", a: "The timeframe can vary depending on the lender and the complexity of your situation. However, with our streamlined digital process, we often secure pre-approvals within 48 to 72 hours of submitting a complete application." },
    { cat: "Process & Timelines", q: "Will multiple loan inquiries affect my credit score?", a: "We perform a soft check to understand your position, which does not impact your credit score. We only proceed with a formal application (which does leave an inquiry on your credit file) once we are highly confident of approval and you have given us the green light." },
    { cat: "Process & Timelines", q: "When should I engage a broker?", a: "As early as possible! Even if you are 6-12 months away from buying, a quick chat can help you set realistic savings goals and ensure your financial profile is looking its best before you apply." },
    
    { cat: "First Home Buyers", q: "What government grants am I eligible for?", a: "Eligibility varies by state and your specific circumstances. We stay up to date on all state and federal incentives (like the First Home Owner Grant, stamp duty exemptions, and the First Home Guarantee scheme) and will handle the application for you." },
    { cat: "First Home Buyers", q: "How much deposit do I actually need?", a: "While a 20% deposit is ideal to avoid Lenders Mortgage Insurance (LMI), there are schemes that allow you to buy with as little as a 5% deposit. We can also explore guarantor loans which can sometimes require no deposit at all." },
    
    { cat: "Refinancing", q: "Is it worth refinancing if rates have only dropped slightly?", a: "Often, yes. Even a 0.5% reduction on a $600k mortgage can save you thousands of dollars a year. We'll run a cost-benefit analysis for you to ensure that the savings outweigh any break costs or exit fees." },
    { cat: "Refinancing", q: "Can I consolidate my other debts when I refinance?", a: "Yes. Many clients choose to roll their personal loans or credit card debt into their mortgage. Because home loan rates are typically much lower than personal loan rates, this can significantly reduce your overall monthly repayments." },

    { cat: "Self-Employed", q: "Can you help if I’m self-employed or have a complex income?", a: "Absolutely. We know exactly which lenders have policies that are friendly to self-employed individuals, including those who only have one year of financials or require alt-doc solutions." },
    { cat: "Self-Employed", q: "Do I need 2 years of tax returns?", a: "Not always. While many major banks prefer 2 years of financials, we work with several lenders who can assess your income based on just your most recent year's tax return, or even through alternative documentation like BAS statements or an accountant's letter." },
  ];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.cat === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
           src="https://images.pexels.com/photos/7876501/pexels-photo-7876501.jpeg?auto=compress&cs=tinysrgb&w=1920" 
           alt="FAQ Team" 
           fill 
           className="object-cover object-top" 
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
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">FAQS</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-bold text-brand-navy mb-8 leading-[1.1]">
                 Got questions?<br />We have answers.
               </h1>
               
               <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-10">
                 <p>
                   Browse our most frequently asked questions to learn more about the mortgage process, our services, and how we can help you achieve your property goals.
                 </p>
               </div>
               
               <div className="max-w-xl">
                 <div className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/40 w-5 h-5 pointer-events-none" />
                   <input 
                     type="text" 
                     placeholder="Search for a question..." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-slate-50 text-brand-navy pl-12 pr-4 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all shadow-sm pointer-events-auto"
                   />
                 </div>
               </div>
            </div>
            
            {/* 3. Right Media (Empty) */}
            <div className="w-full lg:w-[30%]"></div>
          </div>
        </div>
      </section>

      <div className="py-12 bg-slate-50 border-t border-slate-100 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenFaq(null); }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-brand-navy text-white shadow-md' : 'bg-slate-100 text-brand-text-muted hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4 min-h-[400px]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between text-left py-5 px-6 md:py-6 md:px-8 focus:outline-none group">
                    <span className="font-bold text-lg md:text-xl text-brand-navy pr-8">{faq.q}</span>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? 'bg-brand-teal text-white' : 'bg-brand-warm text-brand-navy group-hover:bg-brand-soft-teal group-hover:text-brand-teal'}`}>
                      {openFaq === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }} 
                        className="px-6 pb-5 md:px-8 md:pb-6 text-brand-text-muted leading-relaxed text-lg"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 text-brand-text-muted">
                <Search className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                <p className="text-xl font-serif text-brand-navy mb-2">No questions found</p>
                <p>We couldn't find any FAQs matching "{searchQuery}".</p>
                <button onClick={() => setSearchQuery("")} className="mt-4 text-brand-teal font-bold hover:underline">Clear search</button>
              </div>
            )}
          </div>

          <div className="mt-20 text-center bg-brand-warm p-10 md:p-16 rounded-[2rem] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><PhoneCall className="w-48 h-48" /></div>
            <div className="relative z-10">
              <h3 className="font-serif text-4xl md:text-5xl text-brand-navy mb-4">Still have questions?</h3>
              <p className="text-brand-text-muted mb-10 max-w-xl mx-auto text-lg">
                Every situation is unique. If you couldn't find the exact answer you were looking for, our brokers are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-teal transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                  Contact our team <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="tel:0451178375" className="inline-flex items-center justify-center px-8 h-14 bg-white text-brand-navy font-bold rounded-full hover:bg-slate-50 transition-all border border-slate-200 w-full sm:w-auto">
                  Call 0451 178 375
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

