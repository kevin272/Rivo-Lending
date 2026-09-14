"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Shield, Target, Award, ArrowRight, HeartHandshake } from "lucide-react";
import FaqSection from "@/components/FaqSection";

export default function AboutPage() {
  const values = [
    { title: "Transparency First", desc: "We believe in clear, honest advice. No hidden fees, no confusing bank jargon. We explain the 'why' behind every recommendation.", icon: Shield },
    { title: "Client Obsessed", desc: "Your goals are our goals. We work relentlessly to ensure your loan structure actually serves your long-term wealth creation.", icon: HeartHandshake },
    { title: "Expertise & Precision", desc: "With decades of combined experience, we know lender policies inside out, turning complex situations into clear approvals.", icon: Target },
    { title: "Lifelong Partnership", desc: "Our job doesn't end at settlement. We conduct free annual reviews to ensure you never pay the loyalty tax to any bank.", icon: Users },
  ];

  const team = [
    { name: "Michael Chen", role: "Principal Broker", image: "https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Sarah Jenkins", role: "Senior Finance Strategist", image: "https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "David O'Connor", role: "Client Success Manager", image: "https://images.pexels.com/photos/8730057/pexels-photo-8730057.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden relative">
      
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
           src="https://images.pexels.com/photos/8730057/pexels-photo-8730057.jpeg?auto=compress&cs=tinysrgb&w=1920" 
           alt="Rivo Lending Team" 
           fill 
           className="object-cover object-top" 
           priority
         />
         <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* MAIN CONTENT SECTION (3-Column Layout) */}
      <section className="relative pb-24 z-20">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 relative pt-4 lg:pt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* 1. Left Spacer */}
            <div className="hidden lg:block lg:w-[28%] xl:w-[28%] 2xl:w-[25%] flex-shrink-0"></div>

            {/* 2. Middle Text Content */}
            <div className="w-full lg:w-[42%] xl:w-[42%] 2xl:w-[50%]">
               {/* Breadcrumb */}
               <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-12">
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">ABOUT US</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-bold text-brand-navy mb-8 leading-[1.1]">
                 About Us
               </h1>
               
               <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-12">
                 <p>
                   Rivo Lending was established to ensure everyday Australians don't get overwhelmed by the mortgage process, and never settle for mediocre rates offered by their childhood bank.
                 </p>
                 <p>
                   Whether you need advice relating to a relatively minor loan structure, or assistance with the formal application of a complex investment portfolio, you can draw on the knowledge and experience of our expert brokers.
                 </p>
               </div>

               <h2 className="font-sans text-2xl font-bold text-[#4673A6] mb-4">Our Approach</h2>
               <div className="space-y-6 text-slate-600 text-sm leading-relaxed mb-10">
                 <p>
                   At Rivo Lending, we work closely with all stakeholders to achieve the best possible outcomes with timely and definitive solutions to your financial challenges. From large-scale commercial loans to boutique first home buyer solutions, our expert team has the knowledge, skills, and experience required to make a difference.
                 </p>
               </div>
               
               <h2 className="font-sans text-2xl font-bold text-[#4673A6] mb-4">Our Expertise</h2>
               <div className="space-y-6 text-slate-600 text-sm leading-relaxed mb-10">
                 <p>
                   Over the years, our team has helped many individuals, families, small-medium sized enterprises, and large corporations secure the funding they need.
                 </p>
                 <p>
                   We have successfully managed high-profile lending scenarios across multiple states, as well as numerous partnerships and private companies. In each case, our success can be attributed directly to our professional expertise, superior market capabilities, and our dedication to achieving the best possible outcome for the client.
                 </p>
               </div>
            </div>

            {/* 3. Right Media Content */}
            <div className="w-full lg:w-[30%] lg:pt-[120px]">
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[16/10] group cursor-pointer border-4 border-white">
                <Image
                  src="https://picsum.photos/seed/broker-meeting-rivo/800/500"
                  alt="Team meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                   <div className="w-14 h-10 bg-[#FF0000] text-white rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-4">Our Core Values</h2>
            <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">The principles that drive us every single day.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                key={i} 
                className="text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-brand-warm rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-bold text-xl text-brand-navy mb-3">{value.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US */}
      <section className="py-24 bg-brand-warm">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-6">Why Choose Home Loan Experts?</h2>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              Our commitment to transparency and integrity means you can trust us to act in your best interests throughout the loan process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
              <h3 className="font-bold text-xl text-brand-navy mb-6">We Get Tough Loans Approved</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Experts in navigating unique situations</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Success in securing approvals</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Assistance for customers who were previously declined</span></li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
              <h3 className="font-bold text-xl text-brand-navy mb-6">Get The Right Home For Your Needs</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Tailored solutions with long-term goals</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">We can help you get a mortgage that suits your needs</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Comprehensive assessment of financial situation</span></li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
              <h3 className="font-bold text-xl text-brand-navy mb-6">Access To Competitive Interest Rates</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Strong relationships with a panel of lenders</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Negotiation of competitive rates</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" /><span className="text-brand-text-muted">Based on the strength of your application</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* CONNECT CTA */}
      <section className="py-24 text-center bg-brand-navy text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
            <div className="w-[800px] h-[800px] rounded-full border-[1px] border-white absolute"></div>
         </div>
         <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl mb-6">Connect With Our Expert Brokers</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our mortgage brokers are here to help you through the process.<br/>
              Get a reply from us within 24 hours of your enquiry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 h-16 bg-brand-teal text-white text-lg font-bold rounded-full hover:bg-white hover:text-brand-navy transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                Get a free assessment
              </Link>
              <Link href="tel:0451178375" className="inline-flex items-center justify-center px-10 h-16 bg-white/10 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto">
                Give us a call
              </Link>
            </div>
         </div>
      </section>

    </div>
  );
}

