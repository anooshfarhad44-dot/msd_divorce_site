import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MSD Solicitors – Divorce & Family Law Solicitors | Manchester, Birmingham, London",
    template: "%s | MSD Solicitors",
  },
  description:
    "Experienced divorce and family law solicitors in Manchester, Birmingham and London. Expert guidance through every stage of the divorce process, financial settlements, child arrangements and mediation. Free initial consultation.",
  keywords: ["divorce solicitor Manchester", "family law solicitor", "divorce UK", "financial settlement divorce", "child arrangements", "family mediation"],
  openGraph: {
    title: "MSD Solicitors – Divorce & Family Law Specialists",
    description: "Expert divorce and family law solicitors with offices in Manchester, Birmingham and London. Compassionate, professional legal advice.",
    url: "https://msdsolicitors.co.uk",
    siteName: "MSD Solicitors",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSD Solicitors – Divorce & Family Law Solicitors",
    description: "Expert guidance through divorce, financial settlements and child arrangements in England and Wales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
