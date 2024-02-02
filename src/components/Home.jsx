import React from "react";
import heroImran from "../assets/source/imran.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="name"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full 
       px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white font-bold">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1+ year of experience building and desgining applications.
            Currently , I love to work web applications using technologies like
            React, Tailwind, Bootstrap, Ant Design, Node
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImran}
            alt="my profile"
            className="h-44 w-full  rounded-2xl md:w-full md:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
