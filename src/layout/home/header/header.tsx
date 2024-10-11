import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles["header-container"]}>
        <div className={`${styles.header} frame-container`}>
            <div className={`${styles["header-title"]} gradient-text-1`}>
                <p>
                    Welcome to the
                </p>
                <p>
                    Future of Shopping
                </p>
            </div>
            <div className={styles["header-text"]}>
                <p>
                    Step into tomorrow with our cutting-edge collection of futuristic products. Experience innovation and style like never before.
                </p>
            </div>
            <div className={styles["header-ctas"]}>
                <div className={`${styles["header-cta"]} ${styles["header-cta-products"]}`}>
                    <Link href="/">Explore our products</Link>
                </div>
                <div className={`${styles["header-cta"]} ${styles["header-cta-courses"]}`}>
                    <Link href="/">Explore our courses</Link>
                </div>
            </div>
        </div>
    </div>
  );
}