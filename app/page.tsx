'use client'

import Skills from "@/components/Skills";
import React, { useRef, useEffect, useState } from 'react';
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import VerticalSlider from "@/components/VerticalSlider";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react';

export default function Home() {
  const skillsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.0001, // Adjust this threshold as needed
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsRef]);

  return (
    <ReactLenis root>
      <main className="bg-primary text-primary-foreground transition-colors duration-1000">
        <NavBar />
        <Hero />
        <div
          ref={skillsRef}
          className={`transition-colors duration-1000 ${
            inView ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
          }`}>
          <Skills />
        </div>
        <Works />
        <Footer />
      </main>
    </ReactLenis>
  );
}
