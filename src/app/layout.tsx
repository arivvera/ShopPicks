import "./globals.css";
import Footer from "@/layout/footer/footer";
import Navbar from "@/layout/home/navbar/navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "ShopPicks",
  description: "ShopPicks by NTSprint",
};

const poppins = Poppins({
    display: 'swap',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    style: ["normal"],
    variable: "--font-poppins",
    adjustFontFallback: false,
});

const roboto = Roboto({
    display: 'swap',
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    style: ["normal"],
    variable: "--font-roboto",
    adjustFontFallback: false
});

const inter = Inter({
    display: 'swap',
    subsets: ["latin"],
    style: ["normal"],
    variable: "--font-inter",
    adjustFontFallback: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}