import Image from "next/image";
import styles from "./background-stars.module.css"
import startsUpperLeft from "@/app/assets/images/stars-upper-left.png";
import startsUpperRight from "@/app/assets/images/stars-upper-right.png";

export default function BackgroundStars() {
  return (
    <div className={styles["background-stars"]}>
      <div className={`${styles["stars"]} ${styles["stars-upper-left"]}`}>
        <Image src={startsUpperLeft} alt="stars upper left" width={620.19} />
      </div>
      <div className={`${styles["stars"]} ${styles["stars-upper-right"]}`}>
        <Image src={startsUpperRight} alt="stars upper right" width={620.19} />
      </div>
    </div>
  );
}