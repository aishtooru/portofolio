"use client"

import { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import GlowCardContact from '../components/GlowCardContact'

const Contact = () => {
  const [contact, setContact] = useState([])
        
          useEffect(() => {
              const fetchContact = async () => {
                  try {
                    const data_contact = await fetch('/api/contact')
                    const response_contact = await data_contact.json()
                    setContact(response_contact.contact)
                  } catch(error) {
                      console.log(error)
                  }
              }
        
            fetchContact()
          }, [])

  return (
    <div id='contact' className="w-full padding-x-lg mt-20 mb-10">
            <TitleHeader title="Contact"
                sub="👋🏻Let's collaborate or connect with me" />
            <div className="mx-auto grid grid-cols-2">
                {contact.map((card, index) => (
              <GlowCardContact key={index} card={card} index={index} />
            ))}
            </div>
      </div>
  )
}

export default Contact