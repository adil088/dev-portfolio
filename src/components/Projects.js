import React from "react";

const Projects = () => {
  return (
    <>
      <div className="container bg-[#061125] h-auto w-auto pt-28 text-center text-white">
        <div className="projects">
          <h1 className="text-5xl">
            Projects{" "}
            <hr className="w-60 ml-14 md:mt-2 mt-4 border-white-600 border-3 lg:hidden" />
          </h1>
          <div className="cards mt-10 flex md:flex-row flex-col justify-center items-center">
            <div class="card md:mt:0 my-4 mx-4 bg-[#061125] border-3 border-stone-500 text-white text-left" style={{ width: "18rem" }}>
              <div class="card-body">
                <a target="_blank" rel="noreferrer" href="https://github.com/adil088/inotebook"><h5 class="card-title font-semibold text-xl underline">iNotebook</h5></a>
                <p class="card-text mt-4">
                  Notebook created on cloud with the help of React JS and MongoDB.
                </p>
              </div>
            </div>
            <div class="card md:mt:0 my-4 mx-4 bg-[#061125] border-3 border-stone-500 text-white text-left" style={{ width: "18rem" }}>
              <div class="card-body">
              <a target="_blank" rel="noreferrer" href="https://github.com/adil088/NewsApp"><h5 class="card-title font-semibold text-xl underline">NewsApp</h5></a>
                <p class="card-text mt-4">
                  Get latest news daily created with ReactJS and used News API.
                </p>
              </div>
            </div>
            <div class="card md:mt:0 my-4 mx-4 bg-[#061125] border-3 border-stone-500 text-white text-left" style={{ width: "18rem" }}>
              <div class="card-body">
              <a target="_blank" rel="noreferrer" href="https://github.com/adil088/TextUtils"><h5 class="card-title font-semibold text-xl underline">Text Utility App</h5></a>
                <p class="card-text mt-4">
                It is a utility which can be used to manipulate your text in the way you want.
                </p>
              </div>
            </div>
            <div class="card md:mt:0 my-4 mx-4 bg-[#061125] border-3 border-stone-500 text-white text-left" style={{ width: "18rem" }}>
              <div class="card-body">
              <a target="_blank" rel="noreferrer" href="https://github.com/adil088/AnalogClock"><h5 class="card-title font-semibold text-xl underline">Analog Clock</h5></a>
                <p class="card-text mt-4">
                A very basic project made by me using HTML, CSS and Javascript.
                </p>
              </div>
            </div>
            <div class="card md:mt:0 my-4 mx-4 bg-[#061125] border-3 border-stone-500 text-white text-left" style={{ width: "18rem" }}>
              <div class="card-body">
              <a target="_blank" rel="noreferrer" href="https://github.com/adil088/TodoList"><h5 class="card-title font-semibold text-xl underline">Todo List</h5></a>
                <p class="card-text mt-4">
                  Made To-Do List to manage tasks effectively using React JS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
