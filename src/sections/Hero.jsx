'use client';
import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.5,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    }, [])

    const [biodata, setBiodata] = useState([])
    const [roles, setRoles] = useState([])

    useEffect(() => {
        const fetchBiodata = async () => {
            try {
                const data_biodata = await fetch('/api/hero')
                const response_biodata = await data_biodata.json()
                console.log(response_biodata)
                setBiodata(response_biodata)
            } catch(error) {
                console.log(error)
            }
        }

        const fetchRoles = async () => {
            try {
                const data_role = await fetch('/api/hero/role')
                const response_role = await data_role.json()
                console.log(response_role.role)
                setRoles(response_role.role)
            } catch (error) {
                confirm.log(error)
            }
        }

        fetchBiodata()
        fetchRoles()
    }, [])

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" />
        </div>

        <div className="hero-layout">
            {/* Left Content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>

                <div className='flex flex-col gap-7'>

                    {biodata && (
                        <>
                        <div className='hero-text'>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>Hi, Nice to Meet You!</p>
                        <h2> I'm {biodata.name} </h2>
                        <h2>A
                            <span className='slide'>
                            <span className='wrapper'>
                            {roles.map((role) => (
                                <span key={role.title} className='flex items-center md:gap-2 gap-1 pb-2'>
                                {role.title}
                                </span>
                            ))}
                            </span>
                        </span>
                        </h2>
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none whitespace-pre-line'>
                            {biodata.description}
                    </p>
                    </>
                    )}
                    
                    <Button className="md:w-80 md:h-16 w-60 h-12"
                    id="button" text="See my work" />

                </div>

            </header>

            {/* Right: 3D Model */}

            <figure>
                <div className='hero-3d-layout hidden md:block'>
                    <HeroExperience/>
                </div>
            </figure>


        </div>
    </section>
  )
}

export default Hero