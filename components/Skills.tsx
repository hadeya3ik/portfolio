'use client';
import React, { ReactNode, useRef } from 'react';
import Magnetic from '@/common/Magnetic';
import { motion, useInView } from 'framer-motion';
import { RandomMaskedText } from './RandomMaskedTex';

interface CustomButtonProps {
  children: ReactNode;
}

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1
    }
  }
};

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return (
    <Magnetic>
      <motion.div
        variants={item}
        className="border-4 px-4 py-2 h-min cursor-pointer bg-accent mix-blend-hard-light rounded-full text-accent-foreground border-accent-foreground">
        <p className="text-nowrap font-semibold italic  text-2xl sm:text-3xl md:text-4xl">{children}</p>
      </motion.div>
    </Magnetic>
  );
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="h-[150vh] flex flex-col items-center justify-center text-secondary-foreground">
      <div className="p-20 flex justify-center text-7xl sm:text-[10vw] mb-10 whitespace-nowrap flex-wrap leading-none text-center uppercase max-w-3xl ">
        <div className='flex'>
          <RandomMaskedText className='pr-16' >{["MY"]}</RandomMaskedText>
          <RandomMaskedText>{["SKILLS"]}</RandomMaskedText>
        </div>
      </div>
      <div className="w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center max-w-4xl mx-auto gap-2 px-2"
        >
          {frameworks.map((item, id) => (
            <CustomButton key={id}>{item.title}</CustomButton>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const frameworks = [
  { title: 'Python' },
  { title: 'R' },
  { title: 'Bash' },
  { title: 'MatLab' },
  { title: 'C++' },
  { title: 'C' },
  { title: 'HTML/CSS' },
  { title: 'Nextjs' },
  { title: 'Reactjs' },
  { title: 'Nodejs' },
  { title: 'Expressjs' },
  { title: 'TypeScript' },
  { title: 'Illustrator' },
  { title: 'Figma' },
  { title: 'Blender' },
];

export default Skills;