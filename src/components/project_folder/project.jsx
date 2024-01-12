import './project.css'
import { SiCplusplus } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";
import MakeProject from './make_project/makeProject.jsx';
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";

function Project() {
  return (
    <>
    <div id="project-cont">
    <div id="project" className="baking_horizon">
      <div className="project_bar">
        <FaRegCircle className='mini_button' />
        <FaRegCircle className='mini_button' />
      </div>
      <div className="content">
        <h2 className='project_title bold_mini'>Baking Horizon - creator</h2>
        <hr></hr>
        <p className='project_description paragraph_mini'>Horizon is a web application made for a small business, featuring an engaging, interactive gallery with a responsive U/I. This project, developed using React, includes efficient back-end scripts for media management.</p>
        <div className="project_footer">
          <div className="techstack">
            <FaReact size={40}/>
            <SiGnubash size={40}/>
          </div>
          <div className="">
            <button className="github_link">
              View Code
            </button>
            <button className="github_link">
              Visit Site
            </button>
          </div>
        </div>
      </div>
    </div>

      <MakeProject 
        className="catan" 
        title="Catan" 
        text="Created a Catan-inspired board game using C++ in a Linux environment. The game employs the MVC architectural pattern."
        techIcons={[SiCplusplus, SiGnubash]}
      />

      <MakeProject 
        className="connect_4" 
        title="Connect 4 " 
        text="A simple Connect four Game developed using python, numpy and pygame. Features and option to play both multiplayer and single-player modes, along with customizable difficulty levels for the AI bot  developed using the Alpha-Beta and Minimax algorithms. "
        techIcons={[FaPython, SiNumpy]}
      />

      <MakeProject 
        className="pixel_sketch" 
        title="Pixel-Sketch" 
        text="Utilized HTML, CSS, and vanilla JavaScript to develop a web-based drawing application that allows users to create pixel art in a simple manner. "
        techIcons={[IoLogoJavascript, FaHtml5, MdOutlineCss]}
      />

      <MakeProject 
        className="hangman" 
        title="Hangman" 
        text="Developed a text-based 'Hangman' game in C, designed to run in the terminal on Linux systems. "
        techIcons={[SiCsharp]} 
      />
      </div>
    </>
  );
}

export default Project