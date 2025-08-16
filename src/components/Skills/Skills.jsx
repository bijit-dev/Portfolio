import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaPython, FaNodeJs, FaFigma } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiTailwindcss, SiVercel, SiMongodb, SiMysql, SiExpress, SiFirebase, SiNetlify, SiPostman, SiVite, SiJsonwebtokens, SiAxios } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

const iconSize = 60;

const skills = [
    { icon: <FaHtml5 size={iconSize} className="text-orange-500" />, text: "HTML", category: "Frontend" },
    { icon: <FaCss3Alt size={iconSize} className="text-blue-500" />, text: "CSS", category: "Frontend" },
    { icon: <MdJavascript size={iconSize} className="text-yellow-400" />, text: "JavaScript", category: "Frontend" },
    { icon: <FaBootstrap size={iconSize} className="text-purple-500" />, text: "Bootstrap", category: "Frontend" },
    { icon: <SiTailwindcss size={iconSize} className="text-teal-400" />, text: "Tailwind CSS", category: "Frontend" },
    { icon: <RiReactjsFill size={iconSize} className="text-blue-400" />, text: "React JS", category: "Frontend" },
    { icon: <SiVite size={iconSize} className="text-purple-400" />, text: "Vite", category: "Frontend" },

    { icon: <FaNodeJs size={iconSize} className="text-green-500" />, text: "Node.js", category: "Backend" },
    { icon: <SiExpress size={iconSize} className="text-gray-300" />, text: "Express.js", category: "Backend" },
    { icon: <SiJsonwebtokens size={iconSize} className="text-orange-300" />, text: "JWT", category: "Backend" },
    { icon: <SiMongodb size={iconSize} className="text-green-400" />, text: "Mongoose", category: "Backend" },
    { icon: <span className="text-2xl">🌐</span>, text: "REST APIs", category: "Backend" },
    { icon: <FaPython size={iconSize} className="text-blue-500" />, text: "Python", category: "Backend" },
    { icon: <DiDjango size={iconSize} className="text-green-700" />, text: "Django", category: "Backend" },

    { icon: <SiMongodb size={iconSize} className="text-green-400" />, text: "MongoDB", category: "Backend" },
    { icon: <SiMysql size={iconSize} className="text-blue-600" />, text: "MySQL", category: "Backend" },

    { icon: <FaGithub size={iconSize} className="text-gray-300" />, text: "Git & GitHub", category: "Tools" },
    { icon: <SiVercel size={iconSize} className="text-black" />, text: "Vercel", category: "Tools" },
    { icon: <SiNetlify size={iconSize} className="text-cyan-400" />, text: "Netlify", category: "Tools" },
    { icon: <SiFirebase size={iconSize} className="text-yellow-400" />, text: "Firebase", category: "Tools" },
    { icon: <SiPostman size={iconSize} className="text-orange-400" />, text: "Postman", category: "Tools" },
    { icon: <SiAxios size={iconSize} className="text-blue-300" />, text: "Axios", category: "Tools" },
    { icon: <FaFigma size={iconSize} className="text-pink-500" />, text: "Figma", category: "Tools" },

    { icon: "💬", text: "Communication", category: "Soft Skills" },
    { icon: "🤝", text: "Collaboration", category: "Soft Skills" },
    { icon: "⚡", text: "Adaptability", category: "Soft Skills" },
    { icon: "📚", text: "Fast Learner", category: "Soft Skills" },
    { icon: "👥", text: "Team Player", category: "Soft Skills" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Soft Skills"];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All" ? skills : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">

            <div data-aos="fade-up" data-aos-duration="3000" className="container mx-auto px-4 md:px-8 py-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-4">
                        My Skills
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        I've worked with a wide range of technologies across frontend, backend, databases, and development tools.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${activeCategory === cat
                                ? "bg-emerald-500 text-white shadow-lg scale-105"
                                : "bg-gray-800 text-gray-300 hover:bg-emerald-500 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            className="flex flex-col items-center p-4 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:scale-105 hover:shadow-emerald-500/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="text-5xl mb-2">{skill.icon}</div>
                            <p className="text-green-500 font-semibold text-center">{skill.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
