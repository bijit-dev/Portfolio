import { FaGraduationCap } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // make sure you import the CSS
import { li } from "framer-motion/client";

const experienceData = [
    {
        year: "August 2025 - present",
        company: "WB Software Ltd",
        Position: "Frontend Developer React (Intern)",
        responsibility: ["Responsive Web Design", "API Integration", "Performance Optimization", "Cross-Browser Compatibility", "Version Control (Git)", "Collaboration & Communication", "Testing & Debugging", "Continuous Learning",, "UI/UX Principles"],
    },
];

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section
            id="education"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-12"
        >
            {/* Heading */}
            <div className="text-center mb-12" data-aos="fade-down">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Experience
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
                    A journey of growth and learning in the world of web development.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full md:border-l-2 md:border-emerald-500/40"></div>

                <div className="space-y-12">
                    {experienceData.map((edu, index) => (
                        <div
                            key={index}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="w-full md:w-1/2 md:px-8 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-emerald-400">
                                    <FaGraduationCap className="text-2xl" />
                                    <span className="font-semibold text-lg">{edu.year}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">{edu.Position}</h3>
                                <p className="text-gray-300 font-medium">Company: {edu.company}</p>
                                <p className="text-gray-300 font-bold  mt-2">My Responsibility: <ul className="pl-10 font-normal text-gray-400">{edu.responsibility.map((i, index) => <li key={index}>{index+1}. {i}</li>)}</ul></p>
                            </div>

                            <div className="hidden md:block w-1/2 relative">
                                <div className={`absolute top-1/2 -translate-y-1/2  w-4 h-4 bg-emerald-500 rounded-full shadow-lg ${index % 2 === 0 ? "left-0" : "right-0"
                                    }`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
