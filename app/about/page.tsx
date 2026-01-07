import React from 'react'
import NavBar from '../component/NavBar'
import AboutSection from '../component/AboutSection'
import Footer from '../component/Footer'
import SkillComponent from '../component/SkillComponent'

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
    <NavBar/>
  <div className="container mt-32 mx-auto py-5 px-12">
  <AboutSection/>
  <SkillComponent/>
  </div>
  <Footer/>
  </main>
  )
}

export default About
