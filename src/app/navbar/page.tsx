import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css";
import wishListIcon from "../../app/assets/images/wishlist-icon.svg";
import shoppingCartIcon from "../../app/assets/images/shopping-cart-icon.svg";

export default function Navbar () {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles["navbar-a"]}>
                    <div className={styles["navbar-logo"]}>
                        <Link href={"/"}>
                            Lgo here
                        </Link>
                    </div>
                    <div className={styles["navbar-links"]}>
                        <div className={`${styles.link} ${styles["link-home"]}`}>
                            <Link href={"/"}>Home</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/"}>Our Products</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/"}>Courses</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/"}>About Us</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/"}>FAQ</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/"}>Contact us</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/"}>Log in</Link>
                        </div>
                        <div className={`${styles.link} ${styles["link-sign-up"]}`}>
                            <Link href={"/"}>Sign up</Link>
                        </div>
                    </div>
                </div>
                <div className={styles["navbar-b"]}>
                    <Link href={"/"}>
                        <div className={styles["shopping-cart"]}>
                            <Image src={shoppingCartIcon} alt={"shopping cart"} width={37.93} height={31.01} />
                            <div className={styles["shopping-cart-indicator"]}>
                                7
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={styles["wishlist"]}>
                            <Image src={wishListIcon} alt={"wishlist"} width={19.97} height={18} />
                        </div>
                    </Link>

                </div>
            </nav>
        </div>
    )
};