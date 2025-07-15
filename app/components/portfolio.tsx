"use client"; // This line is necessary for Next.js to treat this component as a client component
import React from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import Projects from './Project';
import Skills from './Skills';
import About from './About';
import Home from './Home';
import FloatingBubbles from './FloatingBubbles';

const Portfolio = () => {
    return (// body covers the entire viewport height  
        <div id='body' className='bg-blend-multiply bg-gradient-to-b from-cyan-950 to-purple-400
             text-white shadow-lg m-0 p-0 min-h-screen'>
            <div className='bg-gradient-to-t from-cyan-950 to-zinc-900 p-2 sm:p-3 md:p-4 lg:p-5 h-full mx-4 md:mx-6 lg:mx-10'>
                <FloatingBubbles />
                <Navigation />
                <main className='mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
                    <Home />
                    <div className='w-full h-[1px] bg-slate-400 mb-20'></div>
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>  
                <footer className='bg-blend-multiply bg-gradient-to-r from-cyan-750 to-purple-600 text-white p-4 sm:p-6 shadow-lg mt-6 sm:mt-8 md:mt-10 mx-2 sm:mx-4 md:mx-6 lg:mx-10 rounded-lg'>
                    <p className='text-center'>© 2023 Sushant Sharma. All rights reserved.</p>
                </footer>
            </div>  
        </div>
    )
}
export default Portfolio;