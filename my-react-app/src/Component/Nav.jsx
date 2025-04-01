import React from 'react'
import image from '../assets/image.png'
import { useState } from 'react'



const Nav = () => {
  const [open,setOpen] = useState(false)
  const navbar = ["Home","about","contact","service","work","client"]
   const openClose = ()=>{
    setOpen(!open)
   }
  return (
    <div className='pt-10 w-[95vw] m-auto flex justify-between text-white text-3xl' >
        <img src= {image}alt=""  className='h-10 '/>
        <div>
          <button className='fixed  right-10 cursor-pointer bg-black' onClick={openClose}>
            {open?"╳":"Menu ☰"}
          </button>
          {open &&(
          <ul className=' fixed pt-10 right-18 top-0 bg-black cursor-pointer z-1'>
            {navbar.map((data,index)=>(
              <li key={index}>{data}</li>
            ))}
          </ul>)}
          
        </div>
    </div>
  )
}

export default Nav