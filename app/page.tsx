'use client'

import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import VerticalSlider from "@/components/VerticalSlider";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion'

export default function Home() {
  const [primary, setPrimary] = useState("102 65 169"); 
  const [secondary, setSecondary] = useState("255 255 255");
  const motionPrimary = useMotionValue(primary);
  const background = useMotionTemplate`rgb(${motionPrimary})`;
  const colChangeDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const primaryColorValue = getComputedStyle(root).getPropertyValue('--primary').trim();
    const secondaryColorValue = getComputedStyle(root).getPropertyValue('--secondary').trim();
    setPrimary(primaryColorValue || "102 65 169");
    setSecondary(secondaryColorValue || "255 255 255");
  }, []);

  useEffect(() => {
    motionPrimary.set(primary);
  }, [primary, motionPrimary]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(motionPrimary, secondary, { duration: 1 }); // Change to secondary color when colChangeDiv is in view
        } else {
          animate(motionPrimary, primary, { duration: 1 }); // Change back to initial color when colChangeDiv is not in view
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
      {/* <main className="bg-primary text-primary-foreground transition-colors duration-1000"> */}
      <motion.section style={{ background }}>
        <NavBar />
        <Hero />
        <div ref={colChangeDiv}>
          <Skills />
        </div>
        <Works />
        <Footer />
      </motion.section>
      {/* </main> */}
    </ReactLenis>
  );
}
