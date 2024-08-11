import React from 'react'
import ProjectSlider from './ProjectSlider'

import govee1 from '@/images/govee/govee1.png'
import govee2 from '@/images/govee/govee2.png'
import govee3 from '@/images/govee/govee3.png'
import govee4 from '@/images/govee/govee4.png'
import govee5 from '@/images/govee/govee5.png'

import bakingHorizon1 from '@/images/bakingHorizon/bakinghorizon1.png'
import bakingHorizon2 from '@/images/bakingHorizon/bakinghorizon2.png'
import bakingHorizon3 from '@/images/bakingHorizon/BakingHorizon3.png'
import bakingHorizon4 from '@/images/bakingHorizon/BakingHorizon4.png'
import bakingHorizon5 from '@/images/bakingHorizon/BakingHorizon5.png'
import bakingHorizon6 from '@/images/bakingHorizon/BakingHorizon6.png'

import fitBud1 from '@/images/fitBud/fitbud1.png'
import fitBud2 from '@/images/fitBud/fitbud2.png'
import fitBud3 from '@/images/fitBud/fitbud3.png'
import fitBud4 from '@/images/fitBud/fitbud4.png'
import fitBud5 from '@/images/fitBud/fitbud5.png'
import fitBud6 from '@/images/fitBud/fitbud6.png'

const Works : React.FC = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-[10vw] mb-10 leading-none text-center uppercase max-w-md:'>Selected Works</h1>
        <Project/>
    </div>
  )
}

const Project : React.FC = () => {
    return (
    <div className='sticky top-0'>
      {projects.map((item, index) => (
        <ProjectSlider 
          height={item.height}
          start={item.start}
          end={item.end}
          key={index} 
          id={index} 
          title={item.title}
          stack={item.stack}
          service={item.service}
          desc={item.desc}
          links={item.links}
          images={item.images}/>
      ))} 
    </div>)
}

const projects = [
  {
    height : "h-[500vh]",
    start : "100%",
    end : "-300%",
    title : "Govee",
    stack : ["Django", "Next js", "Typescript", "Vercel", "SQLite", "REST Api", "Framer Motion" ],
    service : ["Web Design", "Development"],
    desc : "This is an App used to control your lights using the Govee api. At vero eos et accusamus et iusto odio dignissimos ducimus.",
    links : [{title : "Visit Site", url : "#"}, {title : "Github", url : "#"},],
    images : [govee1, govee2, govee3, govee4, govee5]
  },
  {
    height : "h-[700vh]",
    start : "100%",
    end : "-400%",
    title : "Fitbud",
    stack : ["Figma", "Adobe"],
    service : ["Prototyping", "Case Study", "Illustrations", "Design System"],
    desc : "This is an AI powered Fitness App. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    links : [],
    images : [fitBud1, fitBud2, fitBud3, fitBud4, fitBud5, fitBud6]
  },
  {
    height : "h-[700vh]",
    start : "100%",
    end : "-400%",
    title : "Baking Horizon",
    stack : ["Next js", "Vercel", "Figma", "Framer Motion" ],
    service : ["Branding", "Visual Identity", "Web Design", "Development"],
    desc : "This is an App used to control your lights using the Govee api. At vero eos et accusamus et iusto odio dignissimos .",
    links : [{title : "Visit Site", url : "#"}, {title : "Github", url : "#"},], 
    images : [bakingHorizon1, bakingHorizon2, bakingHorizon3, bakingHorizon4, bakingHorizon5, bakingHorizon6]
  }
]

export default Works