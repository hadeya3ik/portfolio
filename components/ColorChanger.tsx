'use client'
import React from 'react'
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion'

function ColorChanger({}) {
  const primary = useMotionValue('169 102 65')
  const background = useMotionTemplate`rgb(${primary})`

  function ChangCol(e: React.MouseEvent<HTMLButtonElement>) {
    const color = e.currentTarget.getAttribute('data-color') as string
    const root = document.documentElement
    root.style.setProperty('--primary', color)
    animate(primary, color, { duration: 1 })
  }
  
  return (
    <motion.section className='' >
      <div className='container bg-primary transition-colors duration-1000 pt-4'>
          <button className='border-4 border-black px-8 rounded-full font-semibold' onClick={ChangCol} data-color='220 236 205' >
            Green
          </button>
          <button className='border-4 border-black px-8 rounded-full font-semibold' onClick={ChangCol} data-color='251 222 229' >
            Pink
          </button>
          <button className='border-4 border-black px-8 rounded-full font-semibold' onClick={ChangCol} data-color='203 211 247'>
            Purple
          </button>
      </div></motion.section>
  )
}

export default ColorChanger