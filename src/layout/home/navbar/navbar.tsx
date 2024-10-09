import Image from "next/image"
import Link from "next/link"
import styles from "./navbar.module.css";
import shoppingCartIcon from "@/app/assets/images/shopping-cart-icon.svg";
import wishListIcon from "@/app/assets/images/wishlist-icon.svg";

export default function Navbar () {
    return (
        <div className={styles["navbar-container"]}>
            <nav className={`${styles.navbar} frame-container`}>
                {/* Primary section of the navigation bar containing the logo, links, and buttons. */}
                <div className={styles["navbar-a"]}>
                    <div className={styles["navbar-logo"]}>
                        <Link href={"/"}>Lgo here</Link>
                    </div>
                    <div className={styles["navbar-links"]}>
                        <div className={`${styles["navbar-link"]} ${styles["navbar-link-home"]}`}>
                            <Link href={"/"}>Home</Link>
                        </div>
                        <div className={styles["navbar-link"]}>
                            <Link href={"/"}>Our Products</Link>    
                        </div>
                        <div className={styles["navbar-link"]}>
                            <Link href={"/"}>Courses</Link>
                        </div>
                        <div className={styles["navbar-link"]}>
                            <Link href={"/"}>About Us</Link>
                        </div>
                        <div className={styles["navbar-link"]}>
                            <Link href={"/"}>FAQ</Link>
                        </div>
                        <div className={styles["navbar-link"]}>
                            <Link href={"/"}>Contact us</Link>
                        </div>
                        <div className={styles["navbar-link"]}>
                            <Link href={"/"}>Log in</Link>
                        </div>
                        <div className={`${styles["navbar-link"]} ${styles["navbar-link-sign-up"]}`}>
                            <Link href={"/"}>Sign up</Link>
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