import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-accent-focus">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right font-bold text-5xl ">
            <p>
              Hi, I am Divya Kartik nice to meet you . Please Take a look around
            </p>
          </div>
          <div className="text-lg">
            <p>
              Hey! My name is Divya Kartik Pavan and I am a Full-stack web
              developer with a passion for front-end and back-end development. I
              am currently doing my Master of Computer Application (MCA) from
              Amity University. I aspire toward a career that will allow me to
              channel my creativity through crafting beautiful software and
              engaging experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
