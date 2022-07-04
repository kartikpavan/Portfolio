import React from "react";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const SocialIcons = () => {
  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            href="https://www.linkedin.com/in/kartikpavan/"
            rel="noreferrer"
            target="_blank"
            className="w-full flex justify-between items-center text-gray-200 font-bold"
          >
            Linkedin <FaLinkedin size={32} color="white" />
          </a>
        </li>
        <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-neutral">
          <a
            href="https://github.com/kartikpavan"
            rel="noreferrer"
            target="_blank"
            className="w-full flex justify-between items-center text-gray-200 font-bold"
          >
            Github <FaGithub size={32} color="white" />
          </a>
        </li>
        <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-info">
          <a
            href="https://twitter.com/kartik_im"
            rel="noreferrer"
            target="_blank"
            className="w-full flex justify-between items-center text-gray-200 font-bold"
          >
            Twitter <FaTwitterSquare size={32} color="white" />
          </a>
        </li>
        <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-primary-content">
          <a
            href="mailto:kartikpavan2@gmail.com"
            rel="noreferrer"
            className="w-full flex justify-between items-center text-gray-200 font-bold"
          >
            Email <AiOutlineMail size={32} color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
