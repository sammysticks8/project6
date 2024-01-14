import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Intro />
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
