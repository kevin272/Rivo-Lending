import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, AlertCircle, Info, Sparkles, Phone, Mail, Share2 } from "lucide-react";
import { getAllBlogs, getBlogBySlug, getRelatedBlogs } from "@/lib/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const canonicalUrl = `https://www.rivolending.com.au/blog/${slug}`;

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${blog.title} | Rivo Lending`,
      description: blog.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: new Date(blog.publishedDate).toISOString(),
      authors: [blog.author.name],
      tags: blog.tags || [blog.category],
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Rivo Lending`,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.slug, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: [blog.coverImage],
    datePublished: new Date(blog.publishedDate).toISOString(),
    author: {
      "@type": "Person",
      name: blog.author.name,
      jobTitle: blog.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Rivo Lending",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rivolending.com.au/logo_rivo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.rivolending.com.au/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rivolending.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.rivolending.com.au/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.rivolending.com.au/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="bg-white min-h-screen pt-32 lg:pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* TOP NAVIGATION & BREADCRUMBS */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase hidden sm:block">
            <Link href="/" className="hover:text-brand-navy">Home</Link> &nbsp;&gt;&nbsp; <Link href="/blog" className="hover:text-brand-navy">Blog</Link> &nbsp;&gt;&nbsp; <span className="text-brand-teal">{blog.category}</span>
          </div>
        </div>

        {/* HEADER */}
        <header className="mb-10">
          <div className="text-xs font-semibold text-[#4673A6] tracking-wider uppercase mb-4">
            {blog.category}
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold text-brand-navy leading-[1.18] mb-6">
            {blog.title}
          </h1>

          <p className="text-lg sm:text-xl 2xl:text-2xl text-slate-600 leading-relaxed mb-8 font-normal">
            {blog.subtitle}
          </p>

          {/* AUTHOR & METADATA BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-slate-200">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100">
                <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy">{blog.author.name}</p>
                <p className="text-xs text-slate-500">{blog.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-teal" /> {blog.publishedDate}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-teal" /> {blog.readTime}</span>
            </div>
          </div>
        </header>

        {/* FEATURED COVER IMAGE */}
        <div className="relative w-full h-72 sm:h-96 md:h-[480px] 2xl:h-[560px] 3xl:h-[640px] rounded-3xl overflow-hidden mb-12 shadow-sm border border-slate-100">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* KEY TAKEAWAYS BOX */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="text-brand-navy font-bold text-lg mb-4">
            Key Takeaways
          </div>
          <ul className="space-y-3">
            {blog.keyTakeaways.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ARTICLE CONTENT SECTIONS */}
        <div className="space-y-12 text-slate-700">
          {blog.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-5">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-navy leading-snug pt-4 border-t border-slate-100">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}

              {section.callout && (
                <div className={`p-6 rounded-2xl border ${
                  section.callout.type === "warning"
                    ? "bg-amber-50/80 border-amber-200 text-amber-900"
                    : section.callout.type === "tip"
                    ? "bg-teal-50/80 border-teal-200 text-teal-900"
                    : "bg-sky-50/80 border-sky-200 text-sky-900"
                }`}>
                  <div className="flex items-center gap-2 font-bold mb-2">
                    {section.callout.type === "warning" && <AlertCircle className="w-5 h-5 text-amber-600" />}
                    {section.callout.type === "tip" && <Sparkles className="w-5 h-5 text-brand-teal" />}
                    {section.callout.type === "info" && <Info className="w-5 h-5 text-sky-600" />}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{section.callout.message}</p>
                </div>
              )}

              {section.bulletPoints && (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 my-4">
                  <ul className="space-y-3">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2"></span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.subheadings && (
                <div className="space-y-4 pt-2">
                  {section.subheadings.map((sub, subIdx) => (
                    <div key={subIdx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
                      <h3 className="font-bold text-lg text-brand-navy mb-2">{sub.title}</h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        {blog.faq && blog.faq.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="font-sans text-2xl font-bold text-brand-navy mb-6">Common Questions Answered</h3>
            <div className="space-y-4">
              {blog.faq.map((item, fIdx) => (
                <div key={fIdx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-brand-navy mb-2">{item.question}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAGS */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tags:</span>
          {blog.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full font-medium transition-colors">
              #{tag}
            </span>
          ))}
        </div>

        {/* BROKER CONSULTATION BANNER */}
        <div className="mt-16 bg-brand-navy text-white rounded-3xl p-8 sm:p-10 2xl:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-brand-teal text-xs 2xl:text-sm font-bold uppercase tracking-widest block mb-2">Speak to an Australian Mortgage Broker</span>
            <h3 className="font-sans text-2xl sm:text-3xl 2xl:text-4xl font-bold mb-4">Want tailored advice for your situation?</h3>
            <p className="text-white/80 text-sm sm:text-base 2xl:text-lg leading-relaxed mb-6 max-w-xl 2xl:max-w-2xl">
              Don&apos;t navigate complex lending policies alone. Our brokers have access to 50+ lenders and compare thousands of loan products to secure the optimal structure for you.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-brand-teal text-white font-bold rounded-xl hover:bg-brand-teal-light transition-colors text-sm shadow-md"
              >
                Request Free Assessment
              </Link>
              <a
                href="tel:0451178375"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors text-sm border border-white/20"
              >
                <Phone className="w-4 h-4 text-brand-teal" /> 0451 178 375
              </a>
            </div>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-2xl font-bold text-brand-navy">Related Reading</h3>
              <Link href="/blog" className="text-brand-teal hover:text-brand-navy text-sm font-bold inline-flex items-center gap-1 transition-colors">
                View All Guides <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col"
                >
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4673A6] mb-1.5">{rel.category}</span>
                    <h4 className="font-bold text-brand-navy text-base group-hover:text-[#4673A6] transition-colors duration-300 line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mt-auto">
                      {rel.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
    </>
  );
}
