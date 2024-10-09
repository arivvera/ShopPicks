import React from 'react';
import '../globals.css';
import './faq.css';


const FaqPage: React.FC = () => {
    return (
        <div className={"faq-page"}>
            <h1 className={"title-gradient"}>Frequently Asked Questions</h1>
            <section className="questions-section">
                <div className="questions boxes-text-description">
                    <ul>
                        <article className={"list-answer-pair"}>
                        <li className={"list-question"}>What is your return policy?</li>
                        <li className={"list-answer"}>
                            We accept returns within 30 days of purchase. Items must be in their original condition
                                and packaging. Please contact our customer service for a return authorization.
                        </li>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={"list-question"}>How do I track my order?</li>
                        <li className={"list-answer"}>
                            Once your order has shipped, you will receive an email with a tracking number.
                            You can use this number on our website to track the status of your orders .
                        </li>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={"list-question"}>Do you offer free shipping?</li>
                        <li className={"list-answer"}>
                            Yes, we offer free shipping on orders over $50.
                            For orders under that amount, a flat shipping fee will apply.
                        </li>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={"list-question"}>How do you protect my privacy?</li>
                        <li className={"list-answer"}>We take your privacy seriously.
                            All personal information is encrypted and stored securely.
                            We do not share your information with third parties without your consent.
                        </li>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={"list-question"}>Can I change or cancel my order?</li>
                        <li className={"list-answer"}>If you need to change or cancel your order,
                            please contact us within 24 hours of placing your order. Once the order has been processed,
                            we may not be able to make changes.
                        </li>
                        </article>
                        <article className={"list-answer-pair"}>
                        <li className={"list-question"}>What payment methods do you accept?</li>
                        <li className={"list-answer"}>
                            We accept all major credit cards, PayPal, and Apple Pay.
                            You can choose your preferred payment method at checkout.
                        </li>
                        </article>

                    </ul>
                </div>
            </section>
        </div>
    );
};

export default FaqPage;
