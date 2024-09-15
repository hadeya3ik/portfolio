'use client'
import React from 'react'
import Arrow from '@/images/SVG/arrow 1.svg'
import { MaskedText } from '@/components/MaskedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
import ProjectSlider from '@/components/ProjectSlider'
import pic1 from '@/images/3D/bedroom.jpg'
import pic2 from '@/images/3D/kitchen.jpg'
import pic3 from '@/images/3D/bonnies.png'
import pic4 from '@/images/3D/flowers.png'
import pic5 from '@/images/3D/smile.png'
import pic6 from '@/images/3D/bonni.png'
import Image from 'next/image'

const projects = [
    {
      
      title : "3D Art",
      stack : ["Blender"],
      service : ["3D Modelling"],
      desc : ["Some of my poorly rendered 3D models" ],
      links : [],
      images : [pic1, pic2]
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