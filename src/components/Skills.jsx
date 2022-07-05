import React from "react";
import Reactjs from "../assets/reactjs.png";
import Nextjs from "../assets/nextjs.png";
import Redux from "../assets/redux.png";
import Typescript from "../assets/typescript.png";
import Tailwindcss from "../assets/tailwindcss.png";
import materialui from "../assets/materialui.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent-focus">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies and tools I've worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 text-center py-4 gap-8">
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={Reactjs} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">React</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={Nextjs} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Next Js</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={Redux} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Redux</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={Tailwindcss} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Tailwind </p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={materialui} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Material UI</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={Typescript} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Typescript</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={firebase} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Firebase</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={nodejs} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Node Js</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={expressjs} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">Express Js</p>
          </div>
          <div className="shadow-xl  p-2 hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <img src={mongodb} alt="react" className="w-20 mx-auto" />
            <p className="my-2 text-lg">MongoDb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
