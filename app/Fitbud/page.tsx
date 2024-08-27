import React from 'react';
import Image from 'next/image';
import Frame1 from '@/images/CaseStudy/Frame 135.jpg';
import Frame2 from '@/images/CaseStudy/Frame 137.jpg';
import Frame3 from '@/images/CaseStudy/Frame 138.jpg';
import Frame4 from '@/images/CaseStudy/Frame 139.jpg';
import Frame5 from '@/images/CaseStudy/Frame 140.jpg';
import Frame6 from '@/images/CaseStudy/Frame 141.jpg';
import Frame7 from '@/images/fitBud/fitbud1.png'
import Frame8 from '@/images/fitBud/fitbud6.png'
import Arrow from '@/images/SVG/arrow.svg'
import Link from 'next/link';
function Page() {
  return (
    <div className="">
      <Link href="/">
        <Arrow className="absolute top-4 left-4 h-[1.5rem] sm:h-[2.25rem] stroke-black fill-black scale-x-[-1]" />
      </Link>
      <Image src={Frame1} alt="Case Study Frame"  />
      <Image src={Frame2} alt="Case Study Frame"  />
      <Image src={Frame3} alt="Case Study Frame"  />
      <Image src={Frame4} alt="Case Study Frame"  />
      <Image src={Frame5} alt="Case Study Frame"  />
      <Image src={Frame6} alt="Case Study Frame"  />
      <Image src={Frame8} alt="Case Study Frame"  />
      <Image src={Frame7} alt="Case Study Frame"  />

    </div>
  );
}

export default Page;