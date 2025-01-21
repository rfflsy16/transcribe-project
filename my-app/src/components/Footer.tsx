"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin, Github, Mail, Globe } from "lucide-react";

export default function Footer() {
    const footerLinks = [
        {
            title: 'Product', 
            links: [
                { name: 'Features', href: '#features' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'API', href: '#api' },
                { name: 'Documentation', href: '#docs' }
            ]
        },
        {
            title: 'Company', 
            links: [
                { name: 'About Us', href: '#about' },
                { name: 'Careers', href:'#careers' },
                { name: 'Blog', href: '#blog' },
                { name: 'Press', href: '#press' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Community', href: '#community' },
                { name: 'Help Center', href: '#help' },
                { name: 'Partners', href: '#partners' },
                { name: 'Status', href: '#status' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy', href: '#privacy' },
                { name: 'Terms', href: '#terms' },
                { name: 'Security', href: '#security' },
                { name: 'Cookies', href: '#cookies' }
            ]
        }
    ];

    const socialLinks = [
        { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { Icon: Github, href: 'https://github.com', label: 'GitHub' }
    ];

    return (
        <footer className="relative mt-32">
            {/* Newsletter Section */}
            <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 mb-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 p-8"
                    >
                        <div className="absolute inset-0 bg-grid-white/10" />
                        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">Stay up to date</h3>
                                <p className="text-white/80">Get notified about our latest features and updates.</p>
                            </div>
                            <div className="flex w-full lg:w-auto space-x-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 lg:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                                />
                                <button className="px-6 py-3 rounded-lg bg-white text-blue-500 font-semibold hover:bg-white/90 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="border-t border-white/10 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-20">
                        {/* Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            {footerLinks.map((group, idx) => (
                                <motion.div
                                    key={group.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                                        {group.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {group.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="pt-8 border-t border-white/10"
                        >
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <Link
                                        href="/"
                                        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                    >
                                        Transcribe
                                    </Link>
                                    <p className="text-gray-400 text-sm">
                                        © {new Date().getFullYear()} Transcribe. All rights reserved.
                                    </p>
                                </div>

                                <div className="flex items-center gap-6">
                                    {/* Language Selector */}
                                    <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                        <Globe className="h-5 w-5" />
                                        <span className="text-sm">English</span>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-4">
                                        {socialLinks.map((social, idx) => {
                                            const Icon = social.Icon;
                                            return (
                                                <motion.a
                                                    key={idx}
                                                    href={social.href}
                                                    aria-label={social.label}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </motion.a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}