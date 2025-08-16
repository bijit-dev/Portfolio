import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                // "YOUR_SERVICE_ID",
                // "YOUR_TEMPLATE_ID",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                // "YOUR_USER_ID"
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thank you, I will get back to you soon.",
                        showConfirmButton: true,
                        confirmButtonColor: "#7e22ce",
                    });
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong. Please try again later.",
                        showConfirmButton: true,
                        confirmButtonColor: "#7e22ce",
                    });
                    console.error(error.text);
                }
            );
    };

    const infoItems = [
        { icon: <FaEnvelope />, text: "bijitdeb8@gmail.com" },
        { icon: <FaPhone />, text: "+8801792374050" },
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/bijit-dev" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bijit-deb/" },
        { icon: <FaTwitter />, url: "https://twitter.com/bijitdeb.1" },
    ];

    return (
        <div id="contact" data-aos="fade-up" data-aos-duration="3000" className="min-h-screen bg-gray-900 p-6 text-gray-200 flex items-center">
            <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-4">

                {/* Part 1: Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-700 p-1 rounded-2xl shadow-xl relative overflow-hidden"
                >
                    <div className="bg-gray-900 p-8 rounded-2xl h-full flex flex-col justify-center gap-6 relative z-10">
                        <h2 className="text-4xl font-bold text-purple-400 drop-shadow-lg mb-4">📬 Get in Touch</h2>
                        <p className="text-gray-300 mb-6">
                            Reach out via email, phone, or social media. I’d love to hear from you!
                        </p>

                        {/* Contact Info Items */}
                        <div className="flex flex-col gap-4">
                            {infoItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="flex items-center gap-3 text-gray-200"
                                >
                                    <span className="text-purple-400 text-xl">{item.icon}</span>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-6">
                            {socialLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="text-gray-400 hover:text-purple-400 text-2xl transition-colors"
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Part 2: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-800 p-8 rounded-xl shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-purple-400 mb-6">✉ Send Me a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring focus:ring-purple-400/50 outline-none text-gray-200 transition-all"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring focus:ring-purple-400/50 outline-none text-gray-200 transition-all"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows="5"
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring focus:ring-purple-400/50 outline-none text-gray-200 transition-all"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
                        >
                            🚀 Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
