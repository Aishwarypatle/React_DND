import React from "react";
import DropBox from "./components/DropBox";

const App = () => {



  return (
    <>
      <section className="flex items-center justify-center w-full h-full">
        <div className="container grid h-6/12 w-6/12 justify-center items-center mb-32 py-8 sm:w-9/12 border-2 rounded-lg mt-20">
          <h1 className="font-extrabold text-teal-500 sm:text-xl text-3xl m-auto mt-8 ">
            UPLOAD VIDEO HERE
          </h1>
          <h6 className="mb-10 mt-1 m-auto text-slate-300 sm:text-xs">Click On the Button or Drag Files Here</h6>
          <DropBox />
        </div>
      </section>
    </>
  );
};

export default App;
