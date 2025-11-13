'use client';
import { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import GlowCard from '../components/GlowCard.jsx';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                  gsap.to('.timeline', {
                    scaleY: 1- self.progress
                  })  
                }
            }
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%'
                }
            })
        })

    }, [])

    const [experience, setExperience] = useState([])
        
          useEffect(() => {
              const fetchExperience = async () => {
                  try {
                    const data_experience = await fetch('/api/experience')
                    const response_experience = await data_experience.json()
                    console.log(response_experience.experience)
                    setExperience(response_experience.experience)
                  } catch(error) {
                      console.log(error)
                  }
              }
        
            fetchExperience()
          }, [])

  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader title="Work Experience" sub="💼 My Career Overview"  />

            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {experience.map((card, index) => (
                        <div key={`${card.company_name}-${index}`} className='exp-card-wrapper'>
                            <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}/>
                            </div>
                            {/* right section */}

                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className='timeline'/>
                                        <div className='gradient-line w-1 h-full'/>
                                    </div>

                                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                        <div className='timeline-logo'>
                                            <img src={card.icon} alt="logo" />
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-3xl'>
                                                {card.company_name}
                                            </h1>
                                            <p className='my-5 text-white-50'>
                                                📅 {new Date(card.start_date).toLocaleString('en-US', { month: 'long', year: 'numeric' })} - {card.end_date ? new Date(card.end_date).toLocaleString('en-US', { month: 'long', year: 'numeric' }) : 'Present'}
                                            </p>
                                            <p className='text-[#839cb5] italic'>
                                                Responsibilities
                                            </p>
                                            <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                            {card.responsibilities
                                                ?.split('.')               
                                                .map(r => r.trim())        
                                                .filter(r => r !== '')     
                                                .map((responsibility) => (
                                                <li key={responsibility} className='text-lg'>
                                                    {responsibility}
                                                </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            
        </div>
    </section>
  )
}

export default Experience