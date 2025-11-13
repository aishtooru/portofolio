'use client';

import { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const TechStack = () => {

    const [tech, setTech] = useState([])
    
      useEffect(() => {
          const fetcTech = async () => {
              try {
                const data_tech = await fetch('/api/techstack')
                const response_tech = await data_tech.json()
                setTech(response_tech.techstack)
              } catch(error) {
                  console.log(error)
              }
          }
    
        fetcTech()
      }, [])

    useGSAP(() => {
        gsap.fromTo('.tech-card', {y: 50, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    }, [tech])

    

  return (
    <div id="skills" className="flex-center section-padding">
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title="My Preferred Tech Stack"
            sub="The Skills I Bring to the Table" />

            <div className="tech-grid">
                {tech.map((tch) => (
                    <div key={tch.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className='tech-card-animated-bg' />
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <img src={tch.img_path} className='w-[141px] h-[129px] object-contain'/>
                            </div>

                            <div className="padding-x w-full">
                                <h2 className=''>{tch.name}</h2>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            
        </div> 
</div>
  )
}

export default TechStack