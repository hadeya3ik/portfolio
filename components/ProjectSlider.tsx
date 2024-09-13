'use client'
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { RollLink } from "./RollLink";
import Image, {StaticImageData} from "next/image";
import { MaskedText } from "./MaskedText";
import { RandomMaskedText } from './RandomMaskedTex';

interface ProjectSliderProps {
  title: string
  desc: string[];
  stack: string[];
  service: string[];
  links: { title: string; url: string }[];
  images : StaticImageData[];
}

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
};

function StackButton({ text }: { text: string }) {
  return (
    <motion.div 
      variants={item}
      className="font-medium whitespace-nowrap bg-accent text-accent-foreground rounded-full px-3 text-lg md:text-2xl sm:text-xl">
      {text}
    </motion.div>
  )
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ title, desc, stack, service, links }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); 

  return (
    <section className="flex md:flex-col flex-row justify-between p-4 h-[85%]">
      <div className="flex flex-col text-xl md:text-3xl sm:text-2xl gap-4" ref={ref}>
        <div className='md:text-8xl sm:text-5xl text-4xl '>
          <RandomMaskedText>{[`${title}`]}</RandomMaskedText>
        </div>
        <MaskedText>
          {desc}
        </MaskedText>
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}className="flex flex-wrap max-w-md gap-1">
            {service.map((item, index) => (<StackButton key={index} text={item}></StackButton>))}
            {stack.map((item, index) => (<StackButton key={index} text={item}></StackButton>))}
        </motion.div>
      </div>
      <div className="text-current  text-3xl md:text-5xl sm:text-4xl">
        {links.map((item, id) => (
          <RollLink key={id} href={item.url}>
            {item.title}
          </RollLink>
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
