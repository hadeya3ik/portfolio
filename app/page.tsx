'use client';

import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Home() {
  const [primary, setPrimary] = useState("152 169 151"); 
  const [primaryForeground, setPrimaryForeground] = useState("152 169 151"); 
  const [secondary, setSecondary] = useState("208 209 199");
  const [secondaryForeground, setSecondaryForeground] = useState("152 169 151"); 
  const motionPrimary = useMotionValue(primary);
  const motionSecondary = useMotionValue(secondary);
  const background = useMotionTemplate`rgb(${motionPrimary})`;
  const colChangeDiv = useRef<HTMLDivElement>(null);

  const colorChangerProps = { setPrimary, setSecondary, setPrimaryForeground, setSecondaryForeground };

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
    motionSecondary.set(secondary);
  }, [secondary, motionSecondary]);

  useEffect(() => {
    const currentDiv = colChangeDiv.current;
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

    if (currentDiv) {
      observer.observe(currentDiv);
    }

    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  }, [motionPrimary, primary, secondary]);

  return (
    <ReactLenis root>
      <motion.section style={{ background }}>
        <NavBar />
        <Hero {...colorChangerProps} />
        <div ref={colChangeDiv}>
          <Skills />
        </div>
        <Works />
        <Footer />
      </motion.section>
    </ReactLenis>
  );
}
