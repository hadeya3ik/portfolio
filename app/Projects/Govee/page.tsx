'use client'
import React from 'react'
import Arrow from '@/images/SVG/arrow 1.svg'
import { MaskedText } from '@/components/MaskedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
import ProjectSlider from '@/components/ProjectSlider'
import govee1 from '@/images/govee/govee1.png'
import govee2 from '@/images/govee/govee2.png'
import govee3 from '@/images/govee/govee3.png'
import govee4 from '@/images/govee/govee4.png'
import govee5 from '@/images/govee/govee5.png'
import Image from 'next/image'

const projects = [
    {
      
      title : "Govee",
      stack : ["Django", "Next js", "Typescript", "Vercel", "SQLite", "REST Api", "Framer Motion" ],
      service : ["Web Design", "Development"],
      desc : ["This is an App used to control your" , " lights using theGovee API."],
      links : [{title : "Visit Site", url : "https://govee1.vercel.app/demo"}, {title : "Github", url : "https://github.com/hadeya3ik/govee"},],
      images : [govee1, govee2, govee3, govee4, govee5]
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
          <Image alt='' src={govee1} className='w-full h-auto' />
          <Image alt='' src={govee2} className='w-full h-auto' />
          <Image alt='' src={govee3} className='w-full h-auto' />
          <Image alt='' src={govee4} className='w-full h-auto' />
          <Image alt='' src={govee5} className='w-full h-auto' />
        </div>
      </div>
    </main>
  )
}

export default page