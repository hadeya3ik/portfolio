'use client'
import React from 'react'
import {motion, useTime, useTransform} from 'framer-motion'
import { MaskedText } from "./MaskedText";
import Checkered from '@/images/SVG/Checker.svg'
import Diamond from '@/images/SVG/diamond.svg'
import Dots from '@/images/SVG/dots.svg'
import DoubleArrow from '@/images/SVG/doubleArrow.svg'
import Fan from '@/images/SVG/fan.svg'
import FilledAnd from '@/images/SVG/FilledAnd.svg'
import Flower from '@/images/SVG/flower.svg'
import Gem from '@/images/SVG/gem.svg'
import MathSymbols from '@/images/SVG/MathSymbols.svg'
import OutlinedAnd from '@/images/SVG/OutlinedAnd.svg'
import Smile from '@/images/SVG/smile.svg'
import Star from '@/images/SVG/star.svg'
import SpiralCircle from '@/images/SVG/SpiralCircle.svg'
import Arrow from '@/images/SVG/arrow.svg'

export default function About() {
    return (<main className='pt-[50vh] flex justify-center'>
        <div className='flex text-2xl sm:text-5xl text-nowrap max-w-xl flex-col sm:gap-8 gap-4'>
            <div className="flex flex-col items-center">
                <div className='flex items-center gap-4'>
                    <MovingIcon>
                        {/* <MaskedText> */}
                            <SpiralCircle className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                        {/* </MaskedText> */}
                    </MovingIcon>
                    <MaskedText>I'm</MaskedText>
                    <MaskedText>Hadeya</MaskedText>
                        <hr className="w-[50px] my-4 border-t-2 border-current" />
                    <MaskedText>A</MaskedText>
                    <MaskedText>Developer</MaskedText>
                </div>
                <div className='flex items-center gap-4'>
                    <MaskedText>
                        <FilledAnd className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>Designer</MaskedText>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className='flex items-center gap-4'>
                    <MaskedText>Currently</MaskedText>
                    <MaskedText>
                        <Diamond className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>Studying</MaskedText>
                    <MaskedText>
                        <DoubleArrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                </div>
                <div className='flex items-center gap-4'>
                    <MaskedText>Computational</MaskedText>
                    <MaskedText>
                        <MathSymbols className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>Math</MaskedText>
                </div>
                <div className='flex gap-4 self-end'>
                    <MaskedText>
                        <Arrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>At</MaskedText>
                    <MaskedText>(@)</MaskedText>
                    <MaskedText>UWaterloo</MaskedText>  
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className='flex items-center gap-4'>
                    <MaskedText>
                        <Star className="h-[1.5rem] sm:h-[2.25rem] stroke-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>I</MaskedText>
                    <MaskedText>Lead</MaskedText>
                    <MaskedText>The</MaskedText>
                    <MaskedText>Design</MaskedText>
                    <div className='flex'>
                        <MaskedText>
                            <Checkered className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                        </MaskedText>
                        <MaskedText>
                            <Checkered className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                        </MaskedText>
                        <MaskedText>
                            <Checkered className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                        </MaskedText>
                    </div>
                    
                </div>
                <div className='flex items-center gap-4'>
                    <MaskedText>Team</MaskedText>
                    <MaskedText>At</MaskedText>
                    <MaskedText>(@)</MaskedText>
                    <MaskedText>SMILE</MaskedText>
                    <MaskedText>
                        <Smile className="h-[1.5rem] sm:h-[2.25rem] stroke-current  text-primary-foreground"/>
                    </MaskedText>
                </div>
                <div className='flex items-center gap-4'>
                    <MaskedText>
                        <OutlinedAnd className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>Work</MaskedText>
                    <MaskedText>As</MaskedText>
                    <MaskedText>a</MaskedText>
                </div>
                <div className='flex items-center gap-4'>
                    <MaskedText>Full-Stack</MaskedText>
                    {/* <MaskedText> */}
                        <MovingIcon>
                            <Fan className="h-[1.5rem] sm:h-[2.25rem] stroke-current text-primary-foreground"/>
                        </MovingIcon>
                    {/* </MaskedText> */}
                    <MaskedText>Freelancer</MaskedText>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className='flex items-center gap-4'>
                    <MaskedText>
                        <Gem className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>I</MaskedText>
                    <MaskedText>Also</MaskedText>
                    <MaskedText>Have</MaskedText>
                    <MaskedText>a</MaskedText>
                    <MaskedText>
                        <DoubleArrow className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                    <MaskedText>Passion</MaskedText>
                </div>
                <div className='flex items-center gap-4 self-end'>
                    {/* <MaskedText> */}
                    <MovingIcon>
                    
                        <Flower className="h-[1.5rem] sm:h-[2.25rem] stroke-current text-primary-foreground"/>
                    
                    </MovingIcon>
                    {/* </MaskedText> */}
                    <MaskedText>3D</MaskedText>
                    <MaskedText>Modelling</MaskedText>
                    <MaskedText>
                        <Dots className="h-[1.5rem] sm:h-[2.25rem] stroke-current fill-current text-primary-foreground"/>
                    </MaskedText>
                </div>
            </div>
        </div>
    </main>)
}

function MovingIcon({ children } : { children: React.ReactNode }) {
    const time = useTime();
    const rotate = useTransform(time, [0, 8000], [0, 360], { clamp: false });
  
    return (
      <div className="">
        <motion.div style={{ rotate }} className="text-accent">
          {children}
        </motion.div>
      </div>
    );
  }