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
          <button className="my-2">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-accent transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-accent-focus group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-white">
                View Work
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
