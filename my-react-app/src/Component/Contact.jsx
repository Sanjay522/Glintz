import React from 'react'
import bacground from "../assets/Footer/footerbackground.jpg";

const Contact = () => {
  return (
    <div className='relative h-[130vh] w-full'>
        <div className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bacground})` }}/>
            <div className='absolute inset-0 bg-black opacity-70'/>
            <div className='absolute z-10 flex flex-col items-center justify-center left-1/5 py-25'>
            <h1 className='primary text-2xl'>CONTACT US</h1>
            <p className='text-white text-6xl'>Reach out for a new project or just</p>
            <p className='text-white text-6xl'>say hello</p>
            </div>
        
        </div>
  )
}

export default Contact