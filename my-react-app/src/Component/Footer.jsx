import React from 'react'

const Footer = () => {
  return (
    <div className='w-[70vw] m-auto py-20'>
        <div className='flex justify-between'>
        <div className='text-gray-400' >
            <h1 className='primary text-3xl font-bold pb-10'>Glint.</h1>
            <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget</p>
            <p>tincidunt nibh pulvinar a. Praesent sapien massa, convallis</p>
            <p>a pellentesque nec, egestas non nisi. Mauris blandit</p>
            <p>aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor</p>
            <p>accumsan tincidunt. Nulla porttitor accumsan tincidunt.</p>
            <p>Quaerat voluptas autem necessitatibus vitae aut.</p>
        </div>
        <div className='text-gray-400'>
            <h1 className=' text-white text-2xl font-bold pb-10'>Get Notified</h1>
            <p>Quia quo qui sed odit. Quaerat voluptas autem</p>
            <p>necessitatibus vitae aut non alias sed quia. Ut itaque enim</p>
            <p>optio ut excepturi deserunt iusto porro.</p>
        </div>
        </div>
        <div className='flex text-white pt-15 items-center justify-center gap-5'>
            <p>Copyright Sanjay 2025</p>
            <p className='border-l border-l-gray-400 pl-5'>Site Template by <a href="">Colorlib</a></p>
        </div>
    </div>
  )
}

export default Footer