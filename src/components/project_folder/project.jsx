import './project.css'
import { SiCplusplus } from "react-icons/si";
import MakeProject from './make_project/makeProject.jsx';
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Project() {
  return (
    <div className='cont'>
    <div id="project-cont">
    <h4 className='bold_mini sub_header'>PROJECTS</h4>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry> <div className="filler"></div>
        <MakeProject 
        className="connect_4" 
        title="Connect 4 " 
        text="A simple Connect four Game developed using python, numpy and pygame. Features and option to play both multiplayer and single-player modes, along with customizable difficulty levels for the AI bot  developed using the Alpha-Beta and Minimax algorithms. "
        techIcons={[FaPython, SiNumpy]}
        link="https://github.com/hadeya3ik/Connect-4"
      />
      <MakeProject 
        className="baking_horizon" 
        title="Baking Horizon - creator" 
        text="Baking Horizon is a web application made for a small business, featuring an engaging, interactive gallery with a responsive U/I. This project, developed using React, includes efficient back-end scripts for media management."
        techIcons={[FaReact, SiGnubash]}
        link="https://github.com/hadeya3ik/bakingHorizon"
      />
      <MakeProject 
        className="catan" 
        title="Catan" 
        text="Created a Catan-inspired board game using C++ in a Linux environment. The game employs the MVC architectural pattern."
        techIcons={[SiCplusplus, SiGnubash]}
        link="https://github.com/hadeya3ik/Catan"
      />
      <MakeProject 
        className="hangman" 
        title="Hangman" 
        text="Developed a text-based 'Hangman' game in C, designed to run in the terminal on Linux systems. "
        techIcons={[SiCsharp]} 
        link="https://github.com/hadeya3ik/Hangman"
      />
      <MakeProject 
        className="pixel_sketch" 
        title="Pixel-Sketch" 
        text="Utilized HTML, CSS, and vanilla JavaScript to develop a web-based drawing application that allows users to create pixel art in a simple manner. "
        techIcons={[FaHtml5, IoLogoJavascript]}
        link="https://github.com/hadeya3ik/pixel-draw"
      />    
      <MakeProject 
        className="portfolio" 
        title="Portfolio Website" 
        text="Personal Portfolio to showcase my personal projects, built using React.js."
        techIcons={[FaReact, IoLogoJavascript]}
        link="https://github.com/hadeya3ik/portfolio"
      />             
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </ div>
  );
}

export default Project