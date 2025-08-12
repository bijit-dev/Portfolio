import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaPython, FaNodeJs, FaFigma } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiTailwindcss, SiVercel, SiMongodb, SiMysql, SiExpress, SiFirebase, SiNetlify, SiPostman, SiVite, SiJsonwebtokens, SiAxios } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import Skillcard from "./Skillcard";

const iconSize = 70;

const skills = [
    // Frontend
    { icon: <FaHtml5 size={iconSize} />, text: "HTML", category: "Frontend" },
    { icon: <FaCss3Alt size={iconSize} />, text: "CSS", category: "Frontend" },
    { icon: <MdJavascript size={iconSize} />, text: "JavaScript", category: "Frontend" },
    { icon: <FaBootstrap size={iconSize} />, text: "Bootstrap", category: "Frontend" },
    { icon: <SiTailwindcss size={iconSize} />, text: "Tailwind CSS", category: "Frontend" },
    { icon: <RiReactjsFill size={iconSize} />, text: "React JS", category: "Frontend" },
    { icon: <SiVite size={iconSize} />, text: "Vite", category: "Frontend" },

    // Backend
    { icon: <FaNodeJs size={iconSize} />, text: "Node.js", category: "Backend" },
    { icon: <SiExpress size={iconSize} />, text: "Express.js", category: "Backend" },
    { icon: <SiJsonwebtokens size={iconSize} />, text: "JWT", category: "Backend" },
    { icon: <SiMongodb size={iconSize} />, text: "Mongoose", category: "Backend" },
    { icon: <span className="text-2xl">🌐</span>, text: "REST APIs", category: "Backend" },
    { icon: <FaPython size={iconSize} />, text: "Python", category: "Backend" },
    { icon: <DiDjango size={iconSize} />, text: "Django", category: "Backend" },

    // Database
    { icon: <SiMongodb size={iconSize} />, text: "MongoDB", category: "Backend" },
    { icon: <SiMysql size={iconSize} />, text: "MySQL", category: "Backend" },

    // Tools
    { icon: <FaGithub size={iconSize} />, text: "Git & GitHub", category: "Tools" },
    { icon: <SiVercel size={iconSize} />, text: "Vercel", category: "Tools" },
    { icon: <SiNetlify size={iconSize} />, text: "Netlify", category: "Tools" },
    { icon: <SiFirebase size={iconSize} />, text: "Firebase", category: "Tools" },
    { icon: <SiPostman size={iconSize} />, text: "Postman", category: "Tools" },
    { icon: <SiAxios size={iconSize} />, text: "Axios", category: "Tools" },
    { icon: <FaFigma size={iconSize} />, text: "Figma", category: "Tools" },

    // Soft Skills
    { icon: "💬", text: "Communication", category: "Soft Skills" },
    { icon: "🤝", text: "Collaboration", category: "Soft Skills" },
    { icon: "⚡", text: "Adaptability", category: "Soft Skills" },
    { icon: "📚", text: "Fast Learner", category: "Soft Skills" },
    { icon: "👥", text: "Team Player", category: "Soft Skills" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Soft Skills"];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills =
        activeCategory === "All"
            ? skills
            : skills.filter(skill => skill.category === activeCategory);

    return (
        <section className="container mx-auto px-4 md:px-8 py-20">
            {/* Heading */}
            <div className="border-b border-white text-center mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-design mb-8 font-extrabold">
                    My Skills
                </h1>
            </div>

            {/* Filter buttons */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1 rounded-lg transition-colors duration-300 text-sm ${activeCategory === cat
                                ? "bg-white text-black"
                                : "bg-transparent text-white hover:bg-white hover:text-black"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {filteredSkills.map((skill, index) => (
                    <Skillcard key={index} icon={skill.icon} text={skill.text} />
                ))}
            </div>
        </section>
    );
};

export default Skills;