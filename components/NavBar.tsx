'use client'
import React, {useState, useEffect} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import Logo from '@/app/Subtract.svg'
function NavBar() {
  const [hiddenNav, setHiddenNav] = useState(false);
  const [previousScrollYProgress, setPreviousScrollYProgress] = useState(0);
  const {scrollYProgress} = useScroll();
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const previous = previousScrollYProgress;
        if (latest > previous ) {
          setHiddenNav(true)
        } else {
            setHiddenNav(false)
        }
        setPreviousScrollYProgress(latest);
      });

  return (
    <motion.nav 
        className='sticky top-0 bg-primary transition-colors duration-1000 px-8 py-2'
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hiddenNav ? "hidden" : "visible"}
        transition={{duration:0.35, ease:"easeInOut"}}>
          <Logo height="40px" className="text-primary-foreground" />
    </motion.nav>
  )
}

export default NavBar