import { Fragment } from "react";

const Partners = () => {
    return (
        <Fragment>
            <section id="partners">
                <div className="container">
                    <p className="sectionSubTitle">Testimonial</p>
                    <h2 className="sectionTitle">Client Feedback</h2>
                    <div className="dFlex">
                        <div className="partnerLogo">
                            <img src="../../../public/images/Partners-1.svg" alt="PartnerImage" />
                        </div>
                        <div className="partnerLogo">
                            <img src="../../../public/images/Partners-2.svg" alt="PartnerImage" />
                        </div>
                        <div className="partnerLogo">
                            <img src="../../../public/images/Partners-3.svg" alt="PartnerImage" />
                        </div>
                        <div className="partnerLogo">
                            <img src="../../../public/images/Partners-4.svg" alt="PartnerImage" />
                        </div>
                        <div className="partnerLogo">
                            <img src="../../../public/images/Partners-5.svg" alt="PartnerImage" />
                        </div>
                        <div className="partnerLogo">
                            <img src="../../../public/images/Partners-6.svg" alt="PartnerImage" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Partners;