import styles from "./page.module.css"
import Image from "next/image";
import contactInfoEmailIcon from "@/app/assets/images/contact-us/contact-info-email-icon.svg";
import contactInfoPhone from "@/app/assets/images/contact-us/contact-info-phone-icon.svg";
import contactInfoLocation from "@/app/assets/images/contact-us/contact-info-location-icon.svg";

const ContactInfoItem = ({
    image,
    description,
} : {
    image: string,
    description: string,
}) => {
    return (
        <div className={styles["contact-info-item"]}>
            <div className={styles["contact-info-item-icon"]}>
                <Image src={image} alt=""/>
            </div>
            <div className={styles["contact-info-item-text"]}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function ContactUs() {
    return (
        <div className={styles.container}>
            <div className={`${styles["contact-us"]} frame-container`}>   
                <div className={styles["contact-us-content"]}>
                    <div className={`${styles["contact-us-title"]} gradient-text-4`}>
                        <p>Feel free to</p>
                        <p>contact us!</p>
                    </div>
                    <div className={styles["contact-us-text"]}>
                        <p>
                            If you have any questions, need assistance with your order, or want more information about our products, don’t hesitate to reach out. Our customer service team is dedicated to providing you with quick and efficient support.
                        </p>
                    </div>
                    <div className={styles["contact-info"]}>
                        <ContactInfoItem image={contactInfoPhone} description="(775) 747-7258"/>
                        <ContactInfoItem image={contactInfoEmailIcon} description="info@futurespace.com"/>
                        <ContactInfoItem image={contactInfoLocation} description="919 S. Main Street Snowflake, AZ 85937"/>
                    </div>
                </div>
                <form className={styles["contact-form"]}>
                    <div className={styles["contact-form-name"]}>
                        <div className={`${styles["contact-form-field"]} ${styles["contact-form-first-name"]}`}>
                            <input type="text" name="first-name" placeholder="First name"/>
                        </div>
                        <div className={`${styles["contact-form-field"]} ${styles["contact-form-last-name"]}`}>
                            <input type="text" name="last-name" id="" placeholder="Last name"/>
                        </div>
                    </div>
                    <div className={`${styles["contact-form-field"]} ${styles["contact-form-email"]}`}>
                        <input type="text" name="email" placeholder="Your email"/>
                    </div>
                    <div className={styles["contact-form-phone-state"]}>
                        <div className={`${styles["contact-form-field"]} ${styles["contact-form-phone"]}`}>
                            <div className={styles["country-prefix"]}>
                                <p>1+</p>
                            </div>
                            <input type="text" name="phone" placeholder="Phone Number"/>
                        </div>
                        <div className={`${styles["contact-form-field"]} ${styles["contact-form-state"]}`}>
                            <input type="text" name="state" placeholder="State"/>
                        </div>
                    </div>
                    <div className={`${styles["contact-form-field"]} ${styles["contact-form-message"]}`}>
                        <textarea name="message" id="" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}