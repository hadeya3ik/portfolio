'use client';

import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import VerticalSlider from "@/components/VerticalSlider";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';
import ColorChanger from "@/components/ColorChanger";

export default function Home() {
  const [primary, setPrimary] = useState("152 169 151"); 
  const [primaryForeground, setPrimaryForeground] = useState("152 169 151"); 
  const [secondary, setSecondary] = useState("208 209 199");
  const [secondaryForeground, setSecondaryForeground] = useState("152 169 151"); 

  const motionPrimary = useMotionValue(primary);
  const background = useMotionTemplate`rgb(${motionPrimary})`;
  const colChangeDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const primaryColorValue = getComputedStyle(root).getPropertyValue('--primary').trim();
    const secondaryColorValue = getComputedStyle(root).getPropertyValue('--secondary').trim();
    setPrimary(primaryColorValue || "152 169 151");
    setPrimaryForeground(primaryColorValue || "152 169 151");
    setSecondary(secondaryColorValue || "208 209 199");
    setSecondaryForeground(secondaryColorValue || "208 209 199");
  }, []);

  useEffect(() => {
    motionPrimary.set(primary);
  }, [primary, motionPrimary]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(motionPrimary, secondary, { duration: 1 });
        } else {
          animate(motionPrimary, primary, { duration: 1 });
        }
      },
      { threshold: 0.5 }
    );

    if (colChangeDiv.current) {
      observer.observe(colChangeDiv.current);
    }

    return () => {
      if (colChangeDiv.current) {
        observer.unobserve(colChangeDiv.current);
      }
    };
  }, [motionPrimary, primary, secondary]);

  return (
    <ReactLenis root>
      <motion.section style={{ background }}>
        <NavBar />
        <Hero setPrimary={setPrimary} setSecondary={setSecondary}  setPrimaryForeground={setPrimaryForeground}  setSecondaryForeground={setSecondaryForeground}/>
        <div ref={colChangeDiv}>
          <Skills />
        </div>
        <Works />
        <Footer />
      </motion.section>
    </ReactLenis>
  );
}
