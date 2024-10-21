import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
        <div className={`${styles.header} frame-container`}>
            <div className={`${styles.title} gradient-text-1`}>
                <p>
                    Welcome to the
                </p>
                <p>
                    Future of Shopping
                </p>
            </div>
            <div className={styles.description}>
                <p>
                    Step into tomorrow with our cutting-edge collection of futuristic products. Experience innovation and style like never before.
                </p>
            </div>
            <div className={styles["ctas"]}>
                <div className={`${styles["cta"]} ${styles["cta-products"]}`}>
                    <Link href="/">
                        Explore our products
                    </Link>
                </div>
                <div className={`${styles["cta"]} ${styles["cta-courses"]}`}>
                    <Link href="/">
                        Explore our courses
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}