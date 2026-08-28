"use client";

import { use } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Home, Key, FileText, ChevronRight } from "lucide-react";

type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
};

const servicesData: Record<string, ServiceData> = {
  "first-home-buyers": {
    title: "First Home Buyers",
    subtitle: "The simple path to your new front door.",
    description: "Buying a home should be an exciting milestone, not a stressful administrative hurdle. We stay up to date on all state and federal incentives, handle the paperwork, and structure a loan that fits your life.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600",
    benefits: [
      "First Home Owner Grant (FHOG) eligibility",
      "Stamp Duty exemptions and concessions",
      "First Home Guarantee (deposit as low as 5%)",
      "Guarantor loan structuring"
    ]
  },
  "refinancing": {
    title: "Refinancing",
    subtitle: "Pay less, save more. Keep your bank honest.",
    description: "The loyalty tax is real. If you haven't reviewed your mortgage in the last 2 years, you're likely paying too much. We review your current loan and hunt down a sharper rate to lower your repayments.",
    image: "https://images.unsplash.com/photo-1579621970588-a3f5ce599fac?auto=format&fit=crop&q=80&w=1600",
    benefits: [
      "Lower your monthly repayments",
      "Access equity for renovations or investments",
      "Consolidate other high-interest debts",
      "Switch between variable and fixed rates"
    ]
  },
  "investment-loans": {
    title: "Investment Lending",
    subtitle: "Build your portfolio with the right structure.",
    description: "Whether it's your first investment or your fifth, having the right loan structure is critical for maximizing returns and minimizing tax. We help you leverage your equity smartly and sustainably.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    benefits: [
      "Interest-only and Principal & Interest strategies",
      "Equity release from your existing home",
      "Tax-smart loan structuring (consulting with your accountant)",
      "Access to specialist investor rates and policies"
    ]
  },
  "self-employed": {
    title: "Self-Employed Loans",
    subtitle: "Non-standard income? We know the lenders who say yes.",
    description: "Running your own business is hard enough without banks making it harder to get a loan. We understand self-employed financials and know exactly which lenders have policies that work for you.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
    benefits: [
      "Alt-doc and low-doc loan options",
      "Using 1 year of financials instead of 2",
      "Add-backs for depreciation and one-off expenses",
      "Commercial and residential structures"
    ]
  },
  "owner-occupier": {
    title: "Owner-Occupier Loans",
    subtitle: "Upgrading, building, or bridging your next move.",
    description: "Life changes, and your home needs to change with it. Whether you are upgrading to a larger family home, downsizing, or building from scratch, we structure a loan that flexes as your life changes.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
    benefits: [
      "Bridging finance for buying before selling",
      "Construction loans with progressive drawdowns",
      "Favorable rates for low-risk owner-occupiers",
      "Offset accounts and redraw facilities"
    ]
  },
  "debt-consolidation": {
    title: "Debt Consolidation",
    subtitle: "One loan, less stress. Simplify your finances.",
    description: "Juggling multiple personal loans, car loans, and credit cards is overwhelming and expensive. We help you roll multiple debts into your home loan to simplify payments and significantly reduce your interest rate.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1600",
    benefits: [
      "Dramatically lower your overall interest rate",
      "One simple, predictable monthly repayment",
      "Improve your cash flow instantly",
      "Clear a path to become debt-free sooner"
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col font-sans overflow-x-hidden bg-white">
      
      {/* =========================================
          1. HERO 
          ========================================= */}
      <section className="pt-28 md:pt-48 pb-16 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-6"
            >
              {data.title}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-[72px] font-normal text-brand-navy leading-[1.1] mb-8"
            >
              {data.subtitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-text-muted mb-12 leading-relaxed font-medium max-w-lg"
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-teal text-white font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-[0_4px_14px_0_rgba(8,178,176,0.39)] hover:shadow-[0_6px_20px_rgba(8,178,176,0.23)] hover:-translate-y-0.5">
                Book a consultation
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative h-[350px] md:h-[700px] w-full">
            {/* Background Shape */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-10 top-10 w-[85%] h-[85%] bg-brand-soft-teal rounded-[3rem] -z-10"
            />

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute right-0 bottom-0 w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority
                unoptimized
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. BENEFITS / HOW WE HELP
          ========================================= */}
      <section className="py-16 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">How We Help</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-8 leading-[1.15]">
                Expert guidance tailored to you.
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-brand-text-muted leading-relaxed">
                  Every borrower is different. We take the time to understand your unique circumstances so we can secure the absolute best outcome for your situation.
                </p>
                <ul className="space-y-4 pt-4">
                  {data.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-soft-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-teal" />
                      </div>
                      <span className="text-brand-navy font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 relative">
               {/* Process snippet */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 relative z-10"
                >
                  <div className="w-12 h-12 bg-brand-soft-teal rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-navy mb-3">1. Discovery & Strategy</h3>
                  <p className="text-brand-text-muted leading-relaxed">
                    We start with you — your income, lifestyle and goals — to understand the full picture and estimate your options.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 relative z-10 md:ml-12"
                >
                  <div className="w-12 h-12 bg-brand-soft-teal rounded-full flex items-center justify-center mb-6">
                    <Key className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-navy mb-3">2. Execution</h3>
                  <p className="text-brand-text-muted leading-relaxed">
                    We package your application perfectly, handle the heavy lifting with the bank, and guide you through to settlement.
                  </p>
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. FINAL CTA
          ========================================= */}
      <section className="bg-brand-navy py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
           <div className="w-[800px] h-[800px] rounded-full border-[1px] border-white absolute -translate-y-[20%] scale-150"></div>
           <div className="w-[1200px] h-[1200px] rounded-full border-[1px] border-white absolute -translate-y-[20%] scale-150"></div>
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <p className="font-bold tracking-widest text-xs uppercase mb-6 text-brand-teal">Get Started</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] mb-8 leading-[1.15]">
            Ready to find out exactly what you can afford?
          </h2>
          
          <Link href="/#contact" className="inline-flex items-center justify-center h-14 md:h-16 px-10 md:px-12 bg-white text-brand-navy text-base md:text-lg font-bold rounded-full hover:bg-brand-teal hover:text-white transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:-translate-y-1">
            Request a Call Back
          </Link>
          
          <p className="mt-12 text-white/60 font-medium">Prefer to talk? <br/><span className="text-xl md:text-2xl font-serif text-white mt-2 block">0400 000 000</span></p>
        </div>
      </section>

    </div>
  );
}
