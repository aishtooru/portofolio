import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { contacts } from '../constants/index.js' 
import GlowCardContact from '../components/GlowCardContact'

const Contact = () => {
  return (
    <div id='contact' className="w-full padding-x-lg mt-20 mb-10">
            <TitleHeader title="Contact"
                sub="Let's collaborate or connect with me" />
            <div className="mx-auto grid grid-cols-2">
                {contacts.map((card, index) => (
              <GlowCardContact key={index} card={card} index={index} />
            ))}
            </div>
      </div>
  )
}

export default Contact