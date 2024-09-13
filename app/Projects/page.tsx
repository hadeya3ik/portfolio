'use client'
import React from 'react'
import Link from 'next/link'
import Arrow from '@/images/SVG/arrow 1.svg'
import { RandomMaskedText } from '@/components/RandomMaskedTex'
import { MaskedText } from '@/components/MaskedText'
import Projects from '@/components/Projects'
import {motion} from 'framer-motion'

function page() {
  return (
    <main className='bg-primary text-primary-foreground flex flex-col'>
        <div className='flex justify-between whitespace-nowrap md:flex-row flex-col '>
            <Link href='/' className='flex gap-4 border border-primary-foreground w-min h-min p-4 rounded-full m-4'>
                <div className='h-[1.5rem] sm:h-[2.25rem] sm:text-4xl text-2xl whitespace-nowrap'>
                    <MaskedText>
                        GO BACK
                    </MaskedText>
                </div>
                <motion.div
                    className="h-[1.05rem] sm:h-[2.25rem]"
                    whileHover={{ x: -10 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                    <Arrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current" />
                </motion.div>
            </Link>
            <RandomMaskedText className='self-end p-4 sm:p-12 text-7xl sm:text-[10vw] ' >{["Projects"]}</RandomMaskedText>
        </div>
        <div className="flex flex-col items-center min-h-[80vh] w-full justify-center ">
            <div className='border-b-4 w-full'>
            {
                    projects.map((project, index) => (
                        <Projects key={index} project={project} />
                    ))
                }
            </div>
                
            </div>
    </main>
  )
}

export default page

const projects = [
    {
        title: "SMILE",
        url: "/Smile",
        src: "smile.png",
        linkTitle : "Visit Site",
        href:"https://smileclub.vercel.app/",
        topics:["Web Design", "Development", "Illustrations"], 
        id : "01"
    },
    {
        title: "Modern Walls",
        url: "/ModernWalls",
        src: "nothing_design_studio.png",
        linkTitle : "Visit Site",
        href:"https://studiobrand.vercel.app/", 
        topics:["Web Design", "Development"], 
        id : "02"
    },
    {
        title: "Fitbud",
        url: "/Fitbud",
        src: "fitbud5.png", 
        linkTitle : "View Case Study",
        href:"https://www.hadeyaik.com/Fitbud", 
        topics:["Illustrations", "Case Study"], 
        id : "03"
    },
    {
        title: "Govee",
        url: "/Govee",
        src: "govee1.png", 
        linkTitle : "Visit Site",
        href : "https://govee1.vercel.app/demo",
        topics : ["Web Design", "Development"], 
        id : "04"
    },
    {
        title: "Baking Horizon",
        url: "/BakingHorizon",
        src: "b.png",
        linkTitle : "Visit Site",
        href : "https://www.bakinghorizon.ca/",
        topics : ["Web Design", "Development"], 
        id : "05"
    },
    {
        title: "3D Creations",
        url: "/3DCreations",
        src: "bedroom.jpg",
        linkTitle : "",
        href : "/",
        topics : ["3D Modelling", "Blender"], 
        id : "06"
    },
]