import { FaGraduationCap } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // make sure you import the CSS

const educationData = [
    {
        year: "2020 - 2024",
        degree: "Diploma in Computer Science & Technology",
        institution: "Habiganj Polytechnic Institute, Bangladesh",
        description: "Focused on web development, data structures, and full stack applications.",
    },
    {
        year: "2018 - 2020",
        degree: "Secondary School Certificate (SSC)",
        institution: "Putijuri S. C. High School, Bangladesh",
        description: "Completed secondary education with focus on science subjects.",
    },
];

const Education = () => {
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
                    Education
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
                    My academic journey and milestones in learning.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-emerald-500/40"></div>

                <div className="space-y-12">
                    {educationData.map((edu, index) => (
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
                                <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                                <p className="text-gray-300 font-medium">{edu.institution}</p>
                                <p className="text-gray-400 mt-2">{edu.description}</p>
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

export default Education;
