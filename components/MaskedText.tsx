'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function MaskedText({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.75 });
  
    const animation = {
      initial: { y: "100%" },
      enter: (i : number) => ({
        y: "0",
        transition: {
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.0975 * i,
        },
      }),
    };
    const sentences = Array.isArray(children) ? children : [children];
    return (
      <div
        ref={ref}
        className="flex flex-col ">
        {sentences.map((sentence, index) => (
          <div key={index} className="overflow-hidden whitespace-nowrap">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : "initial"}>
              {sentence}
            </motion.p>
          </div>
        ))}
      </div>
    );
  }
  