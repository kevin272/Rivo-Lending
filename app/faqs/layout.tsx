import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage & Home Loan FAQs | Australian Lending Answered",
  description:
    "Common questions about mortgage broker fees ($0 cost to you), borrowing capacity, deposit requirements, LMI concessions, and refinancing answered by licensed brokers.",
  alternates: {
    canonical: "https://www.rivolending.com.au/faqs",
  },
  openGraph: {
    title: "Mortgage & Home Loan FAQs | Rivo Lending",
    description:
      "Got questions about mortgage broker fees, borrowing power, deposit size, or refinancing? Read expert answers from licensed Australian credit advisers.",
    url: "https://www.rivolending.com.au/faqs",
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
