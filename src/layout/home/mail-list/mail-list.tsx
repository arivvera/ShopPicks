import styles from './mail-list.module.css';

export default function MailList() {
    return (
        <div className={styles["mail-list-container"]}>
            <div className={`${styles["mail-list"]} frame-container` }>
                <div className={styles["mail-list-title"]}>
                    <p>
                        Let’s  stay in touch
                    </p>
                </div>
                <div className={styles["mail-list-text"]}>
                    <p>
                        Enjoy 15% off your first buy when you join our mailing list!
                    </p> 
                </div>
                <div className={styles["mail-list-form"]}>
                    <form action="">
                        <input type="email" placeholder='Enter your mail address'/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}