'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MaskedText } from './MaskedText';
import Arrow from '@/images/SVG/arrow.svg'

const anim = {
    initial: { width: '8vw', height: '8vw' },
    open: {
        width: '20vw', 
        height: '8vw',
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    closed: { width: '8vw', height: '8vw' }, 
};

const imgAnim = {
    initial: { scale: 1 },
    open: { scale: 0.9, transition: { duration: 0.4 } },
    closed: { scale: 1 }, 
};

export default function Projects({ project }) {
    const [isActive, setIsActive] = useState(false);
    const { title1, src } = project;

    return (
        <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className="border-t-2 border-primary-foreground cursor-pointer w-full flex justify-between md:py-5 md:pl-20 py-10 sm:pl-10 pl-2"
        >
            <div className="self-start text-xl sm:text-5xl flex gap-2">
                <MaskedText>{title1}</MaskedText>
                <div className=' text-xs self-start'><MaskedText>{project.id}</MaskedText></div>
            </div>
            
            <div className='text-xs sm:text-lg'>
                {project.topics.map((item, index) => <div key={index}><MaskedText>{item}</MaskedText></div>)}
            </div>
            {project.linkTitle !== "" && (
                <a
                    className="self-end text-sm px-2 border rounded-full"
                    target="_blank"
                    href={project.href}
                    rel="noopener noreferrer" >
                    {project.linkTitle}
                </a>
            )}
            <motion.div
                variants={anim}
                initial="initial"
                animate={isActive ? 'open' : 'closed'}
                className="overflow-hidden flex"
                style={{ width: '8vw', height: '8vw' }} 
            >
                <motion.img
                    src={`/medias/${src}`}
                    className="object-cover"
                    variants={imgAnim}
                    initial="initial"
                    animate={isActive ? 'open' : 'closed'}
                    style={{ width: '100%', height: '100%' }}
                />
            </motion.div>
            <motion.div
                    className="h-[1.05rem] sm:h-[2.25rem]  self-center pr-4"
                    whileHover={{ x: -10 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                    <Arrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current" />
                </motion.div>
        </div>
    );
}
