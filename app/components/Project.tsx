import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Projects = () => {
    interface Project {
        id: number;
        heading: string;
        url: string;
        imgSrc: string;
        desc: string;
    }
    const projectData: Project[] = [
        {id:1, heading: "Poo bear social media app", url: 'https://poo-bear-social-media.vercel.app/', imgSrc: "/images/PooHome.png", desc: "In progress not functional (Nextjs, Reactjs, Redux, tailwind)"},
        {id:2, heading: "Cryptocurrency Exchange App", url: 'https://crypto-exchange-coin.netlify.app/', imgSrc: "/images/cryptoHome.png", desc: "(Html, CSS, Reactjs, firebase)"},
        {id:3, heading: "Netflix Clone", url: 'https://sushantt09.github.io/netflix-clone/index.html', imgSrc: "/images/netflixHome.png", desc: "(Html, CSS, Reactjs)"},
    ];

    return (
        <section id="projects">
            <div className='mt-16 pt-8 pb-4'>
                <p className='mt-14 md:mt-20 mb-30 pb-10 text-2xl md:text-3xl lg:text-5xl -tracking-tighter font-bold text-left w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>Projects</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-4 md:mt-8'>
                    {projectData.map((data: Project,index: number)=> {
                        return (
                            <div key={data.id} className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                                <Image width={400} height={400} src={data.imgSrc} alt='Portfolio' className='w-full h-48 object-cover rounded-lg mb-4' />
                                <div className='flex items-center mb-2'>
                                    <h3 className='text-xl font-bold mb-2'>{data.heading}</h3>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(data.url, '_blank');
                                        }}
                                        className='ml-2 text-blue-200 hover:text-white hover:scale-110 transition-all duration-200'
                                    ><FontAwesomeIcon icon={faPaperclip} /></button>
                                </div>    
                                <p>{data.desc}</p>
                            </div>
                        )
                    })};
                </div>
            </div>
        </section>
    );
}
export default Projects;