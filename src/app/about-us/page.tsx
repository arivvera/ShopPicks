import Story from "@/layout/about-us/story/story";
import styles from "./page.module.css"
import Values from "@/layout/about-us/values/values";
import Reputation from "@/layout/about-us/reputation/reputation";
import Team from "@/layout/about-us/team/team";
import OpinionBox from "../components/OpinionBox/OpinionBox";
import MailList from "@/layout/home/mail-list/mail-list";

export default function AboutUs () {
    return (
        <div className={styles["about-us-container"]}>
            <div className={styles["about-us"]}>
                <Story />
                <Values />
                <Team />
                <Reputation />
                <OpinionBox />
                <MailList />
            </div>
        </div>
    );
}