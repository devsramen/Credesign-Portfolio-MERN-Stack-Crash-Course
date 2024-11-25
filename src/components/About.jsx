import { Fragment } from "react";

const About = () => {
    return (
        <Fragment>
            <section id="about">
                <div className="container">
                    <div className="dFlex">
                        <div className="aboutLeft">
                            <img src="../../public/images/aboutImage.svg" alt="About Image" />
                        </div>
                        <div className="aboutRight">
                            <p className="sectionSubTitle">About Me</p>
                            <h2 className="sectionTitle">I Can Design Anything You Want</h2>
                            <p className="aboutPara">
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                            </p>
                            <div className="aboutProjectExp">
                                <div className="aboutItem">
                                    <img src="../../public/images/aboutIcon-1.svg" alt="About Icon" />
                                    <div>
                                        <span>350+</span>
                                        <h3>Complete Project</h3>
                                    </div>
                                </div>
                                <div className="aboutItem">
                                    <img src="../../public/images/aboutIcon-2.svg" alt="About Icon" />
                                    <div>
                                        <span>350+</span>
                                        <h3>Year of experience</h3>
                                    </div>
                                </div>
                            </div>
                            <a href="../../public/documents/MY CV.pdf" target="_blank" className="commonBtn">Download My CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default About;