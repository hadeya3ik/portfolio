'use client';
import React, { ReactNode, useRef } from 'react';
import Magnetic from '@/common/Magnetic';
import { motion, useInView } from 'framer-motion';
import { RandomMaskedText } from './RandomMaskedTex';
import pic1 from '@/images/Works/Frame 139.jpg'
import pic2 from '@/images/Works/bedroom.jpg'
import pic3 from '@/images/Works//help.png'
import pic4 from '@/images/Works/smile.png'
import Image from 'next/image';


function Skills() {
  return (
    <div
      className="flex flex-col items-center justify-center text-secondary-foreground">
      <div className="p-20 flex justify-center text-7xl sm:text-[10vw] mb-10 whitespace-nowrap flex-wrap leading-none text-center uppercase max-w-3xl ">
        <div className='flex'>
          <RandomMaskedText className='pr-16' >{["MY"]}</RandomMaskedText>
          <RandomMaskedText>{["WORKS"]}</RandomMaskedText>
        </div>
      </div>
      
      <div className="w-screen h-screen relative">
       <Magnetic>
          <Image src={pic1} alt=""  width={300} height={300} className="absolute left-[60%] top-[40%]" />
       </Magnetic>
       <Magnetic>
        <Image src={pic2} alt="" width={300} height={300} className="absolute left-[5%] top-[55%]" />
       </Magnetic>
       <Magnetic>
        <Image src={pic3} alt="" width={225} height={225} className="absolute left-[35%] top-0"/>
       </Magnetic>
       <Image src={pic4} alt="" width={250} height={250} className="absolute left-[5%] top-[10%]"/>
      </div>
    </div>
  );
}


export default Skills;