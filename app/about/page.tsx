"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2, Users, Shield, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-navy py-20 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
        >
          About Rivo Lending
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg max-w-2xl mx-auto px-4"
        >
          Your trusted partner in navigating the complex world of finance.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://picsum.photos/seed/broker-meeting-rivo/800/1000"
              alt="Broker consulting with clients"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">Simplifying Finance for You</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Rivo Lending, we believe that securing a mortgage shouldn&apos;t be a daunting task. With years of industry experience and deep relationships with over 40 leading lenders, we bring clarity and confidence to your financial decisions.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our commitment is to transparency, integrity, and putting your interests first. From our initial consultation to settlement and beyond, we are here to support your financial journey.
            </p>
            
            <div className="space-y-6 mt-10">
              {[
                { title: "Transparency", desc: "No hidden fees, no confusing jargon. Just clear, honest advice.", icon: Shield },
                { title: "Expert Guidance", desc: "Award-winning professionals dedicated to your success.", icon: Users },
                { title: "Tailored Strategy", desc: "Customized solutions designed around your unique goals.", icon: Target },
              ].map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <value.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-xl mb-1">{value.title}</h3>
                    <p className="text-slate-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
