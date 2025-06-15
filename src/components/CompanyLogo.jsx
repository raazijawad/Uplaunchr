import React from 'react'
import amazon from "../assets/Logo/amazon.png"
import slack from "../assets/Logo/slack.png"
import MeUndies from "../assets/Logo/MeUndies.jpg"
import woocommerce from "../assets/Logo/Woocommerce.png"
import sitepoint from "../assets/Logo/sitepoint.png"

const CompanyLogo = () => {
  const logos = [amazon, slack, MeUndies, woocommerce, sitepoint]
  return (
    <div className='w-full overflow-hidden container py-20 gap-8 mx-auto flex sm:flex-row flex-col
    sm:items-center items-start -mt-25'>
        <div className='w-[300px] shrink-0 px-6 text-gray-600 border-l-4 border-blue-600 bg-white 
        py-2 z-10 sm:text-based text-xl font-semibold '>
            proud partner at <br />
            Hubspot & Segment
        </div>

        <div className='flex animate-marquee whitespace-nowrap'>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="" className='mx-12 h-8 w-36 object-contain grayscale opacity-75 
            hover:grayscale-0 hover:opacity-100 transition-all' />
          ))}

          {/* Duplicate logos */}
          {logos.map((logo, index) => (
            <img key={`dupliate ${index}`} src={logo} alt="" className='mx-12 h-8 w-36 object-contain grayscale opacity-75 
            hover:grayscale-0 hover:opacity-100 transition-all' />
          ))}

        </div>
    </div>
  )
}

export default CompanyLogo