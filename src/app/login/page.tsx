
import React from 'react';
import '../globals.css';
import styles from './page.module.css'

const Login: React.FC = ()=>{
    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['title-section']}>
                    <h1>Welcome back!</h1>
                    <h1>Log in to your account</h1>
                </div>

                <div className={styles['promo-section']}>

                    <div className={styles['promo-block']}>
                        <div className={styles['discount-first-img']} />
                        <div className={styles['promo-block-text']}>
                            <strong>25% discount</strong>
                            <p>First order</p>
                        </div>


                    </div>

                    <div className={styles['separator-img']} />

                    <div className={styles['promo-block']}>
                        <div className={styles['free-delivery-img']} />
                        <div className={styles['promo-block-text']}>
                            <strong>Free delivery</strong>
                            <p>First order</p>
                        </div>
                    </div>

                    <div className={styles['separator-img']} />

                    <div className={styles['promo-block']}>
                        <div className={styles['free-refund-img']} />
                        <div className={styles['promo-block-text']}>
                            <strong>Free refund</strong>
                            <p>With conditions</p>
                        </div>

                    </div>
                </div>

                <div id={"loginForm"} className={styles["login-form"]}>
                    <div>
                        <input id={"mail"} type={"text"} className={styles["login-input"]} placeholder={"Enter your mail address"}/>
                    </div>
                    <div>
                        <input id={"password"} className={styles["login-input"]} type={"password"} placeholder={"Password"}/>
                    </div>
                    <div className={styles["forgot-password-link"]}>
                        <a href={"#"}>Forgot your password?</a>
                    </div>
                    <div>
                        <button id={"submitter"} className={styles["login-submit-button"]} type={"submit"}>Log in</button>
                    </div>

                    <div className={styles["sign-up-text"]}>
                        <p>Don&#39;t you have an account? <span><a> Sign up</a></span></p>
                    </div>
                    <div>
                        <div id={"googleSubmitter"} className={styles["google-submit-button"]}>
                            <div className={styles["google-icon"]}></div> Log with google
                        </div>
                    </div>
                </div>

            </div>
        </>
    );


}
export default Login;