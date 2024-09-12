'use client'

import React from 'react'
import Link from 'next/link'
import Arrow from '@/images/SVG/arrow 1.svg'
import { RandomMaskedText } from '@/components/RandomMaskedTex'
import { MaskedText } from '@/components/MaskedText'
import Projects from '@/components/Projects'
import {motion} from 'framer-motion'

const projects = [
    {
        title1: "SMILE",
        src: "nothing_design_studio.png"
    },
    {
        title1: "Modern Walls",
        src: "nothing_design_studio.png"
    },
    {
        title1: "Fitbud",
        src: "fitbud1.png"
    },
    {
        title1: "Govee",
        src: "govee1.png"
    },
    {
        title1: "Baking Horizon",
        src: "bakinghorizon1.png"
    },
]

function page() {
  return (
    <main className='bg-primary text-primary-foreground flex flex-col'>
       <Link href='/' className='flex gap-4 border border-r-primary-foreground w-min p-4 rounded-full m-4'>
            <div className='h-[1.5rem] sm:h-[2.25rem] text-4xl whitespace-nowrap'>
                <MaskedText>
                    GO BACK
                </MaskedText>
            </div>
            <motion.div
                className="h-[1.5rem] sm:h-[2.25rem]"
                whileHover={{ x: 10 }} // Move the arrow 10px to the right on hover
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Arrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current" />
            </motion.div>
        </Link>
        <RandomMaskedText className='self-end p-12 text-7xl sm:text-[10vw]' >{["Projects"]}</RandomMaskedText>
        <div className="flex flex-col items-center space-y-6">
                {
                    projects.map((project, index) => (
                        <Projects key={index} project={project} />
                    ))
                }
            </div>
    </main>
  )
}



export default page