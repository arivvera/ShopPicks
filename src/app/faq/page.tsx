'use client';
import React, { useState } from 'react';
import '../globals.css';
import styles from './page.module.css';
import FAQ from "@/app/components/Faq/faq";
import MailList from "@/layout/home/mail-list/mail-list";

const FaqPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (<>
        <div className={styles["faq-page"]}>
            <h1 className={"title-gradient"}>Frequently Asked Questions</h1>

            <section className={styles["faq-section"]}>
                <div className={styles["nav-bar-section"]}>

                    <a className={`${styles["faq-link-wrapper"]} ${activeIndex === 0 ? styles.active : ''}`}
                       href="#" onClick={() => handleClick(0)}>
                        <div className={styles["navbar-faq-link"]}>
                            General
                        </div>
                    </a>

                    <a className={`${styles["faq-link-wrapper"]} ${activeIndex === 1 ? styles.active : ''}`}
                       href="#" onClick={() => handleClick(1)}>
                        <div className={styles["navbar-faq-link"]}>
                            Orders & Payments
                        </div>
                    </a>

                    <a className={`${styles["faq-link-wrapper"]} ${activeIndex === 2 ? styles.active : ''}`}
                       href="#" onClick={() => handleClick(2)}>
                        <div className={styles["navbar-faq-link"]}>
                            Shipping & Delivery
                        </div>
                    </a>

                    <a className={`${styles["faq-link-wrapper"]} ${activeIndex === 3 ? styles.active : ''}`}
                       href="#" onClick={() => handleClick(3)}>
                        <div className={styles["navbar-faq-link"]}>
                            Returns & Refunds
                        </div>
                    </a>

                </div>
            </section>

            <div className={styles["questions-section"]}>
                <FAQ activeIndex={activeIndex} />

            </div>
        </div>
    <MailList />
        </>
    );
};

export default FaqPage;
