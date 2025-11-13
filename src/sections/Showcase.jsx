'use client';

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const projectRef1 = useRef(null);
    const projectRef2 = useRef(null);
    const projectRef3 = useRef(null);
    
    const [project, setProject] = useState([])
    
      useEffect(() => {
          const fetchProject = async () => {
              try {
                const data_project = await fetch('/api/project')
                const response_project = await data_project.json()
                setProject(response_project.project)
              } catch(error) {
                  console.log(error)
              }
          }
    
        fetchProject()
      }, [])
    
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

       
    }, [project]);


  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* Showcase Items Left*/}
                {/* project 1 */}
                
                {project[0] && (
                <div className="first-project-wrapper" ref={projectRef1}>
                    <div className="image-wrapper">
                        <img src={project[0].img_path} />
                    </div>
                    <div className="text-content">
                       <a href={project[0].link}>
                            <h2>{project[0].title}</h2>
                       </a>
                       <p className='text-white-50 md:text-xl'>
                        {project[0].description}
                       </p>
                    </div>
                </div>
                )}

                {/* Showcase Items Right*/}
                <div className="project-list-wrapper overflow-hidden">
                    {/* project 2 */}
                    {project[1] && (

                    <div className='project' ref={projectRef2}>
                        <div className='image-wrapper bg-[#ffefdb'>
                            <img src={project[1].img_path} />
                        </div>
                        <h2>
                            {project[1].title}
                        </h2>
                    </div>
                    )}
                    {/* project 3 */}
                    {project[2] && (
                     <div className='project' ref={projectRef3}>
                        <div className='image-wrapper bg-[#ffe7eb'>
                            <img src={project[2].img_path} />
                        </div>
                        <h2>
                            {project[2].title}
                        </h2>
                    </div>
                    )}
                </div>


            </div>
        </div>
    </div>
  )
}

export default Showcase