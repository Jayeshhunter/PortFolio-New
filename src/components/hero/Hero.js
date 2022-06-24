import React from "react";
import Photo from "./Jayesh.jpeg";
import useWindowSize from "../useWindowSize";

function Hero() {
  const { width } = useWindowSize();

  return (
    <>
      {width < 500 ? (
        <section className="text-gray-600 dark:text-gray-100 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover mx-auto object-center rounded"
                alt=""
                style={{ width: "350px", height: "350px", borderRadius: "5%" }}
                src={Photo}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">
                Hello World !
                <br className="hidden lg:inline-block " />
                I'm Jayesh Jayanandan
              </h1>
              <br />
              <p className="mb-8 leading-relaxed">
                Detail-oriented, organized and meticulous developer. Works at
                fast pace to meet tight deadlines. Enthusiastic team player
                ready to contribute to company success. Personable Software
                Developer accustomed to heading up successful development teams
                through agile direction and careful delegation. Willing to
                direct teams or work hands-on to complete extremely difficult
                projects. Brings both cutting-edge programming expertise and
                exceptional interpersonal skills to leadership roles.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/Jayeshhunter"
                  className="inline-flex gap-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  <p>Github</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/jayesh-jayanandan-20850818b/"
                  className="ml-4 inline-flex gap-2 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="text-gray-600 dark:text-gray-100 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover mx-auto object-center rounded"
                alt=""
                style={{ width: "350px", height: "350px", borderRadius: "5%" }}
                src={Photo}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">
                Hello World
                <br className="hidden lg:inline-block " />
                I'm Jayesh Jayanandan
              </h1>
              <br />
              <p className="mb-8 leading-relaxed">
                Detail-oriented, organized and meticulous developer. Works at
                fast pace to meet tight deadlines. Enthusiastic team player
                ready to contribute to company success. Personable Software
                Developer accustomed to heading up successful development teams
                through agile direction and careful delegation. Willing to
                direct teams or work hands-on to complete extremely difficult
                projects. Brings both cutting-edge programming expertise and
                exceptional interpersonal skills to leadership roles.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/Jayeshhunter"
                  className="inline-flex gap-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  <img
                    src="https://img.icons8.com/glyph-neue/32/000000/github.png"
                    alt=""
                  />
                  <p>Github</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/jayesh-jayanandan-20850818b/"
                  className="ml-4 inline-flex gap-2 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  <img
                    style={{ height: 30 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    alt=""
                  />
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Hero;
