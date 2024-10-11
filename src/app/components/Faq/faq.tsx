// components/FAQ.tsx
'use client';
import { useState } from 'react';
import './faq.css';
import Image from "next/image";
import arrowUp from "@/app/assets/images/Faq/arrow-up.svg";
import arrowDown from "@/app/assets/images/Faq/arrow-down.svg";

// interface for ts types
interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Estado con tipo explícito

    const faqs: FAQItem[] = [ // Array de FAQs con tipo
        {
            question: "1. What is FutureSpace?",
            answer: "FutureSpace is an online platform offering a wide range of products. We provide high-quality items at competitive prices with seamless shopping experiences. We don't just sell, we learn, create, and share knowledge through artist-led courses and tips."
        },
        {
            question: "2. How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button and fill in the required information."
        },
        {
            question: "3. Do I need an account to place an order?",
            answer: "No, you can place an order as a guest, but creating an account allows for a smoother experience."
        },
        {
            question: "4. How do I reset my password?",
            answer: "You can reset your password by clicking on 'Forgot Password' on the login page."
        }
    ];

    const toggleFAQ = (index: number) => { // Type for index
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <h4>{faq.question}</h4>
                        <span className={"faq-opener-closer"}>
                            {activeIndex === index
                                ? <Image src={arrowUp} alt={'Open'} width={17} height={8} />
                                : <Image src={arrowDown} alt={'Open'} width={17} height={8} />}
                        </span>
                    </div>
                    {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                    <hr className={"gradient-line"} />
                </div>
            ))}
        </div>
    );
};

export default FAQ;
