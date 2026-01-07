import React from 'react'
import ProjectSection from '../component/ProjectSection'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

const Programs = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
       <NavBar/>
      <div className="container mt-[8rem]  mx-auto py-5 px-12">
        <ProjectSection/>
      </div>
      <Footer/>
    </main>
  )
}

export default Programs
