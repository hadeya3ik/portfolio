'use client'
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RollLink } from "./RollLink";
import Image, {StaticImageData} from "next/image";
import { MaskedText } from "./MaskedText";

interface ProjectSliderProps {
  height : string
  start :string
  end : string
  id: number
  title: string
  desc: string[];
  stack: string[];
  service: string[];
  links: { title: string; url: string }[];
  images : StaticImageData[];
}

function StackButton({ item }: { item: string }) {
  return (
    <div className="font-medium whitespace-nowrap bg-accent text-accent-foreground rounded-full text-lg px-3">
      {item}
    </div>
  )
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ height, start, end, id, title, desc, stack, service, links, images }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 100,
  });

  const x = useTransform(smoothScrollYProgress, [0, 1], [start, end]);

  return (
    <section ref={targetRef} className={height}>
      <svg width="100" height="100" viewBox="0 0 100 100" className="sticky top-16 left-full">
        <motion.circle
          className="stroke-current text-primary-foreground"
          fill="none"
          style={{ pathLength: scrollYProgress }}
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          strokeWidth="8"
        />
      </svg>
      <div className="sticky top-[20px] sm:top-[100px] flex flex-col items-center overflow-hidden">
        <div className="w-full items-center gap-12 flex flex-col pb-20">
          <div className="flex flex-col gap-12">
            <div className="flex justify-between">
              <h1 className='text-7xl self-start'>{`${String(id + 1).padStart(2, '0')} ${title}`}</h1>
              <div className="text-3xl text-current text-end flex flex-col self-end pr-12 gap-0">
                {links.map((item, id) => (
                  <div key={id} className="">
                    <RollLink  href={item.url}>
                      {item.title}
                    </RollLink>
                  </div>
                  
                ))}
              </div>
            </div>
            <div className="flex gap-12">
              <div className='text-2xl text-nowrap max-w-lg'>
                <MaskedText>
                  {desc}
                </MaskedText>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap max-w-sm gap-1">
                  {service.map((item, index) => (<StackButton key={index} item={item}></StackButton>))}
                  {stack.map((item, index) => (<StackButton key={index} item={item}></StackButton>))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <motion.div style={{ x }} className="flex gap-8">
            {images.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt={`Project image ${index + 1}`}
                width={580}
                height={420}
                className=""
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
