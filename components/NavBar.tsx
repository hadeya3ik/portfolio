'use client'
import React, {useState, useEffect} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import Logo from '@/app/Subtract.svg'
import Page from '@/app/about/page'
import Link from 'next/link'

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
        className='sticky top-0 bg-primary flex justify-between transition-colors duration-1000 px-8 py-2'
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hiddenNav ? "hidden" : "visible"}
        transition={{duration:0.35, ease:"easeInOut"}}>
        <Logo height="40px" className="text-primary-foreground" />
        <div className='flex gap-4'>
          <Link href="/about">ABOUT US</Link>
          <Link href="/about">CONTACT</Link>
        </div>
        
    </motion.nav>
  )
}

export default NavBar