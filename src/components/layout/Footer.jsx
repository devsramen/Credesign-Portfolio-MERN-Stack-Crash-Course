import {Fragment} from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
    return (
        <Fragment>
            <footer id="footer">
                <div className="footerUpper">
                    <div className="container">
                        <div className="dFlex">
                        <div className="footerUpperContent">
                            <a href="../../pages/HomePage.jsx">
                                <img src="../../../public/images/FooterLogo.svg" alt="FooterLogo" />
                            </a>
                            <p className="footerPara">
                                At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati 
                            </p>
                            <h4>credesign@gmail.com</h4>
                        </div>
                        <ul className="footerUpperContentLink">
                            <li>Explore Link</li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <ul className="footerUpperContentLink">
                            <li>My Services</li>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">Graphics Design</a></li>
                            <li><a href="#">Web Developer</a></li>
                        </ul>
                        <ul className="footerUpperContentLink">
                            <li>Follow me</li>
                            <li>
                                <a href="#"><FaFacebookF className="footerSocialIcon"/></a>
                                <a href="#"><FaTwitter className="footerSocialIcon"/></a>
                                <a href="#"><FaGlobe className="footerSocialIcon"/></a>
                                <a href="#"><FaBehance className="footerSocialIcon"/></a>
                            </li>
                            <li>
                                <IoLocationOutline className="footerLocation"/><span>202 Dog Hill Lane Beloit, <br/>KS 67420</span>
                            </li>
                            <li>
                                <FaPhoneVolume className="footerLocation"/><span>1-800-915-6270</span>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                </div>
                <div className="footerLower">
                    <div className="container">
                        <div className="footerLowerContent">
                            <p>All rights reserved</p>
                            <div className="footerLowerContentRight">
                                <p>Terms & Condition</p>
                                <p>Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;