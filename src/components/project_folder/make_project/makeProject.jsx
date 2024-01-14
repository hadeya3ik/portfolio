import './makeProject.css'
import { FaRegCircle } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import PropTypes from 'prop-types';

MakeProject.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    techIcons: PropTypes.arrayOf(PropTypes.elementType).isRequired
  };


  function MakeProject({ className, title, text, techIcons, link, visit }) {
    return (
      <div id="project" className={className}>
        <div className="project_bar">
          <FaCircleStop id='mini_button' className='icon' />
          <FaRegCircle id='mini_button' className='icon'/>
        </div>
        <div className="content">
          <h2 className='bold_mini'>{title}</h2>
          <div className="inner_content">
            <p className='paragraph_mini'>{text}</p>
            <div className="project_footer">
              <div className="techstack">
                {techIcons.map((Icon, index) => <Icon key={index} className="icon" size={30} />)}
              </div>
              <div className="link_container">
                {visit !== "none" && (
                <a href={visit} id="web_link" className="visit_link" target="_blank" rel="noopener noreferrer">
                  <FaLink className="icon" size={20} />
                </a>)}
                <a href={link} className="github_link" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default MakeProject;
