'use client'
import React from 'react'
import Arrow from '@/images/SVG/arrow 1.svg'
import { MaskedText } from '@/components/MaskedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
import ProjectSlider from '@/components/ProjectSlider'
import pic1 from '@/images/CaseStudy/Frame 135.jpg'
import pic2 from '@/images/CaseStudy/Frame 137.jpg'
import pic3 from '@/images/CaseStudy/Frame 138.jpg'
import pic4 from '@/images/CaseStudy/Frame 139.jpg'
import pic5 from '@/images/CaseStudy/Frame 140.jpg'
import pic6 from '@/images/CaseStudy/Frame 141.jpg'
import pic7 from '@/images/fitBud/fitbud6.png'
import Image from 'next/image'

const projects = [
    {
      
      title : "FitBud",
      stack : ["Adobe", "Figma" ],
      service : ["Prototyping", "Wire framing", "Case study"],
      desc : ["An interactive Prototype for an AI-powered health" , "app. Created illustrations to add a playful tone", "and implemented a design system with reusable", "components to ensure visual consistency."],
      links : [],
      images : [pic1, pic2, pic3, pic4, pic5, pic6]
    }
  ]
  
function page() {
  return (
    <main className="bg-primary text-primary-foreground flex flex-col h-screen">
      <div className='flex-grow h-full flex md:flex-row flex-col'>
        {projects.map((item, index) => (
            <div key={index} >
                <div className='flex justify-between whitespace-nowrap md:flex-row flex-col w-full'>
                    <Link href='/Projects' className='flex gap-4 border border-primary-foreground w-min h-min p-4 rounded-full m-4'>
                    <div className='h-[1.5rem] sm:h-[2.25rem] sm:text-4xl text-2xl whitespace-nowrap'>
                        <MaskedText>GO BACK</MaskedText>
                    </div>
                    <motion.div
                        className="h-[1.05rem] sm:h-[2.25rem]"
                        whileHover={{ x: -10 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 15 }}>
                        <Arrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current" />
                    </motion.div>
                    </Link>
                </div>
                <ProjectSlider 
            
                    title={item.title}
                    stack={item.stack}
                    service={item.service}
                    desc={item.desc}
                    links={item.links}
                    images={item.images}
                />
            </div>
        ))}
        
        <div className='flex-1 flex flex-col md:overflow-y-scroll'>
          <Image alt='' src={pic1} className='w-full h-auto' />
          <Image alt='' src={pic2} className='w-full h-auto' />
          <Image alt='' src={pic3} className='w-full h-auto' />
          <Image alt='' src={pic4} className='w-full h-auto' />
          <Image alt='' src={pic5} className='w-full h-auto' />
          <Image alt='' src={pic6} className='w-full h-auto' />
          <Image alt='' src={pic7} className='w-full h-auto' />
        </div>
      </div>
    </main>
  )
}

export default page