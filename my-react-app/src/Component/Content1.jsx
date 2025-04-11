import React from "react";
import Whatsapp from "../assets/icons8-whatsapp.svg";
import Instagram from "../assets/icons8-instagram.svg";

import Facebook from "../assets/icons8-facebook.svg";

import Linkedin from "../assets/icons8-linkedin.svg";

const Content1 = () => {
  const socialIcons = [
    { src: Whatsapp, alt: "WhatsApp", link: "#whatsapp" },
    { src: Facebook, alt: "Facebook", link: "#facebook" },
    { src: Linkedin, alt: "LinkedIn", link: "#linkedin" },
    { src: Instagram, alt: "Instagram", link: "#instagram" },
  ];
  const buttonName = ["START A PROJECT","MORE ABOUT US"]
  return (
    <div className="w-[95vw] m-auto text-white relative">
      <div className="ml-54">
        <h1 className="text-[30px] mt-30 text-gray-500">Welcome to Glint</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="text-[60px] flex flex-col ">
            <span>We are a creative </span>
            <span>group of pepole who</span>
            <span>design influential brands</span>
            <span>and digital experiences.</span>
          </div>
          <div className="">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.link}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-10 w-10 fill-black m-5"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex">
          {buttonName.map((name,index)=>(
            <button key={index} className={`cursor-pointer border-2 p-3 hover:bg-white hover:text-black hover:border-white ${index !== 0 ? "ml-5" : ""}`}>{name}</button>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Content1;
