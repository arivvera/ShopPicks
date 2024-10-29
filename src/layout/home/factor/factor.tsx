import Image from "next/image";
import styles from "./factor.module.css";
import footNoteIcon from "@/app/assets/images/home/foot-note-icon.svg";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";
import React from "react";

const Card = React.forwardRef(({ 
    cardHeader, 
    cardBody 
} : { 
    cardHeader: string, 
    cardBody: string 
}, ref: React.Ref<HTMLDivElement>) => {
    return (
        <BorderWrapper borderSize={3}>
            <div ref={ref} className={styles["card"]}>
                <div className={styles["card-header"]}>
                    <p>{cardHeader}</p>
                </div>
                <div className={styles["card-body"]}>
                    <p>{cardBody}</p>
                </div>
            </div>
        </BorderWrapper>
    );
});

Card.displayName = 'FactorCard';

export default function Factor() {
  return (
    <div className={styles.container}>
        <div className={`${styles.factor} frame-container`}>
            <div className={styles["factor-header"]}>
                <p>
                    Our Differentiating factor
                </p>
            </div>
            <div className={styles.cards}>
                <Card 
                    cardHeader="Technology" 
                    cardBody="We create products that incorporate the latest technological advancements" 
                />
                <Card 
                    cardHeader="Customizations" 
                    cardBody="Bespoke offerings tailored to your tastes and preferences." 
                />
                <Card 
                    cardHeader="Sustainability" 
                    cardBody="We believe in a future where technology and sustainability go hand in hand" 
                />
            </div>

            <div className={styles["foot-note"]}>
                <BorderWrapper borderSize={3} >
                  <div className={styles["foot-note-icon"]}>
                      <Image src={footNoteIcon} alt="" width={40} height={41}/>
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