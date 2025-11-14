"use client"
import { useState, useEffect } from 'react'
import TitleHeader from '@/src/components/TitleHeader'
import GlowCardEdu from '@/src/components/GlowCardEdu'
import NavbarPage from '@/src/components/NavbarPage'

const Educations = () => {
  const [education, setEducation] = useState([])

  useEffect(() => {
      const fetchEducation = async () => {
          try {
            const data_education = await fetch('/api/education')
            const response_education = await data_education.json()
            setEducation(response_education.education)
          } catch(error) {
              console.log(error)
          }
      }

    fetchEducation()
  }, [])


  return (
    <>
    <NavbarPage />
    <section className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
    <div id='educations' className="w-full padding-x-lg">
        <TitleHeader title="Educations"
            sub="🎓 Learning, Growing, and Achieving" />
        <div className="mx-auto grid grid-cols-2">
            {education.map((card, index) => (
          <GlowCardEdu key={index} card={card} index={index} />
        ))}
        </div>
        <div className="flex justify-center items-center w-full mt-10 mb-10">
            <a href="/" className='new-button group'>
                <span className='relative z-10'>Back to Home</span>
            </a>
        </div>
    </div>
    </section>
    </>
  )
}

export default Educations