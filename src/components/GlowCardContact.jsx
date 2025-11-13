'use client';
import React from 'react'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)



const GlowCardContact = ({ card, children, index }) => {
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

    const iconPrefix = ['github', 'linkedin', 'instagram', 'twitter', 'facebook'].includes(card.contact) ? 'fab' : 'fas';


  return (
    <div ref={(el) =>(cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-5 mx-7 mb-5 mt-5">
        
        <div className="glow-contact cursor-pointer" />
        <div className="mb-5 text-center">
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 relative">
            <FontAwesomeIcon icon={[iconPrefix, card.contact]} size="2x" />
            <p className="text-white-50 text-xl">{card.name}</p>
            </a>
        </div>

        {children}
    </div>

  );
}

export default GlowCardContact