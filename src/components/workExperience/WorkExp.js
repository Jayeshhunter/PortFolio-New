import React from "react";
import spot from "./spotmark.PNG";
import visual from "./visual.PNG";
import docs from "./docs.PNG";
import netflix from "./netflix.PNG";
import amazon from "./Amazon.PNG";
import zoom from "./zoom.PNG";
import useWindowSize from "../useWindowSize";

function WorkExp() {
  const { width } = useWindowSize();

  return (
    <section className="text-gray-600 body-font" id="project">
      {width > 500 ? (
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
                Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">
                These are the following projects developed using the above
                skills.
              </p>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={spot}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Tracking
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-300 mb-3">
                    Spotmark
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    SpotMark is a web and app based application made for Tamil
                    Police ,which tracks their location during the elections so
                    the Police could could be assigned the work according to
                    their location near the booth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["REACT", "NODEJS", "MONGOOSE"].map((item) => {
                      return (
                        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/frontend_policeapp_v2"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={visual}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    visualize
                  </h2>
                  <h1 className="title-font text-lg font-medium dark:text-gray-300 text-gray-900 mb-3">
                    Sorting Visualizer
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    Sorting visualizer is a project developed to help beginners
                    understand the concepts of sorting in a better way along
                    with the code.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "NODEJS"].map((item) => {
                      return (
                        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/Sorting-visualizer"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={docs}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Google-docs clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original google docs with
                    limited features using MERN stack developed for learning
                    purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mongoose", "Express", "React", "Nodejs"].map((item) => {
                      return (
                        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 dark:bg-blue-300 py-1 bg-blue-200 text-blue-700 rounded-full">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/Google-docs-clone_frontend"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={netflix}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Netflix clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original netflix with
                    limited features using MERN stack developed for learning
                    purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "CSS", "JavaScript", "Material UI"].map(
                      (item) => {
                        return (
                          <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 dark:bg-blue-300 bg-blue-200 text-blue-700 rounded-full">
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/NETFLIX-CLONE"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={amazon}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Amazon clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original Amazon service
                    with limited features using MERN stack developed for
                    learning purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "CSS", "JavaScript", "Material UI"].map(
                      (item) => {
                        return (
                          <div className="text-xs inline-flex items-center font-bold leading-sm uppercase dark:bg-blue-300 px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/AMAZON-CLONE"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={zoom}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Zoom clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original Zoom video
                    calling with limited features using EJS template engine
                    stack developed for learning purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["EJS", "CSS", "JavaScript", "Express", "Socket"].map(
                      (item) => {
                        return (
                          <div className="text-xs inline-flex items-center font-bold leading-sm dark:bg-blue-300 uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/Zoom-clone"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
                Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">
                These are the following projects developed using the above
                skills.
              </p>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={spot}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Tracking
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-300 mb-3">
                    Spotmark
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    SpotMark is a web and app based application made for Tamil
                    Police ,which tracks their location during the elections so
                    the Police could could be assigned the work according to
                    their location near the booth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["REACT", "NODEJS", "MONGOOSE"].map((item) => {
                      return (
                        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/frontend_policeapp_v2"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={visual}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    visualize
                  </h2>
                  <h1 className="title-font text-lg font-medium dark:text-gray-300 text-gray-900 mb-3">
                    Sorting Visualizer
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    Sorting visualizer is a project developed to help beginners
                    understand the concepts of sorting in a better way along
                    with the code.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "NODEJS"].map((item) => {
                      return (
                        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/Sorting-visualizer"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={docs}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Google-docs clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original google docs with
                    limited features using MERN stack developed for learning
                    purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mongoose", "Express", "React", "Nodejs"].map((item) => {
                      return (
                        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 dark:bg-blue-300 py-1 bg-blue-200 text-blue-700 rounded-full">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/Google-docs-clone_frontend"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={netflix}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Netflix clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original netflix with
                    limited features using MERN stack developed for learning
                    purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "CSS", "JavaScript", "Material UI"].map(
                      (item) => {
                        return (
                          <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 dark:bg-blue-300 bg-blue-200 text-blue-700 rounded-full">
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/NETFLIX-CLONE"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={amazon}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Amazon clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original Amazon service
                    with limited features using MERN stack developed for
                    learning purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "CSS", "JavaScript", "Material UI"].map(
                      (item) => {
                        return (
                          <div className="text-xs inline-flex items-center font-bold leading-sm uppercase dark:bg-blue-300 px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/AMAZON-CLONE"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-900 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={zoom}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    clone
                  </h2>
                  <h1 className="title-font text-lg dark:text-gray-300 font-medium text-gray-900 mb-3">
                    Zoom clone
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    This project is a simple clone of original Zoom video
                    calling with limited features using EJS template engine
                    stack developed for learning purpose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["EJS", "CSS", "JavaScript", "Express", "Socket"].map(
                      (item) => {
                        return (
                          <div className="text-xs inline-flex items-center font-bold leading-sm dark:bg-blue-300 uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <a
                      href="https://github.com/Jayeshhunter/Zoom-clone"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:bg-white dark:rounded-md	"
                    >
                      <img
                        style={{ width: 32, height: 32 }}
                        src="https://github.com/fluidicon.png"
                        alt=""
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkExp;
