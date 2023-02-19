import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 body-font ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img
            alt=""
            className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/J_Church_logo.svg/1024px-J_Church_logo.svg.png"
          />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 dark:text-gray-300 mt-4">
          <a
            href="https://github.com/jayeshhunter"
            className="text-gray-600 ml-1 dark:text-gray-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Built by Jayesh Jayanandan
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-400 dark:text-gray-300"
            href="https://www.linkedin.com/in/jayesh-jayanandan-20850818b/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>

          <a
            className="ml-3 text-gray-500 dark:text-gray-300"
            href="https://leetcode.com/jj6144/"
          >
            <img
              style={{ width: 18, height: 20 }}
              src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
              alt=""
            />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
