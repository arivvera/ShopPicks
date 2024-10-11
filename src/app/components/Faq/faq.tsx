

// components/FAQ.js
'use client'
import { useState } from 'react';
import './faq.css'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is FutureSpace?",
            answer: "FutureSpace is an online platform offering a wide range of products. We provide high-quality items at competitive prices with seamless shopping experiences. We don't just sell, we learn, create, and share knowledge through artist-led courses and tips."
        },
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button and fill in the required information."
        },
        {
            question: "Do I need an account to place an order?",
            answer: "No, you can place an order as a guest, but creating an account allows for a smoother experience."
        },
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on 'Forgot Password' on the login page."
        }
    ];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <h4>{faq.question}</h4>
                        <span className={"faq-opener-closer"}>{activeIndex === index ? ' ▲ ' : ' ▼ '}</span>
                    </div>
                    {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                    <hr className={"gradient-line"} />
                </div>
            ))}

        </div>
    );
};

export default FAQ;
