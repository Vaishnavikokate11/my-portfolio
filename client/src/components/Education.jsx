import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: 'M.Sc. Computer Science',
            institution: 'Nowrosjee Wadia College, Pune',
            year: 'July 2023 - July 2025',
            description: 'CGPA: 8.63',
        },
        {
            degree: 'B.Sc. Computer Science',
            institution: 'Pratibha College, Chinchwad',
            year: 'July 2020 - July 2023',
            description: 'CGPA: 8.58',
        },
        {
            degree: 'HSC (Science)',
            institution: 'Malasakant Jr. College, Akurdi',
            year: 'July 2018 - July 2020',
            description: 'Percentage: 55.08%',
        },
    ];

    const certificates = [
        {
            name: 'LeetCode (60+ Problems)',
            issuer: 'LeetCode',
            year: '2025',
        },
        {
            name: 'HackerRank (Java & SQL)',
            issuer: 'HackerRank',
            year: '2025',
        },
        {
            name: 'Ideathon Runner-up',
            issuer: 'Telphatech LLP',
            year: '2025',
        },
        {
            name: 'Java, AWS, Data Analytics, SQL',
            issuer: 'Prepinsta',
            year: '2025',
        },
    ];

    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Certificates</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <span className="mr-2">🎓</span> Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                >
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                                    <p className="text-purple-600 dark:text-purple-400">{edu.institution}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{edu.year}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certificates */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <span className="mr-2">📜</span> Certificates
                        </h3>
                        <div className="space-y-6">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                >
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                                    <p className="text-purple-600 dark:text-purple-400">{cert.issuer}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.year}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
