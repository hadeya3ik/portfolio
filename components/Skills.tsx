import React, {ReactNode} from 'react'
import Magnetic from '@/common/Magnetic'

interface CustomButtonProps {
  children: ReactNode;
}

const CustomButton : React.FC <CustomButtonProps> = ({children}) => {
  return (
    <Magnetic>
      <div className='border-4 px-4 py-2 h-min cursor-pointer m-4 rounded-full border-secondary-foreground'>
          <p className='text-3xl'>{children}</p>
      </div>
    </Magnetic>);
}

function Skills() {
  return (
    <div className='h-[150vh] flex flex-col items-center justify-center text-secondary-foreground'>
      <h1 className='text-9xl pb-24'>SOME OF MY SKILLS</h1>
      <div className='flex items-center'> 
          {design.map((item, id) => {return (
              <CustomButton key={id}>
                {item.title}
              </CustomButton>
          )})}
      </div>
      <div className='flex  items-center flex-wrap'> 
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
  )
}

const frameworks = [
  { title : "Nextjs"},
  { title : "Reactjs"},
  { title : "Nodejs"},
  { title : "Expressjs"},
  { title : "Threejs"},
  { title : "Vuejs"},
  { title : "Django"},
  { title : "MongoDB"},
  { title : "NoSQL"},
  { title : "PyTorch"},
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