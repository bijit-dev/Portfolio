import Navber from "../components/Navber/Navber"
import Image from "../components/Image";
import banner from "../assets/banner.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import xlogo from "../assets/xlogo.png";
import facebook from "../assets/facebook.jpeg";
import Typewriter from "typewriter-effect";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";


const Home = () => {
    const stringValue = ["React Developer", "MERN Stack Developer", "Fontend Developer", "Full Stack Developer"];

    // Image animation variants
    const imageAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
            },
        },
    };

    // Glow effect animation
    const glowAnimation = {
        initial: { scale: 0.9, opacity: 0 },
        animate: {
            scale: 1,
            opacity: [0.1, 0.2, 0.1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    // Floating tech icons animation
    const techIcons = [
        { icon: <FaReact className="text-blue-400" />, position: 'top-0 left-0' },
        {
            icon: <SiJavascript className="text-yellow-400" />,
            position: 'bottom-0 right-0',
        },
        { icon: <FaNodeJs className="text-blue-500" />, position: 'top-0 right-0' },
        {
            icon: <SiMongodb className="text-green-500" />,
            position: 'bottom-0 left-0',
        },
    ];

    return (
        <div className="bg-bg-base-200">
            <Navber />

            {/* banner part */}
            <div className="hero bg-base-200 min-h-[85vh]">
                <div className="hero-content container mx-auto px-4 md:px-8 flex-col lg:flex-row-reverse jcstify-between">

                    {/* Animated Image Section */}
                    <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                        <motion.div
                            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <motion.img
                                src={banner}
                                alt="Bijit Deb"
                                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-500/20"
                                variants={imageAnimation}
                            />

                            <motion.div
                                className="absolute -inset-3 sm:-inset-4 bg-blue-500/10 rounded-full -z-10"
                                variants={glowAnimation}
                            />

                            {/* Floating Tech Icons */}
                            {techIcons.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${tech.position} text-3xl`}
                                    animate={{
                                        y: [0, -10, 0],
                                        transition: {
                                            duration: 3 + index,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: index * 0.3,
                                        },
                                    }}
                                >
                                    {tech.icon}
                                </motion.div>
                            ))}
                        </motion.div>
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
                            I'm a passionate developer from Bangladesh specializing in creating beautiful, functional websites and web applications.
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
            <Skills />

            {/* footer */} 
            <Footer />
        </div>
    );
};

export default Home;