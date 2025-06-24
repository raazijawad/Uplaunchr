import React from 'react'
import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

 const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

const FooterSection = () => {
    return (
        <footer className='bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8  py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                    {/* Brand column */}
                    <div className='lg:col-span-4'>
                        <div className='flex gap-2 items-center mb-6'>
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
                          
                        <div className='flex gap-8'>
                            <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center
                                                  justify-center text-gray-600 hover:bg-blue-600 hover:text-white
                                                  transition-colors duration-300'>
                                <FaFacebookF className='size-5'/>
                            </a>

                            <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center
                                                  justify-center text-gray-600 hover:bg-blue-600 hover:text-white
                                                  transition-colors duration-300'>
                                <FaTwitter className='size-5'/>
                            </a>

                            <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center
                                                  justify-center text-gray-600 hover:bg-blue-600 hover:text-white
                                                  transition-colors duration-300'>
                                <FaLinkedin className='size-5'/>
                            </a>
                        </div>
                    </div>

                    {/* Footer nav items */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
