import React from "react";

function Skills() {
  return (
    <section className="text-gray-600 body-font" id="skill">
      <div className="container px-24 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
            Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">
            These are skill i have worked on till now but i am always willing
            learn from my mistakes and seek for opportunities to learn new
            technologies as per engineering requirement
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
            <div className="h-full flex items-center dark:bg-gray-900 border-gray-200 dark:border-gray-900  border p-4 rounded-lg">
              <img
                alt=""
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-gray-300 title-font font-medium">
                  JavaScript
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex dark:bg-gray-900 items-center border-gray-200 dark:border-gray-900 border p-4 rounded-lg">
              <img
                alt=""
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-gray-300 title-font font-medium">
                  React.js
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center dark:bg-gray-900 border-gray-200 dark:border-gray-900 border p-4 rounded-lg">
              <img
                alt=""
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-gray-300 title-font font-medium">
                  Nodejs
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 dark:bg-gray-900 dark:border-gray-900 border p-4 rounded-lg">
              <img
                alt=""
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-gray-300 title-font font-medium">
                  Express js
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 dark:border-gray-900 dark:bg-gray-900 border p-4 rounded-lg">
              <img
                alt=""
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-gray-300 title-font font-medium">
                  Mongoose
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 dark:border-gray-900 border p-4 dark:bg-gray-900 rounded-lg">
              <img
                alt=""
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://w7.pngwing.com/pngs/286/519/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-azure-sql-data-warehouse-logo-text-logo-microsoft-azure.png"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-gray-300 title-font font-medium">
                  SQL
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
