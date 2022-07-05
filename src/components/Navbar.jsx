import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(true);

  const clickHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-base-100">
      <div>
        <h1 className="text-3xl font-semibold">Kartik Pavan</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex ">
        <li className="hover:text-white  duration-150">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-white  duration-150">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-white  duration-150">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-white  duration-150">
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-white  duration-150">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={clickHandler}>
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
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={clickHandler} to="work" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* social icons */}
      <SocialIcons />
    </div>
  );
};

export default Navbar;
