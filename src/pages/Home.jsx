import Navber from "../layouts/Navber"
import Footer from "../layouts/Footer"
import Image from "../components/Image";
import banner from "../assets/bijit.png"
import Typewriter from "typewriter-effect";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

const Home = () => {
    const stringValue = ["React Developer", "MERN Stack Developer", "Fontend Developer", "Full Stack Developer"];

    return (
        <>
            <Navber />

            {/* banner part */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content container mx-auto px-4 md:px-8 flex-col lg:flex-row-reverse jcstify-between">
                    <div className="avatar w-5/12">
                        <div className="w-10/12 border-4 border-emerald-600 rounded-full">
                            <Image src={banner} />
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl font-bold Poppins text-white">Hi! I'm </h1>
                            <h1 className="text-6xl font-bold Poppins text-emerald-500">BIJIT <span className="text-white">DEB</span></h1>
                        </div>
                        <div className=" text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-500 my-5">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    cursor: "|",
                                    strings: stringValue,
                                }}
                            />
                        </div>

                        <p className=" w-3/4 Roboto font-medium text-lg text-white">
                            I am a web developer with 1+ years of experience in React. I have a strong foundation in front-end & back-end development, skilled in creating user-friendly and responsive web applications using React and its ecosystem.
                        </p>

                        <div className="flex gap-5 mt-10">
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