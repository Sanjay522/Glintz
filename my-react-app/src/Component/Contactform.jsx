import React from 'react';

const Contactform = () => {
  return (
    <div className='relative h-[100svh] w-[40vw] bg-cover bg-center top-20 -left-1/3 p-10'>  
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Form Content */}
      <div className='relative z-10 h-full'>
        <form className='text-white flex flex-col h-full'>
          <div className='pb-5 text-xl font-semibold py-10'>SEND US MESSAGE</div>

          <div className='flex flex-col gap-6 flex-1 overflow-y-auto'>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="py-5 bg-transparent border-b-1 border-gray-400 border-b-[rgba(255,255,255,0.3)] focus:outline-none focus:border-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="py-5 bg-transparent border-b-1 border-gray-400 border-b-[rgba(255,255,255,0.3)] focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="py-5 bg-transparent border-b-1 border-gray-400 border-b-[rgba(255,255,255,0.3)] focus:outline-none focus:border-green-500"
            />
            <textarea
              name="textarea"
              placeholder="Enter your message here..."
              className="text-gray-400   bg-transparent border-b-1 border-gray-400 border-b-[rgba(255,255,255,0.3)] focus:outline-none focus:border-green-500"
              rows="5"
            />
          </div>

          <div className='mt-6'>
            <button
              type="submit"
              className='w-full bg-green-500 py-3 rounded-md hover:bg-green-600 transition'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
