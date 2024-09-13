'use client'
import React from 'react'
import Arrow from '@/images/SVG/arrow 1.svg'
import { MaskedText } from '@/components/MaskedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
import ProjectSlider from '@/components/ProjectSlider'
import pic1 from '@/images/bakingHorizon/bakinghorizon1.png'
import pic2 from '@/images/bakingHorizon/bakinghorizon2.png'
import pic3 from '@/images/bakingHorizon/bakinghorizon3.png'
import pic4 from '@/images/bakingHorizon/bakinghorizon4.png'
import pic5 from '@/images/bakingHorizon/bakinghorizon5.png'
import pic6 from '@/images/bakingHorizon/bakinghorizon6.png'
import Image from 'next/image'

const projects = [
    {
      
      title : "Baking Horizon",
      stack : ["Next js", "Vercel", "Figma", "Framer Motion" ],
      service : ["Branding", "Visual Identity", "Web Design", "Development"],
      desc : ["This is an App used to control your" , " lights using theGovee API."],
      links : [{title : "Visit Site", url : "https://www.bakinghorizon.ca/"}, {title : "Github", url : "https://github.com/hadeya3ik/baking-horizon-next"},], 
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
        
        <div className='flex-1 flex flex-col md:overflow-y-scroll gap-8 bg-primary'>
          <Image alt='' src={pic1} className='w-full h-auto' />
          <Image alt='' src={pic2} className='w-full h-auto' />
          <Image alt='' src={pic3} className='w-full h-auto' />
          <Image alt='' src={pic4} className='w-full h-auto' />
          <Image alt='' src={pic5} className='w-full h-auto' />
          <Image alt='' src={pic6} className='w-full h-auto' />
        </div>
      </div>
    </main>
  )
}

export default page