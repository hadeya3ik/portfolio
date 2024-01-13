import './makeProject.css'
import { FaRegCircle } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";


import PropTypes from 'prop-types';

MakeProject.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    techIcons: PropTypes.arrayOf(PropTypes.elementType).isRequired
  };


  function MakeProject({ className, title, text, techIcons, link }) {
    return (
      <div id="project" className={className}>
        <div className="project_bar">
          <FaCircleStop className='mini_button' />
          <FaRegCircle className='mini_button' />
        </div>
        <div className="content">
          <h2 className='project_title bold_mini'>{title}</h2>
          <hr></hr>
          <p className='project_description paragraph_mini'>{text}</p>
          <div className="project_footer">
            <div className="techstack">
              {techIcons.map((Icon, index) => <Icon key={index} size={40} />)}
            </div>
            <a href={link} className="github_link" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default MakeProject;
