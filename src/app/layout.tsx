import "./globals.css";
import Navbar from "@/layout/home/navbar/navbar";
import { poppins, roboto, inter } from "@/common/utils/fonts";

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
      </body>
    </html>
  );
}