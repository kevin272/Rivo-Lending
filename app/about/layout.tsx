import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sydney Mortgage Strategists & Finance Advisory",
  description:
    "Learn about Rivo Lending, Sydney-based mortgage brokers committed to transparency, competitive lender selection across 30+ banks, and lifelong finance partnership.",
  alternates: {
    canonical: "https://www.rivolending.com.au/about",
  },
  openGraph: {
    title: "About Us | Rivo Lending",
    description:
      "Meet Rivo Lending. Independent mortgage strategists in Sydney providing transparent home loan, refinancing and commercial credit advisory.",
    url: "https://www.rivolending.com.au/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
