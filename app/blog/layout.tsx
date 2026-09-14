import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage & Property Insights | Rivo Lending Sydney",
  description:
    "Expert articles, borrowing power tips, Sydney property market guides, first home buyer grant explanations, and interest rate strategies from Rivo Lending.",
  alternates: {
    canonical: "https://www.rivolending.com.au/blog",
  },
  openGraph: {
    title: "Mortgage & Property Insights | Rivo Lending",
    description:
      "Stay ahead of property trends and home loan rates with expert guides from licensed Australian mortgage brokers.",
    url: "https://www.rivolending.com.au/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
