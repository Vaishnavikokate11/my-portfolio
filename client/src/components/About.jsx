import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-3xl text-center"
                    >
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            I'm a Computer Science graduate with an MSC(CS) and recent experience as a Software Developer Intern at Telphatech LLP. I've worked with technologies like Java, React, Node.js, Express, MongoDB, SQL, Docker, and AWS, mostly focusing on backend and full-stack development. I'm now looking to bring these skills to a collaborative team where I can keep learning and contribute to building real-world solutions.
                        </p>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-1">Name</h3>
                                    <p className="text-gray-800 dark:text-white font-medium">Vaishnavi Kokate</p>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-1">Email</h3>
                                    <p className="text-gray-800 dark:text-white font-medium">vaishnavikokate55@gmail.com</p>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-1">Phone</h3>
                                    <p className="text-gray-800 dark:text-white font-medium">+91 96577 10813</p>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-1">Location</h3>
                                    <p className="text-gray-800 dark:text-white font-medium">Pune, India</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Availability</h3>
                                <p className="text-green-600 font-bold text-lg">Open for Opportunities</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
