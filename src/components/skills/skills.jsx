import './skills.css'
import { SiApachespark } from "react-icons/si";
import GrainyBackground from '../grain_gradient/grainyBackground';

function Job({year, title, company}) {
  return (
    <div className="job">
      <div className='bullet'>
        <SiApachespark className='icon' size={30} />
        <h3 className="year bold_mini">{year}</h3>
      </div>
      <div className="details">
        <h4 className="job_title">{title}</h4>
        <p className="paragraph_style">{company}</p>
      </div>
    </div>)
}

function skills() {
  return (
    <>
      <GrainyBackground />
    <div className="skills_container">
      <div className="tech_skills_container">
        <h4 className='bold_mini sub_header'>SKILLS</h4>
        <div className="box">
          <h2 className="skill">C/C++</h2>
          <h2 className="skill">Python</h2>
          <h2 className="skill">Javascript</h2>
          <h2 className="skill">Bash</h2>
        </div>
        <div className="box">
          <h2 className="skill">HTML/CSS</h2>
          <h2 className="skill">R</h2>
          <h2 className="skill">React.js</h2>
          <h2 className="skill">Node.js</h2>
        </div>
        <div className="box">
          <h2 className="skill">Figma</h2>
          <h2 className="skill">Adobe</h2>
        </div>
      </div>
      
      <div className="experience">
      <h4 className='bold_mini sub_header'>EXPERIENCE</h4>
        <Job year="2023" title="juniour Technical Analyst" company="Ontario Ministry of Transportation"/>
        <Job year="2022" title="instructional support assitant" company="University of Waterloo"/>
        <Job year="2019" title="summer camp leader" company="Town of Milton"/>
      </div>
    </div>
    </>
  )
}

export default skills