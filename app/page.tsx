import Cards from "@/components/Cards";
import HoverCards from "@/components/HoverCards";
import MagneticButtons from "@/components/MagneticButtons";
import React from 'react'
import Works from "@/components/Works";
import VerticalSlider from "@/components/VerticalSlider";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <MagneticButtons/>
      <VerticalSlider/>
      <Works/>
      <HoverCards/>
      <Cards/>
    </main>
  );
}

