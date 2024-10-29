'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";
import styles from "./page.module.css";
import SignUpAuth0 from "@/app/finish-sign-up/page";
import { getSigned } from "@/common/utils/verifyRegister";

const Register = () => {
    const { user } = useUser();
    const router = useRouter();
    const [alreadySigned, setAlreadySigned] = useState(null);

    useEffect(() => {
        const checkSignedStatus = async () => {
            if (user) {
                try {
                    const signed = await getSigned(user.email);
                    setAlreadySigned(signed);
                } catch (error) {
                    console.error('Error fetching signed status:', error);
                }
            }
        };

        checkSignedStatus();
    }, [user]);


    useEffect(() => {
        if (alreadySigned !== null) {
            if (alreadySigned) {
                router.push('/');
            }
        }
    }, [alreadySigned, router]);

    if (!user) {
        return (
            <div className={styles["unauthorized"]}>You are not logged in :(</div>
        );
    }

    if (alreadySigned === null) {
        return <div className={styles.loadingText}>Loading registration state...</div>;
    }

    return (
        <>
            <SignUpAuth0 />
        </>
    );
};

export default Register;
