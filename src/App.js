import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";


export default function App() {
  return (
    <main className="text-sky-200 body-font bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}


