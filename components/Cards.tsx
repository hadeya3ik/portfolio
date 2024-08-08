import React from 'react'

interface CardsProps  {
    title : string,
    i : number
}

const content = [
    { title : "title" },
    { title : "title" },
    { title : "title" },
    { title : "title" },
]

function Cards() {
    return (
        <div className=''> 
            {content.map((item, id) => {return <Card key={id} i={id} {...item}/> })}
        </div>
    )
}
    
function Card({ title, i } : CardsProps) {
    return (
        <div className='h-screen w-full flex items-center justify-center sticky top-0' style={{top: `calc(-10% + ${i * 25}px)`}}>
            <div className='w-[80%] h-[300px] border-4 border-black bg-orange-50'  >
                <p className='text-8xl'>{title}</p>
            </div>
        </div>)
}

export default Cards

