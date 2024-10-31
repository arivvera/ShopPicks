import styles from "./story.module.css";
import Image from "next/image";
import astronaut from "@/app/assets/images/about-us/astronaut.png"

export default function Story() {
    return (
        <div className={styles["story-container"]}>
            <div className={`${styles["story"]} frame-container`}>
                <div className={styles["story-content"]}>
                    <div className={`${styles["story-title"]} gradient-text-1`}>
                        <p>
                            Our story
                        </p>
                    </div>
                    <div className={styles["story-text"]}>
                        <p>
                            Our journey began when our founder, Alex Nova, saw a gap in the market for products that weren’t just functional but also forward-thinking and visually stunning. Inspired by the rapid advancements in technology, he envisioned a brand that would allow people to embrace the future, today. What started as a small collection of unique gadgets has since grown into a vast marketplace of cutting-edge products that are designed to make life smarter, easier, and more stylish. 
                        </p>
                    </div>
                </div>
                <div className={styles["poster"]}>
                    <div className={styles["poster-image"]}>
                        <Image src={astronaut} alt={"astronaut"} height={647}/>
                    </div>
                    <div className={styles["poster-shapes"]}>
                        <div className={`${styles["poster-shape"]} ${styles["poster-shape-1"]}`}></div>
                        <div className={`${styles["poster-shape"]} ${styles["poster-shape-2"]}`}></div>
                        <div className={`${styles["poster-shape"]} ${styles["poster-shape-3"]}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}