import MasterLayout from "../components/layout/MasterLayout.jsx";
import Banner from "../components/home/Banner.jsx";
import About from '../components/home/About.jsx';
import Services from '../components/home/Services.jsx';
import Resume from '../components/home/Resume.jsx';
import Portfolio from "../components/home/Portfolio.jsx";
import Testimonial from "../components/home/Testimonial.jsx";
import Partners from "../components/home/Partners.jsx";
import Blog from "../components/home/Blog.jsx";
import Contact from "../components/home/Contact.jsx";
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