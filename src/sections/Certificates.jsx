"use client"
import { useState, useEffect } from 'react'
import Button from '../components/Button.jsx';
import TitleHeader from '../components/TitleHeader.jsx'

const Certificates = () => {
    const [certificate, setCertificate] = useState([])
    
      useEffect(() => {
          const fetchCertificate = async () => {
              try {
                const data_certificate = await fetch('/api/certificate')
                const response_certificate = await data_certificate.json()
                console.log(response_certificate.certificate)
                setCertificate(response_certificate.certificate)
              } catch(error) {
                  console.log(error)
              }
          }
    
        fetchCertificate()
      }, [])

  return (
    <div className="w-full padding-x-lg">
        <TitleHeader title="Certificate"
                    sub="🎓 Achieving" />
        <div className="mx-auto grid-3-cols">
          {certificate.map((cert) => (
            <div key={cert.id_certificate} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <img src={cert.img_path}/>
                <h3 className='text-white text-2xl text-center font-semibold mt-2'>
                    {cert.title}
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
          ))}
        </div>
        <Button className="md:w-80 md:h-16 w-60 h-12"
                 text="Show more..." />
    </div>
  )
}

export default Certificates