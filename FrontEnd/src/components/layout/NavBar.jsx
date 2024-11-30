import {Fragment} from "react";

const NavBar = () => {
    return (
        <Fragment>
            <nav id="nav">
                <div className="container">
                    <div className="navWrapper">
                        <a href="/"><img src="./public/images/Logo.svg" alt="Logo" width="135" height="auto"/></a>
                        <ul className="dFlex">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">about</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a href="/resume">Resume</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/testimonial">Testimonial</a></li>
                            <li><a href="/blogs">blogs</a></li>
                        </ul>
                        <a href="/contactUs" className="commonBtn">Contact Us</a>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavBar;