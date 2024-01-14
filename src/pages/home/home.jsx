import Hero from './../../components/hero/hero'
import Skills from './../../components/skills/skills'
import Project from './../../components/project_folder/project'
import { Parallax } from 'react-parallax'

function home() {
  return (<>
  <div>
     <Hero />
      <Parallax strength={600}>
        < Skills />
      </Parallax>
        <Project /> 
  </div>
  </>)
}

export default home