import React from 'react'
import Hero from '@/src/sections/Hero.jsx'
import Showcase from '@/src/sections/Showcase.jsx'
import Navbar from '@/src/components/Navbar.jsx'
import Certificates from '@/src/sections/Certificates.jsx'
import Experience from '@/src/sections/Experience.jsx'
import TechStack from '@/src/sections/TechStack.jsx'
import Educations from '@/src/sections/Educations.jsx'
import Contact from '@/src/sections/Contact.jsx'

const page = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Educations />
        <Showcase/>
        <Certificates/>
        <Experience/>
        <TechStack/>
        <Contact />
    </>
  )
}

export default page