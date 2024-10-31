import styles from "./values.module.css"
import BorderWrapper from "@/components/border-wrapper/border-wrapper";
import React from "react";
import Image from "next/image";
import coreValueTechnologyIcon from "@/app/assets/images/about-us/core-value-technology-icon.svg";
import coreValueCustomizationIcon from "@/app/assets/images/about-us/core-value-customization-icon.svg";
import coreValueInnovationIcon from "@/app/assets/images/about-us/core-value-innovation-icon.svg";
import coreValueQualityIcon from "@/app/assets/images/about-us/core-value-quality-icon.svg";
import coreValueSustainabilityIcon from "@/app/assets/images/about-us/core-value-sustainability-icon.svg";

const CoreValuesItem = ({
    icon, 
    name,
} : {
    icon: string, 
    name: string,
}) => {
    return (
        <div className={styles["core-values-item"]}>
            <div className={styles["core-values-item-icon"]}>
              <Image src={icon} alt={""} width={94}/>
            </div>
            <div className={styles["core-values-item-name"]}>
              <p>
                {name}
              </p>
            </div>
        </div>
    );
}

const Card = React.forwardRef(({ 
    cardHead, 
    cardBody 
} : { 
    cardHead: string; 
    cardBody: string 
}, ref: React.Ref<HTMLDivElement>) => {
    return (
        <BorderWrapper borderSize={3}>
            <div ref={ref} className={styles.card}>
                <div className={styles["card-header"]}>
                    <p>{cardHead}</p>
                </div>
                <div className={styles["card-body"]}>
                    <p>{cardBody}</p>
                </div>
            </div>
        </BorderWrapper>
    );
});

Card.displayName = 'Card';

export default function Values() {
    return (
        <div className={styles.container}>
            <div className={`${styles.values} frame-container`}>
                <div className={styles.cards}>
                    <Card 
                      cardHead="Our mission" 
                      cardBody="We empower people with cutting-edge technology that merges innovation with style, making the future accessible today. We aim to provide an exceptional shopping experience by offering products that enhance everyday life, delivering convenience, creativity, and excitement through advanced design and functionality." 
                    />
                    <Card 
                      cardHead="Our vision" 
                      cardBody="We pursue to become the world’s leading destination for futuristic products, continuously pushing the boundaries of technology and design. We strive to inspire a global community of forward-thinker s, connecting people with the tools they need to thrive in tomorrow’s world, today." 
                    />
                </div>
                <div className={styles["core-values"]}>
                    <div className={`${styles["core-values-header"]} gradient-text-1`}>
                        <p>
                            Our core values
                        </p>
                    </div>
                    <div className={styles["core-values-items"]}>
                        <CoreValuesItem icon={coreValueTechnologyIcon} name="Technology"/>
                        <CoreValuesItem icon={coreValueQualityIcon} name="Quality"/>
                        <CoreValuesItem icon={coreValueCustomizationIcon} name="Customization"/>
                        <CoreValuesItem icon={coreValueInnovationIcon} name="Innovation"/>
                        <CoreValuesItem icon={coreValueSustainabilityIcon} name="Sustainability"/>
                    </div>
                </div>
            </div>
        </div>
    );
}