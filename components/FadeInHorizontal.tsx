'use client'
import React from 'react'
import { motion} from 'framer-motion';
const DURATION = .75;
const ANIMATION_DELAY = 0.025;

function FadeInHorizontal(children : string ) {
    return (
        <motion.div
          initial="initial"
          className="relative block !overflow-hidden whitespace-nowrap"
          style={{
            lineHeight: 0.75,
          }}
        >
          <div>
            {children.split("").map((l, i) => (
              <div key={i} className='inline-block relative overflow-hidden'>
              <motion.span
                initial={{ y: "-100% ", opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{
                  duration: DURATION,
                  ease: [0.33, 1, 0.68, 1],
                  delay: ANIMATION_DELAY + (Math.random() * 0.5),
                }}
                className="inline-block relative overflow-hidden whitespace-nowrap right-0"
                key={i}
              >
                {l}
              </motion.span>
              </div>
            ))}
          </div>
        </motion.div>
      );
}

export default FadeInHorizontal