import Image from "next/image";
import styles from "./factor.module.css";
import footNoteIcon from "@/app/assets/images/home/foot-note-icon.svg";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";
import React from "react";

const FactorCard = React.forwardRef(({ 
    chartHead, chartBody 
} : { 
    chartHead: string; chartBody: string 
}, ref: React.Ref<HTMLDivElement>) => {
    return (
        <BorderWrapper borderSize={3} borderColor={"linear-gradient(112.12deg, #830DBA 6.85%, #FD9E17 94.58%)"}>
            <div ref={ref} className={styles["factor-card"]}>
                <div className={styles["factor-card-head"]}>
                    <p>{chartHead}</p>
                </div>
                <div className={styles["factor-card-body"]}>
                    <p>{chartBody}</p>
                </div>
            </div>
        </BorderWrapper>
    );
});

FactorCard.displayName = 'FactorCard';

export default function Factor() {
  return (
    <div className={styles["factor-container"]}>
        <div className={`${styles["factor"]} frame-container`}>
            <div className={styles["factor-title"]}>
                <p>
                    Our Differentiating factor
                </p>
            </div>
            <div className={styles["factor-cards"]}>
                <FactorCard 
                    chartHead="Technology" 
                    chartBody="We create products that incorporate the latest technological advancements" 
                />
                <FactorCard 
                    chartHead="Customizations" 
                    chartBody="Bespoke offerings tailored to your tastes and preferences." 
                />
                <FactorCard 
                    chartHead="Sustainability" 
                    chartBody="We believe in a future where technology and sustainability go hand in hand" 
                />
            </div>

            <div className={styles["foot-note"]}>
                <BorderWrapper borderSize={3} borderColor="linear-gradient(133.25deg, #9A299A 5.66%, #FD9E17 94.32%)">
                    <div className={styles["foot-note-icon"]}>
                        <Image src={footNoteIcon} alt="foot note icon" width={40} height={41}/>
                    </div>
                </BorderWrapper>
                <div className={styles["foot-note-text"]}>
                    <p>
                        We don’t just sell, we learn, create, and share knowledge through artist-led courses and tips.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}