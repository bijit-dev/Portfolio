import Image from "../../components/Image";
import banner from "../../assets/banner.png";

const About = () => {
    return (
        <section
            id="about"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-12"
        >
            {/* background decoration */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent)]"></div>

            <div className="relative container mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
                {/* Left text section */}
                <div
                    className="md:w-1/2 text-center md:text-left space-y-6"
                    data-aos="fade-right"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        About <span className="text-emerald-400">Me</span>
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        I’m Bijit Deb, a web developer passionate about building fast,
                        scalable, and user-focused applications. With expertise in React.js
                        and the MERN stack, I aim to deliver not just clean code, but
                        meaningful digital experiences.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        I believe great development is about solving real problems,
                        collaborating with clarity, and continuously learning to stay ahead
                        of the curve.
                    </p>

                    {/* Contact Info Card */}
                    <div
                        className="mt-8 bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-emerald-500/30 transition duration-300"
                        data-aos="zoom-in-up"
                        data-aos-delay="300"
                    >
                        <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                            Contact Info
                        </h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>👤 Full Name: Bijit Deb</li>
                            <li>📧 Email: <a href="mailto:bijitdeb8@gmail.com" className="cursor-pointer hover:text-emerald-500">bijitdeb8@gmail.com</a></li>
                            <li>📱 Phone: <a href="https://wa.me/+8801792374050" className="cursor-pointer hover:text-emerald-500">+8801792374050</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right image section */}
                <div
                    className="md:w-1/2 hidden lg:flex justify-center"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <Image
                            src={banner}
                            className="relative rounded-2xl shadow-2xl w-80 md:w-[420px] border-4 border-gray-700 group-hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
