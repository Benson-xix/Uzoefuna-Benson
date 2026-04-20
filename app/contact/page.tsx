import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import EmailSection from '../component/EmailSection'

const Contact = () => {
  return (
    <main className="relative flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto px-4 pt-36 pb-0">
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}

export default Contact