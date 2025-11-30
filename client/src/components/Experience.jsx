import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: 'Software Developer Intern',
            company: 'Telphatech LLP',
            duration: 'Jan 2025 - July 2025',
            description: 'Built and deployed an Orphanage Management Website using MERN stack to manage donations, child records, and volunteers. Designed responsive pages with WordPress and ensured mobile-friendly UI/UX. Deployed apps on Hostinger, integrated APIs with MongoDB, and used Git for teamwork and version control.',
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-purple-600"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                                </div>
                                <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
