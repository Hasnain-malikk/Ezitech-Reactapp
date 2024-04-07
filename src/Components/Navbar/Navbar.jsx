import React from "react";
import "./Navbar.css";
// import fb from '../Assets/facebook.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneFlip,
    faLocationDot,
    faClock,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBehance,
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="top">
                <span>
                    <span className="icons">
                        <FontAwesomeIcon icon={faPhoneFlip} />
                    </span>
                    <span>+92 3455555396</span>
                </span>
                <span>
                    <span className="icons">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <span>Office #304-B Amna Plaza, Rawalpindi, Pakistan</span>
                </span>
                <span>
                    <span className="icons">
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span>Mon - Fri 8.00 - 20.00</span>
                </span>
                <span className="social-icon">
                    <span>
                        <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="https://www.facebook.com/ezitech"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </span>
                    <span>
                        <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="https://instagram.com/ezitechpk/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </span>
                    <span>
                        <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="https://www.behance.net/ezitech"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faBehance} />
                        </a>
                    </span>
                    <span>
                        <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="https://www.linkedin.com/company/ezitechpk/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </span>
                    <span>
                        <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </span>
                </span>
                <span>
                    <span className="icons">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <a className="icons" style={{ color: "white", textDecoration: "none" }} href="/">
                        <span>Login</span>
                    </a>
                    <span className="icons" style={{color:"darkgray"}} >|</span>
                    <a className="icons" style={{ color: "white", textDecoration: "none" }} href="">
                        <span>Register</span>
                    </a>
                </span>
            </div>
            <div className="bottom">hi im bottom</div>
        </div>
    );
};

export default Navbar;
