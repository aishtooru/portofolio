'use client';
import React from 'react'
import { useRef } from 'react';

const GlowCardEdu = ({ card, children, index }) => {
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
    }
  return (
    <div ref={(el) =>(cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mx-2">
        <div className='glow'/>
        {/* <div>
            {Array.from({length: 5}, (_,i) => (
                <img src='/images/star.png' key={i} className='size-5'/>
            ))}
        </div> */}
        <div className="mb-5">
            <h1 className='text-lg'>{card.place}</h1>
            <p className='text-white-50 text-l'>
                Jurusan: {card.jurusan}
            </p>
            <p className='text-white-50 text-l'>
                Tahun: {card.tahun}
            </p>
            <p className='text-white-50 text-l'>
                Nilai: {card.nilai}
            </p>
        </div>
        {children}
    </div>

  )
}

export default GlowCardEdu