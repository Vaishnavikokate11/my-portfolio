import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            console.log('Form Data:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                                <p className="text-gray-600 dark:text-gray-400">vaishnavikokate55@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                                <p className="text-gray-600 dark:text-gray-400">+91 96577 10813</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
                                <p className="text-gray-600 dark:text-gray-400">Pune, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-600 text-center">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
