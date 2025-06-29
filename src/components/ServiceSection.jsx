import React from 'react'
import { motion } from 'framer-motion'
import { BiTime } from 'react-icons/bi'
import { BsStack } from "react-icons/bs"
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'
import { fadeIn, textVariant } from '../ultils/motion'
{/*import { HiLightBulb } from "react-icone/hi"*/ }
const services = [
    {
        icone: <BsStack className='w-8 h-8 text-indigo-600' />,
        title: "Web Design",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icone: <HiLightBulb className='w-8 h-8 text-indigo-600' />,
        title: "Ad-Creatives",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icone: <FiSettings className='w-8 h-8 text-indigo-600' />,
        title: "Automation",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icone: <BiTime className='w-8 h-8 text-indigo-600' />,
        title: "Infographics",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    }
]

const ServiceSection = () => {
    return (
        <section className='py-20 container mx-auto px-4 sm:px-4 lg:px-8' id='services'>
            <motion.div
                variants={fadeIn('up', 0.3)}
                className='grid grid-cols-1 md:grid-cols-2'>
                {/* Header */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    className='md:mt-12'>
                    <motion.h2
                        variants={textVariant(0.2)}
                        className=' text-3xl md:text-4xl mb-6 font-bold md:w-4/5'>
                        Future of supports with new shapes
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        className='text-gray-600 text-lg mb-4 md:w-4/5'>
                        Discuss your goal, determine success metrics, identify problems
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        className='space-y-3'>
                        <motion.div
                            variants={fadeIn('right', 0.7)}
                            className='flex gap-2 items-center '>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center' >
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>UX design content strategy</span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('right', 0.8)}
                            className='flex gap-2 items-center mb-5 '>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600 '>

                                </div>
                            </div>
                            <span className='text-gray-600'>Development bring </span>
                        </motion.div>
                    </motion.div>

                    <motion.button
                        variants={fadeIn('up', 0.9)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-8 py-3 bg-blue-600 text-white rounded-full cursor-pointer
                                     hover:bg-blue-700 transition-colors'>
                        Get started
                    </motion.button>
                </motion.div>
                {/* Service cards */}
                <motion.div 
                variants={fadeIn('left', 0.4)}
                className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        services.map((service, index) => (
                            <motion.div
                            variants={fadeIn('up', 0.3 * (index + 1))}
                            key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6
                                                        hover:scale-102 hover:shadow-xl transition-all 
                                                        duration-300'>
                                <motion.div 
                                variants={fadeIn('down', 0.4 * (index + 1))}
                                className='mb-4'>{service.icone}</motion.div>

                                <motion.h3
                                 variants={textVariant(0.3)}
                                 className='text-xl font-semibold mb-2'>{service.title}</motion.h3>
                                <motion.p
                                variants={fadeIn('up', 0.5 * (index + 1))}
                                className='text-gray-600 mb-4'>{service.description}</motion.p>

                                <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700
                                                                   transition-colors'>LEARN MORE</a>

                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ServiceSection