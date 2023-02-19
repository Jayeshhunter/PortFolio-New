import React, { useState, useEffect } from "react";
import axios from "axios";
import stat from "./stat.PNG";

// const baseURL = "https://leetcode-stats-api.herokuapp.com/jj6144";

function Stats() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get("https://leetcode-stats-api.herokuapp.com/jj6144").then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);

  if (!post)
    return (
      <section class="text-gray-600 body-font" id="stat">
        <div class="container px-20 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
              Github Stats
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 dark:border-gray-900 rounded-lg">
                <img
                  class="inline-block mb-3"
                  alt=""
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-project-computer-programming-flaticons-lineal-color-flat-icons.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  82+
                </h2>
                <p class="leading-relaxed dark:text-gray-300">Repositories</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:border-gray-900">
                <img
                  class="inline-block mb-3"
                  alt=""
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-project-design-thinking-phatplus-lineal-color-phatplus-2.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  40
                </h2>
                <p class="leading-relaxed dark:text-gray-300">Mini Projects</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:border-gray-900">
                <img
                  class="inline-block mb-3"
                  alt=""
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-contribution-achievements-flaticons-lineal-color-flat-icons-2.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  800+
                </h2>
                <p class="leading-relaxed dark:text-gray-300">Contributions</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:border-gray-900">
                <img
                  class="inline-block mb-3"
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/color/48/000000/collaboration.png"
                  alt=""
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  20+
                </h2>
                <p class="leading-relaxed dark:text-gray-300">
                  Collaborated Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  return (
    <div className="mb-40" id="stat">
      <section class="text-gray-600 body-font">
        <div class="container px-20 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900 dark:text-gray-300">
                Leetcode Stats
              </h1>
              <div class="leading-relaxed dark text-gray-300">
                Consistency is the key for improvement.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                {post.totalSolved}
              </h2>
              <p class="leading-relaxed dark:text-gray-300">
                Total Problems Solved
              </p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                {post.acceptanceRate}
              </h2>
              <p class="leading-relaxed dark:text-gray-300">Acceptance Rate</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                {post.ranking}
              </h2>
              <p class="leading-relaxed dark:text-gray-300">Global Ranking</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                {post.contributionPoints}
              </h2>
              <p class="leading-relaxed dark:text-gray-300">
                Contribution Points
              </p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src={stat}
              alt="stats"
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-20 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
              Github Stats
            </h1>
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <span class="inline-block h-1 w-60 rounded bg-pink-500 "></span>
            </div>
          </div>

          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:bg-gray-900 dark:border-gray-900">
                <img
                  class="inline-block mb-3"
                  style={{ height: "50px", color: "white", width: "auto" }}
                  alt=""
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-project-computer-programming-flaticons-lineal-color-flat-icons.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  82+
                </h2>
                <p class="leading-relaxed dark:text-gray-300">Repositories</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:bg-gray-900 dark:border-gray-900">
                <img
                  alt=""
                  class="inline-block mb-3"
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-project-design-thinking-phatplus-lineal-color-phatplus-2.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  40
                </h2>
                <p class="leading-relaxed dark:text-gray-300">Mini Projects</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:bg-gray-900 dark:border-gray-900">
                <img
                  class="inline-block mb-3"
                  alt=""
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-contribution-achievements-flaticons-lineal-color-flat-icons-2.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  800+
                </h2>
                <p class="leading-relaxed dark:text-gray-300">Contributions</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg dark:bg-gray-900 dark:border-gray-900">
                <img
                  alt=""
                  class="inline-block mb-3"
                  style={{ height: "50px", color: "white", width: "auto" }}
                  src="https://img.icons8.com/color/48/000000/collaboration.png"
                />
                <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-300">
                  20+
                </h2>
                <p class="leading-relaxed dark:text-gray-300">
                  Collaborated Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
