'use client';

import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';


export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const motionPrimary = useMotionValue(colorPairs[colorIndex].primary);
  const background = useMotionTemplate`rgb(${motionPrimary})`;
  const colChangeDiv = useRef<HTMLDivElement>(null);

  const [curPrimary, setCurPrimary] = useState(colorPairs[colorIndex].primary);
  const [curSecondary, setCurSecondary] = useState(colorPairs[colorIndex].secondary);

  useEffect(() => {
    const currentDiv = colChangeDiv.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("changing to", curSecondary);
          animate(motionPrimary, curSecondary, { duration: 0.5 });
        } else if (!entry.isIntersecting) {
          console.log("changing to", curPrimary);
          animate(motionPrimary, curPrimary, { duration: 0.5 });
        }
      },
      { threshold: 0.5 }
    );

    if (currentDiv) {
      observer.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  }, [curPrimary, curSecondary, motionPrimary]);

  const handleThemeChange = () => {
    const nextIndex = (colorIndex + 1) % colorPairs.length;
    setColorIndex(nextIndex);
    setCurPrimary(colorPairs[nextIndex].primary);
    setCurSecondary(colorPairs[nextIndex].secondary);
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
        <div ref={colChangeDiv}>
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
    secondary: "58 56 56",
    secondaryText: "243 242 231", 
    accent: "122 130 125", 
    accentText: "243 242 231", 
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
