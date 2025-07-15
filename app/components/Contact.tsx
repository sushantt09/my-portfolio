import React, { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('https://formspree.io/f/xvgqooyo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) { //Error: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
            void error;
            setStatus('error');
        } finally {
            setLoading(false);
            setTimeout(()=>{
                setStatus("");
            },5000);
        }
    };

    return (
        <section id="contact">
            <div className='mt-10 md:mt-20 mb-20 md:mb-30 pt-4 md:pt-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <p className='mt-2 md:mt-5 mb-2 md:mb-5 pb-6 md:pb-10 text-2xl md:text-3xl -tracking-tighter font-bold text-left w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>GET IN TOUCH! <FontAwesomeIcon icon={faAddressBook} style={{color: "#74C0FC",}} /></p>
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div>
                                <p className='mt-2 md:mt-5 mb-2 md:mb-5 text-lg md:text-xl -tracking-tighter'>Contact</p>
                                <p className='text-base md:text-lg text-slate-200 mt-2'><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfrKxjMqHjfNVBHNCKWsPbzSWMjDJGlMvlFrkDvDHsGtjDHFfHspZHsWmXHBwQSKzvqXXB' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>business.sushant09@gmail.com</a></p>
                            </div>
                            <div>
                                <p className='mt-2 md:mt-5 mb-2 md:mb-5 text-base md:text-xl -tracking-tighter'>Social Media</p>
                                <p className='text-lg text-slate-200 mt-2'><FontAwesomeIcon icon={faLinkedin} /> <a href='https://www.linkedin.com/in/sushant-sharma0809/' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>Sushant Sharma</a></p>
                                <p className='text-lg text-slate-200 mt-2'><FontAwesomeIcon icon={faGithub} /> <a href='https://github.com/sushantt09' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>github.com/sushantt09</a></p>  
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 md:ml-8 md:mt-0 w-full md:w-1/2 border-2 border-slate-600 p-6 rounded-lg bg-slate-900 shadow-lg'>
                        <p className='text-2xl'>CONTACT FORM</p>
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className='flex flex-col gap-4 mt-4 ml-8'>
                            <label className='text-lg text-slate-200'>Name</label>
                            <input type='text' id='name' name='name' placeholder='Your Name' required value={formData?.name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} className='p-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            <label className='text-lg text-slate-200'>Email</label>
                            <input type='email' id="email" name="email" placeholder='Your Email' required value={formData?.email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} className='p-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            <label className='text-lg text-slate-200'>Message</label>
                            <textarea  id="message" rows={5} name="message" placeholder='Your Message' required value={formData?.message} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>handleChange(e)} className='p-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'></textarea>
                            <button type='submit' disabled={loading} className='bg-cyan-500 w-min my-4 py-3 px-8 rounded-lg text-slate-200 text-center hover:scale-105 transition-transform duration-300 hover:ring-4 hover:ring-violet-400 hover:ring-offset-2 hover:ring-offset-cyan-300'>{loading ? 'loading...' : 'Submit'}</button>
                        </form>
                        {status === 'success' && (
                            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                                <p className="text-green-200 text-center">Message sent successfully!</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                                <p className="text-red-200 text-center">Failed to send message. Please try again.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;