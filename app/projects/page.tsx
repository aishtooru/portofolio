"use client"

import { useState, useEffect } from 'react'
import TitleHeader from '@/src/components/TitleHeader'
import GlowCardProject from '@/src/components/GlowCardProject'
import NavbarPage from '@/src/components/NavbarPage'

const Page = () => {
  const [project, setProject] = useState([])
      
        useEffect(() => {
            const fetchProject = async () => {
                try {
                  const data_project = await fetch('/api/project')
                  const response_project = await data_project.json()
                  setProject(response_project.project)
                  console.log(response_project.project)
                } catch(error) {
                    console.log(error)
                }
            }
      
          fetchProject()
        }, [])

  return (
    <>
    <NavbarPage />
    <section className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div id='contact' className="w-full padding-x-lg mt-20 mb-10">
            <TitleHeader title="Project"
                sub="💻 Building, experimenting, and learning—one project at a time" />
            <div className="mx-auto grid grid-cols-2">
                {project.map((card, index) => (
              <GlowCardProject key={index} card={card} index={index} />
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

export default Page