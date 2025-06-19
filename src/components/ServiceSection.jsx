import React from 'react'

const ServiceSection = () => {
    return (
        <section className='py-20 container mx-auto px-4 sm:px-4 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* Header */}
                <div>
                    <h2 className=' text-3xl md:text-4xl mb-6 font-bold md:w-4/5'>
                        Future of supports with new shapes
                    </h2>
                    <p className='text-gray-600 text-lg mb-4 md:w-4/5'>
                        Discuss your goal, determine success metrics, identify problems
                    </p>
                    <div className='mb-1'>
                        <div className='flex gap-2 items-center '>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center' >
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>UX design content strategy</span>
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex gap-2 items-center'>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600 '>

                                </div>
                            </div>
                            <span className='text-gray-600'>Friendly Service </span>
                        </div>
                    </div>
                </div>
                {/* Service cards */}
                <div>

                </div>
            </div>
        </section>
    )
}

export default ServiceSection