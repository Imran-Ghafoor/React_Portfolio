import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" py-16 w-full h-full sm:h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me!{" "}
          </p>
          <span className="text-4xl flex items-center justify-center pb-4 mt-4  ">
            Thank you!
          </span>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/58c78515-7953-4718-8bbb-2b0090ffb716"
            className="flex flex-col w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent shadow-md shadow-blue-500 rounded-md text-gray-400 focus:outline"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent rounded-md shadow-md shadow-red-500 focus:outline text-gray-400"
            />
            <textarea
              name="message"
              placeholder="Enter your message....."
              rows="10"
              className="p-2 bg-transparent rounded-md shadow-md shadow-green-500 focus:outline text-gray-400"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-800 px-6 py-3 rounded-md my-8 mx-auto flex items-center hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
