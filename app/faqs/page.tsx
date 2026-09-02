"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
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
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-navy py-20 text-center text-white pt-32 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[150%] bg-white/5 skew-x-12"></div>

        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-2xl mx-auto px-4 mb-10"
          >
            Everything you need to know about our services, the lending process, and how we can help you achieve your property goals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto px-4"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/40 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for a question..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-brand-navy border-none focus:ring-4 focus:ring-brand-teal/50 shadow-lg outline-none font-medium"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
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
      </section>
    </div>
  );
}
