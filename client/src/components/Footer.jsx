import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Vaishnavi Kokate. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Vaishnavikokate11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="www.linkedin.com/in/vaishnavi-kokate5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:vaishnavikokate55@gmail.com"
                        className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
