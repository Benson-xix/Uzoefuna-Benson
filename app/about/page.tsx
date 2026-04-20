import React from 'react'
import NavBar from '../component/NavBar'
import AboutSection from '../component/AboutSection'
import Footer from '../component/Footer'
import SkillComponent from '../component/SkillComponent'

const About = () => {
  return (
    <main className="relative flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto px-4 pt-36 pb-0">
        <AboutSection />
        <SkillComponent />
      </div>
      <Footer />
    </main>
  )
}

export default About