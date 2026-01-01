import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import projects from "../../assets/project.json";
import { Link } from "react-router";

const Projects = () => {
    return (
        <section
            id="projects"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        >
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 text-center pb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-gray-700 shadow-xl transition-transform hover:scale-105 hover:shadow-emerald-500/40"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Project Image */}
                            <div className="overflow-hidden rounded-t-3xl">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.description}</p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-black shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {project.client && (
                                        <motion.a
                                            href={project.client}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 text-pink-500 text-sm font-medium shadow-md"
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
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-400 text-blue-500 text-sm font-medium shadow-md"
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
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaExternalLinkAlt size={16} /> Live
                                        </motion.a>
                                    )}
                                    <Link
                                        to={`/Details/${project.id}`}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-400 text-white text-sm font-medium shadow-md transition-transform hover:scale-105 hover:-translate-y-1"
                                    >
                                        <FaInfoCircle size={16} /> Details
                                    </Link>
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
