import Navber from "../components/Navber/Navber"
import Footer from "../layouts/Footer"
import Image from "../components/Image";
import banner from "../assets/bijit.png";
import about from "../assets/about.gif";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import xlogo from "../assets/xlogo.png";
import facebook from "../assets/facebook.jpeg";
import Typewriter from "typewriter-effect";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";


const Home = () => {
    const stringValue = ["React Developer", "MERN Stack Developer", "Fontend Developer", "Full Stack Developer"];

    return (
        <>
            <Navber />

            {/* banner part */}
            <div className="hero bg-base-200 min-h-[85vh]">
                <div className="hero-content container mx-auto px-4 md:px-8 flex-col lg:flex-row-reverse jcstify-between">

                    <div className="avatar w-5/12">
                        <div className="w-10/12 mx-auto border-r-4 border-t-4 border-emerald-600 rounded-xl shadow-2xl">
                            <Image src={about}/>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold Poppins text-white">Hi! I'm </h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold Poppins text-emerald-500">BIJIT <span className="text-white">DEB</span></h1>
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

                        <p className=" mb-6 Roboto font-medium text-lg text-white text-center lg:text-left">
                            I am a web developer with 1+ years of experience in React. I have a strong foundation in front-end & back-end development, skilled in creating user-friendly and responsive web applications using React and its ecosystem.
                        </p>

                        {/* social links */}
                        <div className="flex gap-6 items-center justify-center lg:justify-start">
                            <a href="https://github.com/bijit-dev" className="avatar">
                                <div className="ring-success ring-offset-emerald-800  w-8 rounded-full ring-2 ring-offset-2">
                                    <Image src={github} />
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/bijit-deb/" className="avatar">
                                <div className="ring-success ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                    <Image src={linkedin} />
                                </div>
                            </a>

                            <a href="https://x.com/bijitdeb01" className="avatar">
                                <div className="ring-success ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                    <Image src={xlogo} />
                                </div>
                            </a>

                            <a href="https://www.facebook.com/bijitdeb01" className="avatar">
                                <div className="ring-success ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                    <Image src={facebook} />
                                </div>
                            </a>
                        </div>

                        {/* btns  */}
                        <div className="md:flex justify-center lg:justify-start space-y-6 gap-5 mt-6">
                            <button className="btn btn-success w-full md:w-auto rounded-3xl text-base Poppins font-meduim md:text-lg font-bold flex items-center gap-3 cursor-pointer">HIRE ME <RiExternalLinkLine /></button>
                            <button className="btn btn-success btn-outline w-full md:w-auto rounded-3xl text-base Poppins font-meduim md:text-lg font-bold flex items-center gap-3 cursor-pointer">Download Resume <BsDownload /></button>

                        </div>

                    </div>
                </div>
            </div>

            {/* about section */}
            <div className="container mx-auto px-4 md:px-8 my-20">
                <h1 className="text-3xl font-bold Poppins text-white text-center mb-10">About Me</h1>
                <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
                    <div className="avatar w-full lg:w-5/12">
                        <div className="w-10/12 mx-auto border-4 border-emerald-600 rounded-full">
                            <Image src={banner} />
                        </div>
                    </div>
                    <div className="text-lg Roboto font-medium text-white text-justify space-y-2 w-full lg:w-9/12">
                        <p>My name is Bijit Deb. I've recently completed my Diploma in Computer Science and Technology from Habiganj Polytechnic Institute. I’m a passionate and results-driven web developer with specialized expertise in React.js and the MERN stack (MongoDB, Express.js, React, Node.js). I strive to build scalable, maintainable, and high-performance web applications that not only meet client needs but exceed expectations.</p>
                        <p>What truly sets me apart is my commitment to integrity, clear communication, and client satisfaction. I believe that great development is not just about writing clean code—it's about understanding the vision, solving real-world problems, and delivering value through thoughtful, user-centric design.</p>
                        <p>Currently, I’m expanding my horizons by diving into emerging web technologies and best practices to stay ahead of the curve. Whether it's improving performance, exploring modern frameworks, or refining development workflows, I’m always learning and evolving.</p>
                        <p>In every project, I bring a mindset of collaboration, accountability, and continuous improvement—qualities that help turn ideas into impactful digital experiences.</p>
                    </div>

                    
                </div>
            </div>

            {/* skill section */}
            <section>
                <div className="container mx-auto px-4 md:px-8 my-20">
                    <h1 className="text-3xl font-bold Poppins text-white text-center mb-10">My Skills</h1>
                    
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;