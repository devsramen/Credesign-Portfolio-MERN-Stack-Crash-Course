import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";

const ServiceComponent = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [image, setImage] = useState('');
    const [isImageShow, setIsImageShow] = useState(false);

    // sort data which come from database
    const [list, setList] = useState([]);

    let handleTitle = (e)=>{
        setTitle(e.target.value);
    }
    let handleSubTitle = (e)=>{
        setSubTitle(e.target.value);
    }
    let handleIsShowImage = (e)=>{
        setIsImageShow(e.target.checked);
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5050/service",{
            title:title,
            subTitle:subTitle,
            isImageShow:isImageShow,
        }).then((res)=>{
            console.log(res.data)
        })
        console.log(title,subTitle,isImageShow);
    }

    useEffect(() => {
        axios.get("http://localhost:5050/service")
        .then((res) =>{
            setList(res.data)
            console.log(res)
        })
    }, []);



    return (
        <Fragment>
            <section id="serviceWrapper">
                <h1 className="serviceTitle">Service Section</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="image">Image URL:</label>
                        <input type="file" id="image" name="image"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input onChange={handleTitle} type="text" id="title" name="title" placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input onChange={handleSubTitle} id="subtitle" type="text" name="subtitle" placeholder="Enter subtitle"/>
                    </div>
                    <div className="form-group">
                        <input onChange={handleIsShowImage} type="checkbox" id="showImage" name="showImage"/>
                        <label id="showImageTExt" htmlFor="showImage">Show Image:</label>
                    </div>
                    <button onClick={handleSubmit} id="serviceSubmit" type="submit">Submit</button>
                </form>
            </section>
            <section id="tableSection">
                <table>
                    <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Image Visibility</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td className="image-cell">{item.isImageShow ?<img src="https://via.placeholder.com/100" alt="Placeholder"/> : "No Image"}</td>
                                <td className="title-cell">{item.title}</td>
                                <td className="subtitle-cell">{item.subTitle}</td>
                                <td className="subtitle-cell">{item.isImageShow?"Yes":"No"}</td>
                                <td className="action-buttons">
                                    <button className="button edit">Edit</button>
                                    <button className="button delete">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>
        </Fragment>
    );
};

export default ServiceComponent;