/* eslint-disable react/no-unescaped-entities */
'use client'


import Image from 'next/image'
import Profile from '@/public/IMG_20230611_133246_164.jpg'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'




const Hero = () => {

  

  return (
    <section className="flex flex-col lg:flex-row justify-between">
      <div className='cols-span-7 place-self-center'>
      <h1 className='text-white lg:text-6xl text-4xl mb-4 font-extrabold '>
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white"> Hello I'm {" "}</span>
       <br/>
       <TypeAnimation
      sequence={[
        'Benson',
        1000,
        'a Software Developer',
        1000,
        'a Web Developer',
        1000,
        'a MERN Stack Developer',
        1000,
        'a Full-Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
    
      repeat={Infinity}
    />
      </h1>
       <p className='text-gray-400 text-lg lg:text-xl mb-6  '>
       Welcome to where Imagination meets Functionality, <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-purple-300 text-base md:text-xl'>Let's elevate your brand together through Innovative Design and Development.</span> 
       </p>

       <div className="flex gap-4 md:gap-0 ">


        <Link href="/contact" >
        <button  className="px-6 py-3 rounded-full w-full sm:w-fit  mr-4 bg-gradient-to-br from-orange-500 to-white border-2 border-[#FFA500] text-[#121212] hover:bg-gradient-to-bl hover:from-white hover:to-orange-600 hover:border-2 hover:border-white hover:text-[#121212]">
        Contact Me
        </button>
        </Link>

          <a  href="/Uzoefuna_Benson.pdf" download={true} className='cursor-pointer'>
          <span className="px-1 py-1 rounded-full  w-full sm:w-fit flex bg-gradient-to-br from-black via-orange-500 to-white text-[#121212] hover:bg-gradient-to-tr hover:from-white hover:via-orange-500 hover:to-black border-2 border-[#FFA500] hover:text-[#121212]">
            <span className=" bg-[#121212] rounded-full flex items-center gap-3 text-white px-5 py-2 hover:bg-slate-800"> 
            <p>Download CV</p> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 ">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            </span> 
            </span>
          </a>
      
       </div>
      </div>

      <div className="col-span-5 place-self-center md:mt-4 mt-8 lg:mt-0 ">
       <div className="rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ">
       <Image className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={Profile} alt={'profile-Image'} width={250} height={300}></Image>
       </div>
      </div>
    </section>
  )
}

export default Hero

