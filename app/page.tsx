'use client'
import Cards from "@/components/Cards";
import HoverCards from "@/components/HoverCards";
import MagneticButtons from "@/components/MagneticButtons";
import React, {useRef, useEffect} from 'react'
import Works from "@/components/Works";
import VerticalSlider from "@/components/VerticalSlider";
import NavBar from "@/components/NavBar";
import ColorChanger from "@/components/ColorChanger";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
    <main className="bg-primary transition-colors duration-1000">
      <NavBar/>
      <ColorChanger/>
      <Hero/>
      <MagneticButtons/>
      <VerticalSlider/>
      <Works/>
      <HoverCards/>
      <div className="h-screen"></div>
      <Footer/>

    </main></ReactLenis>
  );
}

