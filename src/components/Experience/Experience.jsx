import { FaGraduationCap } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // make sure you import the CSS
import { desc, li } from "framer-motion/client";

const experienceData = [
    {
        year: "August 2025 - present",
        company: "WB Software Ltd, Dhaka, Bangladesh",
        Position: "Frontend Developer React (Intern)",
        description: "Working as a Frontend Developer Intern at WB Software Ltd, I am actively involved in crafting dynamic and user-friendly web applications using React. My role encompasses collaborating with cross-functional teams to implement responsive designs, optimize performance, and ensure seamless user experiences. This internship has provided me with hands-on experience in modern web development practices, enhancing my skills in React, JavaScript, and front-end technologies.",
        responsibility: ["Responsive Web Design", "API Integration", "Performance Optimization", "Cross-Browser Compatibility", "Version Control (Git)", "Collaboration & Communication", "Testing & Debugging", "Continuous Learning", , "UI/UX Principles (etc.)"],
    },
];

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section
            id="experience"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-12"
        >
            {/* Heading */}
            <div className="text-center mb-12" data-aos="fade-down">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 pb-4">
                    Experience
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
                    A journey of growth and learning in the world of web development.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative container mx-auto ">

                <div className="space-y-12">
                    {experienceData.map((edu, index) => (
                        <div key={index} data-aos="fade-left">
                            <div className="w-full md:px-8 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-emerald-400">
                                    <FaGraduationCap className="text-2xl" />
                                    <span className="font-semibold text-lg">{edu.year}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">{edu.Position}</h3>
                                <div className="text-gray-300 font-medium">Company: {edu.company}</div>
                                <div className="text-gray-400 text-justify">{edu.description}</div>

                                <div className="flex gap-6 mt-2">
                                    <div className="text-gray-300 font-bold ">My Responsibility: </div>
                                    <ul className="font-normal text-gray-400">
                                        {edu.responsibility.map((i, index) => <li key={index}>{index + 1}. {i}</li>)
                                        }</ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
