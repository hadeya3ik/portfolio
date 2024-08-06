import Cards from "@/components/Cards";
import HoverCards from "@/components/HoverCards";
import MagneticButtons from "@/components/MagneticButtons";
import React from 'react'
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="">
      <MagneticButtons/>
      <Works/>
      <HoverCards/>
      <Cards/>
    </main>
  );
}

