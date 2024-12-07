import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import ToastMessageComponent from "./ToastMessageComponent.jsx";
import ModalComponent from "./ModalComponent.jsx";
// import ModalComponent from "./ModalComponent.jsx";

const ServiceComponent = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [image, setImage] = useState('');
    const [isImageShow, setIsImageShow] = useState(false);
    const [show,setShow] = useState(false);
    const [message,setMessage] = useState('');
    const [id,setId] = useState('');

    // Modal Component
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = (item) => {
        console.log(item);
        setId(item._id)
        setTitle(item.title);
        setSubTitle(item.subTitle);
        setIsImageShow(item.isImageShow);
        setModalOpen(true);
    };

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
        if (id){
            axios.put(`http://localhost:5050/serviceUpdate/${id}`,{title,subTitle,isImageShow}).then((res)=>{
                setShow(true)
                setMessage(res.data.message)
                axios.get("http://localhost:5050/service")
                    .then((res) =>{
                        setId("")
                        setList(res.data)
                        setTitle("")
                        setSubTitle("")
                        setIsImageShow(false)
                        setModalOpen(false)
                    })
            })
        }else {
            axios.post("http://localhost:5050/service",{
                title:title,
                subTitle:subTitle,
                isImageShow:isImageShow,
            }).then((res)=>{
                console.log(res.data)
                setTitle('');
                setSubTitle('')
                setIsImageShow(false)
                setShow(true)
                setMessage(res.data.message)
                axios.get("http://localhost:5050/service")
                    .then((res) =>{
                        setList(res.data)
                    })
            })
        }
        // axios.post("http://localhost:5050/service",{
        //     title:title,
        //     subTitle:subTitle,
        //     isImageShow:isImageShow,
        // }).then((res)=>{
        //     console.log(res.data)
        //     setTitle('');
        //     setSubTitle('')
        //     setIsImageShow(false)
        //     setShow(true)
        //     setMessage(res.data.message)
        // })
        console.log(title,subTitle,isImageShow);
    }

    useEffect(() => {
        axios.get("http://localhost:5050/service")
        .then((res) =>{
            setList(res.data)
        })
    }, []);

    let handelDelete = (item)=>{
        console.log(item._id,item.title)
        axios.delete(`http://localhost:5050/serviceDelete/${item._id}`).then((res)=>{
            console.log(res.data)
            setShow(true)
            setMessage(res.data.message)
            axios.get("http://localhost:5050/service")
                .then((res) =>{
                    setList(res.data)
                })
            })
    }

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
                        <input value={title} onChange={handleTitle} type="text" id="title" name="title"
                               placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input value={subTitle} onChange={handleSubTitle} id="subtitle" type="text" name="subtitle"
                               placeholder="Enter subtitle"/>
                    </div>
                    <div className="form-group">
                        <input checked={isImageShow} onChange={handleIsShowImage} type="checkbox" id="showImage"
                               name="showImage"/>
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
                                <td>{index + 1}</td>
                                <td className="image-cell">{item.isImageShow ?
                                    <img src="https://via.placeholder.com/100" alt="Placeholder"/> : "No Image"}</td>
                                <td className="title-cell">{item.title}</td>
                                <td className="subtitle-cell">{item.subTitle}</td>
                                <td className="subtitle-cell">{item.isImageShow ? "Yes" : "No"}</td>
                                <td className="action-buttons">
                                    <button className="button edit" onClick={() => openModal(item)}>Edit</button>
                                    <button className="button delete" onClick={() => {
                                        handelDelete(item)
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>
            <ToastMessageComponent show={show} message={message} setShow={setShow}/>
            <ModalComponent isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h4 className="serviceTitle modalTitle">Edit Service Item</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="image">Image URL:</label>
                        <input type="file" id="image" name="image"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input value={title} onChange={handleTitle} type="text" id="title" name="title" placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input value={subTitle} onChange={handleSubTitle} id="subtitle" type="text" name="subtitle"
                               placeholder="Enter subtitle"/>
                    </div>
                    <div className="form-group">
                        <input checked={isImageShow} onChange={handleIsShowImage} type="checkbox" id="showImage"
                               name="showImage"/>
                        <label id="showImageTExt" htmlFor="showImage" className="modalImageShow">Show Image:</label>
                    </div>
                    <button onClick={handleSubmit} id="serviceSubmit" type="submit">Submit</button>
                </form>

                <button onClick={() => setModalOpen(false)}>Close</button>
            </ModalComponent>
        </Fragment>
    );
};

export default ServiceComponent;