import Hero from './../../components/hero/hero'
import Skills from './../../components/skills/skills'
import Projects from './../../components/projects/projects'

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Parallax } from 'react-parallax'
import checker from './../../images/olivee.svg'

function home() {
  return (<>
  <div>
      {/* <Parallax strength={600}>
        < Hero />
      </Parallax>
      <Parallax bgImage={checker} strength={600}>
        < Skills />
      </Parallax>
      <Parallax strength={600}>
        <Projects />  
      </Parallax> */}

        < Hero />
        < Skills />
        <Projects />  
  </div>
  </>)
}

export default home