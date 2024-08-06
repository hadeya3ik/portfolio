'use client'
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VerticalSlider = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  
  return (
    <section ref={targetRef} className="h-[200vh]">
        <svg width="100" height="100" viewBox="0 0 100 100" className="relative sticky top-[100px]">
          <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-current text-orange-50  -rotate-90" strokeWidth="8" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-current text-accent"
            strokeWidth="8"
            fill="none"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      <div className="sticky top-[300px] flex items-center overflow-hidden bg-white">
        <motion.div style={{ x }} className="flex gap-40">
          {cards.map((card, index) => (
            <div key={index} className="p-4 group relative h-[450px] w-[450px] border-8 border-black bg-orange-50">
              <h2 className="text-7xl">{card.title}</h2>
              <p className="text-xl">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  { title: "Title 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Title 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Title 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Title 4", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Title 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Title 6", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Title 7", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default VerticalSlider;
