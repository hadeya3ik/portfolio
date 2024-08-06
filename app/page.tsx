import Cards from "@/components/Cards";
import HoverCards from "@/components/HoverCards";
import MagneticButtons from "@/components/MagneticButtons";
import React from 'react'
import Works from "@/components/Works";
import VerticalSlider from "@/components/VerticalSlider";

export default function Home() {
  return (
    <main className="">
      <MagneticButtons/>
      <VerticalSlider/>
      <Works/>
      <HoverCards/>
      <Cards/>
    </main>
  );
}

