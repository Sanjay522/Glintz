import React from "react";

const Contactform = () => {
  return (
    <div className="relative h-[100svh] w-[70vw] bg-cover bg-center top-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Form Content */}
      <div className="relative z-10 h-full  flex">
        <form className="text-white flex flex-col h-full w-[70%] p-10">
          <div className="pb-5 text-xl font-semibold py-10">
            SEND US MESSAGE
          </div>

          <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
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

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 py-3 rounded-md hover:bg-green-600 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className="w-[30%] text-white relative">
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <div className="relative z-30 text-white p-10">
            <p className="py-10 font-semibold">CONTACT INFO</p>
            <div className="text-gray-400 py-5">
              <h1 className="primary py-3">Where to Find Us</h1>
              <p>1600 Amphitheare Parkway</p>
              <p>Mountain View. CA</p>
              <p>94043 US</p>
            </div>
            <div className="text-gray-400 py-5">
              <h1 className="primary py-3">Email Us At</h1>
              <p>SanjayGupta@gmail.com</p>
              <p>sg917226@gmail.com</p>
            </div>
            <div className="text-gray-400 py-5">
              <h1 className="primary py-3">Call Us At</h1>
              <p>Phone:(+91)7710865713</p>
              <p>Mobile:(+91)1234567890</p>
              <p>fax:(+1)12345</p>
            </div>
            {/* <div>for icons</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
