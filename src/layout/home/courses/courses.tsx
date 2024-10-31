import styles from "./courses.module.css";
import Image from "next/image";
import Link from "next/link";
import smilingGirl from "@/app/assets/images/home/smiling-girl.png";

export default function Courses() {
    return (
        <div className={`${styles["courses-container"]}`}>
            <div className={`${styles.courses} frame-container`}>
                <div className={styles["courses-content"]}>
                    <div className={`${styles["courses-title"]} gradient-text-2`}>
                        <p>
                            Course Offerings
                        </p>
                    </div>
                    <div className={styles["courses-text"]}>
                        <p>
                            Explore the Latest in Futuristic Tech Discover our range of advanced gadgets and accessories, designed to bring the future into your hands today. Shop now and elevate your lifestyle. 
                        </p>
                        <br/>
                        <p>
                            We are dedicated to pushing the boundaries of technology and design. Our mission is to provide you with the most innovative and stylish futuristic products available.
                        </p>
                    </div>
                    <div className={styles["courses-cta"]}>
                        <Link href={"/"}>Explore our courses</Link>
                    </div>
                </div>
                <div className={styles["poster"]}>
                    <div className={styles["poster-image"]}>
                        <Image src={smilingGirl} alt={"smiling girl"} height={773}/>
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