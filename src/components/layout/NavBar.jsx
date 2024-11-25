import {Fragment} from "react";

const NavBar = () => {
    return (
        <Fragment>
            <nav id="nav">
                <div className="container">
                    <div className="navWrapper">
                        <img src="./public/images/Logo.svg" alt="Logo"/>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavBar;