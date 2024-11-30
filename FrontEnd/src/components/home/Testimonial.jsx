import { Fragment } from "react";

const Testimonial = () => {
    const testimonialData = [
        {
            di: 1,
            img: "../../../public/images/Testimonial_Image-1.svg",
            title: "Siam Talukder",
            designation: "CTO, Xyz Group",
            details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old."
        },
        {
            di: 2,
            img: "../../../public/images/Testimonial_Image-2.svg",
            title: "ABM Shawon Islam",
            designation: "CEO, Abc Agency",
            details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old."
        },
        {
            di: 3,
            img: "../../../public/images/Testimonial_Image-3.svg",
            title: "Azmir Uddin Alif",
            designation: "Director, Techso",
            details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old."
        }
    ]
    return (
        <Fragment>
            <section id="testimonial">
                <div className="container">
                    <p className="sectionSubTitle">Testimonial</p>
                    <h2 className="sectionTitle">Client Feedback</h2>
                    <div className="dFlex">
                        {
                            testimonialData.map((item)=>(
                                <div className="testimonialCard" key={item.id}>
                                    <div className="testimonialHead">
                                        <img src={item.img} alt="Testimonial_Image" />
                                        <div>
                                            <h3 className="testimonialCardTitle">{item.title}</h3>
                                            <p className="testimonialCardPara">{item.designation}</p>
                                        </div>
                                    </div>
                                    <div className="testimonialBody">
                                        <p className="testimonialCardPara">{item.details}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Testimonial;