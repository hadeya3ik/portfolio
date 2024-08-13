'use client';
import React, { ReactNode, useRef } from 'react';
import Magnetic from '@/common/Magnetic';
import { motion, useInView } from 'framer-motion';

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
        className="border-4 px-4 py-2 h-min cursor-pointer rounded-full border-secondary-foreground">
        <p className="font-notoSerif text-nowrap italic text-xl">{children}</p>
      </motion.div>
    </Magnetic>
  );
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // triggers when 50% of the component is in view

  return (
    <div
      ref={ref}
      className="h-[150vh] flex flex-col items-center justify-center text-secondary-foreground"
    >
      <h1 className="text-[10vw] mb-10 leading-none text-center uppercase max-w-3xl">
        Areas of Expertise
      </h1>
      <div className="w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center max-w-4xl mx-auto gap-2"
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
  { title: 'Nextjs' },
  { title: 'Reactjs' },
  { title: 'Nodejs' },
  { title: 'Expressjs' },
  { title: 'Illustrator' },
  { title: 'Figma' },
  { title: 'Blender' },
  { title: 'Prototyping' },
  { title: 'C++' },
  { title: 'C' },
  { title: 'Python' },
  { title: 'JavaScript' },
  { title: 'R' },
  { title: 'Bash' },
  { title: 'MatLab' },
];

export default Skills;
