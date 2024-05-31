import React from "react";
import html from "../assets/source/html.png";
import css from "../assets/source/css.png";
import javascript from "../assets/source/javascript.png";
import react from "../assets/source/react.png";
import github from "../assets/source/github.png";
import tailwind from "../assets/source/tailwind.png";
import nextjs from "../assets/source/nextjs.png";
import bootstrap from "../assets/source/bootstrap5.png";
import AntDesign from "../assets/source/ant design.png";
import wordpress from "../assets/source/wordpress1.png";
const Skills = () => {
  const skill = [
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
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-800",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: AntDesign,
      title: "ant design",
      style: "shadow-red-500",
    },

    {
      id: 8,
      src: nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 9,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: github,
      title: "Github",
      style: "shadow-gray-600",
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
          {skill.map(({ id, src, title, style }) => (
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

export default Skills;
