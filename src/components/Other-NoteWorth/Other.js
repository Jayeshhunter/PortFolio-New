import React from "react";
import spot from "../workExperience/spotmark.PNG";
import doc from "../workExperience/docs.PNG";
import zoom from "../workExperience/zoom.PNG";
import event from "./events.PNG";

function Other() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container lg:px-20 px-10 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-300">
              Other Noteworthy Projects
            </h1>
            <div class="h-1 w-20 bg-pink-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-300">
            These are few of my other noteworthy personal projects. Click On
            image to see the source code in my github.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <a href="https://github.com/Jayeshhunter/frontend_policeapp_v2">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={spot}
                  alt="content"
                />
              </a>
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Tracking
              </h3>
              <h2 class="text-lg text-gray-900 font-medium dark:text-gray-300 title-font mb-4">
                Spotmark
              </h2>
              <p class="leading-relaxed text-base mb-4">
                {" "}
                SpotMark is a web and app based tracking application made for
                Tamil Police during the local elections.
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
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <a href="https://github.com/Jayeshhunter/Google-docs-clone_frontend">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={doc}
                  alt="content"
                />
              </a>
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Clone
              </h3>
              <h2 class="text-lg text-gray-900 dark:text-gray-300 font-medium title-font mb-4">
                Google-docs clone
              </h2>
              <p class="leading-relaxed text-base mb-4">
                This is a simple clone of original google docs using MERN stack.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Mongoose", "Express", "React", "Nodejs"].map((item) => {
                  return (
                    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <a href="https://github.com/Jayeshhunter/Zoom-clone">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={zoom}
                  alt="content"
                />
              </a>
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                clone
              </h3>
              <h2 class="text-lg text-gray-900 dark:text-gray-300 font-medium title-font mb-4">
                Zoom clone
              </h2>
              <p class="leading-relaxed text-base mb-4">
                This project is a clone of original Zoom app using EJS template
                engine.
              </p>
              <div className="flex flex-wrap gap-2">
                {["EJS", "CSS", "JavaScript", "Express", "Socket"].map(
                  (item) => {
                    return (
                      <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                        {item}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <a href="https://github.com/Jayeshhunter/Event.io">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={event}
                  alt="content"
                />
              </a>
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Event management
              </h3>
              <h2 class="text-lg text-gray-900 dark:text-gray-300 font-medium title-font mb-4">
                Events.io
              </h2>
              <p class="leading-relaxed text-base mb-4">
                {" "}
                Events.io is a website for event management website to help
                small clubs host their events .
              </p>
              <div className="flex flex-wrap gap-2">
                {["EJS", "NODEJS", "MONGOOSE"].map((item) => {
                  return (
                    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 dark:bg-blue-300 text-blue-700 rounded-full">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Other;
