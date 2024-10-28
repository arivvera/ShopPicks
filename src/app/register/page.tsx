'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import "../globals.css"
import styles from "./page.module.css"
import SignUpAuth0 from "@/app/finish-sign-up/page";

const Register = () => {
    const { user } = useUser();

    if (!user) {
        return (
            <div className={styles["unauthorized"]}>You are not logged in :(</div>
        );
    }

    return (
        <>
            <SignUpAuth0 />
        </>
    );
};

export default Register;
