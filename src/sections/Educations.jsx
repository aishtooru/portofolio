"use client"
import { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import GlowCardEdu from '../components/GlowCardEdu'

const Educations = () => {
  const [education, setEducation] = useState([])

  useEffect(() => {
      const fetchEducation = async () => {
          try {
            const data_education = await fetch('/api/education')
            const response_education = await data_education.json()
            console.log(response_education.education)
            setEducation(response_education.education)
          } catch(error) {
              console.log(error)
          }
      }

    fetchEducation()
  }, [])

  return (
    <div id='educations' className="w-full padding-x-lg">
        <TitleHeader title="Educations"
            sub="🎓 Learning, Growing, and Achieving" />
        <div className="mx-auto grid grid-cols-2">
            {education.map((card, index) => (
          <GlowCardEdu key={index} card={card} index={index} />
        ))}
        </div>
    </div>
  )
}

export default Educations