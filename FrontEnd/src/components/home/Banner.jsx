import {useEffect, useState} from "react";
import {Fragment} from "react";
import axios from 'axios';

const Banner = () => {
    const [subHeading,setSubHeading] = useState("");
    const [heading,setHeading] = useState("");
    const [paragraph,setParagraph] = useState("");
    const [buttonText,setButtonText] = useState("");
    const [buttonShow,setButtonShow] = useState(false);

    useEffect(()=>{
        async function fetchData() {
            let data = await axios.get("http://localhost:5050/banner")
            setSubHeading(data.data.subHeading)
            setHeading(data.data.heading)
            setParagraph(data.data.paragraph)
            setButtonText(data.data.buttonText)
            setButtonShow(data.data.buttonShow)
        }
        fetchData()
    },[])
    return (
        <Fragment>
            <section id="banner">
                <div className="container">
                    <div className="dFlex">
                        <div className="bannerLeft">
                            <p className="sectionSubTitle">{subHeading}</p>
                            <h1 className="sectionTitle">{heading}</h1>
                            <p className="bannerPara">{paragraph}</p>
                            {
                                buttonShow &&
                                <a href="../../../public/documents/MY%20CV.pdf" target="_blank" className="commonBtn">{buttonText}</a>
                            }
                        </div>
                        <div className="bannerRight">
                            <img src="../../../public/images/bannerImage.svg" alt="BannerImage" width="600" height="auto"/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Banner;