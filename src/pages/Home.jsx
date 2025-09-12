import Skills from "../components/Skills/Skills";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";


const Home = () => {
    return (
        <div id="home" className="bg-base-200">
            {/* banner part */}
            <Banner></Banner>

            {/* about section */}
            <About />
            
            {/* Experience */}
            <Experience />

            {/* skill section */}
            <Skills />

            {/* projects */}
            <Projects/>

            {/* Education */}
            <Education/>

            {/* Contact */}
            <Contact/>


        </div>
    );
};

export default Home;