import React from 'react'

const Content2 = () => {
    const dataNumber = [{number:"147",name:"Award Received"},
        {number:"1505",name:"Cups of Coffee"},
        {number : "109", name:"Project Completed"},
        {number:"102",name:"Happy Clients"}
    ]
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold mt-20'>HELLO THERE</h1>
        <h2 className='text-[100px] text-white'>We are Glint</h2>
        <h1 className='h-[1px] w-[30vw] bg-white'></h1>
        <div className='my-15 text-3xl space-y-2 items-center'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ad</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, a</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ad.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ad</p>
        </div>
        <div className='flex justify-between w-[70vw]'>
            {dataNumber.map((data,index)=>(
                <div className={`flex flex-col items-center${index !== 0? "border-l-4 border-l-white":""}`}>
                <p key={index} className='text-white text-8xl font-bold'>{data.number}</p>
                <p key={index} className='text-2xl font-bold mt-4'>{data.name}</p>
                </div>
            ))
            }
        </div>

    </div>
  )
}

export default Content2