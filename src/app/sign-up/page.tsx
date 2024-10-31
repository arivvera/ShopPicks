import Image from "next/image";
import styles from "./page.module.css";
import perkDiscountIcon from "@/app/assets/images/sign-up/perk-discount-icon.svg";
import perkFreeDelivery from "@/app/assets/images/sign-up/perk-free-delivery-icon.svg";
import perkFreeRefund from "@/app/assets/images/sign-up/perk-free-refund-icon.svg";
import googleIcon from "@/app/assets/images/sign-up/google-icon.svg";
import perksSeparator from "@/app/assets/images/sign-up/perks-separator.svg";
import Link from "next/link";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";

const Perk = ({
    image,
    name,
    description,
} : {
    image: string,
    name: string,
    description: string,
}) => {
    return <div className={styles.perk}>
        <div className={styles["perk-icon"]}>
            <Image src={image} alt="" />
        </div>
        <div className={styles["perk-name"]}>
            <p>
                {name}
            </p>
        </div>
        <div className={styles["perk-description"]}>
            <p>
                {description} 
            </p>
        </div>
    </div>;
}

const PerkSeparator = () => {
    return (
        <>
            <Image src={perksSeparator} alt=""/>
        </>
    );
}

export default function SignUp() {
    return (
        <div className={styles.container}>
            <div className={`${styles.page} frame-container`}>
                <div className={styles.title}>
                    <p>
                        Create your account and start shopping today!
                    </p>
                </div>
                <div className={styles.perks}>
                    <Perk image={perkDiscountIcon} name={"25% discount"} description={"First order"}/>
                    <PerkSeparator />
                    <Perk image={perkFreeDelivery} name={"Free delivery"} description={"First order"}/>
                    <PerkSeparator />
                    <Perk image={perkFreeRefund} name={"Free refund"} description={"With conditions"}/>
                </div>
                <div className={styles["form"]}>
                    <div className={`${styles["form-field"]} ${styles["form-field-email"]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="text" placeholder="Enter a mail address "/>
                        </BorderWrapper>
                    </div>
                    <div className={`${styles["form-field"]} ${styles["form-field-password"]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="text" placeholder="Create a Password"/>
                        </BorderWrapper>
                    </div>
                    <button type="submit">Sign Up</button>
                </div>
                <div className={styles["log-in-redirect"]}>
                    <p>
                        You already have an account?
                    </p>
                    <Link href="/log-in">Log in</Link>
                </div>
                <div className={styles["google-sign-up"]}>
                    <Link href="">
                        <Image src={googleIcon} alt=""/>
                        <p>
                            Sign Up with Google
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}