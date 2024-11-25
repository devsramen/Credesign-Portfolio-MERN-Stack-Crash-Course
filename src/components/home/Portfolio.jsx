import { Fragment } from "react";

const Portfolio = () => {
    return (
        <Fragment>
            <section id="portfolio">
                <div className="container">
                    <p className="sectionSubTitle">My Resume</p>
                    <h2 className="sectionTitle">10+ YEARS OF EXPERIENCE</h2>
                    <div className="dFlex">
                        <a href="#"><img src="../../../public/images/portfolioImage-1.svg" alt="portfolioImage" /></a>
                        <a href="#"><img src="../../../public/images/portfolioImage-2.svg" alt="portfolioImage" /></a>
                        <a href="#"><img src="../../../public/images/portfolioImage-3.svg" alt="portfolioImage" /></a>
                        <a href="#"><img src="../../../public/images/portfolioImage-4.svg" alt="portfolioImage" /></a>
                        <a href="#"><img src="../../../public/images/portfolioImage-5.svg" alt="portfolioImage" /></a>
                        <a href="#"><img src="../../../public/images/portfolioImage-6.svg" alt="portfolioImage" /></a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Portfolio;