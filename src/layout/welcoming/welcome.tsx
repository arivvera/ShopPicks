'use client'
import React from 'react';
import '../../app/globals.css';
import style from './welcome.module.css'
import {useUser} from "@auth0/nextjs-auth0/client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";

const Welcome: React.FC = () => {
    const { user, isLoading } = useUser();
    return (
        <>
            {isLoading ? (
                <p className={style["right-locate"]}>Loading...</p>
            ) : user ? (
                <p className={style["right-locate"]}>Welcome, {user.name}!
                    <a className={style["logout-link"]} href={'/api/auth/logout'}> Logout
                    <FontAwesomeIcon icon={faDoorOpen} size={"1x"} />
                    </a>
                </p>

            ) : ''
            }

        </>
    );
};

export default Welcome;
