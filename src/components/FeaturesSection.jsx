import React from 'react'

const features = [
    {
        icon: "🔍",  // magnifying glass for "Find out what you need"
        title: "Find out what you need",
        Description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
        icon: "🛠️",  // wrench for "work out the details"
        title: "work out the details",
        Description: "communication protocols apart from engagement models"
    },
    {
        icon: "⚡",  // lightning bolt for "we get work faster"
        title: "we get work faster",
        Description: "protocols apart from engage models, pricing billing"
    },
]

const FeaturesSection = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-16'>
            {/* heading texts */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold mb-4'>How can we help your buisness?</h2>
                <p className='text-gray-600'>when you resell besnik, you build trust and increase</p>
            </div>

            {/* features box */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {features.map((features, index) => (
                    <div key={index} className='flex flex-col text-center items-center p-6'>
                        <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{
                            backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4"
                        }}>
                            <div className='text-3xl'>{features.icon}</div>
                        </div>
                        <h3 className='text-2xl font-medium mb-3'>{features.title}</h3>
                        <p className='text-gray-500'>{features.Description}</p>
                    </div>
                ))}

            </div>

            {/* button */}
            <div className='text-center mt-12'>
                <button className='bg-blue-600 text-white text-medium py-3 px-8 rounded-full 
                                     cursor-pointer font-medium hover:bg-blue-700 transition-colors 
                                     relative '>Become a partner
                <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0'></div>                     
                </button>
            </div>

        </section>
    )
}

{/* …or push an existing repository from the command line
git remote add origin https://github.com/raazijawad/Uplaunchr.git
git branch -M main
git push -u origin main */}

export default FeaturesSection