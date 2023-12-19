import React from "react";
import person from "../person1.PNG";
import resume from "../Resume.pdf"

const Profile = () => {
  return (
    <>
      <div className="profile bg-[#061125] h-1/2 w-auto md:flex">
        <div className="intro text-white md:py-32 md:px-28 py-24 px-7 md:w-2/3">
          <p className="font-bold text-7xl">
            Hi, I am <span className="text-[#915EFF]">Mohd Adil</span>
          </p>
          <p className="md:mt-8 mt-8 w-80 md:w-96 text-2xl font-semibold">
            <h2>but you can call me <span className="text-[#915EFF]">Aadil</span></h2>
          </p>
          {/* // eslint-disable-next-line */}
          <a href={resume} download="MyResume" target='_blank' rel="noreferrer"><button className="border-stone-600 bg-white text-black grayscale resume w-40 h-12 mt-8 rounded-2xl">
          
            Download Resume
          </button></a>
        </div>
        <div className="photo ">
          <img className="w-96 h-auto md:mt-7 mt-1  md:mr-80" src={person} alt="" />
        </div>
      </div>
    </>
  );
};

export default Profile;
