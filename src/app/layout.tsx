import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animate.css";
import Header from "./ui/header/page";
import Footer from "./ui/footer/page";
import NavBar2 from "./ui/header/navbar2";
import { Navbar } from "./ui/header/navbar";

const inter = Inter({ subsets: ["latin"] });

// Metadata configuration for SEO and social media
export const metadata: Metadata = {
  title: "DenovoSecurity",
  description: "Denovo Security Website",
  keywords: [
    "Denovo Security",
    "Cybersecurity",
    "Zero Trust",
    "data loss prevention",
    "AI-Powered Threat Analysis",
    "AI Assisted Policy Generation",
    "Denovo Core Zero Trust",
  ],
  authors: [{ name: "Denovo Security", url: "https://www.denovosecurity.com" }],
  openGraph: {
    title: "DenovoSecurity",
    description: "Denovo Security Website",
    url: "https://www.denovosecurity.com",
    siteName: "Denovo Security",
    images: [
      {
        url: "/images/logo/seo-logo.png",
        width: 1200,
        height: 628,
        alt: "Denovo Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DenovoSecurity",
    description: "Denovo Security Website",
    images: ["/images/logo/seo-logo.png"],
  },
};

// Separate viewport export
export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-dark">
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
