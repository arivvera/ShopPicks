import "./globals.css";
import Footer from "@/app/components/Footer/Footer";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Navbar from "@/app/navbar/page";
import { poppins } from "@/common/utils/fonts";
//import localFont from "next/dist/compiled/@next/font/dist/local";
import {Metadata} from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}