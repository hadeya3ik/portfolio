'use client'
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const VerticalSlider : React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 100,
  });

  const x = useTransform(smoothScrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    
    <section ref={targetRef} className="h-[380vh]">
      <svg width="100" height="100" viewBox="0 0 100 100" className="sticky top-16 left-full"> <motion.circle className="stroke-current text-primary-foreground" fill="none" style={{ pathLength: scrollYProgress }} cx="50" cy="50" r="30" pathLength="1" strokeWidth="8" /></svg>
      <div className="sticky top-[100px] flex flex-col items-center overflow-hidden">
        <div className="flex items-center">
          <h1 className='text-8xl pt-8 '>Project A</h1>
        </div><p className='pt-8 max-w-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.</p>
        <div>
          <motion.div style={{ x }} className="flex gap-20">
          {cards.map((card, index) => (
            <div key={index} className="p-4 group relative w-[580px] h-[420px] bg-primary-foreground">
              <h2 className="text-primary text-7xl">{card.id}</h2>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

const cards = [
  {id : 1},
  {id : 2},
  {id : 3},
  {id : 4},
  {id : 5},
  {id : 6},
  {id : 7},
];

export default VerticalSlider;