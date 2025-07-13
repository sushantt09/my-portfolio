import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id="projects">
            <div className='mt-16 pt-8 pb-4'>
                <p className='mt-20 mb-30 pb-10 text-5xl -tracking-tighter font-bold text-left w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>Projects</p>
                <div className='grid grid-cols-3 gap-5 mt-8'>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <img src='/images/PooHome.png' alt='Portfolio' className='w-full h-48 object-cover rounded-lg mb-4' />
                        <div className='flex items-center mb-2'>
                            <h3 className='text-xl font-bold mb-2'>Poo bear social media app</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open('https://poo-bear-social-media.vercel.app/', '_blank');
                                }}
                                className='ml-2 text-blue-200 hover:text-white hover:scale-110 transition-all duration-200'
                            ><FontAwesomeIcon icon={faPaperclip} /></button>
                        </div>    
                        <p>(Nextjs, Reactjs, Redux, tailwind)</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <img src='/images/cryptoHome.png' alt='Portfolio' className='w-full h-48 object-cover rounded-lg mb-4' />
                        <div className='flex items-center mb-2'>
                            <h3 className='text-xl font-bold mb-2'>Cryptocurrency Exchange App</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open('https://crypto-exchange-coin.netlify.app/', '_blank');
                                }}
                                className='ml-2 text-blue-200 hover:text-white hover:scale-110 transition-all duration-200'
                            ><FontAwesomeIcon icon={faPaperclip} /></button>
                        </div>
                        <p>(Html, CSS, Reactjs, firebase)</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <img src='/images/netflixHome.png' alt='Portfolio' className='w-full h-48 object-cover rounded-lg mb-4' />
                        <div className='flex items-center mb-2'>
                            <h3 className='text-xl font-bold mb-2'>Netflix Clone</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open('https://sushantt09.github.io/netflix-clone/index.html', '_blank');
                                }}
                                className='ml-2 text-blue-200 hover:text-white hover:scale-110 transition-all duration-200'
                            ><FontAwesomeIcon icon={faPaperclip} /></button>
                        </div>
                        <p>(Html, CSS, Reactjs)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;