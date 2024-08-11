import React, {ReactNode} from 'react'
import Magnetic from '@/common/Magnetic'

interface CustomButtonProps {
  children: ReactNode;
}

const CustomButton : React.FC <CustomButtonProps> = ({children}) => {
  return (
    <Magnetic>
      <div className='border-4 px-4 py-2 h-min cursor-pointer rounded-full border-secondary-foreground '>
          <p className='font-notoSerif text-nowrap italic text-xl '>{children}</p>
      </div>
    </Magnetic>);
}

function Skills() {
  return (
    <div className='h-[150vh] flex flex-col items-center justify-center text-secondary-foreground'>
      <h1 className='text-[10vw] mb-10 leading-none text-center uppercase max-w-3xl'>Areas of Expertise</h1>
            <div className='w-full'>
      <div className='flex flex-wrap justify-center max-w-4xl mx-auto gap-2'> 
          {design.map((item, id) => {return (
              <CustomButton key={id}>
                {item.title}
              </CustomButton>
          )})}
          {frameworks.map((item, id) => {return (
              <CustomButton key={id}>
                {item.title}
              </CustomButton>
          )})}{languages.map((item, id) => {return (
            <CustomButton key={id}>
              {item.title}
            </CustomButton>
        )})}
      </div>
      </div>
    </div>
  )
}

const frameworks = [
  { title : "Nextjs"},
  { title : "Reactjs"},
  { title : "Nodejs"},
  { title : "Expressjs"},
  // { title : "Threejs"},
  // { title : "Vuejs"},
  // { title : "Django"},
  // { title : "MongoDB"},
  // { title : "NoSQL"},
  // { title : "PyTorch"},
]

const design = [
  { title : "Illustrator"},
  { title : "Figma"},
  { title : "Blender"},
  { title : "Prototyping"},
]

const languages = [
  { title : "C++"},
  { title : "C"},
  { title : "Python"},
  { title : "JavaScript"},
  { title : "R"},
  { title : "Bash"},
  { title : "MatLab"},
]

export default Skills