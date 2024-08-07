'use client'
import Skills from "@/components/Skills";
import React, {useRef, useEffect} from 'react'
import Works from "@/components/Works";
import NavBar from "@/components/NavBar";
import VerticalSlider from "@/components/VerticalSlider";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {
  return (
    <ReactLenis root>
      <main className="bg-primary text-primary-foreground transition-colors duration-1000">
        <NavBar/>
        <Hero/>
        <Skills/>
        <Works/>
        <Footer/>
        
      </main>
    </ReactLenis>
  );
}



// <div className="h-[200vh] border-8 border-green-500">
//           <div className="h-[1000px] sticky top-0 flex flex-col gap-20 border-red-500 border-8">
//             <div>
//               <div className="static sticky w-full h-[100px] border-8 border-purple-500"></div>
              
//               <div className="static sticky  w-full h-[100px] border-4 border-blue-500"></div>
//             </div>
//           </div>
//         </div>

