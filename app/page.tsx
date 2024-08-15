'use client';

import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';

import { PiButterfly } from "react-icons/pi";
import { PiShootingStar } from "react-icons/pi";
import { PiPlanet } from "react-icons/pi";
import { PiCactus } from "react-icons/pi";
import { PiTreePalm } from "react-icons/pi";


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
        <NavBar />
        <div
          className="mr-8 absolute right-0 flex-end w-min border-4 p-4 border-accent text-accent rounded-full cursor-pointer z-50" 
          onClick={handleThemeChange} >
          {React.createElement(colorPairs[colorIndex].icon, { size: 30 },)}
        </div>
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
    icon: PiButterfly,
    primary: "36, 39, 40", 
    primaryText: "80 113 217", 
    secondary: "80 113 217",
    secondaryText: "28 28 26", 
    accent: "235 244 145", 
    accentText: "28 28 26", 
  },
  { 
    icon: PiShootingStar,
    primary: "223 205 188", 
    primaryText: "61 53 55", 
    secondary: "243 242 231",
    secondaryText: "140 131 110", 
    accent: "42 59 205", 
    accentText: "243 242 231", 
  },
  { 
    icon: PiPlanet,
    primary: "60 78 52", 
    primaryText: "222 218 228", 
    secondary: "158 196 117",
    secondaryText: "49 54 38", 
    accent: "160 174 208", 
    accentText: "86 84 81", 
  },
  { 
    icon: PiCactus,
    primary: "232 227 215", 
    primaryText: "245 109 50", 
    secondary: "245 109 50",
    secondaryText: "232 227 215", 
    accent: "88 108 244", 
    accentText: "255 255 255", 
  },
  { 
    icon: PiTreePalm,
    primary: "18 17 17", 
    primaryText: "243 242 231", 
    secondary: "243 242 231",
    secondaryText:"18 17 17", 
    accent: "58 56 56", 
    accentText: "243 242 231", 
  },
];
