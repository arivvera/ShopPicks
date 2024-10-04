import React from 'react';
import '../../../../public/css/app.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <div>
            <section className="footer-section html-general">
                <div className="footer-block-paragraph">
                    <p>We are committed to offering products that are not just advanced but also aesthetically
                        captivating.
                        Our designs blend futuristic concepts with practical usability,
                        ensuring that every item is both visually stunning and highly functional.</p>
                    <p>© 2024. All rights reserved.</p>
                </div>
                <div className="footer-group-blocks">
                    <div className="footer-group-item">
                        <p>Home</p>
                        <p>Our products</p>
                        <p>Courses</p>
                        <p>About Us</p>
                        <p>FAQ</p>
                    </div>
                    <div className="footer-group-item">
                        <p>Contact us</p>
                        <p>Service Terms</p>
                        <p>Privacy Policy</p>
                        <p>Log in</p>
                        <p>Sign up</p>
                    </div>
                    <div className="footer-group-item">
                        <p>Address</p>
                        <p>919 S. Main Street Snowflake, AZ 85937</p>
                        <p>Phones (775) 747-7258</p>
                        <div className="border-gradient social-network-icons">
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

            </section>

        </div>
    );
};

export default Footer;
