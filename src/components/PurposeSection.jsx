import React from 'react'
import { motion } from 'framer-motion'

const PurposeSection = () => {
    const features = [
        {
            icone: "🎯",
            title: "Built for impact",
            description: `We identify and nurture a truly diverse team of designers, 
                          developers and marketers`
        },

        {
            icone: "🎯",
            title: "In sync with you",
            description: `We work the way you do by do adapting to your workflows and rhythm
                          we aim to blend in for a seamless`
        }
    ]
    return (
        <section className='w-full bg-gray-200 py-16 px-4 sm:px-6 md:px-8' id='about'>
            <div className='max-w-6xl mx-auto'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                    {/* heading text */}
                    <motion.div 
                    variants={fadeIn('right', 0.3)}>
                        <motion.p 
                        variants={fadeIn('up', 0.4)}
                        className='text-sm text-purple-600 font-medium mb-2'>ACHIEVE MORE</motion.p>
                        <motion.h2 
                        variants={textVariant(0.5)}
                        className='text-3xl md:w-4/5 w-full md:text-4xl font-bold
                               text-gray-900'>Purpose of a convey is to keep your team </motion.h2>
                    </motion.div>

                    {/* bullet points */}

                    <motion.div 
                    variants={fadeIn('left', 0.3)}
                    className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                        {
                            features.map((feature, index) => (
                                <motion.div 
                                key={index}
                                variants={fadeIn('up', 0.3 * (index + 1))}
                                className='flex space-x-4'>
                                    <motion.div 
                                    variants={fadeIn('right', 0.4 * (index + 1))}
                                    className='w-12 h-12 flex items-center justify-items-start rounded-lg'>{feature.icone}</motion.div>

                                    <motion.div
                                    variants={fadeIn('left', 0.4 * (index + 1))}
                                    >
                                        <motion.h3 
                                        variants={textVariant(0.3)}
                                        className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</motion.h3>
                                        <motion.p 
                                        variants={fadeIn('up', 0.4)}
                                        className='text-gray-600'>{feature.description}</motion.p>
                                    </motion.div>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default PurposeSection
