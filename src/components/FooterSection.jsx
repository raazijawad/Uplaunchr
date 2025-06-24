import React from 'react'

const FooterSection = () => {
    return (
        <footer className='bg-gray-500'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8  py-16'>
                <div>
                    {/* Brand column */}
                    <div>
                        <div className="flex items-center gap-1 cursor-pointer animate-pulse">
                            <div className="text-sm font-medium text-blue-900">
                                Up <span></span>Launcher
                            </div>
                            <span>The Next Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
