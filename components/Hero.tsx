'use client';
import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';
import ColorChanger from "@/components/ColorChanger"; 
import dynamic from 'next/dynamic';

const DynamicClock = dynamic(() => import('@/components/Clock'), { ssr: false });

interface ColorChangerProps {
  setPrimary: React.Dispatch<React.SetStateAction<string>>;
  setSecondary: React.Dispatch<React.SetStateAction<string>>;
  setPrimaryForeground: React.Dispatch<React.SetStateAction<string>>;
  setSecondaryForeground: React.Dispatch<React.SetStateAction<string>>;
}

function MovingIcon() {
  const time = useTime();
  const rotate = useTransform(time, [0, 8000], [0, 360], { clamp: false });

  return (<div className='h-[200px] flex items-center justify-center'>
  <motion.svg 
    width="90" 
    height="90" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ rotate }}
    className="text-primary-foreground">
    <path 
      d="M24.2496 12.0972L33.2521 7.94607L28.4894 16.6405L28.2107 17.1491L28.7549 17.3498L38.0559 20.7802L28.5403 23.5603L27.9836 23.723L28.2264 24.2496L32.3776 33.2521L23.6832 28.4894L23.1745 28.2107L22.9738 28.7549L19.5435 38.0559L16.7633 28.5402L16.6007 27.9836L16.074 28.2264L7.07158 32.3776L11.8343 23.6832L12.1129 23.1745L11.5688 22.9738L2.26778 19.5435L11.7834 16.7633L12.3401 16.6007L12.0972 16.074L7.94607 7.07158L16.6405 11.8343L17.1491 12.1129L17.3498 11.5688L20.7802 2.26778L23.5603 11.7834L23.723 12.3401L24.2496 12.0972Z"
      className="fill-current" 
      strokeWidth="2"
    />
  </motion.svg>
</div>)
}

const Hero : React.FC<ColorChangerProps> = (props) => {
  return (
    <div className='h-screen flex flex-col justify-start items-center text-2xl gap-8'>
      <div className='self-end px-8'>
        <ColorChanger {...props}/>
      </div>
      <div className='w-full text-[17vw] mb-10 leading-none uppercase flex flex-col'>
        <h1 className='self-start'>Hadeya</h1>
        <div className='flex self-end items-center gap-8'>
          <MovingIcon/>
          <h1 className=''>Ikram</h1>
        </div>
      </div>
      <div className='flex w-full justify-between px-8'>
        <div className="w-[40vw] flex items-center gap-2 whitespace-nowrap">
          <h1>Creative Developer</h1>
          <hr className="w-full my-4 border-t-2 border-gray-300" />
          <h1>UX UI Designer</h1>
        </div>
        <DynamicClock/>
      </div>
    </div>
  );
}

export default Hero;

