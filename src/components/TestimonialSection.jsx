import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { fadeIn } from '../ultils/motion';

const testimonials = [
   {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
   },
   {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
   },
   {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
   },
   {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
   },
   {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
   },
   {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
   },

];




const TestimonialSection = () => {
   return (
      <motion.section
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView="show"
         className='py-16 px-4 max-w-7xl mx-auto' id='testimonials'>
         <motion.div
         variants={fadeIn('up', 0.3)}
         className='text-center mb-12'>
            <motion.h2 
            variants={fadeIn('up', 0.3)}
            className='text-3xl md:text-4xl font-bold mb-4'>What our happy client say</motion.h2>
            <p className='text-gray-600 text-sm font-medium'>Things that make it the best place to start trading</p>
         </motion.div>

         {/* testimonial cards */}
         <div className='relative'>
            {/* swiper cards */}
            <Swiper
               navigation={
                  {
                     nextEl: ".swiper-button-next-custom",
                     prevEl: ".swiper-button-prev-custom",
                  }
               }
               spaceBetween={30}
               pagination={{ clickable: true }}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                  },
                  768: {
                     slidesPerView: 2,
                  },
                  1024: {
                     slidesPerView: 3,
                  },
               }}
               modules={[Navigation, Pagination]}
               className="testimonials-swiper md:mb-12"
            >
               {
                  testimonials.map((testimonials, index) => (
                     <SwiperSlide key={index} className='h-full md:py-12 py-4'>
                        <div className='text-center p-4 bg-white rounded-lg shadow-md  h-full flex flex-col'>
                           <div className='w-24 h-24 mx-auto mb-4'>
                              <img className='w-full h-full object-cover rounded-full ' src={testimonials.image} alt="" />
                           </div>

                           <div className='text-center'>
                              {[...Array(5)].map((_, starIndex) => (
                                 <span className='text-amber-400 '>★</span>
                              ))}
                           </div>

                           <h3 className='text-xl font-semibold mb-3'>{testimonials.name}</h3>
                           <p className='text-gray-600'>{testimonials.text}</p>
                        </div>
                     </SwiperSlide>
                  ))
               }
            </Swiper>



            {/* navigational button */}
            <div className='flex justify-center gap-4 mt-8'>
               <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center 
                                hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                  <BsChevronLeft className='size-6' />
               </button>

               <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center 
                                hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                  <BsChevronRight className='size-6' />
               </button>
            </div>
         </div>
      </motion.section>
   )
}

export default TestimonialSection
