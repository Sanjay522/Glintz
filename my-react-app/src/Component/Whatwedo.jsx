import React from "react";
import webicon from "../assets/webicon.png";

const Whatwedo = () => {
  const WData = [
    {
      image: webicon,
      title: "Brand Identity",
      paragraph: `Nemo cupiditate ab quibusdam quaerat impedit magni.
       Earum suscipit ipsum laudantium. Quo delectus est. 
       Maiores voluptas ab sit natus veritatis ut. 
       Debitis nulla cumque veritatis. 
       Sunt suscipit voluptas ipsa in tempora esse soluta sint.`,
    },
    {
      image: webicon,
      title: "Illusion",
      paragraph: `Nemo cupiditate ab quibusdam quaerat impedit magni.
       Earum suscipit ipsum laudantium. Quo delectus est. 
       Maiores voluptas ab sit natus veritatis ut. 
       Debitis nulla cumque veritatis. Sunt suscipit 
       voluptas ipsa in tempora esse soluta sint.`,
    },
    {
      image: webicon,
      title: "Marketing",
      paragraph: `Nemo cupiditate ab quibusdam quaerat impedit magni.
       Earum suscipit ipsum laudantium. Quo delectus est. 
       Maiores voluptas ab sit natus veritatis ut. 
       Debitis nulla cumque veritatis. Sunt suscipit 
       voluptas ipsa in tempora esse soluta sint.`,
    },
    {
      image: webicon,
      title: "Web Design",
      paragraph: `Nemo cupiditate ab quibusdam quaerat impedit magni.
       Earum suscipit ipsum laudantium. Quo delectus est. 
       Maiores voluptas ab sit natus veritatis ut. 
       Debitis nulla cumque veritatis. Sunt suscipit 
       voluptas ipsa in tempora esse soluta sint.`,
    },
    {
      image: webicon,
      title: "Packaging Design",
      paragraph: `Nemo cupiditate ab quibusdam quaerat impedit magni.
       Earum suscipit ipsum laudantium. Quo delectus est. 
       Maiores voluptas ab sit natus veritatis ut. 
       Debitis nulla cumque veritatis. Sunt suscipit 
       voluptas ipsa in tempora esse soluta sint.`,
    },
    {
      image: webicon,
      title: "Web Development",
      paragraph: `Nemo cupiditate ab quibusdam quaerat impedit magni.
       Earum suscipit ipsum laudantium. Quo delectus est. 
       Maiores voluptas ab sit natus veritatis ut. 
       Debitis nulla cumque veritatis. Sunt suscipit 
       voluptas ipsa in tempora esse soluta sint.`,
    },
  ];
  return (
    <div className="w-[100vw]">
      <div className=" flex flex-col justify-center items-center text-center my-20">
        <h1 className="primary text-2xl">WHAT WE DO</h1>
        <p className="text-6xl my-2">We've got everything you need to</p>
        <p className="text-6xl">launch and grow your business</p>
        <div className="h-[0.5px] w-[40vw] bg-gray-500 my-[50px] opacity-30"></div>
      </div>
      <div className="  flex flex-wrap items-center justify-center gap-20">
        {WData.map(({ image, title, paragraph }, index) => (
          <div className="flex ">
            <img className="h-20 w-20" src={image} alt="icon" />
            <div key={index}>
              <h1 key={index} className="text-5xl font-bold ml-10">{title}</h1>
              <p key={index} className="whitespace-pre-line mt-10 ml-10">
                {paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatwedo;
