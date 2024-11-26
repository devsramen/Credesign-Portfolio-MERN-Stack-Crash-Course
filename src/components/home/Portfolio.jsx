import { Fragment } from "react";

const Portfolio = () => {
    const portfolioData = [
        {
            id: 1,
            img: "../../../public/images/portfolioImage-1.svg"
        },
        {
            id: 2,
            img: "../../../public/images/portfolioImage-2.svg"
        },
        {
            id: 3,
            img: "../../../public/images/portfolioImage-3.svg"
        },
        {
            id: 4,
            img: "../../../public/images/portfolioImage-4.svg"
        },
        {
            id: 5,
            img: "../../../public/images/portfolioImage-5.svg"
        },
        {
            id: 6,
            img: "../../../public/images/portfolioImage-6.svg"
        }
    ]
    return (
        <Fragment>
            <section id="portfolio">
                <div className="container">
                    <p className="sectionSubTitle">My Portfolio</p>
                    <h2 className="sectionTitle">VISIT MY PORTFOLIO</h2>
                    <div className="dFlex">
                        {
                            portfolioData.map((item)=>(
                                <a href="/" key={item.id}><img src={item.img} alt="portfolioImage" /></a>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Portfolio;