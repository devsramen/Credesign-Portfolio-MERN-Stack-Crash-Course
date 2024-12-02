import { useEffect } from "react";
import {Fragment} from "react";
import axios from 'axios';

const Banner = () => {
    const [heading,setHeading] = useState("");
    const [subHeading,setSubHeading] = useState("");
    const [paragraph,setParagraph] = useState("");
    const [buttonText,setButtonText] = useState("");
    const [buttonShow,setButtonShow] = useState(false);

    useEffect(()=>{
        async function fetchData() {
            let data = await axios.get("http://localhost:5050/banner/")
            console.log(data)
        }
        fetchData()
    },[])
    return (
        <Fragment>
            <section id="banner">
                <div className="container">
                    <div className="dFlex">
                        <div className="bannerLeft">
                            <p className="sectionSubTitle">I AM DESIGNER</p>
                            <h1 className="sectionTitle">Creative Design and Web Solutions</h1>
                            <p className="bannerPara">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.
                            </p>
                            <a href="../../../public/documents/MY%20CV.pdf" target="_blank" className="commonBtn">Download My CV</a>
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