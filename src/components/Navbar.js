import React from "react";
import logo from "../logo.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar flex bg-[#061125] text-white py-3 px-3 justify-between items-center h-16 w-auto">
        <div className="logo md:px-28 px-7">
        <a href="#"><img className=" w-6 h-6 cursor-pointer" src={logo} alt="Logo"/></a>
        </div>
        <div className="icons flex">
          <div className="icon md:px-5 px-3 flex">
            <a target="_blank" rel="noreferrer" href="https://github.com/adil088"><i className="fa-brands fa-github cursor-pointer"></i></a>
          </div>
          <div className="icon md:px-5 px-3 flex">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aadil088"><i className="fa-brands fa-linkedin cursor-pointer "></i></a>
          </div>
          <div className="icon md:px-5 px-3 flex">
            <a target="_blank" rel="noreferrer"  href="mailto:adil88.mohd@email.com"><i className="fa-regular fa-envelope cursor-pointer "></i></a>
          </div>
        </div>
        <div className="nav">
          <ul className="flex md:px-40 px-1 font-bold text-sm md:text-base">
            <li className="px-1 cursor-pointer"><a href='#'>Home</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
