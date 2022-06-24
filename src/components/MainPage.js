import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Skill from "./skills/Skills";
import Project from "./project/Project";
import WorkExp from "./workExperience/WorkExp";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Amazon from "./workExperience/Amazon.PNG";
import Netflix from "./workExperience/netflix.PNG";
import Sort from "./workExperience/visual.PNG";
// import Exp from "./experience/Experience";
function MainPage() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <br />
        <Skill />
        <Project
          smallT={"Featured Project"}
          bigT={"Amazon Clone"}
          desc={`Fascinated by the Amazon UI ,this project is a simple clone of original Amazon service
          with limited features using MERN stack developed for
          learning purpose.`}
          arr={["React", "CSS", "JavaScript", "Material UI"]}
          url={Amazon}
          git={"https://github.com/Jayeshhunter/AMAZON-CLONE"}
          str={"yes"}
        />
        <Project
          smallT={"Featured Project"}
          bigT={"Netflix clone"}
          desc={`Having struggled with material,this project is a simple clone of original netflix with
          limited features using MERN stack developed for learning
          purpose which helped me a lot in improving my UI skills.`}
          arr={["React", "CSS", "Javascript", "Material-Ui", "Vercel"]}
          url={Netflix}
          git={"https://github.com/Jayeshhunter/NETFLIX-CLONE"}
          str={"no"}
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
          str={"yes"}
        />
        <WorkExp />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default MainPage;
