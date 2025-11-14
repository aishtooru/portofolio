'use client';
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { navBarLinks } from '@/src/constants/index.js'


const NavbarPage = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                const isScrolled = window.scrollY > 10;
                setScrolled(isScrolled);
            }
            window.addEventListener('scroll', handleScroll);
    
                return () => window.removeEventListener('scroll', handleScroll);
        }, [])

    const handleNavClick = (e, link) => {
        e.preventDefault()
        
        if (link.startsWith('#')) {
            if (pathname !== '/') {
                router.push('/' + link)
                setTimeout(() => {
                    const element = document.querySelector(link)
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            } else {
                const element = document.querySelector(link)
                element?.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            router.push(link)
        }
    }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a href="/" className="logo">
                Cindy Aulia S
            </a>

            <nav className="desktop">
                <ul>
                    {navBarLinks.map(({name, link}) => (
                    <li key={name} className='group'>
                        <a href={link} onClick={(e) => handleNavClick(e, link)}>
                        <span>{name}</span>
                        <span className='underline'></span>
                        </a>
                    </li>
                        ))}
                </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </a>
        </div>

    </header>
  )
}

export default NavbarPage