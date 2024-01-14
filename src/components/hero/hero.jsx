import { useState, useEffect, useContext } from 'react';
import "./hero.css";
import profile from "./../../images/profile_pic.jpg";
import dark_profile from "./../../images/dark_dp.svg";
import light_profile from "./../../images/light_dp.svg";
import { FaSearch } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import ModeContext from './../../pages/modeContext';

function Hero() {
  const [currentLink, setCurrentLink] = useState("");
  const { isDarkMode } = useContext(ModeContext);

  useEffect(() => {
    const typewriterText = document.querySelector(".Typewriter__wrapper");
    const observer = new MutationObserver(() => {
      if (typewriterText.textContent.includes('github.com/hadeya3ik')) {
        setCurrentLink("https://github.com/hadeya3ik?tab=repositories");
      } else if (typewriterText.textContent.includes('linkedin.com/hadeya-ikram')) {
        setCurrentLink("https://www.linkedin.com/in/hadeya-ikram-23197622a/");
      }
    });

    observer.observe(typewriterText, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero">
      <img id="dp" src={isDarkMode ? dark_profile : light_profile}  alt="Profile"></img>
      {/* <img id="dp" src={dark_profile}  alt="Profile"></img> */}
      <div className="hero_text">
        <h1 className="bold_style">hi, I'm Hadeya</h1>
        <p className="paragraph_style">
        I enjoy finding ways to combine my creative side with the tech world. I enjoy using my creativity and problem-solving skills to create digital experiences. Whether it's through a striking piece of mixed media art or a clever bit of coding, I'm all about finding the spot where imagination meets innovation.
        </p>
        <div>
          <a className="linkdin_button" href={currentLink} target="_blank" rel="noopener noreferrer">
            <FaSearch className="search_icon" size={30} />
            <Typewriter
              options={{
                strings: ['linkedin.com/hadeya-ikram', 'github.com/hadeya3ik'],
                autoStart: true,
                loop: true,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;