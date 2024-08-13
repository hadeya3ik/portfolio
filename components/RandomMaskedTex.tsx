'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DURATION = 0.75;
const ANIMATION_DELAY = 0.025;

export function RandomMaskedText({
  children,
  className = '',
}: {
  children: string[];
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  const animation = {
    initial: { y: '-100%', opacity: 0 },
    enter: (i: number) => ({
      y: '0',
      opacity: 1,
      transition: {
        duration: DURATION,
        ease: [0.33, 1, 0.68, 1],
        delay: ANIMATION_DELAY + Math.random() * 0.5,
      },
    }),
  };

  const sentences = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={`flex flex-col ${className}`}>
      {sentences.map((sentence, sentenceIndex) => (
        <div key={sentenceIndex} className="">
          <div>
            {sentence.split('').map((char, charIndex) => (
              <div key={charIndex} className="inline-block relative ">
                <motion.span
                  custom={charIndex}
                  variants={animation}
                  initial="initial"
                  animate={isInView ? 'enter' : 'initial'}
                  className="inline-block relative"
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
