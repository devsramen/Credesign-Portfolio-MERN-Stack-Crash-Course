import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
    return (
        <Fragment>
            <section id="blog">
                <div className="container">
                    <p className="sectionSubTitle">My Blog</p>
                    <h2 className="sectionTitle">LATEST BLOG</h2>
                    <div className="dFlex">
                        <div className="blogCard">
                            <div className="blogCardHead">
                                <img src="../../public/images/blogImage-1.svg" alt="BlogImage" className="blogCardImage" />
                            </div>
                            <div className="blogCardBody">
                                <p className="blogCardBodyPara">20 January, 2023</p>
                                <h3 className="blogCardBodyTitle">Become a UX/UI Designer With Career Foundry.</h3>
                                <a href="#">Read More <FaArrowRight /></a>
                            </div>
                        </div>
                        <div className="blogCard">
                            <div className="blogCardHead">
                                <img src="../../public/images/blogImage-2.svg" alt="BlogImage" className="blogCardImage" />
                            </div>
                            <div className="blogCardBody">
                                <p className="blogCardBodyPara">15 January, 2023</p>
                                <h3 className="blogCardBodyTitle">The Best App Development For Your Business Plan.</h3>
                                <a href="#">Read More <FaArrowRight /></a>
                            </div>
                        </div>
                        <div className="blogCard">
                            <div className="blogCardHead">
                                <img src="../../public/images/blogImage-3.svg" alt="BlogImage" className="blogCardImage" />
                            </div>
                            <div className="blogCardBody">
                                <p className="blogCardBodyPara">08 January, 2023</p>
                                <h3 className="blogCardBodyTitle">The Best Portfolio For Agency Design Thinking</h3>
                                <a href="#">Read More <FaArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Blog;