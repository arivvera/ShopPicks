"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./navbar.module.css";
import shoppingCartIcon from "@/app/assets/images/home/shopping-cart-icon.svg";
import wishListIcon from "@/app/assets/images/home/wishlist-icon.svg";
import { usePathname } from "next/navigation";
import NavbarLink from "../navbar-link/navbar-link";

export default function Navbar () {
    const pathname = usePathname();

    return (
        <div className={styles["navbar-container"]}>
            <nav className={`${styles.navbar} frame-container`}>
                {/* Primary section of the navigation bar containing the logo, links, and buttons. */}
                <div className={styles["navbar-a"]}>
                    <div className={styles["navbar-logo"]}>
                        <Link href={"/"}> Lgo here </Link>
                    </div>
                    <div className={styles["navbar-links"]}>
                        <NavbarLink href="/">Home</NavbarLink>
                        <NavbarLink href="/our-products">Our products</NavbarLink>
                        <NavbarLink href="/courses">Courses</NavbarLink>
                        <NavbarLink href="/about-us">About Us</NavbarLink>
                        <NavbarLink href="/faq">FAQ</NavbarLink>
                        <NavbarLink href="/contact-us">Contact us</NavbarLink>
                        <NavbarLink href="/login">Log in</NavbarLink>
                        <div className={`${styles["navbar-link-sign-up"]}`}>
                            <Link href={"/sign-up"}>Sign up</Link>
                        </div>
                    </div>
                </div>

                {/* Secondary section of the navigation bar containing the shopping cart and wishlist buttons. */}
                <div className={styles["navbar-b"]}>
                    <Link href={"/"}>
                        <div className={styles["shopping-cart-button"]}>
                            <div className={styles["shopping-cart-icon"]}>
                                <Image src={shoppingCartIcon} alt={"shopping cart icon"} width={37.93} height={31.01} />
                            </div>
                            <div className={styles["shopping-cart-indicator"]}>
                                7
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={styles["wishlist-button"]}>
                            <div className={styles["wishlist-icon"]}>
                                <Image src={wishListIcon} alt={"wishlist icon"} width={19.97} height={18} />
                            </div>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
};