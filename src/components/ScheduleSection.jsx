import React from 'react'
import Booster from "../assets/Boosterrocket.png"

const ScheduleSection = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                {/* Left */}
                <div className='md:w-1/2 w-full'>
                    <img className='w-full h-auto' src={Booster} alt="" />
                </div>

                {/* Right */}
                <div className='md:w-1/2 w-full'>
                    <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6' >Streamline your buisness <br />
                        with smart Scheduling Solutions
                    </h2>
                    <p className='text-gray-600 mb-6'>
                        Take control of your time and boost productivity with our intelligent scheduling system.
                        Automated appointments, manage teams availability, and deliver exceptional customer experience 
                        through seamless calender management.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ScheduleSection
