import React from 'react'
import Checkered from '@/images/SVG/checkered.svg'
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
    return (<main className='pt-[50vh]'>
        <div className='flex text-4xl text-nowrap border flex-col gap-4'>
            <div className="flex flex-col items-end">
                <div className='flex items-end gap-4'>
                    <SpiralCircle className="w-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>I'm</h1>
                    <h1>Hadeya</h1>
                    <hr className="w-[50px] my-4 border-t-2 border-current" />
                    <h1>A</h1>
                    <h1>Developer</h1>
                </div>
                <div className='flex items-end gap-4 px-8'>
                    <FilledAnd className="w-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>Designer</h1>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className='flex items-end gap-4'>
                    <h1>Currently</h1>
                    <Diamond className="h-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>Studying</h1>
                    <DoubleArrow className="h-[35px] stroke-current fill-current text-primary-foreground"/>
                </div>
                <div className='flex items-end gap-4 px-4'>
                    <h1>Computational</h1>
                    <MathSymbols className="h-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>Math</h1>
                </div>
                <div className='flex items-end gap-4 px-4'>
                    <Arrow className="h-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>At</h1>
                    <h1>(@)</h1>
                    <h1>UWaterloo</h1>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className='flex items-end gap-4'>
                    <Star className="h-[40px] stroke-current text-primary-foreground"/>
                    <h1>I</h1>
                    <h1>Lead</h1>
                    <h1>The</h1>
                    <h1>Design</h1>
                    <div className='flex'>
                        <Checkered className="h-[35px] stroke-current fill-current text-primary-foreground"/>
                        <Checkered className="h-[35px] stroke-current fill-current text-primary-foreground"/>
                        <Checkered className="h-[35px] stroke-current fill-current text-primary-foreground"/>
                    </div>
                </div>
                <div className='flex items-end gap-4 px-4'>
                    <h1>Team</h1>
                    <h1>At</h1>
                    <h1>(@)</h1>
                    <h1>SMILE</h1>
                    <Smile className="h-[40px] stroke-current  text-primary-foreground"/>
                </div>
                <div className='flex items-end gap-4 px-4'>
                    <OutlinedAnd className="h-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>Work</h1>
                    <h1>As</h1>
                    <h1>a</h1>
                </div>
                <div className='flex items-end gap-4'>
                    <h1>Full-Stack</h1>
                    <Fan className="h-[40px] stroke-current text-primary-foreground"/>
                    <h1>Freelancer</h1>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className='flex items-end gap-4'>
                    <Gem className="h-[35px] stroke-current fill-current text-primary-foreground"/>
                    <h1>I</h1>
                    <h1>Also</h1>
                    <h1>Have</h1>
                    <h1>a</h1>
                    <DoubleArrow className="h-[40px] stroke-current fill-current text-primary-foreground"/>
                    <h1>Passion</h1>
                </div>
                <div className='flex items-end gap-4 px-4'>
                    <h1>For</h1>
                    <Flower className="h-[40px] stroke-current -current text-primary-foreground"/>
                    <h1>3D</h1>
                    <h1>Modelling</h1>
                    <Dots className="h-[35px] stroke-current fill-current text-primary-foreground"/>
                </div>
            </div>
        </div>
        
    </main>)
}