import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import projects from "../../assets/project.json";
import { Link } from "react-router";


const Projects = () => {
    
    return (
        <section id="projects" className="py-16 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-md bg-white/90 backdrop-blur-sm border border-gray-200"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.15)" }}
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-t-2xl">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col gap-2">
                                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {project.client && (
                                        <motion.a
                                            href={project.client}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaGithub size={16} /> Client
                                        </motion.a>
                                    )}
                                    {project.server && (
                                        <motion.a
                                            href={project.server}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-medium shadow-md"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaGithub size={16} /> Server
                                        </motion.a>
                                    )}
                                    {project.live && (
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-pink-200 text-white text-sm font-medium shadow-md"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaExternalLinkAlt size={16} /> Live
                                        </motion.a>
                                    )}
                                    (
                                        <Link
                                        to={`/Details/${project.id}`}
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-200 text-white text-sm font-medium shadow-md"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaInfoCircle size={16} /> Details
                                        </Link>
                                    )
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
