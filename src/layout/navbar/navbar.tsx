"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./navbar.module.css";
import shoppingCartIcon from "@/app/assets/images/home/shopping-cart-icon.svg";
import wishListIcon from "@/app/assets/images/home/wishlist-icon.svg";
import NavbarLink from "../navbar-link/navbar-link";
import { useUser } from "@auth0/nextjs-auth0/client";

const LoginLink = () => {
  return (
    <NavbarLink href="/api/auth/login">
        Log in
    </NavbarLink>
  );
}

const SignupLink = () => {
  return (
    <div className={`${styles["navbar-link-sign-up"]}`}>
      <Link href={"/api/auth/signup"}>
        Sign up
      </Link>
    </div>
  );
}

const LogoutLink = () => {
  return (
    <div className={`${styles["navbar-link-logout"]}`}>
      <Link href={"/api/auth/logout"}>
        Log out
      </Link>
    </div>
  );
}

const UserInfoBanner = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="frame-container" style={{textAlign: "right", marginTop: "20px", marginRight: "25%"}}>
        { children}
    </div>
  );
}

export default function Navbar () {
    const {user, isLoading} = useUser();
    
    return (
      <div className={styles["navbar-container"]}>
          <nav className={`${styles.navbar} frame-container`}>
              <div className={styles["navbar-a"]}>
                  <div className={styles["navbar-logo"]}>
                      <Link href={"/"}> Lgo here </Link>
                  </div>
                  <div className={styles["navbar-links"]}>
                      <NavbarLink href="/">Home</NavbarLink>
                      <NavbarLink href="/our-products">Our products</NavbarLink>
                      <NavbarLink href="/courses">Courses</NavbarLink>
                      <NavbarLink href="/about-us">About Us</NavbarLink>
                      <NavbarLink href="/faq">FAQ</NavbarLink>
                      <NavbarLink href="/contact-us">Contact us</NavbarLink>
                      {
                         user ? (
                             <LogoutLink />
                         ) : (
                          <>
                            <LoginLink />
                            <SignupLink />
                          </>
                        )
                      }
                  </div>
              </div>

              <div className={styles["navbar-b"]}>
                  <Link href={"/"}>
                      <div className={styles["shopping-cart-button"]}>
                          <div className={styles["shopping-cart-icon"]}>
                              <Image src={shoppingCartIcon} alt={"shopping cart icon"} width={37.93} height={31.01} />
                          </div>
                          <div className={styles["shopping-cart-indicator"]}>
                              7
                          </div>
                      </div>
                  </Link>
                  <Link href={"/"}>
                      <div className={styles["wishlist-button"]}>
                          <div className={styles["wishlist-icon"]}>
                              <Image src={wishListIcon} alt={"wishlist icon"} width={19.97} height={18} />
                          </div>
                      </div>
                  </Link>
              </div>
          </nav>
          {
            user && isLoading && (
              <UserInfoBanner>
                <p>Loading...</p>
              </UserInfoBanner>
            )
          } {
            user ? (
              <UserInfoBanner>
                <p className={styles["hidden-item"]}>Welcome {user.name}!</p>
              </UserInfoBanner>
            ) : null
          }
      </div>
    )
};