import Image from "../../components/Image";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import xlogo from "../../assets/xlogo.png";
import facebook from "../../assets/facebook.jpeg";
import banner from "../../assets/banner.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { Link } from "react-router";

const Banner = () => {
    const stringValue = [
        "React Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Full Stack Developer",
    ];

    // Image animation
    const imageAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
        hover: {
            y: -5,
            transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
        },
    };

    // Glow effect
    const glowAnimation = {
        initial: { scale: 0.9, opacity: 0 },
        animate: {
            scale: 1,
            opacity: [0.1, 0.2, 0.1],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        },
    };

    // Floating icons
    const techIcons = [
        { icon: <FaReact className="text-blue-400" />, position: "top-0 left-0" },
        { icon: <SiJavascript className="text-yellow-400" />, position: "bottom-8 right-0" },
        { icon: <FaNodeJs className="text-green-500" />, position: "top-8 right-8" },
        { icon: <SiMongodb className="text-green-400" />, position: "bottom-0 left-4" },
    ];

    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-[90vh] flex items-center">
            {/* subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent)]" />

            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-12 relative z-10">
                {/* Right Image */}
                <div className="w-full md:w-5/12 flex justify-center">
                    <motion.div
                        className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <motion.img
                            src={banner}
                            alt="Bijit Deb"
                            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-emerald-500/20"
                            variants={imageAnimation}
                        />

                        <motion.div
                            className="absolute -inset-3 sm:-inset-4 bg-emerald-500/20 rounded-full blur-2xl -z-10"
                            variants={glowAnimation}
                        />

                        {/* Floating tech icons */}
                        {techIcons.map((tech, i) => (
                            <motion.div
                                key={i}
                                className={`absolute ${tech.position} text-3xl`}
                                animate={{
                                    y: [0, -12, 0],
                                    transition: {
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2,
                                    },
                                }}
                            >
                                {tech.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Left Text */}
                <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
                    <div className="inline-block text-sm font-semibold px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 tracking-wide">
                        Welcome to my portfolio
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Hi! I’m{" "}
                        <span className="text-emerald-400">BIJIT</span>{" "}
                        <span className="text-white">DEB</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-extrabold text-emerald-400">
                        <Typewriter
                            options={{ autoStart: true, loop: true, cursor: "|", strings: stringValue }}
                        />
                    </div>

                    <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Passionate full stack developer specialized in the MERN stack. I love
                        building efficient, user-friendly applications and bringing digital
                        ideas to life with clean, modern code.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center lg:justify-start">
                        {[github, linkedin, xlogo, facebook].map((icon, i) => (
                            <Link key={i} to="#" className="avatar hover:scale-110 transition">
                                <div className="w-9 rounded-full ring-2 ring-emerald-500/50 overflow-hidden">
                                    <Image src={icon} />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1V6HB_eOovNUy_bEFn9aROzP5aLXKuUBN"
                            download="Bijit_Deb_Resume.pdf"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-md hover:shadow-emerald-500/40 transition"
                        >
                            <BsDownload className="text-xl" />
                            Download Resume
                        </a>

                        <Link
                            to="#projects"
                            className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold shadow-md hover:shadow-emerald-500/40 transition"
                        >
                            <RiExternalLinkLine className="text-xl" />
                            View My Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
