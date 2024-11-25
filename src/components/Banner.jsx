import {Fragment} from "react";

const Banner = () => {
    return (
        <Fragment>
            <section id="banner">
                <div className="container">
                    <div className="dFlex">
                        <div className="bannerLeft">
                            <p className="sectionSubTitle">I AM DESIGNER</p>
                            <p className="sectionTitle">Creative Design and Web Solutions</p>
                        </div>
                        <div className="bannerRight">
                            <img src="../../public/images/bannerImage.svg" alt="BannerImage" width="600" height="auto"/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Banner;