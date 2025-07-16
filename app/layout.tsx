import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navBar";
import Footer from "./components/footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import Banner from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monash Human Power",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Banner text
  const BANNER_TEXT = "Showcase 01 Jan 2025"


  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-T8HB40Y133" /> 
      </head>
      <body
        className={inter.className + " bg-black flex flex-col min-h-screen"}
      >
        <Navbar />
        <div className="flex-1 " style={{width: "95%", margin: "0 auto", textAlign: "center",} } >{children}</div>
        <Footer />
      </body>
    </html>
  );
}
