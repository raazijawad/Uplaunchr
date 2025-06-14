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
        <div>
            {features.map((features, index) => (
                <div>
                    <div>{features.icon}</div>
                </div>
            ))}

        </div>
    </section>
  )
}

{/* …or push an existing repository from the command line
git remote add origin https://github.com/raazijawad/Uplaunchr.git
git branch -M main
git push -u origin main */}

export default FeaturesSection