import React, { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { motion } from "framer-motion"
import { fadeIn } from "../ultils/motion"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [ActiveLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: '#home', label: "Home" },
        { href: '#about', label: "About us" },
        { href: '#services', label: "Our Services" },
        { href: '#testimonials', label: "Testimonials" },
    ]

    return (
        <motion.nav
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}

            className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b
                        bordar-gray-100 shadow-sms' >
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 
                        md:h-20 h-16">
                {/* logo */}
                {/*<div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 
                                transition-opacity">
                    
                </div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-75 hover:opacity-100 
                                transition-opacity">
                    
                </div>
            </div>*/}
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    className="flex items-center gap-1 cursor-pointer animate-pulse">
                    <div className="text-sm font-medium text-blue-900">
                        Up <span></span>Launcher
                    </div>
                </motion.div>

                {/* Mobile menu button*/}

                <motion.button
                    variants={fadeIn('left', 0.3)}
                    onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 top-1 ml-52 z-50">
                    {
                        isMenuOpen ? <HiX /> : <HiMenu />
                    }
                </motion.button>

                {/* Desktop navitems */}
                <motion.div
                    variants={fadeIn('down', 0.3)}
                    className="hidden md:flex items-center gap-10">
                    {
                        navLinks.map((link, index) => (
                            <motion.a
                                variants={fadeIn('down', 0.1 * (index + 1))}
                                key={index} href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 
                                    after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 
                                    after:transition-all ${ActiveLink === link.href ? "text-blue-600 after:w-full"
                                        : "text-gray-600 hover:text-gray-900"}`}>
                                {link.label}
                            </motion.a>
                        ))
                    }
                </motion.div>
                {/* Button Nav */}
                <div>
                    
                    <motion.button 
                    variants={fadeIn('left', 0.3)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg 
                                   hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg
                                   hover:shadow-blue-100">
                        <a href="#newslatets"> Get in Touch</a>
                    </motion.button>
            </div>
        </div>
        
        {/*  mobile menu items */ }
    {
        isMenuOpen && (
            <motion.div 
            variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
            className="md:hidden bg-white border-t border-gray-100 py-4">
                <motion.div 
                variants={fadeIn('down', 0.3)}
                className="container mx-auto px-4 space-y-3">
                    {navLinks.map((link, index) => (
                        <motion.a
                        variants={fadeIn('right', 0.1 * (index + 1))}
                            key={index}
                            onClick={() => {
                                setActiveLink(link.href);
                                setIsMenuOpen(false);
                            }}

                            className={`block text-sm font-medium py-2 ${ActiveLink === link.href ?
                                "text-blue-600" : "text-gray-600 hover:text-gray-900"
                                }`}
                            href={link.href}>{link.label}</motion.a>
                    ))}

                    <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg 
                                   hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg
                                   hover:shadow-blue-100">
                        <a href="#newslatets"> Get in Touch</a>
                    </button>

                </motion.div>
            </motion.div>
        )
    }
        </motion.nav >
    )
}

export default Navbar