import React from "react";
import aboutphoto from "../about.png"

const About = () => {
  return (
    <>
      <div className="bg-[#061125] md:h-1/2 h-96 w-auto flex md:flex-row-reverse flex-col justify-between">
        <div className="about md:pt-32 pt-20 flex-col md:px-10 md:text-left text-center md:w-1/2">
          <h1 className="text-white text-5xl md:w-auto w-auto h-20 md:ml-0 md:text-left">About Me <hr className="md:w-56 w-56 md:ml-0 ml-20 md:mt-2 mt-4 border-white-600 border-2"/></h1>
          <p className="md:mt-8 mt-10 w-auto h-36 md:px-0 px-8 md:w-24 text-white md:text-left md:mr-2">Dedicated web developer with a strong foundation in diverse technologies. I excel in designing and implementing scalable solutions, combining technical expertise with a passion for innovation. Committed to continuous learning, I strive to deliver high-quality and cutting-edge web applications.</p>
        </div>
        <div className=" photo flex justify-center md:mt-16 mx-24 w-2/5 h-96">
          <img className="hidden lg:block w-auto h-auto" src={aboutphoto} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
