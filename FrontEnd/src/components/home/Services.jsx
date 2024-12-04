 import { Fragment } from "react";

const Services = () => {
    const serviceCardData = [
        {
            id: 1,
            serviceCardImg : "../../../public/images/serviceIcon-1.svg",
            serviceCardHead: "UI/UX Design",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 2,
            serviceCardImg : "../../../public/images/serviceIcon-2.svg",
            serviceCardHead: "Mobile App",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 3,
            serviceCardImg : "../../../public/images/serviceIcon-3.svg",
            serviceCardHead: "Graphic Design",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 4,
            serviceCardImg : "../../../public/images/serviceIcon-4.svg",
            serviceCardHead: "Web Developer",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 5,
            serviceCardImg : "../../../public/images/serviceIcon-5.svg",
            serviceCardHead: "SEO Optimisation",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 6,
            serviceCardImg : "../../../public/images/serviceIcon-6.svg",
            serviceCardHead: "WordPress Developer",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 7,
            serviceCardImg : "../../../public/images/serviceIcon-7.svg",
            serviceCardHead: "App Development",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id: 8,
            serviceCardImg : "../../../public/images/serviceIcon-8.svg",
            serviceCardHead: "Business Strategy",
            serviceCardDetails: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
    ]
    return (
        <Fragment>
            <section id="service">
            <div className="container">
                <p className="sectionSubTitle">My Service</p>
                <h2 className="sectionTitle">Services I offer</h2>
                <div className="dFlex">
                    {
                        serviceCardData.map((item)=>(
                            <div className="serviceCard" key={item.id}>
                                <div className="serviceCardHead">
                                    <img src={item.serviceCardImg} alt="ServiceIcon" />
                                </div>
                                <div className="serviceCardBody">
                                    <h4>{item.serviceCardHead}</h4>
                                    <p>{item.serviceCardDetails}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-1.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>UI/UX Design</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-2.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>Mobile App</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-3.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>Graphic Design</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-4.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>Web Developer</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-5.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>SEO Optimisation</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-6.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>WordPress Developer</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-7.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>App Development</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceCardHead">
                            <img src="../../../public/images/serviceIcon-8.svg" alt="ServiceIcon" />
                        </div>
                        <div className="serviceCardBody">
                            <h4>Business Strategy</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            </section>
        </Fragment>
    );
};

export default Services;