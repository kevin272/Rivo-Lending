"use client";

import { motion } from "motion/react";
import { ArrowRight, Home, Building2, Briefcase, Landmark, RefreshCcw, TrendingUp, FileCheck, User, Stethoscope, Tractor, Car, Layers, Key, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Home Loans",
      description: "A well-structured loan can significantly impact your mortgage’s overall cost. With access to a diverse range of lenders, we will assist you in evaluating and selecting a home loan that meets your criteria.",
      icon: Home,
      href: "/services/home-loans"
    },
    {
      title: "First Home Buyers",
      description: "Selecting a home is a significant choice, and obtaining the right mortgage is equally essential. With connections to more than 50 lenders, our team can assist you in securing an excellent offer for your first residence.",
      icon: Key,
      href: "/services/first-home-buyers"
    },
    {
      title: "Refinance",
      description: "We provide clients with competitive rates and a diverse selection of market products. You might be missing out on significant savings each year by not refinancing, so reach out to us today.",
      icon: RefreshCcw,
      href: "/services/refinancing"
    },
    {
      title: "Investing",
      description: "Numerous Australians are eager to advance by investing in property. With a variety of products and lenders available, now presents a wonderful opportunity to strategically grow your investment portfolio.",
      icon: TrendingUp,
      href: "/services/investment-loans"
    },
    {
      title: "Pre Approval",
      description: "Obtaining pre-approval allows you to know your borrowing capacity before making offers. We will assist you through the steps, prepare your application, and collaborate with the lender to obtain approval.",
      icon: FileCheck,
      href: "/services/pre-approval"
    },
    {
      title: "Personal Loans",
      description: "Whether managing debt, financing a significant purchase, or handling major expenses, a personal loan can assist in spreading the cost into manageable payments with a consistent repayment plan.",
      icon: User,
      href: "/services/personal-loans"
    },
    {
      title: "Registered Nurse",
      description: "Lenders Mortgage Insurance (LMI) is a one-off premium that lenders charge borrowers who have a deposit below 20% of the property value. LMI protects the lender not you and can cost…",
      icon: Stethoscope,
      href: "/services/healthcare-professionals"
    },
    {
      title: "Commercial Loans",
      description: "Commercial financing is seldom one-size-fits-all — the ideal choice hinges on your business’s structure, cash flow, financial standing, and the particular asset being financed.",
      icon: Building2,
      href: "/services/commercial-loans"
    },
    {
      title: "Construction Loans",
      description: "The construction process involves a unique lending approach, including progress payments at various milestones. We assist in securing approvals and liaising with your lender to ensure funding aligns with your timeline.",
      icon: Tractor,
      href: "/services/construction-loans"
    },
    {
      title: "Business Lending",
      description: "Securing finance can support your cash flow management, enable business expansion, or facilitate new ventures. We evaluate your requirements and suggest solutions that fit your operational model.",
      icon: Briefcase,
      href: "/services/business-lending"
    },
    {
      title: "Vehicle Finance",
      description: "Whether acquiring a vehicle for personal use or business, securing appropriate finance enables you to access competitive rates, lower overall costs, and maintain manageable repayment terms.",
      icon: Car,
      href: "/services/vehicle-finance"
    },
    {
      title: "SMSF Finance",
      description: "Purchasing property via a self-managed super fund comes with specific regulations and a unique loan framework. We’ll examine SMSF lending possibilities and guide you through the entire process.",
      icon: Landmark,
      href: "/services/smsf-loans"
    },
    {
      title: "Asset Finance",
      description: "Acquire essential equipment without depleting cash reserves — from machinery and technology to tools and fitouts. We help select a structure that aligns with your business needs.",
      icon: Layers,
      href: "/services/asset-finance"
    }
  ];

  const documents = [
    {
      title: "Proof of Income & Employment",
      description: "Recent payslips, employment contract, or tax returns (for self-employed applicants) to verify your earning capacity."
    },
    {
      title: "Identification & Personal Details",
      description: "Valid ID (passport/driver’s license) and basic personal information required for loan assessment."
    },
    {
      title: "Credit History & Existing Liabilities",
      description: "Details of current loans, credit cards, and your credit score to assess your borrowing capacity."
    },
    {
      title: "Savings & Deposit Evidence",
      description: "Bank statements showing your savings history and ability to provide a deposit (typically 5–20%)."
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
           src="https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&w=1920" 
           alt="Rivo Lending Services" 
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
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">SERVICES</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-bold text-brand-navy mb-8 leading-[1.1]">
                 Make the loan process simple, accessible, and trustworthy.
               </h1>
               
               <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-10">
                 <p>
                   From straightforward residential home loans to complex commercial funding, we cover the full spectrum of Australian lending.
                 </p>
               </div>
            </div>
            
            {/* 3. Right Media (Empty) */}
            <div className="w-full lg:w-[30%]"></div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <div className="py-24 bg-white relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-6">Home Loan Solutions for Every Journey</h2>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              We provide extensive assistance for all your home loan and financing requirements. Regardless of your situation, our skilled team is dedicated to identifying the right options for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg group-hover:bg-brand-teal transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-text-muted mb-8 flex-grow leading-relaxed">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center text-sm font-bold text-brand-teal hover:text-brand-navy transition-colors mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT YOU NEED TO PREPARE SECTION */}
      <div className="py-24 bg-brand-soft-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <motion.p 
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-4"
              >
                Documents
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-sans text-4xl md:text-5xl text-brand-navy mb-6"
              >
                What You Need to Prepare
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-brand-text-muted text-lg mb-6 leading-relaxed"
              >
                We understand the unique challenges of buying property in Australia. From navigating loan requirements to building a strong application, we&apos;ve helped hundreds of families just like yours.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="text-brand-text-muted text-lg leading-relaxed"
              >
                Led by our Principal Mortgage Broker, Rivo Lending provides personalised, award-winning service across all of Australia — ensuring you understand the process at every stage.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-navy/90 transition-all shadow-lg hover:-translate-y-1">
                  Start Your Assessment
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Document Checklist */}
            <div className="lg:col-span-7 lg:pl-12">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100">
                <div className="space-y-8">
                  {documents.map((doc, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                        <h4 className="font-sans text-2xl md:text-3xl font-bold text-brand-navy mb-2">{doc.title}</h4>
                        <p className="text-brand-text-muted leading-relaxed text-lg">{doc.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
