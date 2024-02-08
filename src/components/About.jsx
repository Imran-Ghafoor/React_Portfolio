import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="py-16 w-full h-full sm:h-full text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="  pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500 pt-4">
            About
          </p>
        </div>
        <p className="text-pink-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Muhammad Imran
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a React Javascript Developer.
        </h2>
        <p className="text-[#8892b0] max-w-[950px] md:text-center mt-20">
          " I am a passionate skilled MERNStack, Specialist in Front-end and
          enthusiastic javascript developer with a strong background in
          JAVASCRIPT/ES6, REACT.js, Node.js, Redux Toolkit, Context API, MY SQL,
          HTML/CSS, TAILWIND, Bootstrap, SASS, SCSS, Ant Design, GIT | GIT HUB,
          and code Debugging, I am confident in my ability to contribute with
          the team. Graduating in 2022 with a Bachelor of Science in Computer
          Science degree, I am eager to apply my knowledge and passion for web
          development to help drive your company's success. Joining the team
          would be a dream come true, as I am excited to work alongside talented
          professionals and further enhance my skills. Together, we can create
          innovative solutions and deliver exceptional results. I am ready to
          hit the ground running and make a positive impact from day one. Let's
          build something great together! "
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
