import { Fragment } from "react";

const Testimonial = () => {
    return (
        <Fragment>
            <section id="testimonial">
                <div className="container">
                    <p className="sectionSubTitle">Testimonial</p>
                    <h2 className="sectionTitle">Client Feedback</h2>
                    <div className="dFlex">
                        <div className="testimonialCard">
                            <div className="testimonialHead">
                                <img src="../../../public/images/Testimonial_Image-1.svg" alt="Testimonial_Image" />
                                <div>
                                    <h3 className="testimonialCardTitle">Siam Talukder</h3>
                                    <p className="testimonialCardPara">CTO, Xyz Group</p>
                                </div>
                            </div>
                            <div className="testimonialBody">
                                <p className="testimonialCardPara">“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                            </div>
                        </div>
                        <div className="testimonialCard">
                            <div className="testimonialHead">
                                <img src="../../../public/images/Testimonial_Image-2.svg" alt="Testimonial_Image" />
                                <div>
                                    <h3 className="testimonialCardTitle">ABM Shawon Islam</h3>
                                    <p className="testimonialCardPara">CEO, Abc Agency</p>
                                </div>
                            </div>
                            <div className="testimonialBody">
                                <p className="testimonialCardPara">“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                            </div>
                        </div>
                        <div className="testimonialCard">
                            <div className="testimonialHead">
                                <img src="../../../public/images/Testimonial_Image-3.svg" alt="Testimonial_Image" />
                                <div>
                                    <h3 className="testimonialCardTitle">Azmir Uddin Alif</h3>
                                    <p className="testimonialCardPara">Director, Techso</p>
                                </div>
                            </div>
                            <div className="testimonialBody">
                                <p className="testimonialCardPara">“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Testimonial;