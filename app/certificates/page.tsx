"use client"
import { useState, useEffect } from 'react'
import NavbarPage from '@/src/components/NavbarPage'
import TitleHeader from '@/src/components/TitleHeader';

interface Certificate {
    id_certificate: string | number;
    img_path: string;
    title: string;
}

const page = () => {
    const [certificate, setCertificate] = useState<Certificate[]>([])
    
      useEffect(() => {
          const fetchCertificate = async () => {
              try {
                const data_certificate = await fetch('../api/certificate')
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

    <>
    <NavbarPage />
    <div className="w-full padding-x-lg pt-30 ">
        <TitleHeader title="Certificate"
                    sub="College Achievement" />
        <div className="mx-auto grid-3-cols">
          {certificate.map((cert) => (
            <div key={cert.id_certificate} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                <div className='h-48 flex items-center justify-center'>
                    <img src={cert.img_path}/>
                </div>
                <h3 className='text-white text-2xl text-center font-semibold mt-3'>
                    {cert.title}
                </h3>
                <p className='text-white-50 text-lg'></p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full mt-10 mb-10">
            <a href="/" className='new-button group'>
                <span className='relative z-10'>Back to Home</span>
            </a>
        </div>
    </div>
    </>
  )
}

export default page