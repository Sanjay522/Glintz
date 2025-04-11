import { useState, useEffect } from "react";
import React from "react";
import Nav from "./Component/Nav";
import Content1 from "./Component/Content1";
import Contentt2 from "./Component/Contentt2";
import Whatwedo from "./Component/Whatwedo";
import Work from "./Component/Work";
import ImageGallary from "./Component/ImageGallary";
import Client from "./Component/Client";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-green-500">
      <div className="h-1.5 bg-green-400 w-screen animate-slideRight-animation absolute top-0 left-0 "></div>
      <div className="w-12 h-12 border-6 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

function App() {
  // const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="bg-black w-full pb-30">
        <Nav />
        <Content1 />
      </div>
      <div className="bg-green-500">
        <Contentt2 />
      </div>
      <div className="bg-white">
        {/* <Whatwedo /> */}
      </div>
      <div className="bg-black">
        <Work/>
      </div>
      <div>
        <ImageGallary/>
      </div>
      <div className="bg-gray-200">
        <Client/>
      </div>
      <div>
        <Contact/>
      </div>
      <div className="bg-black">
        <Footer/>
      </div>
    </>
  );
}

export default App;
