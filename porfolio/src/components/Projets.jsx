import React from 'react'
import mama from '../assets/mama.png'
import fofo from '../assets/fofo.png'
import oo from '../assets/oo.png'

const Projets = () => {
  return (
    
        <div className='w-full py-[10rem] px-4 bg-black flex flex-col-reverse'>
          
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>
              <div className='bg-gray-100 w-full  shadow-violet-400	 border-b border-black border-r border-l border-t shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  
                  <h2 className='text-4xl font-bold text-center py-8'>Project 1</h2>
                  <p className='text-center text-2xl font-bold'>E-commerce store</p>
                  <div className='w-full  mt-5'>
                    <img src={mama} alt="" />
                  </div>
           
          
                  
              </div>
            
              <div className='w-full shadow-xl bg-gray-100  border-b border-black border-r border-l border-t flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                 <a href="https://www.figma.com/file/nP4juz53K651m8QncuTLWO/salma?node-id=0-1&t=L5aokUJmkcUe8yjd-0">
                  
                  <h2 className='text-4xl font-bold text-center py-8'>Project 2</h2>
                  <p className='text-center text-3xl font-bold'>Gadget App design</p>
                  <div className='w-full  mt-5'>
                    <img src={fofo} alt="" />
                  </div>
                  </a>
              </div>
              <div className=' bg-gray-100 w-full  border-b shadow-violet-400	 border-black border-r border-l border-t shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  
                  <h2 className='text-4xl font-bold text-center py-8'>Projet 3</h2>
                  <p className='text-center text-2xl font-bold'>Personal Portfolio</p>
                  <div className='w-full  mt-5'>
                    <img src={oo} alt="" />
                  </div>
                  
              </div>
          </div>
          


        </div>
      );
    };
    
    export default Projets;