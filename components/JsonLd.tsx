export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FinancialService", "MortgageBroker"],
        "@id": "https://www.rivolending.com.au/#organization",
        name: "Rivo Lending",
        legalName: "Sanskriti Holdings Pty Ltd",
        alternateName: "Rivo Lending Pty Ltd",
        url: "https://www.rivolending.com.au",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.rivolending.com.au/#logo",
          url: "https://www.rivolending.com.au/logo_rivo.png",
          caption: "Rivo Lending Logo",
        },
        image: "https://www.rivolending.com.au/logo_rivo.png",
        telephone: "+61 451 178 375",
        email: "info@rivolending.com.au",
        priceRange: "$$",
        currenciesAccepted: "AUD",
        paymentAccepted: "No broker fee to borrowers in most circumstances",
        description:
          "Independent mortgage broker and finance strategists based in Sydney. We compare 30+ Australian lenders to secure competitive home loans, refinancing, commercial loans, and asset finance.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          postalCode: "2000",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.8688,
          longitude: 151.2093,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "New South Wales",
          },
          {
            "@type": "City",
            name: "Sydney",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "16:00",
          },
        ],
        knowsAbout: [
          "Home Loans",
          "First Home Buyer Grants",
          "Refinancing",
          "Mortgage Broking",
          "Commercial Property Finance",
          "Self Managed Super Fund (SMSF) Loans",
          "Asset & Equipment Finance",
          "Healthcare & Nurse Home Loans",
        ],
        memberOf: [
          {
            "@type": "Organization",
            name: "Australian Financial Complaints Authority",
            alternateName: "AFCA",
            url: "https://www.afca.org.au",
          },
          {
            "@type": "Organization",
            name: "Mortgage & Finance Association of Australia",
            alternateName: "MFAA",
            url: "https://www.mfaa.com.au",
          },
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Credit Representative",
            recognizedBy: {
              "@type": "GovernmentOrganization",
              name: "Australian Securities and Investments Commission",
              alternateName: "ASIC",
            },
            name: "Credit Representative No. 550551 under Australian Credit Licence No. 389087",
          },
        ],
        sameAs: [
          "https://facebook.com",
          "https://instagram.com",
          "https://linkedin.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.rivolending.com.au/#website",
        url: "https://www.rivolending.com.au",
        name: "Rivo Lending",
        description:
          "Mortgage broker in Sydney & nationwide. Compare home loans, get pre-approved, and calculate refinance savings with expert guidance.",
        publisher: {
          "@id": "https://www.rivolending.com.au/#organization",
        },
        inLanguage: "en-AU",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
