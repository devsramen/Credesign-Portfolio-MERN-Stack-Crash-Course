import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contactUs" element={<ContactUsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route path="/testimonial" element={<TestimonialPage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;