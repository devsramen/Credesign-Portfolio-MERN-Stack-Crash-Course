 import {Fragment, useEffect, useState} from "react";
 import axios from "axios";

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

    const [listData, setListData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5050/service").then((res) => {
            setListData(res.data);
        })
    }, []);


    return (
        <Fragment>
            <section id="service">
            <div className="container">
                <p className="sectionSubTitle">My Service</p>
                <h2 className="sectionTitle">Services I offer</h2>
                <div className="dFlex">
                    {
                        listData.map((item,index)=>(
                                <div className="serviceCard" key={index}>
                                    <div className="serviceCardHead">
                                        {
                                            item.isImageShow &&
                                            <img src="../../../public/images/serviceIcon-1.svg" alt="ServiceIcon"/>
                                        }
                                    </div>
                                    <div className="serviceCardBody">
                                        <h4>{item.title}</h4>
                                        <p>{item.subTitle}</p>
                                    </div>
                                </div>
                        ))
                    }
                    {/*{*/}
                    {/*    serviceCardData.map((item)=>(*/}
                    {/*        <div className="serviceCard" key={item.id}>*/}
                    {/*            <div className="serviceCardHead">*/}
                    {/*                <img src={item.serviceCardImg} alt="ServiceIcon" />*/}
                    {/*            </div>*/}
                    {/*            <div className="serviceCardBody">*/}
                    {/*                <h4>{item.serviceCardHead}</h4>*/}
                    {/*                <p>{item.serviceCardDetails}</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </div>
            </section>
        </Fragment>
    );
};

export default Services;