import { Poppins } from "next/font/google";    
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
    variable: "--font-poppins",
});

export const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
    variable: "--font-roboto",
});

export const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
    variable: "--font-inter",
});