import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage & Property Insights | Rivo Lending",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rivolending.com.au/blog",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
