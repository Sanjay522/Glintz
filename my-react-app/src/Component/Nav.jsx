import React, { useState } from "react";
import image from "../assets/image.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navbar = ["Home", "About", "Contact", "Service", "Work", "Client"];

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <div className="pt-10 w-[95vw] m-auto flex justify-between text-white text-3xl relative">
      <img src={image} alt="Logo" className="h-10" />

      {/* Button for toggling menu */}
      <button
        className="fixed p-2 right-10 cursor-pointer bg-black text-2xl text-white z-50"
        onClick={openClose}
      >
        {open ? "╳" : "☰ Menu"}
      </button>

      {/* Menu */}
      {open && (
        <ul className="fixed pt-10 right-0 top-0 bg-black cursor-pointer z-40 h-[90vh] w-[20vw] flex flex-col items-start pl-5 text-white">
          {navbar.map((data, index) => (
            <li key={index} className="p-2">
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
