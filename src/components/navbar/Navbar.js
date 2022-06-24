import React from "react";
import Resume from "./Resume.pdf";
import { HashLink as Link } from "react-router-hash-link";
import Toggle from "../Toggle";
function Navbar() {
  return (
    <header className="text-gray-600 dark:text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          alt=""
          className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/J_Church_logo.svg/1024px-J_Church_logo.svg.png"
        />
        <span className=" text-xl">
          {" "}
          <a href={Resume} download>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 dark:text-black focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Resume
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap gap-2 items-center text-base justify-center">
          <Link
            className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            smooth
            to="#skill"
          >
            Skills
          </Link>
          <Link
            className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            smooth
            to="#project"
          >
            Projects
          </Link>
          <Link
            className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            smooth
            to="#contact"
          >
            Contact
          </Link>
        </nav>
        <Toggle />
      </div>
    </header>
  );
}

export default Navbar;
