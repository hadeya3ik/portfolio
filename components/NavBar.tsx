'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';

const NavBar: React.FC = () => {
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
  className='sticky top-0 flex text-2xl justify-between px-8 py-4 text-accent'
  variants={{
    visible: { y: 0 },
    hidden: { y: '-100%' },
    initial: { 
      y: '-100%',
    },
  }}
  initial="initial"
  animate={hiddenNav ? 'hidden' : 'visible'}
  transition={{ duration: 0.8, ease: 'easeInOut' }} 
>
  <div className='border-4 border-accent px-8 py-2 rounded-[50%]'>
    <p className='text-accent'>HDY</p>
  </div>

  <div className='flex gap-4 '>
    <Link href="/about">ABOUT</Link>
    <Link href="/about">CONTACT</Link>
  </div>
</motion.nav>
  );
}

export default NavBar;
