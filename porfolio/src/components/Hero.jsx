import React from 'react'
import lili from '../assets/lili.png'

const Hero = () => {
    return (
      <div  className='w-full h-screen  flex flex-col justify-between '>
          <div className=' grid md:grid-cols-2 max-w-[1240px] m-auto '>
              <div className='flex flex-col justify-center  md:items-start w-full px-2 py-8 '>
                  <p className='py-3 text-5xl md:text-4xl font-bold'>I'm Salma Hariri</p>
                  <h1 className='py-3 text-5xl md:text-7xl font-bold text-violet-700'>UI/UX designer</h1>
                  <h1 className='py-3 text-5xl md:text-4xl font-bold'>And Frontend developer.</h1>
                  <p className='text-2xl'>I have a passion for design, website development, coding, and all things tech-related.</p>
                  <button className=' sm:w-[60%] my-4 text-black py-4 px-14 rounded-lg bg-violet-300 border-r border-t border-l border-b border-black'>Get Started</button>
              </div>
              <div>
                <img className='w-full ' src={lili} alt="/" />
                </div> 
              
          </div>
      </div>
    )
  }
  
  export default Hero

