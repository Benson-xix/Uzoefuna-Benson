import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import EmailSection from '../component/EmailSection'

const pages = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
    <NavBar/>
   <div className="container mt-[8rem]  mx-auto py-5 px-12">
   <EmailSection/>
   </div>
   <Footer/>
 </main>
  )
}

export default pages
