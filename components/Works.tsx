import React from 'react'
import VerticalSlider from './VerticalSlider'

function Works() {
  return (
    <div className=''>
        <h1 className='text-9xl uppercase mb-12'>Some of my work</h1>
        <Project/>
    </div>
  )
}

function Project() {
    return (
    <div className='sticky top-0'>
          <VerticalSlider/>
          <VerticalSlider/>
          <VerticalSlider/>
    </div>)
}


export default Works