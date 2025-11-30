import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'QueuePro : Online Queue Management System',
            description: 'A real-time queue management platform to help customers book and track their position efficiently. Built with Node.js, Express.js, MongoDB, and Socket.io.',
            icon: <Users size={48} className="text-white" />,
            color: 'from-purple-500 to-indigo-600',
            tags: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
            link: 'https://queuepro.onrender.com/',
            github: 'https://github.com/Vaishnavikokate11/QueuePro'
        },
        {
            title: 'Wild Ride Horse',
            description: 'A serverless cloud-based web app for horse-riding enthusiasts to register and manage events. Built with React.js and AWS services.',
            icon: <Calendar size={48} className="text-white" />,
            color: 'from-pink-500 to-rose-600',
            tags: ['React.js', 'AWS Amplify', 'AWS Lambda', 'DynamoDB', 'Cognito'],
            link: 'https://github.com/Vaishnavikokate11/wildrydes-site',
            github: 'https://github.com/Vaishnavikokate11/wildrydes-site'
        }
    ];

    const Card = ({ project, index }) => {
        const divRef = useRef(null);
        const [isFocused, setIsFocused] = useState(false);
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [opacity, setOpacity] = useState(0);

        const handleMouseMove = (e) => {
            if (!divRef.current || isFocused) return;

            const div = divRef.current;
            const rect = div.getBoundingClientRect();

            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        const handleFocus = () => {
            setIsFocused(true);
            setOpacity(1);
        };

        const handleBlur = () => {
            setIsFocused(false);
            setOpacity(0);
        };

        const handleMouseEnter = () => {
            setOpacity(1);
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        return (
            <motion.div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 group w-full flex flex-col h-full"
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`,
                    }}
                />

                {/* Icon/Gradient Header */}
                <div className={`h-48 relative z-10 flex items-center justify-center bg-gradient-to-br ${project.color} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="z-20 p-4 bg-white/20 backdrop-blur-md rounded-full shadow-lg"
                    >
                        {project.icon}
                    </motion.div>
                </div>

                <div className="p-8 relative z-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors group/link"
                        >
                            <Github size={20} />
                            <span>Code</span>
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors group/link"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10">
                    {projects.map((project, index) => (
                        <div key={project.title} className="w-full md:w-[calc(50%-1.25rem)] max-w-2xl flex">
                            <Card project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
