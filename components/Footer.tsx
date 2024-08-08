import  ParallaxText  from "@/common/ParallaxText";
import React from "react";

const Footer : React.FC = () => {
    return (
      <div className="bg-secondary h-[60vh] relative text-secondary-foreground" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className='fixed h-[60vh] bottom-0'>
          <div className="py-16 border h-full">
          <div className="flex gap-4 pl-12">
              <div className="text-3xl flex flex-col">
                <a href="https://github.com/hadeya3ik">Github</a>
                <a href="https://www.linkedin.com/in/hadeya-ikram-23197622a/">Linkedin</a>            
                <a href="https://dribbble.com/hdyik">Dribble</a>          
              </div>
              <div className="text-3xl">
                <h3>Contact</h3>
                <h3>About</h3>         
              </div>
            </div>
            <div className="font-medium w-full">
                <ParallaxText baseVelocity={3}>h3ikram@uwaterloo.ca</ParallaxText>
            </div>
            <div className="text-3xl pt-4 pl-12">
              <h3>Designed and developed by Hadeya </h3>
              <h3>Lets Make something Great Together</h3>
            </div>
          </div>
            
        </div>
      </div>
    );
  }
export default Footer