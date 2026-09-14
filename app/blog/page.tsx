"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import { blogs } from "@/lib/blogs";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "First Home Buyers", "How Broking Works", "Loan Structure", "Refinancing"];

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden relative">
      
      {/* GLOBAL CONTINUOUS ORGANIC SIDEBAR (Scales gracefully on widescreen) */}
      <div className="hidden lg:block absolute left-0 top-0 w-full h-[1400px] z-10 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 1024" 
          className="absolute top-0 left-[-20%] md:left-0 w-[140%] md:w-[60%] lg:w-[45%] xl:w-[38%] 2xl:w-[30%] 3xl:w-[26%] max-w-[820px] h-full opacity-95" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 L800,0 C600,300 900,700 0,950 Z" fill="#4673A6" />
        </svg>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[38vh] md:h-[46vh] 3xl:h-[50vh] w-full bg-brand-navy">
         <Image 
           src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920" 
           alt="Rivo Lending Property Finance Insights" 
           fill 
           className="object-cover object-center" 
           priority
         />
         <div className="absolute inset-0 bg-black/40 z-0"></div>
      </div>

      {/* MAIN CONTENT HEADER (Widescreen adapted) */}
      <section className="relative pb-10 z-20">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 relative pt-4 lg:pt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* 1. Left Spacer for Sidebar */}
            <div className="hidden lg:block lg:w-[28%] xl:w-[28%] 2xl:w-[25%] flex-shrink-0"></div>

            {/* 2. Middle Text Content */}
            <div className="w-full lg:w-[48%] xl:w-[48%] 2xl:w-[50%]">
               {/* Breadcrumb */}
               <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-6">
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">INSIGHTS & BLOG</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[54px] 2xl:text-[62px] font-bold text-brand-navy mb-4 leading-[1.08]">
                 Property finance, in plain English
               </h1>
               
               <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                 Guides and straight answers from the Rivo team &mdash; no jargon, no sales pitch, just what we&apos;d tell a friend.
               </p>
            </div>
            
            {/* 3. Right Media (Empty) */}
            <div className="w-full lg:w-[24%] 2xl:w-[25%]"></div>
          </div>
        </div>
      </section>

      {/* BLOG BENTO SECTION */}
      <div className="py-12 bg-slate-50/70 relative border-t border-slate-100 z-20">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          
          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-brand-navy text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-brand-navy border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* BENTO GRID (When "All" is selected) */}
          {selectedCategory === "All" ? (
            <div className="space-y-6 lg:space-y-8 mb-16">
              
              {/* TOP BENTO ROW: 8-col Lead Tile + 4-col Spotlight Tile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                
                {/* 1. LEAD BENTO TILE (Col span 8) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="lg:col-span-8 group"
                >
                  <Link
                    href={`/blog/${blogs[0].slug}`}
                    className="block h-full bg-[#0f2742] text-white rounded-3xl border border-slate-800/80 p-8 sm:p-10 2xl:p-12 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Metadata */}
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-brand-teal font-semibold tracking-wider uppercase mb-5">
                        <span>{blogs[0].category}</span>
                        <span className="text-white/20">&bull;</span>
                        <span className="text-white/60 normal-case tracking-normal font-normal flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-brand-teal" /> {blogs[0].readTime}
                        </span>
                        <span className="text-white/20">&bull;</span>
                        <span className="text-white/60 normal-case tracking-normal font-normal">
                          {blogs[0].publishedDate}
                        </span>
                      </div>

                      {/* Content Split */}
                      <div className="grid md:grid-cols-12 gap-8 items-center mb-8">
                        <div className="md:col-span-7">
                          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-brand-teal transition-colors duration-300 leading-tight mb-4">
                            {blogs[0].title}
                          </h2>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed line-clamp-3">
                            {blogs[0].excerpt}
                          </p>
                        </div>
                        <div className="md:col-span-5 relative h-56 sm:h-64 lg:h-72 w-full rounded-2xl overflow-hidden bg-slate-800">
                          <Image
                            src={blogs[0].coverImage}
                            alt={blogs[0].title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Author & Link */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-700">
                          <Image src={blogs[0].author.avatar} alt={blogs[0].author.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">{blogs[0].author.name}</p>
                          <p className="text-[11px] text-white/50">{blogs[0].author.role}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>

                {/* 2. SPOTLIGHT BENTO TILE (Col span 4) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="lg:col-span-4 group"
                >
                  <Link
                    href={`/blog/${blogs[1].slug}`}
                    className="block h-full bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div>
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className="text-[#4673A6] font-semibold tracking-wider uppercase text-[11px]">{blogs[1].category}</span>
                        <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-teal" /> {blogs[1].readTime}</span>
                      </div>

                      {/* Image */}
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <Image
                          src={blogs[1].coverImage}
                          alt={blogs[1].title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-brand-navy group-hover:text-[#4673A6] transition-colors duration-300 leading-snug mb-3">
                        {blogs[1].title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                        {blogs[1].excerpt}
                      </p>
                    </div>

                    {/* Bottom Author & Link */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-100">
                          <Image src={blogs[1].author.avatar} alt={blogs[1].author.name} fill className="object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">{blogs[1].author.name}</p>
                      </div>
                      <span className="text-[#4673A6] text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                        Read article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>

              </div>

              {/* SECOND BENTO ROW: 3 Minimalist Bento Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                {/* 3. BENTO TILE: Fixed vs Variable */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="group"
                >
                  <Link
                    href={`/blog/${blogs[2].slug}`}
                    className="block h-full bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <Image
                          src={blogs[2].coverImage}
                          alt={blogs[2].title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="text-[#4673A6] font-semibold tracking-wider uppercase text-[11px]">{blogs[2].category}</span>
                        <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-teal" /> {blogs[2].readTime}</span>
                      </div>

                      <h3 className="font-sans text-lg sm:text-xl font-bold text-brand-navy group-hover:text-[#4673A6] transition-colors duration-300 leading-snug mb-3">
                        {blogs[2].title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {blogs[2].excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-100">
                          <Image src={blogs[2].author.avatar} alt={blogs[2].author.name} fill className="object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">{blogs[2].author.name}</p>
                      </div>
                      <span className="text-[#4673A6] text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                        Read article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>

                {/* 4. BENTO TILE: Loyalty Tax */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                  className="group"
                >
                  <Link
                    href={`/blog/${blogs[3].slug}`}
                    className="block h-full bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <Image
                          src={blogs[3].coverImage}
                          alt={blogs[3].title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="text-[#4673A6] font-semibold tracking-wider uppercase text-[11px]">{blogs[3].category}</span>
                        <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-teal" /> {blogs[3].readTime}</span>
                      </div>

                      <h3 className="font-sans text-lg sm:text-xl font-bold text-brand-navy group-hover:text-[#4673A6] transition-colors duration-300 leading-snug mb-3">
                        {blogs[3].title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {blogs[3].excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-100">
                          <Image src={blogs[3].author.avatar} alt={blogs[3].author.name} fill className="object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">{blogs[3].author.name}</p>
                      </div>
                      <span className="text-[#4673A6] text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                        Read article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>

                {/* 5. BENTO TILE: Small Deposit */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="group"
                >
                  <Link
                    href={`/blog/${blogs[4].slug}`}
                    className="block h-full bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <Image
                          src={blogs[4].coverImage}
                          alt={blogs[4].title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="text-[#4673A6] font-semibold tracking-wider uppercase text-[11px]">{blogs[4].category}</span>
                        <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-teal" /> {blogs[4].readTime}</span>
                      </div>

                      <h3 className="font-sans text-lg sm:text-xl font-bold text-brand-navy group-hover:text-[#4673A6] transition-colors duration-300 leading-snug mb-3">
                        {blogs[4].title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {blogs[4].excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-100">
                          <Image src={blogs[4].author.avatar} alt={blogs[4].author.name} fill className="object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">{blogs[4].author.name}</p>
                      </div>
                      <span className="text-[#4673A6] text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                        Read article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>

              </div>

            </div>
          ) : (
            /* FILTERED VIEW: Minimalist Cards Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {filteredBlogs.map((blog, idx) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="group"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="bg-white border border-slate-200 rounded-3xl p-7 flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[#4673A6] font-semibold tracking-wider uppercase text-[11px]">{blog.category}</span>
                      <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-teal" /> {blog.readTime}</span>
                    </div>

                    <h4 className="font-sans text-lg sm:text-xl font-bold text-brand-navy group-hover:text-[#4673A6] transition-colors duration-300 line-clamp-2 mb-3">
                      {blog.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-100">
                          <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">{blog.author.name}</p>
                      </div>
                      <span className="text-[#4673A6] text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                        Read article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* BENTO CTA BANNER (Full Width Tile, Flat Solid Styling) */}
          <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl 2xl:max-w-3xl">
              <span className="text-brand-teal font-semibold tracking-widest text-xs uppercase mb-2 block">
                Personalised Australian Lending Advice
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl 2xl:text-4xl font-bold mb-3 leading-tight">
                Have questions about your borrowing capacity?
              </h3>
              <p className="text-white/75 text-sm sm:text-base 2xl:text-lg leading-relaxed">
                Connect with an accredited Rivo Lending mortgage broker for a 100% free, no-obligation loan assessment across our panel of 30+ Australian lenders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-brand-teal text-white font-semibold rounded-xl text-center hover:bg-brand-teal-light transition-colors text-sm sm:text-base"
              >
                Book Free Assessment
              </Link>
              <Link
                href="tel:0451178375"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-center transition-colors border border-white/20 text-sm sm:text-base"
              >
                Call 0451 178 375
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
