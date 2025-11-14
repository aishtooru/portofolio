"use client"
import { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader.jsx'

const Certificates = () => {
    const [certificate, setCertificate] = useState([])
    
      useEffect(() => {
          const fetchCertificate = async () => {
              try {
                const data_certificate = await fetch('/api/certificate')
                const response_certificate = await data_certificate.json()
                setCertificate(response_certificate.certificate)
              } catch(error) {
                  console.log(error)
              }
          }
    
        fetchCertificate()
      }, [])

  return (
    <div id='certificate' className="w-full padding-x-lg mt-30">
        <TitleHeader title="Certificate"
                    sub="🎓 Achieving" />
        <div className="mx-auto grid-3-cols">
          {certificate.slice(0,6).map((cert) => (
            <div key={cert.id_certificate} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <img src={cert.img_path}/>
                <h3 className='text-white text-2xl text-center font-semibold mt-2'>
                    {cert.title}
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full mt-10 mb-10">
            <a href="/certificates" className='new-button group'>
                <span className='relative z-10'>Show More...</span>
            </a>
        </div>
    </div>
  )
}

export default Certificates