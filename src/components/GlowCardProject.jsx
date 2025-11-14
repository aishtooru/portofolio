'use client';
import React from 'react'
import { useRef } from 'react';



const GlowCardProject = ({ card, children = null, index }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;

        // Get the mouse position relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calculate the angle and distance from the center
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        
        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60);
    };



  return (
    <div ref={(el) =>(cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-5 mx-7 mb-5 mt-5">
        
        <div className="glow-contact" />
        <div className="mb-5">
            {card.link ? (
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex gap-5 items-start group hover:opacity-80 transition-opacity z-10">
                    <div className="flex flex-col gap-2">
                        <h1 className='text-white text-2xl font-semibold group-hover:underline'>
                            {card.title} 🔗
                        </h1>
                        <p className="text-white-50 text-lg">
                            {card.description}
                        </p>
                    </div>
                </a>
            ) : (
                <div className="flex gap-5 items-start cursor-default">
                    <div className="flex flex-col gap-2">
                        <h1 className='text-white text-2xl font-semibold'>
                            {card.title}
                        </h1>
                        <p className="text-white-50 text-lg">
                            {card.description}
                        </p>
                    </div>
                </div>
            )}
        </div>

        {children}
    </div>

  );
}

export default GlowCardProject