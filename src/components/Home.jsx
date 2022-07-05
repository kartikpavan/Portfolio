import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto h-full p-8 flex flex-col justify-center ">
        <p className="text-accent text-lg">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kartik Pavan
        </h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full Stack Developer
        </h1>
        <p className="text-[#8892b0] max-w-[700px] py-4 ">
          I'm a full-stack developer specializing in building &#40;and
          occassionaly designing &#41; digital experiences. Currently i am
          focused on building responsive full stack web application.
        </p>
        <div>
          <button className="btn btn-accent text-xl my-2 px-4 flex gap-4">
            View Work
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
