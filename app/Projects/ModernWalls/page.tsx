'use client'
import React from 'react'
import Arrow from '@/images/SVG/arrow 1.svg'
import { MaskedText } from '@/components/MaskedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
import ProjectSlider from '@/components/ProjectSlider'
import pic1 from '@/images/modernWalls/home.png'
import pic2 from '@/images/modernWalls/service.png'
import pic3 from '@/images/modernWalls/gallery1.png'
import pic4 from '@/images/modernWalls/gallery.png'
import pic5 from '@/images/modernWalls/contact.png'
import Image from 'next/image'

const projects = [
    {
      title : "Modern Walls Studio",
      stack : ["React", "Next js", "Typescript", "Vercel", "Framer Motion" ],
      service : ["Web Design", "Development"],
      desc : ["Developed the Website for a" , "Interior Design studio."],
      links : [{title : "Visit Site", url : "https://govee-kohl.vercel.app/demo"}, {title : "Github", url : "https://github.com/hadeya3ik/govee"},],
      images : [pic1, pic2, pic3, pic4, pic5]
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
        <div className='flex-1 flex flex-col md:overflow-y-scroll gap-8'>
          <Image alt='' src={pic1} className='w-full h-auto' />
          <Image alt='' src={pic2} className='w-full h-auto' />
          <Image alt='' src={pic3} className='w-full h-auto' />
          <Image alt='' src={pic4} className='w-full h-auto' />
          <Image alt='' src={pic5} className='w-full h-auto' />
        </div>
      </div>
    </main>
  )
}

export default page