"use client"


import 'swiper/css'
import HomeImg from "@/public/Mountains.jpg"
import Image from "next/image"
import { Quotes } from '@/consonants';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MidSection = () => {
  return (
    <div className="relative w-full mt-3 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-orange-500 to-black opacity-50"></div>
    <Image src={HomeImg} alt="HomeImg" className="w-full" height={500} />
  
    <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
     <div className=' items-center justify-center w-full '>
        <div className='flex flex-col gap-20 w-full text-center items-center'>
      <div className='flex flex-col items-center gap-4'>
      <h1 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-orange-500 sm:text-xl text-base mt-3 sm:mt-0 ">Words that Motivate Me</h1>
      </div>
      <Swiper
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false
  }}
  speed={500}
  modules={[Autoplay]}
  className='w-full flex justify-center '
>
  {Quotes.map((quote, index) => (
    <SwiperSlide key={index} className='flex flex-col justify-center'>
      <p className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-orange-500 to-orange-300  font-semibold text-sm sm:text-xl lg:text-2xl'>{quote.quote}</p>
      <p className='text-transparent bg-clip-text bg-linear-to-r from-white  to-orange-500 flex justify-center mb-3 sm:mb-0 text-center sm:text-lg text-base'>
        {quote.author}
      </p>
    </SwiperSlide>
  ))}
</Swiper>
      
      
        </div>
     </div>
    </div>
  </div>
  )
}

export default MidSection
