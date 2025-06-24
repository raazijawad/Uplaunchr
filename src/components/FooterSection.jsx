import React from 'react'
import { FaFacebookF } from 'react-icons/fa'

const FooterSection = () => {
    return (
        <footer className='bg-gray-500'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8  py-16'>
                <div>
                    {/* Brand column */}
                    <div>
                        <div className='flex gap-2 items-center'>
                            <div className="flex items-center gap-1 cursor-pointer animate-pulse">
                                <div className="text-sm font-medium text-blue-900">
                                    Up <span></span>Launcher
                                </div>
                            </div>
                            <span className='text-xl font-medium ml-1'>The Next Design</span>
                        </div>
                        <p className='text-gray-600 mb-6'>The copy warned the little blind text, that where it came from it would 
                           have been rewritten a thousand times
                        </p>
                          
                        <div>
                            <a href="#w"><FaFacebookF/></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default FooterSection
