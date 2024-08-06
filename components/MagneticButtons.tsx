import React from 'react'
import Magnetic from '@/common/Magnetic'

const content = [
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
]

function MagneticButtons() {
  return (
    <div className='flex items-center  h-[700px]'> 
        {content.map((item, id) => {return (
        <Magnetic key={id}>
            <div  className='border-4 px-8 py-4 h-min cursor-pointer m-4 rounded-full border-black bg-orange-50'>
                <p className='text-5xl'>{item.title}</p>
            </div>
        </Magnetic>) 
    })}
    </div>
  )
}




export default MagneticButtons