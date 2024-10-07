'use client'
import React from 'react'
import Arrow from '@/images/SVG/arrow 1.svg'
import { MaskedText } from '@/components/MaskedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
import ProjectSlider from '@/components/ProjectSlider'
import Image from 'next/image' // Import Next.js Image component
import pic1 from '@/images/Smile/Smile1.png'
import pic2 from '@/images/Smile/Smile2.png'
import pic3 from '@/images/Smile/Smile3.png'
import pic4 from '@/images/Smile/Smile4.png'
import pic5 from '@/images/Smile/Smile5.png'

const projects = [
    {
      title : "Smile",
      stack : ["Figma", "Adobe" ],
      service : [],
      desc : ["As the head of design I create illustrations and", "design posters for our social media pages."],
      links : [],
      images : [pic1, pic2]
    }
]

function Page() {
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
          <Image alt='Project Image 1' src={pic1} className='w-full h-auto' />
          <Image alt='Project Image 2' src={pic2} className='w-full h-auto' />
        </div>
      </div>
    </main>
  )
}

export default Page
