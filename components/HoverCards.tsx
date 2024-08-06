'use client'
import React from 'react'
import { motion } from "framer-motion"

const content = [
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "hkjhkj", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
]


function HoverCards() {
    return (
      <div className='relative'> 
          {content.map((item, id) => {return <Card key={id} i={id} {...item}/> })}
      </div>
    )
  }
  
  function Card({ title, desc, i }) {
      return (
          <motion.div 
          whileHover={{ top: -26, backgroundColor: "#ffa07a" }}
          transition={{ duration: 0.4 }} 
          className='w-screen border-y-4 border-black bg-orange-50 -mb-8 relative'>
              <p className='text-7xl overflow-hidden'>{title}</p>
          </motion.div>)
  }

export default HoverCards


