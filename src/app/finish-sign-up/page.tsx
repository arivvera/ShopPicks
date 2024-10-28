'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import perkDiscountIcon from "@/app/assets/images/sign-up/perk-discount-icon.svg";
import perkFreeDelivery from "@/app/assets/images/sign-up/perk-free-delivery-icon.svg";
import perkFreeRefund from "@/app/assets/images/sign-up/perk-free-refund-icon.svg";
import perksSeparator from "@/app/assets/images/sign-up/perks-separator.svg";
import Link from "next/link";
import BorderWrapper from "@/components/border-wrapper/border-wrapper";
import NavbarLink from "@/layout/navbar-link/navbar-link";

interface PerkProps {
    image: string;
    name: string;
    description: string;
}

const Perk: React.FC<PerkProps> = ({ image, name, description }) => {
    return (
        <div className={styles.perk}>
            <div className={styles[""]}>
                <Image src={image} alt="" />
            </div>
            <div className={styles["perk-name"]}>
                <p>{name}</p>
            </div>
            <div className={styles["perk-description"]}>
                <p>{description}</p>
            </div>
        </div>
    );
};

const PerkSeparator: React.FC = () => {
    return <Image src={perksSeparator} alt="" />;
};

interface FormData {
    fullName: string;
    email: string;
    id: string; //in case to use UUID
    birthDate: string;
    gender: string;
    phone: string;
}

export default function SignUpAuth0() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        id: '',
        birthDate: '',
        gender: '',
        phone: ''
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const baseUrl = process.env.NEXT_PUBLIC_API_SHOPPICKS_BASE_URL;
        const customerUrl = process.env.NEXT_PUBLIC_API_SHOPPICKS_CUSTOMER_URL;
        const url = `${baseUrl}${customerUrl}/register`;
        console.log('URL '+url);
        console.log({formData});

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Network response was not ok: ${errorData.message}`);
            }
            console.table({response});
            const data = await response.json();
            console.log('Success:', data);

        } catch (error: unknown) { console.log(error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('unexpected error');
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.page} frame-container`}>
                <div className={styles.title}>
                    <p>Finish your registration and start shopping today!</p>
                </div>
                <div className={styles.perks}>
                    <Perk image={perkDiscountIcon} name={"25% discount"} description={"First order"} />
                    <PerkSeparator />
                    <Perk image={perkFreeDelivery} name={"Free delivery"} description={"First order"} />
                    <PerkSeparator />
                    <Perk image={perkFreeRefund} name={"Free refund"} description={"With conditions"} />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <div className={`${styles[""]} ${styles[""]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="text" name="fullName" placeholder="Enter full name" onChange={handleChange} required />
                        </BorderWrapper>
                    </div>
                    <div className={`${styles[""]} ${styles[""]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
                        </BorderWrapper>
                    </div>
                    <div className={`${styles[""]} ${styles[""]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="text" name="identity" placeholder="Enter ID or passport number" onChange={handleChange} required />
                        </BorderWrapper>
                    </div>
                    <div className={`${styles[""]} ${styles[""]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="datetime-local" name="birthDate" onChange={handleChange} required />
                        </BorderWrapper>
                    </div>
                    <div className={`${styles[""]} ${styles[""]}`}>
                        <BorderWrapper borderSize={2}>
                            <select name="gender" onChange={handleChange} required>
                                <option value="" disabled >
                                    What is your gender?
                                </option>
                                {/** 1-Male 2-Female 3-Other **/}
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                                <option value={3}>Other</option>
                            </select>
                        </BorderWrapper>
                    </div>
                    <div className={`${styles[""]} ${styles[""]}`}>
                        <BorderWrapper borderSize={2}>
                            <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} required />
                        </BorderWrapper>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>

                <div className={styles["log-in-redirect"]}>
                    <p>You already have an account?</p>
                    <Link  href="/api/auth/login">Log in</Link>
                </div>
            </div>
        </div>
    );
}
