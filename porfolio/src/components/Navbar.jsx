import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {  Link } from "react-router-dom";




const Navbar = () => {
  return (
    <div className='  text-black mx-auto flex justify-between items-center '>
      <h1 className='text-2xl font-bold text-black mx-4 ' >PORTFOLIO.</h1>
      <ul className='hidden md:flex space-x-5 '>
       
        <li className='p-4 border-b border-t mt-3 border-r border-l rounded-md border-gray-950 px-6 hover:bg-purple-400 '>Home</li>
        
            
        <li className='p-4  border-b border-t mt-3 border-r border-l rounded-md border-gray-950 px-6 hover:bg-purple-400' >Work </li>
        <li className='p-4  border-b border-t mt-3 border-r border-l rounded-md border-gray-950 hover:bg-purple-400 '>Resume</li>

        <li className='p-4  border-b border-t mt-3 border-r border-l rounded-md border-gray-950 hover:bg-purple-400 '>Contact</li>
      </ul>

      <div className='mx-3 '>
       <AiOutlineMenu size={23}/>
        
      </div>
    
    
    
    </div>
    
    
  )
}

export default Navbar