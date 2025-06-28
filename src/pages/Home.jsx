import Navber from "../layouts/Navber"
import Footer from "../layouts/Footer"
import Image from "../components/Image";
import banner from "../assets/progrrmer.png"
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
const Home = () => {
    
    return (
        <>
            <Navber />

            {/* banner part */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content container mx-auto px-4 md:px-8 flex-col lg:flex-row-reverse">
                    <Image
                        src={banner}
                        className="max-w-sm rounded-2xl cursor-pointer shadow-2xl" />
                    <div className=" space-y-3">
                        <div>
                            <h1 className="text-7xl font-bold Poppins">Hi!</h1>
                            <h1 className="text-6xl font-bold Poppins">I'M <span className="text-emerald-500">BIJIT DEB</span></h1>
                        </div>
                        <p className="py-6 w-3/4 Roboto font-medium text-lg">
                            I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend.I know Basic Djanjo and MySQL but basically a MERN developer.
                        </p>

                        <div className="flex gap-5">
                            <button className="btn btn-success rounded-3xl text-base Poppins font-meduim sm:text-lg md:text-lg font-bold flex items-center gap-3 cursor-pointer">HIRE ME <RiExternalLinkLine /></button>
                            <button className="btn btn-success btn-outline rounded-3xl text-base Poppins font-meduim sm:text-lg md:text-lg font-bold flex items-center gap-3 cursor-pointer">Download Resume <BsDownload /></button>
                            
                        </div>

                    </div>
                </div>
            </div>
            

            <Footer />
        </>
    );
};

export default Home;