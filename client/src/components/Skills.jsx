import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Dodecahedron } from '@react-three/drei';

const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                    <Icosahedron args={[1, 0]} position={[-3, 2, -5]} scale={0.5}>
                        <meshStandardMaterial color="#9333ea" wireframe />
                    </Icosahedron>
                </Float>
                <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                    <Torus args={[0.8, 0.2, 16, 100]} position={[3, -1, -4]} rotation={[Math.PI / 3, 0, 0]}>
                        <meshStandardMaterial color="#db2777" wireframe />
                    </Torus>
                </Float>
                <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
                    <Dodecahedron args={[0.8]} position={[-2, -3, -6]}>
                        <meshStandardMaterial color="#4f46e5" wireframe />
                    </Dodecahedron>
                </Float>
            </Canvas>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'AWS (Amplify, Lambda)', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'Git & GitHub', level: 85 },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
            <FloatingShapes />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                                <span className="text-purple-600 dark:text-purple-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-purple-600 h-2.5 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
