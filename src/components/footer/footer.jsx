import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p className='paragraph_style'> Designed and Coded by Hadeya Ikram </p>
      <div className="socials">
        <a href="https://github.com/hadeya3ik" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20}/>
        </a>
        <a href="mailto:h3ikram@uwaterloo.ca">
          <IoMailOutline size={20}/>
        </a>
        <a href="https://www.linkedin.com/in/hadeya-ikram-23197622a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20}/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
