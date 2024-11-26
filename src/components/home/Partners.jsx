import { Fragment } from "react";

const Partners = () => {
    const partnersData = [
        {
            id: 1,
            img: "../../../public/images/Partners-1.svg"
        },
        {
            id: 2,
            img: "../../../public/images/Partners-2.svg"
        },
        {
            id: 3,
            img: "../../../public/images/Partners-3.svg"
        },
        {
            id: 4,
            img: "../../../public/images/Partners-4.svg"
        },
        {
            id: 5,
            img: "../../../public/images/Partners-5.svg"
        },
        {
            id: 6,
            img: "../../../public/images/Partners-6.svg"
        }
    ]
    return (
        <Fragment>
            <section id="partners">
                <div className="container">
                    <p className="sectionSubTitle">Partners</p>
                    <h2 className="sectionTitle">REPUTED PARTNER</h2>
                    <div className="dFlex">
                        {
                            partnersData.map((item)=>(
                                <div className="partnerLogo" key={item.id}>
                                    <img src={item.img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Partners;