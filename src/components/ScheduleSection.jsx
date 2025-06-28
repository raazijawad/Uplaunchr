import React from 'react'
import Booster from "../assets/Boosterrocket.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../ultils/motion';

const ScheduleSection = () => {
    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                {/* Left */}
                <motion.div 
                variants={fadeIn('right', 0.3)}
                className='md:w-1/2 w-full'>
                    <motion.img 
                    variants={fadeIn('up', 0.4)}
                    className='w-full h-auto' src={Booster} alt="" />
                </motion.div>

                {/* Right */}
                <motion.div 
                variants={fadeIn('left', 0.3)}
                className='md:w-1/2 w-full'>
                    <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className='text-orange-500 font-semibold'>SCHEDULE</motion.p>
                    <motion.h2 
                    variants={textVariant(0.5)}
                    className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6' >Streamline your buisness <br />
                        with smart Scheduling Solutions
                    </motion.h2>
                    <motion.p 
                    variants={fadeIn('up', 0.6)}
                    className='text-gray-600 mb-6'>
                        Take control of your time and boost productivity with our intelligent scheduling system.
                        Automated appointments, manage teams availability, and deliver exceptional customer experience
                        through seamless calender management.
                    </motion.p>

                    <motion.a 
                    variants={fadeIn('up', 0.7)}
                    href="#" className='flex text-blue-500 font-semibold items-center gap-2 
                                           hover:gap-4 transition-all hover:text-blue-600'>
                        Explore scheduling features
                        <IoIosArrowRoundForward className='size-8' />
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default ScheduleSection
