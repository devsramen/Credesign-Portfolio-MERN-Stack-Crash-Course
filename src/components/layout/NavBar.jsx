import {Fragment} from "react";

const NavBar = () => {
    return (
        <Fragment>
            <nav id="nav">
                <div className="container">
                    <div className="navWrapper">
                        <img src="./public/images/Logo.svg" alt="Logo" width="135" height="auto"/>
                        <ul className="dFlex">
                            <li><a href="../../pages/HomePage.jsx">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">blog</a></li>
                        </ul>
                        <a href="#" className="navBtn">Contact Us</a>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavBar;