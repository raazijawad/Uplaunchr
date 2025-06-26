import React from 'react'
import MRockter from "../assets/rocketfly.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";
import MRockter2 from "../assets/MoniterRocket.webp"
import { motion } from 'framer-motion';
import { fadeIn } from '../ultils/motion';
import { LuMonitorPause } from 'react-icons/lu';

const MoniterSection = () => {
    return (
        <motion.section
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                {/* Left */}

                <motion.div
                variants={fadeIn('right', 0.3)}
                className='md:w-1/2 w-full'>
                    <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className='text-green-500 font-semibold'>MONITER</motion.p>
                    <motion.h2 
                    variants={textVariant(0.5)}
                    className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6' >Indroducing best mobile <br />
                        carousels
                    </motion.h2>
                    <motion.p 
                    variants={fadeIn('up', 0.6)}
                    className='text-gray-600 mb-6'>
                        Before the ship is really back. Round, round, all around the world. Round,
                        all around the world. Round, all around the world. Round, all around the world.
                    </motion.p>

                    <motion.a 
                    variants={fadeIn('up', 0.7)}
                    href="#" className='flex text-blue-500 font-semibold items-center gap-2 
                                                           hover:gap-4 transition-all hover:text-blue-600'>
                        Learn more about monitering
                        <IoIosArrowRoundForward className='size-8' />
                    </motion.a>
                </motion.div>
                
                {/* Right */}
                <div className='md:w-1/2 w-full'>
                    <img className='w-full h-auto' src={MRockter} alt="" />
                </div>

                
            </div>

        </motion.section>
    )
}

export default MoniterSection
