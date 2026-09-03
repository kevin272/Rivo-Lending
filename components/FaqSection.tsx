"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Does it cost me anything to use Rivo?", a: "In most cases, our services come at no out-of-pocket cost to you. We are typically paid a commission by the lender once your loan settles. We are fully transparent and will disclose any commissions upfront." },
    { q: "How many lenders do you work with?", a: "We have access to a broad panel of over 30 leading Australian lenders, including the major banks and specialist lenders, ensuring we can compare a wide range of products." },
    { q: "How long does the loan approval process take?", a: "The timeframe can vary depending on the lender and the complexity of your situation. However, with our streamlined digital process, we often secure pre-approvals within 48 to 72 hours of submitting a complete application." },
    { q: "Will multiple loan inquiries affect my credit score?", a: "We perform a soft check to understand your position, which does not impact your credit score. We only proceed with a formal application once we are highly confident of approval and you have given us the green light." },
    { q: "Can you help if I’m self-employed or have a complex income?", a: "Absolutely. We know exactly which lenders have policies that are friendly to self-employed individuals, including those who only have one year of financials or require alt-doc solutions." },
  ];

  return (
    <section className="py-24 bg-brand-warm border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Got Questions?</p>
          <h2 className="font-sans text-3xl md:text-4xl text-brand-navy">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
