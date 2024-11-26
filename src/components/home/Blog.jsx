import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
    const blogData = [
        {
            id: 1,
            img: "../../../public/images/blogImage-1.svg",
            Date: "20 January, 2023",
            title: "Become a UX/UI Designer With Career Foundry."
        },
        {
            id: 2,
            img: "../../../public/images/blogImage-2.svg",
            Date: "15 January, 2023",
            title: "The Best App Development For Your Business Plan."
        },
        {
            id: 3,
            img: "../../../public/images/blogImage-3.svg",
            Date: "08 January, 2023",
            title: "The Best Portfolio For Agency Design Thinking"
        }
    ]
    return (
        <Fragment>
            <section id="blog">
                <div className="container">
                    <p className="sectionSubTitle">My Blog</p>
                    <h2 className="sectionTitle">LATEST BLOG</h2>
                    <div className="dFlex">
                        {
                            blogData.map((item)=>(
                                <div className="blogCard" key={item.id}>
                                    <div className="blogCardHead">
                                        <img src={item.img} className="blogCardImage" />
                                    </div>
                                    <div className="blogCardBody">
                                        <p className="blogCardBodyPara">{item.Date}</p>
                                        <h3 className="blogCardBodyTitle">{item.title}</h3>
                                        <a href="/">Read More <FaArrowRight /></a>
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

export default Blog;