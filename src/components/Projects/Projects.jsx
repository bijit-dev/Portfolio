import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A responsive personal portfolio built with React, Tailwind, and Framer Motion to showcase my skills and projects.",
        image: "https://i.ibb.co/FLKsxX7m/toolset-homepage-hero-section-example.png",
        github: "https://github.com/bijit-dev",
        live: "https://yourportfolio.com",
        tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
        title: "E-Commerce Store",
        description:
            "A fully functional e-commerce store with product search, cart, and checkout features.",
        image: "https://i.ibb.co/FLKsxX7m/toolset-homepage-hero-section-example.png",
        github: "https://github.com/bijit-dev",
        live: "https://ecommerce-demo.com",
        tech: ["React", "Tailwind", "Node.js"],
    },
    {
        title: "Blog Platform",
        description:
            "A markdown-based blog platform with authentication and a clean, minimal design.",
        image: "https://i.ibb.co/FLKsxX7m/toolset-homepage-hero-section-example.png",
        github: "https://github.com/bijit-dev",
        live: "https://blog-demo.com",
        tech: ["React", "Tailwind", "Firebase"],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
            <div className="container mx-auto px-4">
                {/* Section title */}
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>

                {/* Projects grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-lg border border-gray-200 hover:-translate-y-2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-3">
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-purple-600 transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 hover:bg-pink-100 text-pink-600 transition-colors"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
