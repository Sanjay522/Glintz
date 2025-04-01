import React, { useState, useEffect } from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return loading ? <Loader /> : <div className="p-10 text-center">Welcome to my website!</div>;
};

export default App;
