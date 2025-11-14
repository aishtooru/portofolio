'use client';
import { useState, useEffect, useRef } from 'react'
import TitleHeader from '@/src/components/TitleHeader';
import GlowCard from '@/src/components/GlowCard.jsx';
import NavbarPage from '@/src/components/NavbarPage'
import { useSearchParams } from "next/navigation";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

interface Experience {
    company_name: string;
    icon: string;
    position: string;
    start_date: Date;
    end_date: Date;
    responsibilities: string;
}

const page = () => {

    const [experience, setExperience] = useState<Experience[]>([])
    const params = useSearchParams();
    const from = params.get("from");


    useEffect(() => {
        if (typeof window === "undefined") return;

        const hasReloaded = sessionStorage.getItem("exp_reloaded");

        // Jika datang dari home → JANGAN reload
        if (from === "home") return;

        // Jika belum pernah reload → reload sekali
        if (!hasReloaded) {
            sessionStorage.setItem("exp_reloaded", "yes");
            window.location.reload();
        }
    }, [from]);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const data_experience = await fetch('/api/experience')
                const response_experience = await data_experience.json()
                setExperience(response_experience.experience)
            } catch(error) {
                console.log(error)
            }
        }
        
        fetchExperience()
    }, [])

    useGSAP(() => {

        gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
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

        gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
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
        ScrollTrigger.refresh()

    },  [experience] )

    useEffect(() => {
    return () => {
        sessionStorage.removeItem("exp_reloaded");
    };
    }, []);


  return (
    <>
    <NavbarPage />
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

                            <div className="xl:w-4/6 mb-10">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className='timeline'></div>
                                        <div className='gradient-line w-1 h-full'></div>
                                    </div>

                                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                        <div className='timeline-logo'>
                                            <img src={card.icon} alt="logo" />
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-3xl'>
                                                {card.position}
                                            </h1>
                                            <h2 className='font-semibold text-xl'>
                                                {card.company_name}
                                            </h2>
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

export default page