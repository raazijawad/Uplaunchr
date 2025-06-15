import React from 'react'
import MRockter from "../assets/rocketfly.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";
import MRockter2 from "../assets/MoniterRocket.webp"

const MoniterSection = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                {/* Left */}

                <div className='md:w-1/2 w-full'>
                    <p className='text-green-500 font-semibold'>MONITER</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6' >Indroducing best mobile <br />
                        carousels
                    </h2>
                    <p className='text-gray-600 mb-6'>
                        Before the ship is really back. Round, round, all around the world. Round,
                        all around the world. Round, all around the world. Round, all around the world.
                    </p>

                    <a href="#" className='flex text-blue-500 font-semibold items-center gap-2 
                                                           hover:gap-4 transition-all hover:text-blue-600'>
                        Learn more about monitering
                        <IoIosArrowRoundForward className='size-8' />
                    </a>
                </div>
                
                {/* Right */}
                <div className='md:w-1/2 w-full'>
                    <img className='w-full h-auto' src={MRockter} alt="" />
                </div>

                
            </div>

        </section>
    )
}

export default MoniterSection
