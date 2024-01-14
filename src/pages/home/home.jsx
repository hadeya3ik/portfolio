import Hero from './../../components/hero/hero'
import Skills from './../../components/skills/skills'
import Project from './../../components/project_folder/project'
import { Parallax } from 'react-parallax'

function home() {
  return (<>
  <div>
      <Parallax strength={600}>
          <Hero />
      </Parallax>
      <Parallax strength={600}>
        < Skills />
      </Parallax>
      <Parallax strength={600}>
        <Project />  
      </Parallax>
  </div>
  </>)
}

export default home