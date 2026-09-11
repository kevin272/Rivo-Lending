"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2 } from "lucide-react";
import { submitWeb3Form } from "@/lib/web3forms";
import { Toast } from "@/components/Toast";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(8, { message: "Phone number is required." }),
  loanPurpose: z.string().min(1, { message: "Please select a loan purpose." }),
  loanAmount: z.string().optional(),
  message: z.string().optional(),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitWeb3Form(data, "New contact request from Rivo Lending");
      setIsSuccess(true);
      setToast({ message: "Your request has been sent successfully.", type: "success" });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "We couldn't send your request. Please try again.";
      setSubmitError(message);
      setToast({ message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      {toast && <Toast {...toast} onDismiss={() => setToast(null)} />}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-brand-navy mb-4">Ready to get started?</h2>
          <p className="text-slate-600 text-lg">Fill out the form below and one of our mortgage specialists will be in touch shortly.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12"
        >
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
                    placeholder="0451 178 375"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">What are you looking to do? <span className="text-red-500">*</span></label>
                <select 
                  {...register("loanPurpose")}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50 appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="first-home">Buy my first home</option>
                  <option value="next-home">Buy my next home</option>
                  <option value="refinance">Refinance existing loan</option>
                  <option value="investment">Buy an investment property</option>
                  <option value="other">Other</option>
                </select>
                {errors.loanPurpose && <p className="text-red-500 text-xs">{errors.loanPurpose.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">Message (Optional)</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow bg-slate-50 resize-none"
                  placeholder="Tell us a bit about your situation..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-teal transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request Assessment"}
              </button>
              {submitError && <p className="text-red-600 text-sm text-center">{submitError}</p>}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
