import { useParams } from "react-router";
import projects from "../../assets/project.json";

const Details = () => {
    const { id } = useParams();
    const project = projects?.find((data) => data.id === Number(id));

    if (!project) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
                <p className="text-2xl font-bold text-red-400">🚫 Project Not Found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-gray-200">
            <div className="max-w-6xl mx-auto">

                {/* Project Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-400 drop-shadow-lg">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-3">
                        {project.description}
                    </p>
                </div>

                {/* Card Layout */}
                <div className="card lg:card-side bg-gray-800 shadow-2xl rounded-xl overflow-hidden border border-gray-700">

                    {/* Image */}
                    <figure className="lg:w-1/2 w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </figure>

                    {/* Details */}
                    <div className="card-body lg:w-1/2 w-full bg-gray-900 p-6">

                        {/* Features */}
                        <h3 className="text-xl font-semibold text-purple-400">
                            ✨ Features
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {project.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="hover:text-purple-300 transition-colors"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <h3 className="text-xl font-semibold text-indigo-400 mt-4">
                            🛠 Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="badge badge-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="card-actions mt-6 flex flex-wrap gap-3">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="btn bg-purple-500 text-white hover:bg-purple-600 hover:scale-105 transition-transform"
                            >
                                🚀 Live Site
                            </a>
                            <a
                                href={project.client}
                                target="_blank"
                                rel="noreferrer"
                                className="btn bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 transition-transform"
                            >
                                💻 Client Code
                            </a>
                            <a
                                href={project.server}
                                target="_blank"
                                rel="noreferrer"
                                className="btn bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transition-transform"
                            >
                                ⚙ Server Code
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
