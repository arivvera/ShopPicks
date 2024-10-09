import Link from "next/link";
import styles from "./products.module.css";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";

export default  function Products() {
  return (
    <div className={styles["products-container"]}>
        <div className={`${styles["products"]} frame-container`}>
            <div className={styles["products-title"]}>
                <p>
                    Our product lines are exclusive
                </p>
            </div>
            <div className={styles["products-text"]}>
                <p>
                    Our team is dedicated to providing a seamless shopping experience. 
                </p>
            </div>
            <div className={styles["navbar"]}>
                <div className={styles["navbar-links"]}>
                    <div className={`${styles["navbar-link"]} ${styles["navbar-link-all-products"]}`}>
                        <BorderWrapper borderSize={2} borderColor={"linear-gradient(102.77deg, #9041F5 10.44%, #FD9E17 92.27%)"}>
                            <Link href={"/"}>All products</Link>
                        </BorderWrapper>
                    </div>
                    <div className={styles["navbar-link"]}>
                        <Link href={"/"}>Latest</Link>    
                    </div>
                    <div className={styles["navbar-link"]}>
                        <Link href={"/"}>Best seller</Link>
                    </div>
                    <div className={styles["navbar-link"]}>
                        <Link href={"/"}>Hot sale</Link>
                    </div>
                </div>
            </div>

            {/* Carousel */}
        </div>

    </div>
  );
}