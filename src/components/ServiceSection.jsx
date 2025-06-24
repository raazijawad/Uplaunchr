import React from 'react'
import { BsStack } from "react-icons/bs"
{/*import { HiLightBulb } from "react-icone/hi"*/}
const services = [
    {
        icone: <BsStack className='w-8 h-8 text-indigo-600'/>,
        title: "Web Design",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icone: <BsStack className='w-8 h-8 text-indigo-600'/>,
        title: "Web Design",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icone: <BsStack className='w-8 h-8 text-indigo-600'/>,
        title: "Web Design",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icone: <BsStack className='w-8 h-8 text-indigo-600'/>,
        title: "Web Design",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    }
]

const ServiceSection = () => {
    return (
        <section className='py-20 container mx-auto px-4 sm:px-4 lg:px-8' id='services'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* Header */}
                <div className='md:mt-12'>
                    <h2 className=' text-3xl md:text-4xl mb-6 font-bold md:w-4/5'>
                        Future of supports with new shapes
                    </h2>
                    <p className='text-gray-600 text-lg mb-4 md:w-4/5'>
                        Discuss your goal, determine success metrics, identify problems
                    </p>
                    <div className='space-y-3'>
                        <div className='flex gap-2 items-center '>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center' >
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>UX design content strategy</span>
                        </div>

                        <div className='flex gap-2 items-center mb-5 '>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600 '>

                                </div>
                            </div>
                            <span className='text-gray-600'>Development bring </span>
                        </div>
                    </div>

                    <button className='px-8 py-3 bg-blue-600 text-white rounded-full cursor-pointer
                                     hover:bg-blue-700 transition-colors'>
                        Get started
                    </button>
                </div>
                {/* Service cards */}
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        services.map((service, index) => (
                            <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6
                                                        hover:scale-102 hover:shadow-xl transition-all 
                                                        duration-300'>
                                <div className='mb-4'>{service.icone}</div>

                                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                                <p className='text-gray-600 mb-4'>{service.description}</p>

                                <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700
                                                                   transition-colors'>LEARN MORE</a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceSection