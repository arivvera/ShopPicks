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
    imageSrc, 
    name,
} : {
    imageSrc: string, 
    name: string,
}) => {
    return (
        <div className={styles["core-values-item"]}>
            <div className={styles["core-values-item-figure"]}>
                <Image src={imageSrc} alt={"core values item image"} width={94}/>
            </div>
            <div className={styles["core-values-item-name"]}>
                <p>
                    {name}
                </p>
            </div>
        </div>
    );
}

const OurValuesCard = React.forwardRef(({ 
    chartHead, 
    chartBody 
} : { 
    chartHead: string; 
    chartBody: string 
}, ref: React.Ref<HTMLDivElement>) => {
    return (
        <BorderWrapper borderSize={3}>
            <div ref={ref} className={styles["values-card"]}>
                <div className={styles["values-card-head"]}>
                    <p>{chartHead}</p>
                </div>
                <div className={styles["values-card-body"]}>
                    <p>{chartBody}</p>
                </div>
            </div>
        </BorderWrapper>
    );
});

OurValuesCard.displayName = 'OurValuesCard';

export default function Values() {
    return (
        <div className={styles["values-container"]}>
            <div className={`${styles["values"]} frame-container`}>
                <div className={styles["values-cards"]}>
                    <OurValuesCard 
                        chartHead="Our mission" 
                        chartBody="We empower people with cutting-edge technology that merges innovation with style, making the future accessible today. We aim to provide an exceptional shopping experience by offering products that enhance everyday life, delivering convenience, creativity, and excitement through advanced design and functionality." 
                    />
                    <OurValuesCard 
                        chartHead="Our vision" 
                        chartBody="We pursue to become the world’s leading destination for futuristic products, continuously pushing the boundaries of technology and design. We strive to inspire a global community of forward-thinkers, connecting people with the tools they need to thrive in tomorrow’s world, today." 
                    />
                </div>
                <div className={styles["core-values"]}>
                    <div className={`${styles["core-values-title"]} gradient-text-1`}>
                        <p>
                            Our core values
                        </p>
                    </div>
                    <div className={styles["core-values-items"]}>
                        <CoreValuesItem imageSrc={coreValueTechnologyIcon} name="Technology"/>
                        <CoreValuesItem imageSrc={coreValueQualityIcon} name="Quality"/>
                        <CoreValuesItem imageSrc={coreValueCustomizationIcon} name="Customization"/>
                        <CoreValuesItem imageSrc={coreValueInnovationIcon} name="Innovation"/>
                        <CoreValuesItem imageSrc={coreValueSustainabilityIcon} name="Sustainability"/>
                    </div>
                </div>
            </div>
        </div>
    );
}