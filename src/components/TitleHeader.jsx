import React from 'react'

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5 mb-3">
        <div className='hero-badge'>
            <p>{sub}</p>
        </div>
        <div className="font-semibold md:text-4xl text-3xl text-center">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader