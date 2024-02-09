import React from "react";
import html from "../assets/source/html.png";
import css from "../assets/source/css.png";
import javascript from "../assets/source/javascript.png";
import react from "../assets/source/react.png";
import graphql from "../assets/source/graphql.png";
import github from "../assets/source/github.png";
import tailwind from "../assets/source/tailwind.png";
import nextjs from "../assets/source/nextjs.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "Css",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Jvascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: graphql,
      title: "GraphQl",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-800",
    },
    {
      id: 8,
      src: nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="skills"
      className=" py-16 bg-gradient-to-b from-gray-800 to to-black w-full h-full   "
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline p-1">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-200 rounded-lg ${style}`}
            >
              <img src={src} alt="" className=" w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
