import React from 'react';
import '../globals.css';
import styles from './page.module.css';
import FAQ from "@/app/components/Faq/faq";
const FaqPage: React.FC = () => {
    return (
        <div className={styles["faq-page"]}>
            <h1 className={"title-gradient"}>Frequently Asked Questions</h1>

            <section className={styles["faq-section"]}>
            <div className={styles["nav-bar-section"]}>
                <div className={styles["faq-link-wrapper"]}>
                    <div className={styles["navbar-faq-link"]}>
                        General
                    </div>
                </div>

                <div className={styles["faq-link-wrapper"]}>
                    <div className={styles["navbar-faq-link"]}>
                        Orders & Payments
                    </div>
                </div>

                <div className={styles["faq-link-wrapper"]}>
                    <div className={styles["navbar-faq-link"]}>
                        Shipping & Delivery
                    </div>
                </div>
                <div className={styles["faq-link-wrapper"]}>
                    <div className={styles["navbar-faq-link"]}>
                        Returns & Refunds
                    </div>
                </div>

            </div>
        </section>

            <div className={styles["questions-section"]}>
                <FAQ />
            </div>
        </div>
    );
};

export default FaqPage;
