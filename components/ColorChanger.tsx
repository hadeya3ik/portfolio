'use client'
import React, { useRef, useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltWaningCrescent3 } from "react-icons/wi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { WiMoonFull } from "react-icons/wi";

interface ColorChangerProps {
  colorIndex: number;
  handleThemeChange: () => void;
}

const ColorChanger = ({colorIndex, handleThemeChange} : ColorChangerProps) => {
  return (<div
    className="flex justify-center items-center p-1  w-[40px] h-[40px] border-accent text-accent rounded-full cursor-pointer z-50" 
    onClick={handleThemeChange} >
    {React.createElement(colorPairs[colorIndex].icon, { size: 30 },)}
  </div>)
}

const colorPairs = [
  { 
    icon: WiMoonFull,
  },
  { 
    icon: WiMoonAltWaningCrescent3,
  },
  { 
    icon: WiMoonAltThirdQuarter,
  },
  { 
    icon: WiMoonAltWaxingCrescent3,
  },
  { 
    icon: WiMoonAltFull,
  },
];

export default ColorChanger;
