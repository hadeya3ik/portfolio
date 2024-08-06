'use client'
import React from 'react'
import Image from 'next/image';
import H from '@/letters/H.svg';
import A from '@/letters/A.svg';
import D from '@/letters/D.svg';
import E from '@/letters/E.svg';
import Y from '@/letters/Y.svg';
import {motion} from 'framer-motion'

function Name() {
    return (
      <div className="flex bg-black w-fit h-[300px]">
        <H height="10vw" fill="red" />
        <A  height="10vw" fill="red"/>
        <D  height="10vw" fill="red"/>
        <E  height="10vw"  fill="red"/>
        <Y height="10vw" fill="red"/>
        <A  height="10vw" fill="red"/>
      </div>
    );
  }
export default Name