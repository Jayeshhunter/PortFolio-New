import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Skill from "./skills/Skills";
import WorkExp from "./workExperience/WorkExp";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
function MainPage() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Skill />
        <WorkExp />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default MainPage;
