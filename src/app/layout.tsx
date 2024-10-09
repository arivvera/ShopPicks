import "./globals.css";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/layout/home/navbar/navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import { poppins, roboto, inter } from "@/common/utils/fonts";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

//import localFont from "next/dist/compiled/@next/font/dist/local";
import OpinionBox from "@/app/components/OpinionBox/OpinionBox";
import {ProductsCarousel} from "@/app/components/ProductsCaroussel/ProductsCarousel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}