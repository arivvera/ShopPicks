import React from 'react';
import '../../app/globals.css';
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="footer-block-paragraph">
                    <p>We are committed to offering products that are not just advanced but also aesthetically
                        captivating.
                        Our designs blend futuristic concepts with practical usability,
                        ensuring that every item is both visually stunning and highly functional.</p>
                    <br />
                    <p>© 2024. All rights reserved.</p>
                </div>
                <div className="footer-group-blocks">
                    <div className="footer-group-item">
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>

                        <p>Our products</p>
                        <p>Courses</p>
                        <Link href={"/about-us"}>
                        <p>About Us</p>
                        </Link>

                        <Link href={"/faq"}>
                        <p>FAQ</p>
                        </Link>
                    </div>
                    <div className="footer-group-item">
                        <p>Contact us</p>
                        <p>Service Terms</p>
                        <p>Privacy Policy</p>
                        <p>Log in</p>
                        <p>Sign up</p>
                    </div>
                    <div className="footer-group-item" style={{width: "40%"}}>
                        <p>Address</p>
                        <p>919 S. Main Street Snowflake, AZ 85937</p>
                        <p>Phones (775) 747-7258</p>


                        <div className="social-network-container">
                            <div className="social-network-icons">
                            <span className="social-network-icon"><a href="https://www.facebook.com/ntsprintllc">
                                <FontAwesomeIcon icon={faFacebookF} size={"1x"} />
                            </a></span>
                                <span><a href="https://www.linkedin.com/company/ntsprint/posts/?feedView=all">
                                <FontAwesomeIcon icon={faLinkedinIn} size={"1x"} />
                            </a></span>
                                <span className="hidden"><a href=""><i className="fa-brands fa-youtube"></i></a></span>
                                <span className="hidden"><a href=""><i className="fa-brands fa-twitter"></i></a></span>
                            </div>
                        </div>


                    </div>
                </div>

            </section>

        </div>
    );
};

export default Footer;
