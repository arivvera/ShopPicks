'use client'
import React from 'react';
import '../../app/globals.css';
import style from './welcome.module.css'
import {useUser} from "@auth0/nextjs-auth0/client";




const Welcome: React.FC = () => {
    const { user, isLoading } = useUser();
    return (
        <>
            {isLoading ? (
                <p className={style["right-locate"]}>Loading...</p>
            ) : user ? (
                <p className={style["right-locate"]}>Welcome, {user.name} !</p>
            ) : ''
            }

        </>
    );
};

export default Welcome;
