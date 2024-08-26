'use client';
import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const motionPrimary = useMotionValue(colorPairs[colorIndex].primary);
  const background = useMotionTemplate`rgb(${motionPrimary})`;
  const skillsDiv = useRef<HTMLDivElement>(null);
  const aboutDiv = useRef<HTMLDivElement>(null);
  const [curPrimary, setCurPrimary] = useState(colorPairs[colorIndex].primary);
  const [curSecondary, setCurSecondary] = useState(colorPairs[colorIndex].secondary);
  const [curAccent, setCurAccent] = useState(colorPairs[colorIndex].accent);

  useEffect(() => {
    const currentSkillsDiv = skillsDiv.current;
    const currentAboutDiv = aboutDiv.current;

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("changing to", curSecondary);
          animate(motionPrimary, curSecondary, { duration: 0.5 });
        } else {
          console.log("changing to", curPrimary);
          animate(motionPrimary, curPrimary, { duration: 0.5 });
        }
      },
      { threshold: 0.5 }
    );

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("changing to", curAccent);
          animate(motionPrimary, curAccent, { duration: 0.5 });
        } else {
          console.log("changing to", curPrimary);
          animate(motionPrimary, curPrimary, { duration: 0.5 });
        }
      },
      { threshold: 0.5 }
    );

    if (currentSkillsDiv) {
      skillsObserver.observe(currentSkillsDiv);
    }

    if (currentAboutDiv) {
      aboutObserver.observe(currentAboutDiv);
    }

    return () => {
      if (currentSkillsDiv) {
        skillsObserver.unobserve(currentSkillsDiv);
      }
      if (currentAboutDiv) {
        aboutObserver.unobserve(currentAboutDiv);
      }
    };
  }, [curPrimary, curSecondary, curAccent, motionPrimary]);

  const handleThemeChange = () => {
    const nextIndex = (colorIndex + 1) % colorPairs.length;
    setColorIndex(nextIndex);
    setCurPrimary(colorPairs[nextIndex].primary);
    setCurSecondary(colorPairs[nextIndex].secondary);
    setCurAccent(colorPairs[nextIndex].accent);
    animate(motionPrimary, colorPairs[nextIndex].primary, { duration: 0.25 });
    console.log("changing to", colorPairs[nextIndex]);
    const primaryForegroundColor = colorPairs[nextIndex].primaryText as string;
    const secondaryForegroundColor = colorPairs[nextIndex].secondaryText as string;
    const accentColor = colorPairs[nextIndex].accent as string;
    const accentForegroundColor = colorPairs[nextIndex].accentText as string;
    const root = document.documentElement;
    root.style.setProperty('--primary-foreground', primaryForegroundColor);
    root.style.setProperty('--secondary-foreground', secondaryForegroundColor);
    root.style.setProperty('--accent', accentColor);
    root.style.setProperty('--accent-foreground', accentForegroundColor);
  };

  return (
    <ReactLenis root>
      <motion.section style={{ background }} className="transition-colors duration-100">
        <NavBar colorIndex={colorIndex} handleThemeChange={handleThemeChange}/>
        <Hero />
        <div ref={aboutDiv}>
          <About/>
        </div>
        <div ref={skillsDiv}>
          <Skills />
        </div>
        <div className="pb-40">
          <Works />
        </div>
        <Footer />
      </motion.section>
    </ReactLenis>
  );
}

const colorPairs = [
  { 
    primary: "18 17 17", 
    primaryText: "243 242 231", 
    secondary: "37 37 37",
    secondaryText: "232 230 209", 
    accent: "239 243 231", 
    accentText: "18 17 17", 
  },
  { 
    primary: "36, 39, 40", 
    primaryText: "80 113 217", 
    secondary: "80 113 217",
    secondaryText: "28 28 26", 
    accent: "235 244 145", 
    accentText: "28 28 26", 
  },
  { 
    primary: "227 188 189", 
    primaryText: "244 102 93", 
    secondary: "246 128 149",
    secondaryText: "235 234 234", 
    accent: "228 69 38", 
    accentText: "235 234 234", 
  },
  { 
    primary: "60 78 52", 
    primaryText: "222 218 228", 
    secondary: "158 196 117",
    secondaryText: "49 54 38", 
    accent: "160 174 208", 
    accentText: "86 84 81", 
  },
  { 
    primary: "232 227 215", 
    primaryText: "245 109 50", 
    secondary: "245 109 50",
    secondaryText: "232 227 215", 
    accent: "88 108 244", 
    accentText: "255 255 255", 
  },
];
