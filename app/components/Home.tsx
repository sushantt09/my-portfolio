const Home = () => {
    return (
        <section id='home' >
            <div className='flex justify-between mb-4 sm:mb-6 md:mb-12'>
                <div>
                    <p className='text-xl sm:text-2xl md:text-5xl lg:text-8xl mt-[80px] sm:mt-[100px] mb-[30px] sm:mb-[40] md:mt-[140px] md:mb-[60px]'>
                    <span className='block mb-2 md:mb-5 w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>FRONTEND</span>
                    <span className='block w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>DEVELOPER</span>
                    </p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 mt-2 md:mt-4'>
                        <span className='block mb-1 md:mb-2'>I am Sushant - Frontend Developer with a passion for</span>
                        <span className='block'>creating beautiful, responsive web experiences.</span>
                    </p>
                </div>
                <div>
                    <img src='/images/profile.png' alt='Sushant Sharma'
                        className='w-70 h-70 md:w-90 md:h-100 mx-auto mt-2 md:mt-6 mr-10' />
                </div>
            </div>
        </section>
    )
}
export default Home;