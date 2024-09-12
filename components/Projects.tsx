'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RollLink } from '@/components/RollLink'
import { MaskedText } from './MaskedText';

const anim = {
    initial: { width: '10vw', height: '10vw' },
    open: {
        width: '20vw', 
        height: '12vw',
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    closed: { width: '10vw', height: '10vw' }, 
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
            className="border-t-2 border-primary-foreground py-[0.8vw] cursor-pointer w-full flex justify-center items-center"
        >
            <div className="text-[5vw] mr-[0.75vw]">
            <MaskedText>{title1}</MaskedText></div>
            <motion.div
                variants={anim}
                initial="initial"
                animate={isActive ? 'open' : 'closed'}
                className="overflow-hidden flex justify-center"
                style={{ width: '10vw', height: '10vw' }} 
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
        </div>
    );
}
