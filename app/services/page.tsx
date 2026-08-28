"use client";

import { motion } from "motion/react";
import { ArrowRight, Home, Building2, Briefcase, Landmark } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "First Home Buyer",
      description: "Take the stress out of buying your first home with expert guidance every step of the way. We help with grants and structure the best loan.",
      icon: Home,
    },
    {
      title: "Refinancing",
      description: "Unlock a better rate or consolidate debt. We'll find the right loan to match your current needs and save you money.",
      icon: ArrowRight,
    },
    {
      title: "Property Investment",
      description: "Strategic finance solutions to help you build and grow a successful property portfolio with optimal tax structures.",
      icon: Building2,
    },
    {
      title: "Commercial Loans",
      description: "Finance tailored for your business needs, whether purchasing premises, expanding, or managing cash flow.",
      icon: Briefcase,
    },
    {
      title: "Asset & Vehicle Finance",
      description: "Competitive rates for cars, equipment, and other essential assets for personal or business use.",
      icon: Landmark,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-brand-navy py-20 text-center text-white mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg max-w-2xl mx-auto px-4"
        >
          Comprehensive lending solutions tailored to your unique financial goals.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy/90 transition-colors">
                Enquire Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
