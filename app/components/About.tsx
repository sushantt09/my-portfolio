import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

const About = () => {
    return (
        <section id="about">
            <div className='mt-8 sm:mt-12 md:mt-20 mb-10 md:mb-20 pt-4 md:pt-8'>
                <p className='mt-5 mb-5 text-2xl sm:text-3xl md:text-5xl -tracking-tighter font-bold text-left w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>About Me</p>
                <p className='text-xsm sm:text-base md:text-lg text-slate-200 mt-10 mb-10 md:w-3/4'>
                    <span className='block mb-2'>I am a passionate Frontend Developer based in Delhi, India.</span>
                    <span className='block mb-2'>I have a keen eye for design and a love for creating
                    intuitive user experiences. I specialize in React, JavaScript, HTML/CSS, and have hands-on
                    experience in developing B2B SaaS platforms and CRM integrations.
                    </span>
                    <span className='block'>I strive to build responsive and accessible web applications that delight users. Currently, I’m actively improving my UI precision and responsive layout skills, and expanding my knowledge in system design and modern frontend tooling.
                    </span>
                </p>
                <button className='mb-10 bg-cyan-500 w-min py-4 px-5 rounded-lg text-slate-200 text-center hover:scale-105 transition-transform duration-300 hover:ring-4 hover:ring-violet-400 hover:ring-offset-2 hover:ring-offset-cyan-300 flex items-center gap-2'
                onClick={() => window.open('https://drive.google.com/file/d/1XHfAiWcEPNlmmRnage2BLQlsAXE0V6D1/view?usp=drive_link', '_blank')}>
                    Resume
                    <span className='w-4 h-4'>
                        <FontAwesomeIcon icon={faFile} />
                    </span>
                </button>                        
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5'>
                    <div className='mb-2 sm:mb-0 bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-4 md:p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-lg sm:text-xl font-bold mb-2'>EXPERIENCE</h3>
                        <p>{"Almost 2 years (Ans Commerce - Flipkart group co.)"}</p>
                    </div>
                    <div className='mb-2 sm:mb-0 bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-4 md:p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-lg sm:text-xl font-bold mb-2'>GRADUATION</h3>
                        <p>{"Bachelor's in Computer Science"}</p>
                    </div>
                    <div className='mb-2 sm:mb-0 bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-4 md:p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-lg sm:text-xl font-bold mb-2'>POST GRADUATION</h3>
                        <p>{"Master's of Computer Application"}</p>
                    </div>
                </div>    
            </div>
        </section>
    );
}
export default About;