import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact">
            <div className='mt-20 mb-30 pt-8'>
                <div className='flex items-center'>
                    <div className=''>
                        <p className='mt-5 mb-5 pb-10 text-3xl -tracking-tighter font-bold text-left w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>GET IN TOUCH! <FontAwesomeIcon icon={faAddressBook} style={{color: "#74C0FC",}} /></p>
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div>
                                <p className='mt-5 mb-5 text-xl -tracking-tighter'>Contact</p>
                                <p className='text-lg text-slate-200 mt-2'><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfrKxjMqHjfNVBHNCKWsPbzSWMjDJGlMvlFrkDvDHsGtjDHFfHspZHsWmXHBwQSKzvqXXB' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>business.sushant09@gmail.com</a></p>
                            </div>
                            <div>
                                <p className='mt-5 mb-5 text-xl -tracking-tighter'>Social Media</p>
                                <p className='text-lg text-slate-200 mt-2'><FontAwesomeIcon icon={faLinkedin} /> <a href='https://www.linkedin.com/in/sushant-sharma0809/' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>Sushant Sharma</a></p>
                                <p className='text-lg text-slate-200 mt-2'><FontAwesomeIcon icon={faGithub} /> <a href='https://github.com/sushantt09' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>github.com/sushantt09</a></p>  
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 ml-8 md:mt-0 w-full md:w-1/2 border-2 border-slate-600 p-6 rounded-lg bg-slate-900 shadow-lg'>
                        <p className='text-2xl'>CONTACT FORM</p>
                        <form className='flex flex-col gap-4 mt-4 ml-8'>
                            <label className='text-lg text-slate-200'>Name</label>
                            <input type='text' placeholder='Your Name' className='p-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            <label className='text-lg text-slate-200'>Email</label>
                            <input type='email' placeholder='Your Email' className='p-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            <label className='text-lg text-slate-200'>Message</label>
                            <textarea placeholder='Your Message' className='p-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'></textarea>
                            <button type='submit' className='bg-cyan-500 w-min my-4 py-3 px-8 rounded-lg text-slate-200 text-center hover:scale-105 transition-transform duration-300 hover:ring-4 hover:ring-violet-400 hover:ring-offset-2 hover:ring-offset-cyan-300'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;