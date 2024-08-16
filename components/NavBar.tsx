'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import ColorChanger from './ColorChanger';

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
    if (latest > previous) {
      setHiddenNav(true);
    } else {
      setHiddenNav(false);
    }
    setPreviousScrollYProgress(latest);
  });


  return (
    <motion.nav
      className='sticky top-0 flex text-2xl justify-between px-8 py-1 sm:py-4 text-accent z-50'
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

    <div onClick={scrollToTop} className='cursor-pointer bg-accent px-4 py-2 rounded-[50%]'>
      <p className='text-sm text-accent-foreground uppercase font-bold'>Hadeya</p>
    </div>

    <div className='flex gap-4 cursor-pointer items-center'>
      <Link href="mailto:h3ikram@uwaterloo.ca">CONTACT</Link>
      <ColorChanger colorIndex={colorIndex} handleThemeChange={handleThemeChange}></ColorChanger>
    </div>
    </motion.nav>
  );
}

export default NavBar;
