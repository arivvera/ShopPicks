import React from 'react';
import '../globals.css';
import styles from './page.module.css';
const FaqPage: React.FC = () => {
    return (
        <div className={styles["faq-page"]}>
            <h1 className={"title-gradient"}>Frequently Asked Questions</h1>
            <section className="questions-section">
                <div className={`${styles["questions"]} boxes-text-description`}>
                    <ul>
                        <article className={styles["list-answer-pair"]}>
                        <li className={styles["list-question"]}>What is your return policy?</li>
                        <p className={styles[styles["list-answer"]]}>
                            We accept returns within 30 days of purchase. Items must be in their original condition
                                and packaging. Please contact our customer service for a return authorization.
                        </p>
                        </article>
                        <article className={styles["list-answer-pair"]}>
                        <li className={styles["list-question"]}>How do I track my order?</li>
                        <p className={styles["list-answer"]}>
                            Once your order has shipped, you will receive an email with a tracking number.
                            You can use this number on our website to track the status of your orders .
                        </p>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={styles["list-question"]}>Do you offer free shipping?</li>
                        <p className={styles["list-answer"]}>
                            Yes, we offer free shipping on orders over $50.
                            For orders under that amount, a flat shipping fee will apply.
                        </p>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={styles["list-question"]}>How do you protect my privacy?</li>
                        <p className={styles["list-answer"]}>We take your privacy seriously.
                            All personal information is encrypted and stored securely.
                            We do not share your information with third parties without your consent.
                        </p>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={styles["list-question"]}>Can I change or cancel my order?</li>
                        <p className={styles["list-answer"]}>If you need to change or cancel your order,
                            please contact us within 24 hours of placing your order. Once the order has been processed,
                            we may not be able to make changes.
                        </p>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={styles["list-question"]}>What payment methods do you accept?</li>
                        <p className={styles["list-answer"]}>
                            We accept all major credit cards, PayPal, and Apple Pay.
                            You can choose your preferred payment method at checkout.
                        </p>
                        </article>

                    </ul>
                </div>
            </section>
        </div>
    );
};

export default FaqPage;
