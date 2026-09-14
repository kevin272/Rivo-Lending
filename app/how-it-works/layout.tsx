import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | 4-Step Loan Approval & Settlement Process",
  description:
    "Understand the Rivo Lending process from initial fact-find and borrowing capacity assessment to 30+ lender comparisons, formal loan approval, and settlement.",
  alternates: {
    canonical: "https://www.rivolending.com.au/how-it-works",
  },
  openGraph: {
    title: "How It Works | Rivo Lending",
    description:
      "Understand the Rivo Lending process from discovery and borrowing capacity assessment to lender comparison, pre-approval, and final settlement.",
    url: "https://www.rivolending.com.au/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
