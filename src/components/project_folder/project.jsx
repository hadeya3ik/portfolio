import './project.css'
import { FaRegCircle } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaLinux } from "react-icons/fa";


function MakeProject({title, text}) {
  return (
    <div id="project">
      <FaRegCircle className='mini_button' />
      <FaRegCircle className='mini_button' />
      <div className="content">
        <h2 className='project_title bold_mini'>{title}</h2>
        <p className='project_description paragraph_mini'>${text}</p>
        <div className="project_footer">
          <div className="techstack">
            <SiCplusplus size={40}/> 
            <FaLinux size={40}/>
          </div>
          <button className="github_link">
            View Code
          </button>
        </div>
      </div>
    </div>
  )
}

  function Project() {
    return (
    <>
    <MakeProject 
      title="Catan" 
      text="Created a Catan-inspired board game using C++ in a Linux environment. The game skillfully employs the MVC architectural pattern for streamlined gameplay and utilizes the Decorator Design Pattern for dynamic, captivating enhancements." 
    />

  <MakeProject 
      title="Catan" 
      text="Created a Catan-inspired board game using C++ in a Linux environment. The game skillfully employs the MVC architectural pattern for streamlined gameplay and utilizes the Decorator Design Pattern for dynamic, captivating enhancements." 
    />

    </>)
  }

export default Project