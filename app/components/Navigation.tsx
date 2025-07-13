'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-blend-multiply bg-gradient-to-r from-cyan-750 to-purple-600
                text-white p-6 shadow-lg flex mx-10 mt-5 rounded-lg'
    >
      <motion.h1 
        className='text-xl font-bold'
        whileHover={{ scale: 1.05 }}
      >
        SUSHANT SHARMA
      </motion.h1>
      
      <nav className='ml-auto flex space-x-4'>
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              text-lg font-medium transition-all duration-300 relative
              ${activeSection === item.id 
                ? 'text-cyan-200' 
                : 'text-white hover:text-cyan-200'
              }
              px-2 py-1 rounded-sm
            `}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-200"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </nav>
    </motion.header>
  )
}

export default Navigation;