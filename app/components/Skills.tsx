const Skills = () => {
    return (
        <section id="skills">
            <div className='mt-20 mb-30 pt-8'>
                <p className='mt-5 mb-5 pb-10 text-5xl -tracking-tighter font-bold text-left w-fit bg-blend-multiply bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>Skills</p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-xl font-bold mb-2'>HTML</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-xl font-bold mb-2'>CSS/SCSS</h3>
                        <p>Basic</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-xl font-bold mb-2'>JAVASCRIPT/TYPESCRIPT</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-xl font-bold mb-2'>REACTJS</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-xl font-bold mb-2'>NEXTJS</h3>
                        <p>Basic</p>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-600 to-cyan-600 hover:to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <h3 className='text-xl font-bold mb-2'>AI TOOLS (Claude, Chatgpt, github co-pilot)</h3>
                        <p>Basic</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;