import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Mortgage Consultation Sydney",
  description:
    "Speak with a licensed mortgage broker at Rivo Lending. Call 0451 178 375, email info@rivolending.com.au, or book a free borrowing assessment online.",
  alternates: {
    canonical: "https://www.rivolending.com.au/contact",
  },
  openGraph: {
    title: "Contact Us | Rivo Lending",
    description:
      "Connect with our licensed mortgage brokers in Sydney. Call 0451 178 375 or book a free, no-obligation home loan assessment.",
    url: "https://www.rivolending.com.au/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
