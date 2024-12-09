import { Fragment, useEffect, useState } from "react";
import axios from 'axios';

const BannerComponent = () => {
    const [id,setId] = useState("");
    const [heading,setHeading] = useState("");
    const [subHeading,setSubHeading] = useState("");
    const [paragraph,setParagraph] = useState("");
    const [buttonText,setButtonText] = useState("");
    const [buttonShow,setButtonShow] = useState(false);
    const [image,setImage] = useState({});
    const [bannerImage,setBannerImage] = useState("");

    let handleSubHeading = (e)=>{
        setSubHeading(e.target.value)
    }
    let handleHeading = (e)=>{
        setHeading(e.target.value)
    }
    let handleParagraph = (e)=>{
        setParagraph(e.target.value)
    }
    let handleButtonText = (e)=>{
        setButtonText(e.target.value)
    }
    let handleButtonShow = (e)=>{
        setButtonShow(e.target.checked)
    }
    let handleSubmit = ()=>{
        // console.log(heading,subHeading,paragraph,buttonText,buttonShow)
        let data = new FormData();
        data.append("subHeading",subHeading);
        data.append("heading",heading);
        data.append("paragraph",paragraph);
        data.append("buttonText",buttonText);
        data.append("buttonShow",buttonShow);
        data.append("image",image);

        if(id){
            axios.put("http://localhost:5050/banner/"+id,data).then(res=>{
                // console.log(res)
            }).catch(error=>{
                console.log(error)
            })
        }else{
            axios.post("http://localhost:5050/banner",data).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
        }

        // if(id){
        //     axios.put("http://localhost:5050/banner/"+id,{
        //         heading:heading,
        //         subHeading:subHeading,
        //         paragraph:paragraph,
        //         buttonText:buttonText,
        //         buttonShow:buttonShow
        //     }).then(res=>{
        //         console.log(res)
        //     }).catch(error=>{
        //         console.log(error)
        //     })
        // }else{
        //     axios.post("http://localhost:5050/banner",{
        //         heading:heading,
        //         subHeading:subHeading,
        //         paragraph:paragraph,
        //         buttonText:buttonText,
        //         buttonShow:buttonShow
        //     }).then(res=>{
        //         console.log(res)
        //     }).catch(error=>{
        //         console.log(error)
        //     })
        // }
    }
    useEffect(()=>{
        async function fetchData() {
            let data = await axios.get('http://localhost:5050/banner')
                setId(data.data._id)
                setHeading(data.data.heading)
                setSubHeading(data.data.subHeading)
                setParagraph(data.data.paragraph)
                setButtonText(data.data.buttonText)
                setButtonShow(data.data.buttonShow)
                setBannerImage(data.data.image)
        }
        fetchData();
    },[])
    let handleImageUpload = (e)=>{
        setImage(e.target.files[0]);
    }
    return (
        <Fragment>
            <div className="banner">
                <h1 className="bannerTitle">Update Banner Content</h1>
                <img src={`http://localhost:5050/${bannerImage}`} alt="bannerImage" id="dashBoardBannerImage"/>
                <div className="form-group">
                    <label>Upload Image:</label>
                    <input type="file" name="bannerImage" id="bannerImage" onChange={handleImageUpload}/>
                </div>
                <label>Subheading:</label>
                <input value={subHeading} onChange={handleSubHeading} type="text" id="subheading"
                       placeholder="Enter subheading here"/><br/><br/>

                <label>Heading:</label>
                <input value={heading} onChange={handleHeading} type="text" id="heading"
                       placeholder="Enter heading here"/><br/><br/>

                <label>Paragraph:</label>
                <textarea value={paragraph} onChange={handleParagraph} id="paragraph"
                          placeholder="Enter paragraph text here"></textarea><br/><br/>

                <label>Button Text:</label>
                <input value={buttonText} onChange={handleButtonText} type="text" id="button-text"
                       placeholder="Enter button text here"/><br/><br/>

                <input checked={buttonShow} onChange={handleButtonShow} type="checkbox" id="show-button"/>
                <label>Show Button:</label><br/><br/>

                <button id="bannerUpdateBtn" onClick={handleSubmit}>Update</button>
            </div>
        </Fragment>
    );
};

export default BannerComponent;