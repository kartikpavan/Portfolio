import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(true);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-base-100">
      <div>
        <h1 className="text-3xl font-semibold">Kartik Pavan</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex ">
        <li className="hover:text-white  duration-150">Home</li>
        <li className="hover:text-white  duration-150">About</li>
        <li className="hover:text-white  duration-150">Skills</li>
        <li className="hover:text-white  duration-150">Projects</li>
        <li className="hover:text-white  duration-150">Contact</li>
      </ul>

      {/* hamburger */}
      <div
        className="md:hidden z-10 cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile View  */}
      <div
        className={`${
          showNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-neutral-focus flex flex-col justify-center items-center  "
        }`}
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* social icons */}
      <SocialIcons />
    </div>
  );
};

export default Navbar;
