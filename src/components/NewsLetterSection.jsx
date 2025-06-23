import React from 'react'

const NewsLetterSection = () => {
  return (
    <section className='container mx-auto px-4 py-16 sm:px-8 lg:px-8'>
        <div className='bg-blue-600 rounded-2xl overflow-hidden'>
            <div className='relative md:px-16 py-16 px-6 md:py-24'>
                {/* Gradient Bg */}
                <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant 
                                hidden md:block'>
                </div>

                <div>
                    {/* left content */}
                    <div className='text-white max-w-lg text-center md:text-left'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe Newsletter</h2>
                        <p className='text-blue-100 text-sm sm:text-base'>best cook and best delivery guys all at your service. Hot tasty food</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default NewsLetterSection
