import React from "react";
import styles from "./reputation.module.css";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";

const ReputationCard = React.forwardRef(({
    title,
    text,
} : {
    title: string,
    text: string,
}, ref: React.Ref<HTMLDivElement>) => {
    return (
        <BorderWrapper borderSize={4}>
            <div ref={ref} className={styles["reputation-card"]}>
                <div className={styles["reputation-card-title"]}>
                    <p>{title}</p>
                </div>
                <div className={styles["reputation-card-text"]}>
                    <p>{text}</p>
                </div>
            </div>
        </BorderWrapper>
    );
});

ReputationCard.displayName = "ReputationCard";

export default function Reputation() {
    return (
        <div className={styles["reputation-container"]}>
            <div className={`${styles["reputation"]} frame-container`}>
                <div className={`${styles["reputation-title"]} gradient-text-1`}>
                    <p>
                        Our reputation
                    </p>
                </div>
                <div className={styles["reputation-cards"]}>
                <div className={styles["reputation-cards-a"]}>
                    <ReputationCard title="25" text="talented professionals"/>
                    <ReputationCard title="98%" text="customer satisfaction rate"/>
                    <ReputationCard title="10,000+" text="products in stock"/>
                </div>
                <div className={styles["reputation-cards-b"]}>
                    <ReputationCard title="$100k" text="donated last year"/>
                    <ReputationCard title="90%" text="of packaging is ecofriendly"/>
                    <ReputationCard title="500,000+" text="products sold last year"/>
                </div>
                </div>
            </div>
        </div>
    );
}