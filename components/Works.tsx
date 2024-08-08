import React from 'react'
import ProjectSlider from './ProjectSlider'

const Works : React.FC = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-9xl self-center uppercase mb-12 pb-[50vh]'>Some of my work</h1>
        <Project/>
    </div>
  )
}

const Project : React.FC = () => {
    return (
    <div className='sticky top-0'>
      {projects.map((item, index) => (
        <ProjectSlider 
          key={index} 
          id={index} 
          title={item.title}
          stack={item.stack}
          service={item.service}
          desc={item.desc}/>
      ))} 
    </div>)
}

const projects = [
  {
    title : "Govee",
    stack : ["Django", "Next js", "Typescript", "Vercel", "SQLite", "REST Api", "Framer Motion" ],
    service : ["Web Design", "Development"],
    desc : "This is an App used to control your lights using the Govee api. At vero eos et accusamus et iusto odio dignissimos ducimus."
  },
  {
    title : "Fitbud",
    stack : ["Figma", "Adobe"],
    service : ["Prototyping", "Case Study", "Illustrations", "Design System"],
    desc : "This is an AI powered Fitness App. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
  },
  {
    title : "Baking Horizon",
    stack : ["Next js", "Vercel", "Figma", "Framer Motion" ],
    service : ["Branding", "Visual Identity", "Web Design", "Development"],
    desc : "This is an App used to control your lights using the Govee api. At vero eos et accusamus et iusto odio dignissimos ."
  }
]


export default Works