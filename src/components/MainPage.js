import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Skill from "./skills/Skills";
import Project from "./project/Project";
import Exp from "./experience/Exp";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Amazon from "./workExperience/Amazon.PNG";
import Netflix from "./workExperience/netflix.PNG";
import Sort from "./workExperience/visual.PNG";
import Stats from "./stats/Stats";
import Other from "./Other-NoteWorth/Other";
import Testy from "./testimonial/Testy";

function MainPage() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <br />
        <Exp />
        <Skill />
        <Stats />
        <div id="project" className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-300">
            Featured Projects
          </h1>
          <div class="xl:w-1/2 lg:w-3/4 mb-7 w-full mx-auto text-center">
            <span class="inline-block h-1 w-40 rounded bg-pink-500 "></span>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">
            Here are some of the featured projects.
          </p>
        </div>
        <Project
          smallT={"Featured Project"}
          bigT={"Amazon Clone"}
          desc={`Fascinated by the Amazon UI ,this project is a simple clone of original Amazon service
          with limited features using MERN stack developed for
          learning purpose.`}
          arr={["React", "CSS", "JavaScript", "Material UI"]}
          url={Amazon}
          git={"https://github.com/Jayeshhunter/AMAZON-CLONE"}
          str={"no"}
        />
        <Project
          smallT={"Featured Project"}
          bigT={"Netflix clone"}
          desc={`Having struggled with material,this project is a simple clone of original netflix with
          limited features using MERN stack developed for learning
          purpose which helped me a lot in improving my UI skills.`}
          arr={["React", "CSS", "Javascript", "Vercel"]}
          url={Netflix}
          git={"https://github.com/Jayeshhunter/NETFLIX-CLONE"}
          str={"yes"}
        />
        <Project
          smallT={"Featured Project"}
          bigT={"Sorting Visualizer"}
          desc={`Sorting visualizer is a project developed to help beginners
          understand the concepts of sorting in a better way along
          with the code.`}
          arr={["HTML", "CSS", "JavaScript", "NODEJS", "Vercel"]}
          url={Sort}
          git={"https://github.com/Jayeshhunter/Sorting-visualizer"}
          str={"no"}
        />
        {/* <WorkExp /> */}
        <Other />
        <Testy />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default MainPage;
