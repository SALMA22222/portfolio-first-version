import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';





const Newsletter = () => {
  return (
    
        <div className='bg-black w-full py-16 text-white px-4'>
          <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
              <h1 className='text-violet-300 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Let's work together           </h1>
              <p> I am readily available and easily accessible through my inbox at all times. </p>
              <div className=' mt-6 flex gap-10 mx-auto space  '>
                
                  <a href="https://www.linkedin.com/in/salma-hariri-95b06921a/">
                    <AiFillLinkedin   size={35} />
                  </a>
                  <a href="#">
                    <AiOutlineGithub size={35} />
                 </a>
                 <a href="mailto:salmahariri.2001@gmail.com">
                   <AiOutlineMail  size={35} />
                 </a>
                 

              </div>
            </div>
            <div className='my-4'>
              <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input
                  className='p-3 flex w-full rounded-md text-black'
                  type='email'
                  placeholder='Enter Email'
                />
                <button className='bg-gray-100 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-violet-300'>
                  Notify Me
                </button>
                <div className='mx-3 '>
                    
        
                </div>
              </div>
           
            </div>
          </div>
        </div>
      );
    };
    
export default Newsletter;
  