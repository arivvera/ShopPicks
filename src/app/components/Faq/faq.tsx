// components/FAQ.tsx
'use client';
import { useState } from 'react';
import './faq.css';
import Image from "next/image";
import arrowUp from "@/app/assets/images/Faq/arrow-up.svg";
import arrowDown from "@/app/assets/images/Faq/arrow-down.svg";
import {faqs} from './sampleFaqs';


interface FAQProps {
    activeIndex: number | null;
}
const FAQ: React.FC<FAQProps> = ({ activeIndex }) => {

    const [currentActiveIndex, setCurrentActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setCurrentActiveIndex(currentActiveIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs[activeIndex || 0]?.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <h4>{faq.question}</h4>
                        <span className={"faq-opener-closer"}>
                               {currentActiveIndex === index
                                   ? <Image src={arrowUp} alt={'Open'} width={17} height={8} />
                                   : <Image src={arrowDown} alt={'Open'} width={17} height={8} />
                               }
                        </span>
                    </div>
                    <p className="faq-answer">{currentActiveIndex === index ? faq.answer : null}</p>
                    <hr className={"gradient-line"} />
                </div>
            ))}
        </div>
    );
};


export default FAQ;
