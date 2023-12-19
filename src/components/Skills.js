import React from "react";
import htmlLogo from "../HTML5.png";
import cssLogo from "../CSSLogo.png";
import jslogo from "../JavaScriptLogo.png"
import ReactLogo from "../ReactLogo.png"
import bootstraplogo from "../bootstraplogo.png"
import tailwindlogo from "../TailwindLogo.png"
import mongodblogo from "../mongodblogo.png"
import postmanlogo from "../postmanlogo.png"

const Skills = () => {
  return (
    <>
      <div className="container bg-[#061125] w-auto h-auto items-center md:pt-30 pt-20">
        {/* <h1 className="text-white text-5xl pt-10 text-center">My Skills set </h1> */}
        <h1 className="text-white text-5xl pt-10 md:w-auto w-auto h-20 md:ml-0  text-center">
          My Skills set
          <hr className="w-72 ml-10 md:mt-2 mt-4 border-white-600 border-2 lg:hidden" />
        </h1>
        <div className="cards mt-10 flex md:flex-row flex-col justify-center items-center">
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={htmlLogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">HTML 5</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={cssLogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">CSS 3</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={jslogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">JavaScript</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={ReactLogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">React JS</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={bootstraplogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">Bootstrap</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={tailwindlogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">Tailwind CSS</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={mongodblogo} className="card-img-top h-16 w-10" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">Mongo DB</h5>
            </div>
          </div>
          <div
            className="card flex items-center bg-[#061125] text-white text-center mt-10"
            style={{ width: "10rem" }}
          >
            <img src={postmanlogo} className="card-img-top h-16 w-16" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-semibold">Postman</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
