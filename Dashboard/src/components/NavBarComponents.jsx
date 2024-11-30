import { Fragment } from "react";
import axios from 'axios';
import { useState } from "react";

const NavBarComponents = () => {

    const [menuItem, setMenuItem] = useState([])
    const [buttonText, setButtonText] = useState([])
    const [buttonShow, setButtonShow] = useState(false)


    let handelSubmit = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:5050/navBar',{
            menuItem:menuItem,
            buttonText: buttonText,
            buttonShow: buttonShow,
        }).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error);            
        })



    }

    let handelMenuItemChange = (e)=>{
        setMenuItem(e.target.value)
    }
    
    let handelButtonText = (e)=>{
        setButtonText(e.target.value)
    }
    let handelButtonShow = (e)=>{
        setButtonShow(e.target.checked)
    }


return (
        <Fragment>
            <div className="dashboard">
            <h2>Dashboard Settings</h2>
            <form>
                <div className="form-group">
                <label>Upload Logo:</label>
                <input type="file" name="logo" id="logo" />
                </div>

                <div className="form-group">
                <label>Menu Item:</label>
                <input onChange={handelMenuItemChange} type="text" name="menuItem" id="menuItem" placeholder="Enter Menu Item" />
                </div>

                <div className="form-group">
                <label>Button Text:</label>
                <input onChange={handelButtonText} type="text" name="buttonText" id="buttonText" placeholder="Enter Button Text" />
                </div>

                <div className="form-group checkbox-group">
                <input onChange={handelButtonShow} type="checkbox" name="buttonShow" id="buttonShow" />
                <label>Show Button</label>
                </div>

                <button type="submit" className="submit-btn" onClick={handelSubmit}>Save Settings</button>
            </form>
            </div>

        </Fragment>
    );
};

export default NavBarComponents;