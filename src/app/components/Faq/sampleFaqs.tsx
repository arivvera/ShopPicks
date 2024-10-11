// interface for ts types
interface FAQItem {
    question: string;
    answer: string;
}
export const faqs: FAQItem[][] = [
    [ // FAQs for General
        {
            question: "1. What is [Your Company Name]?",
            answer: "[Your Company Name] is an online platform offering a wide range of products, from [product category] to [product category]. We provide high-quality items at competitive prices with seamless shopping experiences."
        },
        {
            question: "2. How do I create an account?",
            answer: "Creating an account is simple. Click on the 'Sign Up' button on the top-right corner, fill in the required details, and you’re ready to start shopping!"
        },
        {
            question: "3. Do I need an account to place an order?",
            answer: "While having an account gives you access to exclusive offers and faster checkouts, you can also shop as a guest."
        },
        {
            question: "4. How do I reset my password?",
            answer: "To reset your password, click on 'Forgot Password' on the login page, and we’ll send you a link to reset it."
        }
    ],
    [ // FAQs for Orders & Payments
        {
            question: "1. What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and other secure payment methods."
        },
        {
            question: "2. How do I track my order?",
            answer: "Once your order is shipped, you will receive an email with the tracking number. You can also track your order from your account by visiting the 'Orders' section."
        },
        {
            question: "3. Can I modify or cancel my order?",
            answer: "You can modify or cancel your order within [X hours] of placing it. After that, it enters processing, and changes may not be possible."
        },
        {
            question: "4. Is it safe to use my credit card on your website?",
            answer: "Yes, your payment information is processed securely. We use SSL encryption to ensure your data is protected."
        },
        {
            question: "5. What currencies can I pay in?",
            answer: "We accept payments in [Currency 1], [Currency 2], and [Currency 3]. The currency will be automatically adjusted based on your location."
        }
    ],
    [ // FAQs for Shipping and Delivery
        {
            question: "1. How long will my order take to arrive?",
            answer: "Delivery times depend on your location and the shipping method you choose. Typically, orders are delivered within [X days] for standard shipping and [Y days] for express shipping."
        },
        {
            question: "2. Do you ship internationally?",
            answer: "Yes, we ship to most countries. International shipping rates and times vary based on location."
        },
        {
            question: "3. How much does shipping cost?",
            answer: "Shipping costs are calculated at checkout and depend on your location, the weight of the package, and the shipping option chosen."
        },
        {
            question: "4. What should I do if my order is delayed or lost?",
            answer: "If your order is delayed beyond the expected delivery date, please contact our customer support team, and we’ll assist you with tracking your package or arranging a replacement."
        }
    ],
    [ // FAQs for Returns and Refunds
        {
            question: "1. What is your return policy?",
            answer: "We accept returns within [X days] of delivery, provided the items are unused and in their original packaging. Visit our [Returns Page] for more details."
        },
        {
            question: "2. How do I initiate a return?",
            answer: "To initiate a return, log in to your account, go to your 'Orders' section, and select 'Request Return' next to the item you want to return."
        },
        {
            question: "3. How long does it take to process a refund?",
            answer: "Refunds are processed within [X days] after we receive the returned item. The refund will be issued to the original payment method."
        },
        {
            question: "4. What if I receive a damaged or incorrect item?",
            answer: "If you receive a damaged or incorrect item, contact our customer service within [X days], and we’ll arrange a replacement or refund."
        }
    ]
];