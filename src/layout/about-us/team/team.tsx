import styles from "./team.module.css";
import Image, { StaticImageData } from "next/image";
import teamMember1 from "@/app/assets/images/about-us/team-member-1.png";
import teamMember2 from "@/app/assets/images/about-us/team-member-2.png";
import teamMember3 from "@/app/assets/images/about-us/team-member-3.png";
import teamMember4 from "@/app/assets/images/about-us/team-member-4.png";
import teamMember5 from "@/app/assets/images/about-us/team-member-5.png";
import teamMember6 from "@/app/assets/images/about-us/team-member-6.png";
import teamMember7 from "@/app/assets/images/about-us/team-member-7.png";
import teamMember8 from "@/app/assets/images/about-us/team-member-8.png";

const TeamMemberCard = ({
    imageSrc,
    name,
    role
} : {
    imageSrc: StaticImageData,
    name: string,
    role: string
}) => {
    return (
        <div className={styles["team-member-card"]}>
            <div className={styles["team-member-card-image"]}>
                <Image src={imageSrc} alt="" height={318}/>
            </div>
            <div className={styles["team-member-card-role"]}>
                <p>{role}</p>
            </div>
            <div className={styles["team-member-card-name"]}>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default function Team () {
    return (
        <div className={styles["team-container"]}>
            <div className={`${styles["team"]} frame-container`}>
                <div className={`${styles["team-title"]} gradient-text-1`}>
                    <p>Meet the team</p>
                </div>
                <div className={styles["team-members"]}>
                    <div className={styles["team-members-a"]}>
                        <TeamMemberCard imageSrc={teamMember1} role="CEO" name="Alex Nova" />
                        <TeamMemberCard imageSrc={teamMember2} role="CMO" name="Michael Carter"/>
                        <TeamMemberCard imageSrc={teamMember3} role="CTO" name="Ethan Brooks "/>
                        <TeamMemberCard imageSrc={teamMember4} role="Inventory Management" name="Jessica Nguyen"/>
                    </div>
                    <div className={styles["team-members-b"]}>
                        <TeamMemberCard imageSrc={teamMember5} role="Marketing Manager" name="Emily Clarke"/>
                        <TeamMemberCard imageSrc={teamMember6} role="Head of Logistics" name="David Rodriguez"/>
                        <TeamMemberCard imageSrc={teamMember7} role="Photographer" name="Sophia Mitchell"/>
                        <TeamMemberCard imageSrc={teamMember8} role="Data Analyst" name="Daniel Foster"/>
                    </div>
                </div>
                <div className={styles["background-shapes"]}>
                    <div className={`${styles["background-shape"]} ${styles["background-shape-1"]}`}></div>
                    <div className={`${styles["background-shape"]} ${styles["background-shape-2"]}`}></div>
                    <div className={`${styles["background-shape"]} ${styles["background-shape-3"]}`}></div>
                    <div className={`${styles["background-shape"]} ${styles["background-shape-4"]}`}></div>
                    <div className={`${styles["background-shape"]} ${styles["background-shape-5"]}`}></div>
                </div>
            </div>
        </div>
    );
}