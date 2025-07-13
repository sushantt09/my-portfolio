const Home = () => {
    return (
        <section id='home' >
            <div className='flex justify-between mb-12'>
                <div>
                    <p className='text-8xl mt-[140px] mb-[60px]'>
                    <span className='block mb-5 w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>FRONTEND</span>
                    <span className='block w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>DEVELOPER</span>
                    </p>
                    <p className='text-lg text-slate-200 mt-4'>
                        <span className='block mb-2'>I am Sushant - Frontend Developer with a passion for</span>
                        <span className='block'>creating beautiful, responsive web experiences.</span>
                    </p>
                </div>
                <div>
                    <img src='/images/profile.png' alt='Sushant Sharma'
                        className='w-90 h-100 mx-auto mt-6 mr-10' />
                </div>
            </div>
        </section>
    )
}
export default Home;