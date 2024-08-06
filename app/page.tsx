'use client'
import Cards from "@/components/Cards";
import HoverCards from "@/components/HoverCards";
import MagneticButtons from "@/components/MagneticButtons";
import React, { useEffect, useRef } from 'react'
import Works from "@/components/Works";
import VerticalSlider from "@/components/VerticalSlider";
import NavBar from "@/components/NavBar";
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion'
import ColorChanger from "@/components/ColorChanger";

export default function Home() {
  const primary = useMotionValue('102 65 169')
  const background = useMotionTemplate`rgb(${primary})`
  const verticalSliderRef = useRef<HTMLDivElement>(null);

  function ChangCol(e: React.MouseEvent<HTMLButtonElement>) {
    const color = e.currentTarget.getAttribute('data-color') as string
    const root = document.documentElement
    root.style.setProperty('--primary', color)
    animate(primary, color, { duration: 1 })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(primary, '255 255 255', { duration: 1 }); // Change to white when VerticalSlider is in view
        } else {
          animate(primary, '102 65 169', { duration: 1 }); // Change back to initial color when VerticalSlider is not in view
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (verticalSliderRef.current) {
      observer.observe(verticalSliderRef.current);
    }

    return () => {
      if (verticalSliderRef.current) {
        observer.unobserve(verticalSliderRef.current);
      }
    };
  }, [primary]);

  return (
    <motion.section style={{ background }}>
        <div className='container'></div>
        <NavBar />
        <ColorChanger/>
        <MagneticButtons />
        <div ref={verticalSliderRef}>
          <VerticalSlider />
        </div>
        <Works />
        <HoverCards />
        <Cards />
    </motion.section>
  );
}
