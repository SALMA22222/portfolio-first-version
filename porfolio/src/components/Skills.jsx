import React from 'react'

const Skills = () => {
  return (
    
    
        <div className='w-full py-[10rem] px-4 bg-d9dbdf flex flex-col-reverse'>
          
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>
              <div className='bg-gray-100 w-full  border-b shadow-violet-400	 border-black border-r border-l border-t shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  
                  <h2 className='text-4xl font-bold text-center py-8'>Software skills </h2>
                  <p className='text-center text-2xl font-bold text-violet-700'>Web developement</p>
                  <div className='w-full text-center  font-bold  mt-5'>
                    <p className=''> React JS</p>
                    <p className='mt-2'>Node JS</p>
                    <p className='mt-2'>Redux</p>
                    <p className='mt-2'>UI/UX design</p>
                    <p className='mt-2'>MongoDB</p>
                    <p className='mt-2'>MySQL</p>
                    
                  </div>
           
          
                  
              </div>
            
              <div className='w-full shadow-xl bg-gray-100 shadow-violet-400	 border-b border-black border-r border-l border-t flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                  
                  <h2 className='text-4xl font-bold text-center py-8'>Project management </h2>
                  <p className='text-center text-3xl font-bold'></p>
                  <div className='w-full text-center  font-bold  mt-5'>
                    <p className=''> Team management</p>
                    <p className='mt-2'>Planification</p>
                    <p className='mt-2'>Strategic thinking</p>
                    <p className='mt-2'>Agile methods/ Scrum</p>
                    
                    
                  </div>
              </div>
              <div className=' bg-gray-100 w-full  border-b shadow-xl shadow-violet-400	 border-black border-r border-l border-t shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  
                  <h2 className='text-4xl font-bold text-center py-8'>Others</h2>
                  <p className='text-center text-2xl font-bold'></p>
                  <div className='w-full text-center  font-bold  mt-5'>
                    <p className=''> Git/GitHub</p>
                    <p className='mt-2'>AWS</p>
                    <p className='mt-2'>Docker</p>
                    <p className='mt-2'>Jira</p>
                    
                    
                  </div>
                  
              </div>

              
          </div>
          


        </div>
      );
    };

export default Skills