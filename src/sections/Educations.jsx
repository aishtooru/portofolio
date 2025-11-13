import React from 'react'
import { educations } from '../constants/index.js' 
import TitleHeader from '../components/TitleHeader'
import GlowCardEdu from '../components/GlowCardEdu'

const Educations = () => {
  return (
    <div id='educations' className="w-full padding-x-lg">
        <TitleHeader title="Educations"
            sub="🎓 Learning, Growing, and Achieving" />
        <div className="mx-auto grid grid-cols-2">
            {educations.map((card, index) => (
          <GlowCardEdu key={index} card={card} index={index} />
        ))}
        </div>
    </div>
  )
}

export default Educations