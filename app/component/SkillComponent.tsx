"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import { Autoplay } from 'swiper/modules';
import { SkillData } from '@/consonants';
import Image from 'next/image';

const SkillComponent = () => {
  return (
    <div className=" items-center justify-center bg-[121212] ">
        <div className='flex flex-col gap-20 max-w-[100%] text-center items-center'>
            <div className='flex flex-col items-center gap-4'>
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white text-xl ">Skills & Technologies</h1>

            <p className="text-gray-300 text-base ">
                Using the Latest technologies the World has to Offer 
            </p>
            </div>
         <div className='sm:block hidden w-[100%]'>
                 <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction: false
        }}
        speed={5000}
        modules={[Autoplay]}
        className="md:max-w-[100%] max-w-[100%] flex gap-[3rem] "
        >
            {SkillData.map((skill, index) => (
                <SwiperSlide key={index} >
                   <Image 
                   src={skill.Image}
                   alt={skill.name}
                   width={skill.width}
                   height={skill.height}
                    />
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-black hidden md:flex   '>{skill.name}</p>
                </SwiperSlide>
            ))}
        </Swiper>
 
            </div>
      
            <div className='sm:hidden block w-[100%]'>
            <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction: false
        }}
        speed={5000}
        modules={[Autoplay]}
        className="md:max-w-[100%] max-w-[100%]  gap-[3rem]  "
        >
            {SkillData.map((skill, index) => (
                <SwiperSlide key={index} >
                   <Image 
                   src={skill.Image}
                   alt={skill.name}
                   width={skill.width}
                   height={skill.height}
                    />
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-black hidden md:flex   '>{skill.name}</p>
                </SwiperSlide>
            ))}
        </Swiper>
            </div>
            

            <div className='sm:block hidden w-[100%]'>
                <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction: false,
            reverseDirection: true
        }}
        speed={5000}
        modules={[Autoplay]}
        className="md:max-w-[100%] max-w-[100%] flex gap-[3rem] "
        >
            {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                   <Image 
                   src={skill.Image}
                   alt={skill.name}
                   width={skill.width}
                   height={skill.height}
                    />
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-black hidden md:flex'>{skill.name}</p>
                </SwiperSlide>
            ))}
        </Swiper> 
            </div>
            
            <div className='sm:hidden block w-[100%]'>
                <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction: false,
            reverseDirection: true
        }}
        speed={5000}
        modules={[Autoplay]}
        className="md:max-w-[100%] max-w-[100%] flex gap-[3rem] "
        >
            {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                   <Image 
                   src={skill.Image}
                   alt={skill.name}
                   width={skill.width}
                   height={skill.height}
                    />
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-black hidden md:flex'>{skill.name}</p>
                </SwiperSlide>
            ))}
        </Swiper> 
            </div>
        </div>
    
    </div>
  )
}

export default SkillComponent
