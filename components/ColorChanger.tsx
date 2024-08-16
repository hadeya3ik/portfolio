'use client'
import React, { useRef, useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';
import { PiButterfly } from "react-icons/pi";
import { PiShootingStar } from "react-icons/pi";
import { PiPlanet } from "react-icons/pi";
import { PiCactus } from "react-icons/pi";
import { PiTreePalm } from "react-icons/pi";

interface ColorChangerProps {
  colorIndex: number;
  handleThemeChange: () => void;
}

const ColorChanger = ({colorIndex, handleThemeChange} : ColorChangerProps) => {
  return (<div
    className="flex justify-center items-center p-1 border-2 w-[35px] h-[35px] border-accent text-accent rounded-full cursor-pointer z-50" 
    onClick={handleThemeChange} >
    {React.createElement(colorPairs[colorIndex].icon, { size: 30 },)}
  </div>)
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
    secondary: "58 56 56",
    secondaryText: "243 242 231", 
    accent: "58 56 56", 
    accentText: "243 242 231", 
  },
];

export default ColorChanger;
