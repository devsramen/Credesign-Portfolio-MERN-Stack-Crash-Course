import { Fragment } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
        <Fragment>
            <section id="contact">
                <div className="container">
                    <p className="sectionSubTitle">My Contact</p>
                    <h2 className="sectionTitle">I WANT TO HEAR FROM YOU</h2>
                    <div className="dFlex">
                        <div className="contactLeft">
                            <form action="#">
                                <input type="text" name="name" id="userName" placeholder="Your Name"/>
                                <input type="email" name="name" id="userEmail" placeholder="Your E-mail"/>
                                <input type="number" name="name" id="userPhone" placeholder="Your Phone"/>
                                <input type="text" name="name" id="userText" placeholder="Subject"/>
                                <textarea id="userMessage" placeholder="Your massage"></textarea>
                                <button type="submit" className="commonBtn">Send Me Message</button>
                            </form>
                        </div>
                        <div className="contactRight">
                            <div className="contactRightInfo">
                                <IoLocationOutline className="contactIcon"/>
                                <div>
                                    <h3 className="contactHeading">Address</h3>
                                    <p>202 Dog Hill Lane Beloit, KS 67420</p>
                                </div>
                            </div>
                            <div className="contactRightInfo">
                                <FaPhoneAlt className="contactIcon"/>
                                <div>
                                    <h3 className="contactHeading">Phone</h3>
                                    <p>xx xxxxx xx xx xx</p>
                                </div>
                            </div>
                            <div className="contactRightInfo">
                                <CiMail className="contactIcon"/>
                                <div>
                                    <h3 className="contactHeading">Email</h3>
                                    <p>credesign@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;