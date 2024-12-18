import { Fragment, useState } from "react";
import NavBarPage from "../pages/navBar/NavBarPage";
import BannerSection from './../pages/banner/BannerSection';
import ServicePage from "../pages/services/ServicePage.jsx";

const DashboardComponent = () => {
    const [activeMenu, setActiveMenu] = useState('NavBar');
    let handelActive = (menu)=>{
        setActiveMenu(menu);
    }
    return (
        <Fragment>
            <main>
                <div className="left">
                    <ul>
                        <li onClick={()=>handelActive("NavBar")}>NavBar</li>
                        <li onClick={()=>handelActive("Banner")}>Banner</li>
                        <li onClick={()=>handelActive("about")}>about</li>
                        <li onClick={()=>handelActive("service")}>service</li>
                        <li onClick={()=>handelActive("resume")}>resume</li>
                        <li onClick={()=>handelActive("Portfolio")}>Portfolio</li>
                        <li onClick={()=>handelActive("Testimonial")}>Testimonial</li>
                        <li onClick={()=>handelActive("partner")}>partner</li>
                        <li onClick={()=>handelActive("blog")}>blog</li>
                        <li onClick={()=>handelActive("contact")}>contact</li>
                        <li onClick={()=>handelActive("Footer")}>Footer</li>
                    </ul>
                </div>
                <div className="right">
                    { activeMenu == "NavBar" && <NavBarPage/> }
                    { activeMenu == "Banner" && <BannerSection/> }
                    { activeMenu == "about" && <h1>about</h1> }
                    { activeMenu == "service" && <h1><ServicePage/></h1> }
                    { activeMenu == "resume" && <h1>resume</h1> }
                    { activeMenu == "Portfolio" && <h1>Portfolio</h1> }
                    { activeMenu == "Testimonial" && <h1>Testimonial</h1> }
                    { activeMenu == "partner" && <h1>partner</h1> }
                    { activeMenu == "blog" && <h1>blog</h1> }
                    { activeMenu == "contact" && <h1>contact</h1> }
                    { activeMenu == "Footer" && <h1>Footer</h1> }
                </div>
            </main>
        </Fragment>
    );
};

export default DashboardComponent;