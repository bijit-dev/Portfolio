import Navber from "../components/Navber/Navber"
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";


const Home = () => {
    return (
        <div className="bg-bg-base-200">
            <Navber />

            {/* banner part */}
            <Banner></Banner>

            {/* about section */}
            <About />

            {/* skill section */}
            <Skills />

            {/* footer */} 
            <Footer />
        </div>
    );
};

export default Home;