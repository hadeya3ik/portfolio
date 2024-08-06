import { Content } from 'next/font/google'
import React from 'react'

const content = [
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
    { title : "title", desc : "lorem ipsum, lol i hate ipsum lorem te ami je suis lore pis feit." },
]

function Cards() {
    return (
        <div className=''> 
            {content.map((item, id) => {return <Card key={id} i={id} {...item}/> })}
        </div>
      )
    }
    
function Card({ title, desc, i }) {
    return (
        <div className='h-screen w-full flex items-center justify-center sticky top-0' style={{top: `calc(-10% + ${i * 25}px)`}}>
            <div className='w-[80%] h-[300px] border-4 border-black bg-orange-50'  >
                <p className='text-8xl'>{title}</p>
            </div>
        </div>)
}

export default Cards

