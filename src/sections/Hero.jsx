'use client';
import React from 'react'
import { words } from '../constants/index.js'
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


  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" />
        </div>

        <div className="hero-layout">
            {/* Left Content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>

                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>Hi, Nice to Meet You!</p>
                        <h2>
                        I'm Cindy Aulia Syahrizky
                        </h2>
                        <h2>A
                            <span className='slide'>
                            <span className='wrapper'>
                            {words.map((word) => (
                                <span key={word.text} className='flex items-center md:gap-2 gap-1 pb-2'>
                                {/* <img
                                    src={word.imgPath}
                                    alt={word.text}
                                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                /> */}
                                {word.text}
                                </span>
                            ))}
                            </span>
                        </span>
                        </h2>
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi! I'm Cindy. An undergraduate student <br />with a strong passion for backend development. <br />I love building efficient systems and making things <br />work behind the scenes— though sometimes, I find <br />myself exploring the world of fullstack development too.
                    </p>
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