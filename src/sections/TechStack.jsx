'use client';

import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants/index'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const TechStack = () => {

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
    })
  return (
    <div id="skills" className="flex-center section-padding">
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title="My Preferred Tech Stack"
            sub="The Skills I Bring to the Table" />

            <div className="tech-grid">
                {techStackImgs.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className='tech-card-animated-bg' />
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <img src={icon.imgPath} />
                            </div>

                            <div className="padding-x w-full">
                                <h2 className=''>{icon.name}</h2>
                                <p>{icon.type}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            
        {/* titik */}
        </div> 
</div>
  )
}

export default TechStack