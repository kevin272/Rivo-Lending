import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { ServiceDetailClient } from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceBySlug(slug);

  if (!data) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${data.title} Mortgage & Loan Advisory Sydney`;
  const description = `${data.subtitle} ${data.description.slice(0, 150)}...`;
  const canonicalUrl = `https://www.rivolending.com.au/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.title} | Rivo Lending`,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: `${data.title} - Rivo Lending`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Rivo Lending`,
      description,
      images: [data.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = getServiceBySlug(slug);

  if (!data) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: data.title,
    description: data.description,
    provider: {
      "@type": "FinancialService",
      name: "Rivo Lending",
      url: "https://www.rivolending.com.au",
      telephone: "+61 451 178 375",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
      description: "No-obligation mortgage assessment and broking service in most cases at no cost to the borrower.",
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
        name: "Services",
        item: "https://www.rivolending.com.au/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `https://www.rivolending.com.au/services/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailClient data={data} />
    </>
  );
}
