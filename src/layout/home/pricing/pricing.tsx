import Link from "next/link";
import styles from "./pricing.module.css";
import checkIcon from "@/app/assets/images/home/check.svg";
import Image from "next/image";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";

const PricingPlan = ({
    title, price, benefits, cta
} : {
    title: string, price: string, benefits: string[], cta: string
}) => {
    return (
        <BorderWrapper borderSize={4} borderColor="linear-gradient(180deg, #9A299A 0%, #FD9E17 100%)">
            <div className={`${styles["pricing-plan"]}`}>
                <div className={styles["pricing-plan-title"]}>
                    <p>
                        {title}
                    </p>    
                </div>
                <div className={styles["pricing-plan-price"]}>
                    <p>
                        {price}
                    </p>
                </div>
                <div className={styles["pricing-plan-benefits"]}>
                    <ul>
                        {
                            benefits.map((benefit, index) => (
                                <li key={index}>
                                    <Image src={checkIcon} alt={"check icon"} width={16} height={12} />
                                    <p>
                                        {benefit}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles["pricing-plan-cta"]}>
                    <Link href={"/"}>
                        {cta}
                    </Link>
                </div>
            </div>
        </BorderWrapper>
    );
}

export default function Pricing() {
    return (
        <div className={styles["pricing-container"]}>
            <div className={`${styles.pricing} frame-container`}>
                <div className={styles["pricing-content"]}>
                    <div className={`${styles["pricing-title"]} gradient-text-3`}>
                        <p>
                            Pricing
                        </p>
                    </div>
                    <div className={styles["pricing-text"]}>
                        <p>
                            We have a plan tailored to your needs. Explore our pricing tiers below and embark on your path to creating stunning, sustainable spaces
                        </p>
                    </div>
                    <div className={styles["pricing-cta"]}>
                        <Link href={"/"}>
                            Explore our courses
                        </Link>
                    </div>
                </div>
                <div className={styles["pricing-plans"]}>
                    <PricingPlan 
                        title={"Basic Explorer"}
                        price={"$19.99/mo"}
                        benefits={[
                            "Access to all courses",
                            "Unlimited course completion",
                            "Community support",
                            "Certificate of completion",
                            "Personalized learning path"
                        ]}
                        cta={"Join Now"}
                    />
                    <PricingPlan 
                        title={"Premium Creator"}
                        price={"$29.99/mo"}
                        benefits={[
                            "All features of Basic Explorer",
                            "Advanced course creation tools",
                            "Premium course creation tools",
                            "Priority support",
                            "Access to exclusive content"
                        ]}
                        cta={"Start Creating"}
                    />
                </div>
            </div>
        </div>
    );
}