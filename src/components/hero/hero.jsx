import "./hero.css"
import profile from "./../../images/profile_pic.jpg"
import { FaSearch } from "react-icons/fa";

function hero() {
  return (
    <div id="hero">
      <img id="dp" src={profile}></img>
      <div className="hero_text">
        <h1 className="bold_style">hi im Hadeya</h1>
        <p className="paragraph_style">
          I enjoy finding ways to combine my creative side with the tech world. I enjoy using my creativity and problem-solving skills to create digital experiences. Whether it's through a striking piece of mixed media art or a clever bit of coding, I'm all about finding the spot where imagination meets innovation.
        </p>
        <button className="linkdin_button" href="https://www.linkedin.com/in/hadeya-ikram-23197622a/">
          <FaSearch size={30} /> linkedin.com/hadeya-ikram
        </button>
      </div>
      
    </div>
  )
}

export default hero