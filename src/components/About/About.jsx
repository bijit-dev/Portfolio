import Image from "../../components/Image";
import banner from "../../assets/banner.png";

const About = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 my-20">
            <h1 className="text-3xl font-bold Poppins text-white text-center mb-10">About Me</h1>
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
                <div className="avatar w-full lg:w-5/12">
                    <div className="w-10/12 mx-auto border-4 border-emerald-600 rounded-full">
                        <Image src={banner} />
                    </div>
                </div>
                <div className="text-lg Roboto font-medium text-white text-justify space-y-2 w-full lg:w-9/12">
                    <p>My name is Bijit Deb. I've recently completed my Diploma in Computer Science and Technology from Habiganj Polytechnic Institute. I’m a passionate and results-driven web developer with specialized expertise in React.js and the MERN stack (MongoDB, Express.js, React, Node.js). I strive to build scalable, maintainable, and high-performance web applications that not only meet client needs but exceed expectations.</p>
                    <p>What truly sets me apart is my commitment to integrity, clear communication, and client satisfaction. I believe that great development is not just about writing clean code—it's about understanding the vision, solving real-world problems, and delivering value through thoughtful, user-centric design.</p>
                    <p>Currently, I’m expanding my horizons by diving into emerging web technologies and best practices to stay ahead of the curve. Whether it's improving performance, exploring modern frameworks, or refining development workflows, I’m always learning and evolving.</p>
                    <p>In every project, I bring a mindset of collaboration, accountability, and continuous improvement—qualities that help turn ideas into impactful digital experiences.</p>
                </div>


            </div>
        </div>
    );
};

export default About;