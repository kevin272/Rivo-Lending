"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(8, { message: "Phone number is required." }),
  loanPurpose: z.string().min(1, { message: "Please select a loan purpose." }),
  loanAmount: z.string().optional(),
  message: z.string().optional(),
});

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-5 px-6 text-left flex justify-between items-center focus:outline-none"
      >
        <h3 className="font-bold text-brand-navy text-lg">{q}</h3>
        <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 bg-brand-soft-teal text-brand-teal' : 'text-slate-400'}`}>
           <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 border-t border-slate-50 mt-2 mx-6 px-0 pb-5">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="bg-brand-navy py-24 md:py-32 text-center text-white pt-40 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[150%] bg-white/5 skew-x-12"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed"
          >
            Ready to secure your future? Contact our expert brokers for a free, no-obligation consultation today.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-24">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row"
        >
          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-brand-navy text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Call Us Directly</p>
                    <p className="text-xl font-semibold">1300 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Email Support</p>
                    <p className="text-xl font-semibold">info@rivolending.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Office Location</p>
                    <p className="text-xl font-semibold">123 Finance Street<br/>Sydney NSW 2000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-white/60">
                Office Hours:<br/>
                Monday - Friday: 9:00 AM - 5:30 PM<br/>
                Saturday: By appointment only
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">Request a Free Assessment</h2>
            <p className="text-slate-600 mb-8">Fill out the form below and one of our mortgage specialists will be in touch shortly.</p>
            
            {isSuccess ? (
              <div className="bg-teal-50 text-teal-900 p-8 rounded-xl border border-teal-200 flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-brand-teal mb-4" />
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p>Thank you for reaching out. A member of our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">First Name <span className="text-red-500">*</span></label>
                    <input 
                      {...register("firstName")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      {...register("lastName")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="0400 000 000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">How can we help? <span className="text-red-500">*</span></label>
                    <select 
                      {...register("loanPurpose")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="first_home">Buying First Home</option>
                      <option value="refinance">Refinancing</option>
                      <option value="investment">Property Investment</option>
                      <option value="commercial">Commercial Loan</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.loanPurpose && <p className="text-red-500 text-xs">{errors.loanPurpose.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">Estimated Loan Amount</label>
                    <input 
                      {...register("loanAmount")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="e.g. $500,000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">Additional Information</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50"
                    placeholder="Tell us a bit more about your situation..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-brand-teal text-white text-lg font-bold rounded-lg hover:bg-brand-teal/90 transition-colors disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Contact FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Got a question before you reach out? We've got answers.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Do you charge a fee for your services?",
                a: "In most cases, our services are completely free to you. We are paid a commission by the lender you choose when your loan settles. We will always disclose any commissions to you upfront."
              },
              {
                q: "How long does it take to get a response?",
                a: "We aim to respond to all web inquiries within 24 hours during business days. For urgent matters, please call us directly on 1300 123 456."
              },
              {
                q: "Can we meet online instead of in person?",
                a: "Absolutely! We offer flexible meeting options. We can chat over the phone, arrange a Zoom/Teams video conference, or meet in person at our Sydney office."
              },
              {
                q: "What information should I have ready for our first chat?",
                a: "For an initial consultation, it's helpful to have a rough idea of your income, expenses, and any current debts. You don't need formal documents just yet—we'll guide you through exactly what's needed when the time comes."
              }
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
