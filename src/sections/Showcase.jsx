'use client';

import React, { use, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const projectRef1 = useRef(null);
    const projectRef2 = useRef(null);
    const projectRef3 = useRef(null);
    
    
    useGSAP(() => {
        const projects = [projectRef1.current, projectRef2.current, projectRef3.current];

        projects.forEach((card, index) => {
        gsap.fromTo(card,
            {
                y: 50, opacity: 0
            },
            {
                y:0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    });

       
    }, []);

  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* Showcase Items Left*/}
                <div className="first-project-wrapper" ref={projectRef1}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="" />
                    </div>
                    <div className="text-content">
                       <h2>Flashcard Learning App for Smarter Memorization called Cardify</h2>
                       <p className='text-white-50 md:text-xl'>
                        An Android app developed using Kotlin in Android Studio. It features deck and cards management, and interactive memory tests.
                       </p>
                    </div>
                </div>

                {/* Showcase Items Right*/}
                <div className="project-list-wrapper overflow-hidden">
                    {/* project1 */}
                    <div className='project' ref={projectRef2}>
                        <div className='image-wrapper bg-[#ffefdb'>
                            <img src="/images/project2.png" alt="" />
                        </div>
                        <h2>
                            Agrotourism Information Website — CodeIgniter 3
                        </h2>
                    </div>
                    {/* project2 */}
                     <div className='project' ref={projectRef3}>
                        <div className='image-wrapper bg-[#ffe7eb'>
                            <img src="/images/project3.png" alt="" />
                        </div>
                        <h2>
                            Hotel Reservation Website — PHP Native
                        </h2>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Showcase