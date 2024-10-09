import styles from "./page.module.css";
import Header from "@/layout/home/header/header";
import Factors from "@/layout/home/factor/factor";
import Courses from "@/layout/home/courses/courses";
import Pricing from "@/layout/home/pricing/pricing";
import MailList from "@/layout/home/mail-list/mail-list";
import Products from "@/layout/home/products/products";
import BackgroundStars from "@/layout/home/background-stars/background-stars";

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles.home}>
        <BackgroundStars />
        <Header />
        <Factors />
        <Products />
        <Courses />
        <Pricing />
        <MailList />
      </div>
    </div>
  );
}