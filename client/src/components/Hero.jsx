import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#9333ea"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Hero = () => {
    return (
        <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                        <Stars />
                    </Float>
                </Canvas>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Vaishnavi Kokate</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                >
                    MERN Stack Developer | Problem Solver | Tech Enthusiast
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#contact"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
