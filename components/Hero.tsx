'use client';
import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';
import ColorChanger from "@/components/ColorChanger"; 

function Hero() {
  const time = useTime();
  const rotate = useTransform(time, [0, 8000], [0, 360], { clamp: false });

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <ColorChanger/>
        <h1>CREATIVE DEVELOPER</h1>
        <h1>UX UI DESIGNER</h1>
      <h1 className='text-9xl mb-10'>HADEYA IKRAM</h1>
      <div className='h-[200px] flex items-center justify-center'>
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
      </div>
    </div>
  );
}

export default Hero;

