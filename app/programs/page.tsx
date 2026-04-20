import React from 'react'
import ProjectSection from '../component/ProjectSection'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

const Programs = () => {
  return (
    <main className="relative flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto px-4 pt-36 pb-16">
        <ProjectSection />
      </div>
      <Footer />
    </main>
  )
}

export default Programs