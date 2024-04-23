import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animate.css";
import Header from "./ui/header/page";
import Footer from "./ui/footer/page";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DenovoSecurity",
  description: "Denovo Security Website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-dark">
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>

  );
}
