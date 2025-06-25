import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../ultils/motion'

const features = [
    {
        icon: "🔍",  // magnifying glass for "Find out what you need"
        title: "Find out what you need",
        Description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
        icon: "🛠️",  // wrench for "work out the details"
        title: "work out the details",
        Description: "communication protocols apart from engagement models"
    },
    {
        icon: "⚡",  // lightning bolt for "we get work faster"
        title: "we get work faster",
        Description: "protocols apart from engage models, pricing billing"
    },
]

const FeaturesSection = () => {
    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            className='max-w-7xl mx-auto px-4 py-16'>
            {/* heading texts */}
            <motion.div
                variants={fadeIn('up', 0.3)}
                className='text-center mb-12'>
                <motion.h2
                    variants={textVariant(0.2)}
                    className='text-3xl font-bold mb-4'>How can we help your buisness?</motion.h2>

                <motion.p
                    variants={textVariant(0.4)}
                    className='text-gray-600'>when you resell besnik, you build trust and increase</motion.p>
            </motion.div>

            {/* features box */}
            <motion.div
                variants={fadeIn('up', 0.5)}
                className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {features.map((features, index) => (
                    <motion.div
                        variants={fadeIn('up', 0.3 * (index + 1))}
                        key={index} className='flex flex-col text-center items-center p-6'>
                        <motion.div
                            variants={fadeIn('down', 0.4 * (index + 1))}
                            className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{
                                backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4"
                            }}>
                            <motion.div
                                variants={fadeIn('up', 0.5 * (index + 1))}
                                className='text-3xl'>{features.icon}
                            </motion.div>
                        </motion.div>
                        <motion.h3
                            variants={textVariant(0.3)}
                            className='text-2xl font-medium mb-3'>{features.title}
                        </motion.h3>
                        <motion.p
                            variants={fadeIn('up', 0.5 * (index + 1))}
                            className='text-gray-500'>{features.Description}
                        </motion.p>
                    </motion.div>
                ))}

            </motion.div>

            {/* button */}
            <motion.div 
            variants={fadeIn('up', 0.7)}
            className='text-center mt-12'>
                <motion.button 
                variants={fadeIn('up', 0.8)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white text-medium py-3 px-8 rounded-full 
                                     cursor-pointer font-medium hover:bg-blue-700 transition-colors 
                                     relative '>Become a partner
                    <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0'></div>
                </motion.button>
            </motion.div>

        </motion.section>
    )
}

{/* …or push an existing repository from the command line
git remote add origin https://github.com/raazijawad/Uplaunchr.git
git branch -M main
git push -u origin main */}

export default FeaturesSection