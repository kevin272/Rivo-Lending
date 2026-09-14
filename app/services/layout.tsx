import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage & Lending Services | Sydney & Australia-wide",
  description:
    "Explore Rivo Lending's comprehensive mortgage solutions: First Home Buyers, Refinancing, Investment Loans, Commercial Lending, Asset Finance, and Specialist Health Professional Loans.",
  alternates: {
    canonical: "https://www.rivolending.com.au/services",
  },
  openGraph: {
    title: "Mortgage & Lending Services | Rivo Lending",
    description:
      "Explore Rivo Lending's loan solutions across Sydney and Australia — First Home Buyers, Refinancing, Commercial, Investment, and Asset Finance.",
    url: "https://www.rivolending.com.au/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
