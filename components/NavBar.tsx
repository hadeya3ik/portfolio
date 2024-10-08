'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import ColorChanger from './ColorChanger';
import { RollLink } from './RollLink';

interface ColorChangerProps {
  colorIndex: number;
  handleThemeChange: () => void;
}

const NavBar = ({colorIndex, handleThemeChange} : ColorChangerProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const [hiddenNav, setHiddenNav] = useState(false);
  const [previousScrollYProgress, setPreviousScrollYProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = previousScrollYProgress;
    if (latest > previous ) {
      setHiddenNav(true);
    } else {
      setHiddenNav(false);
    }
    setPreviousScrollYProgress(latest);
  });


  return (
    <motion.nav
      className='sticky top-0 flex sm:text-2xl text-base justify-between px-8 py-1 sm:py-4 text-accent z-50'
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
        initial: { 
          y: '-100%',
        },
      }}
      initial="initial"
      animate={hiddenNav ? 'hidden' : 'visible'}
      transition={{ duration: 0.8, ease: 'easeInOut' }} >

    <div onClick={scrollToTop} className='cursor-pointer ]'>
      <p className='text-xl text-primary-foreground whitespace-nowrap'>hadeya ikram</p>
    </div>

    <div className='flex sm:gap-8 gap-2 cursor-pointer items-center'>
        <RollLink href="mailto:h3ikram@uwaterloo.ca">{"CONTACT"}</RollLink>
        <RollLink href="/Projects" openInNewTab={false} >{"PROJECTS"}</RollLink>
      <ColorChanger colorIndex={colorIndex} handleThemeChange={handleThemeChange}></ColorChanger>
    </div>
    </motion.nav>
  );
}

export default NavBar;
