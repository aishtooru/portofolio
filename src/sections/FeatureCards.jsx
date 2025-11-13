import React from 'react'
import { abilities } from '../constants/index.js';
import Button from '../components/Button.jsx';
import TitleHeader from '../components/TitleHeader'

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
        <TitleHeader title="Certificate"
                    sub="🎓 Achieving" />
        <div className="mx-auto grid-3-cols">
            <div className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <img src='/images/certificate1.png'/>
                <h3 className='text-white text-2xl text-center font-semibold mt-2'>
                    Dicoding, GCloud
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
            <div className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <img src='/images/certificate2.png'/>
                <h3 className='text-white text-2xl text-center font-semibold mt-2'>
                    Dicoding, GCloud
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
            <div className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <img src='/images/certificate2.png'/>
                <h3 className='text-white text-2xl text-center font-semibold mt-2'>
                    Dicoding, GCloud
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
            <div className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <img src='/images/certificate2.png'/>
                <h3 className='text-white text-2xl text-center font-semibold mt-2'>
                    Dicoding, GCloud
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
        </div>
        <Button className="md:w-80 md:h-16 w-60 h-12"
                 text="Show more..." />
    </div>
    // <div className="w-full padding-x-lg">
    //     <div className="mx-auto grid-3-cols">
    //         {abilities.map(( {imgPath, title, desc }) => (
    //             <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
    //                 <div className='size-14 flex items-center justify-center rounded-full'>
    //                     <img src={imgPath} alt={title}/>
    //                 </div>
    //                 <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
    //                 <p className='text-white-50 text-lg'>{desc}</p>
    //             </div>
    //         ))}
    //     </div>
    // </div>
  )
}

export default FeatureCards