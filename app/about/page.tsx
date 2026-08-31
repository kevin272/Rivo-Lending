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
    { name: "Michael Chen", role: "Principal Broker", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
    { name: "Sarah Jenkins", role: "Senior Finance Strategist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { name: "David O'Connor", role: "Client Success Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="bg-brand-navy py-24 md:py-32 text-center text-white pt-40 relative">
        <div className="relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-6"
          >
            About Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto"
          >
            Redefining the mortgage experience.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed"
          >
            We are a team of expert brokers dedicated to leveling the playing field between everyday Australians and the big banks.
          </motion.p>
        </div>
      </div>

      {/* OUR STORY SECTION */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/broker-meeting-rivo/800/1000"
              alt="Team meeting"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <p className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-8 leading-[1.2]">Built on a simple belief: borrowing should be clear and fair.</h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Rivo Lending was founded after witnessing too many people get overwhelmed by the mortgage process, eventually settling for mediocre rates offered by their childhood bank.
              </p>
              <p>
                We realized that what borrowers really needed wasn't just a transactional broker, but a strategic financial partner. Someone who would sit on their side of the table, translate the banking jargon, and structure their debt to actively build wealth.
              </p>
              <p>
                Today, we leverage industry-leading technology and deep relationships across a panel of over 30 lenders to secure the sharpest rates and the most flexible policies for our clients. Whether you're a first home buyer or a seasoned investor, we treat your loan as if it were our own.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-4">Our Core Values</h2>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6">Why Choose Home Loan Experts?</h2>
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Connect With Our Expert Brokers</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our mortgage brokers are here to help you through the process.<br/>
              Get a reply from us within 24 hours of your enquiry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 h-16 bg-brand-teal text-white text-lg font-bold rounded-full hover:bg-white hover:text-brand-navy transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                Get a free assessment
              </Link>
              <Link href="tel:0400000000" className="inline-flex items-center justify-center px-10 h-16 bg-white/10 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto">
                Give us a call
              </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
