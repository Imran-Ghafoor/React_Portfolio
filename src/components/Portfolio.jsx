import React from "react";
import arrayDestruct from "../assets/source/arrayDestruct.jpg";
import installNode from "../assets/source/installNode.jpg";
import navbar from "../assets/source/navbar.jpg";
import reactParallax from "../assets/source/reactParallax.jpg";
import reactSmooth from "../assets/source/reactSmooth.jpg";
import reactWeather from "../assets/source/reactWeather.jpg";

const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      href: "https://movie-recommendation-app-theta.vercel.app",
      code: "https://github.com/Imran-Ghafoor/Movie-Recommendation-App",
    },
    {
      id: 2,
      src: installNode,
      href: "https://react-video-l4ekunm5d-imran-ghafoor.vercel.app/",
      code: "",
    },
    {
      id: 3,
      src: navbar,
      href: "https://new-imran-ghafoor.vercel.app/",
      code: "",
    },
    {
      id: 4,
      src: reactParallax,
      href: "https://weather-app-ashen-zeta.vercel.app/",
      code: "https://github.com/Imran-Ghafoor/Weather-App",
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="experience"
      className=" py-16 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Experience
          </p>
          <p className="py-6">
            Check out some of my work-experience right here!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src, href, code }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-500 rounded-md hover:shadow-red-500"
            >
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <a href={href} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-110 duration-200">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-110 duration-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
