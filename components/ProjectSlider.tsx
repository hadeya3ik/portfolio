'use client'
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ProjectSliderProps {
  id : number
  title : string
  desc : string
  stack : string[];
  service : string[];
}

function ListContainer({items} : {items : string[]}) {
  return (
    <div className="text-2xl flex flex-wrap max-w-sm">
      <p>{items.join(' / ')}</p>
    </div>
  )
}

const ProjectSlider : React.FC <ProjectSliderProps> = ({id, title, desc, stack, service}) => {
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
        <div className="w-full justify-start gap-12 flex bord border-red-500 pb-20">
          <div className="flex flex-col gap-4 p-4">
            <h1 className='text-7xl'>{`${String(id + 1).padStart(2, '0')} ${title}`}</h1>
            <p className='max-w-lg text-2xl'>{desc}</p>
          </div>
          <div className="flex-1 flex self-center gap-12">
            <div className="">
              <h1 className='text-3xl'>SERVICE</h1>
              <ListContainer items={service}/>
            </div>
            <div className="">
            <h1 className='text-3xl'>STACK</h1>
              <ListContainer items={stack}/>
            </div>
          </div>
          
          
        </div>
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

export default ProjectSlider;