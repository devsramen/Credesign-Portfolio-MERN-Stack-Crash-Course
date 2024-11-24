import { Fragment } from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <Fragment>
            <NavBar/>
            {
                props.children
            }
            <Footer/>
        </Fragment>
    );
};

export default MasterLayout;