'use client'
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const anim = {
    initial: {
        opacity: 0
    },
    open: (delay) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0.02 * delay[1] }
    }),
    closed: (delay) => ({
        opacity: 0,
        transition: { duration: 0, delay: 0.02 * delay[0] }
    })
};

export default function PixelEffect({ menuIsActive }) {
    const ref = React.useRef();
    const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

    const shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    const getBlocks = (indexOfColum) => {
        const { innerWidth, innerHeight } = window;
        const blockSize = innerHeight * 0.1;
        const nbOfBlocks = Math.ceil(innerWidth / blockSize);
        const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
        return shuffledIndexes.map((randomIndex, index) => (
            <motion.div
                key={index}
                className="w-[10vh] h-full bg-[#ff6a00]"
                variants={anim}
                initial="initial"
                animate={isInView && menuIsActive ? "open" : "closed"}
                custom={[indexOfColum + randomIndex, 10 - indexOfColum + randomIndex]}
            />
        ));
    };

    return (
        <div ref={ref} className="flex flex-col h-screen overflow-hidden relative z-10 pointer-events-none">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="flex w-full h-[10vh]">
                    {getBlocks(index)}
                </div>
            ))}
        </div>
    );
}
