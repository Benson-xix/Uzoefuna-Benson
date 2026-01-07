/* eslint-disable react/no-unescaped-entities */
  'use client'
import Image from "next/image";
import Link from "next/link";
import GitHub from "@/public/download.png"
import LinkedIn from "@/public/download (1).png"
import { useRef } from "react";

const EmailSection = () => {
 
 const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data = {
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    
  
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
  
    try {
      const response = await fetch(endpoint, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const resData = await response.json();
    console.log('Email sent successfully:', resData);
  
    if (formRef.current) {
      formRef.current.reset();
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
 
    
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 "></div>
      <div className="flex flex-col gap-3 z-10">
        <h5 className=" lg:text-5xl text-xl text-transparent bg-clip-text bg-linear-to-r from-white via-slate-700 to-orange-500 font-bold">Connect With Benson</h5>
        <p className="text-white nb-4 max-w-md">
            {" "}
            i'm currently looking for new Opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, i'll try my best
            to reach out to you!.
            Please you can contact me either through the Form or  directly via <a href="mailto:bensondomini81@gmail.com" className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-slate-700 to-purple-200 font-semibold ">bensondominic81@gmail.com</a>
        </p>

        <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/Benson-xix">
        <Image src={GitHub} alt="github" width={50} height={50} />
        </Link>

        <Link href="https://www.linkedin.com/in/uzoefuna-benson-264335240">
        <Image src={LinkedIn} alt="LinkedIn"  width={40} height={40} />
        </Link>
        </div>
      </div>

      <div>
        <form ref={formRef}  className="flex flex-col gap-6" onSubmit={handleSubmit}>
        
        

            <div className="flex flex-col gap-1 mb-6">
            <label htmlFor="email" className="text-orange-500 block mb-2 text-sm font-medium ">Your Email</label>
            <input className="bg-[#18191E] border outline-none border-orange-500 placeholder-slate-700 text-gray-100 text-sm rounded-lg block w-full p-2.5 " type="email" name="email" id="email" required placeholder="example@mail.com" />
            </div>
        
            <div className="flex flex-col gap-1 mb-6">
            <label htmlFor="subject" className="text-orange-500 block mb-2 text-sm font-medium ">Email Subject</label>
            <input className="bg-[#18191E] border outline-none border-orange-500 placeholder-slate-700 text-gray-100 text-sm rounded-lg block w-full p-2.5 " type="text" id="subject" name="subject" required placeholder="Hello Benson" />
            </div>

            <div className="flex flex-col gap-1 mb-6">
            <label htmlFor="message" className="text-orange-500 block mb-2 text-sm font-medium ">Message</label>
            <textarea className="bg-[#18191E] border outline-none border-orange-500 placeholder-slate-700 text-gray-100 text-sm rounded-lg block w-full p-2.5 " maxLength={500} name="message" id="message" required placeholder="Type your msg here!" />
            </div>

         

            <button type="submit" className=" bg-orange-500 hover:bg-orange-600  text-black font-medium py-2.5  px-5 rounded-lg w-full ">
                Send Message
            </button>
      </form>
      </div>
    </section>
  )
}

export default EmailSection
