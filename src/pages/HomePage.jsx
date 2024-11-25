import MasterLayout from "../components/layout/MasterLayout.jsx";
import Banner from "../components/Banner.jsx";
import About from './../components/About';
import Services from './../components/Services';
import Resume from './../components/Resume';
import Portfolio from "../components/Portfolio.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Partners from "../components/Partners.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";
const HomePage = () => {
    return (
        <MasterLayout>
            <main>
                <Banner/>
                <About/>
                <Services/>
                <Resume/>
                <Portfolio/>
                <Testimonial/>
                <Partners/>
                <Blog/>
                <Contact/>
            </main>
        </MasterLayout>
    );
};

export default HomePage;