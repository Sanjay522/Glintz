import React from "react";
import { useState } from "react";
import reactlogo from "../assets/Logo/reactt.png";
// import apple from '../assets/Logo'

const Client = () => {
  const [current, setcurrent] = useState(1);

  const logo = [
    { name: "logo1", img: reactlogo },
    { name: "logo1", img: reactlogo },
    { name: "logo2", img: reactlogo },
    { name: "logo3", img: reactlogo },
    { name: "logo4", img: reactlogo },
    { name: "logo5", img: reactlogo },
    { name: "logo6", img: reactlogo },
    { name: "logo7", img: reactlogo },
    { name: "logo8", img: reactlogo },
    { name: "logo9", img: reactlogo },
    { name: "logo10", img: reactlogo },
    { name: "logo11", img: reactlogo },
    { name: "logo12", img: reactlogo },
    { name: "logo13", img: reactlogo },
    { name: "logo14", img: reactlogo },
    { name: "logo15", img: reactlogo },
    { name: "logo16", img: reactlogo },
  ];
  const displaylogo = 5
  const startpage = (current -1)*displaylogo
  const endpage = startpage + displaylogo
  const currentpage = logo.slice(startpage,endpage)

  
  const indexButton = Math.ceil(logo.length/5)
  console.log(indexButton)
  let indexnumber = []
  for (let i = 0; i < indexButton; i++) {
    indexnumber.push(i)
  }
  return (
    <div className="py-20 flex flex-col items-center">
      <div>
        <h1 className="primary font-bold text-center">OUR CLIENT</h1>
        <h1 className="text-5xl font-bold py-2">
          Glint has been honored to partner
        </h1>
        <h1 className="text-5xl font-bold py-2">up with these clients</h1>
      </div>
      <div className="flex gap-15  items-center mt-20">
        {currentpage.map(({ name, img }) => (
          <img
            src={img}
            alt={name}
            className="cursor-pointer opacity-50 h-25 w-25 hover:opacity-100"
          />
        ))}
      </div>
      <div className="flex gap-5 py-10">
        {indexnumber.map(( index)=>
                <button onClick={() => setcurrent(index + 1)}
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  current === index + 1 ? 'bg-black' : 'bg-gray-400'
                } transition-all duration-200`}></button>
        )}
      </div>
    </div>
  );
};

export default Client;
