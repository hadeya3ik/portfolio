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
  },
  { 
    icon: PiShootingStar,
  },
  { 
    icon: PiPlanet,
  },
  { 
    icon: PiCactus,
  },
  { 
    icon: PiTreePalm,
  },
];

export default ColorChanger;
