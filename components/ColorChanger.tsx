import React from 'react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';

const colors = [
  { id: '01', mainColor: '86 83 208', textColor: '196 222 213' },
  { id: '02', mainColor: '244 113 57', textColor: '237 236 200' },
  { id: '03', mainColor: '29 27 137', textColor: '180 147 188' },
  { id: '04', mainColor: '100 28 25', textColor: '182 201 228' },
  { id: '05', mainColor: '203 211 247', textColor: '220 236 205' },
];

interface ColorChangerProps {
  setPrimary: React.Dispatch<React.SetStateAction<string>>;
  setSecondary: React.Dispatch<React.SetStateAction<string>>;
}

function ColorChanger({ setPrimary, setSecondary }: ColorChangerProps) {
  const primary = useMotionValue('169 102 65');
  const background = useMotionTemplate`rgb(${primary})`;

  function ChangCol(e: React.MouseEvent<HTMLButtonElement>) {
    const mainColor = e.currentTarget.getAttribute('main-color') as string;
    const textColor = e.currentTarget.getAttribute('text-color') as string;
    const root = document.documentElement;
    root.style.setProperty('--primary', mainColor);
    root.style.setProperty('--primary-foreground', textColor);
    setPrimary(mainColor);
    setSecondary(textColor);
    animate(primary, mainColor, { duration: 2 });
    animate(primary, textColor, { duration: 2 });
  }

  return (
    <motion.section className=''>
      <div className='container  transition-colors duration-1000 pt-4'>
        {colors.map(color => (
          <button
            key={color.id}
            className='border-4 p-2 px-3 border-primary-foreground rounded-full font-semibold transition-colors duration-1000'
            onClick={ChangCol}
            main-color={color.mainColor}
            text-color={color.textColor}>
            {color.id}
          </button>
        ))}
      </div>
    </motion.section>
  );
}

export default ColorChanger;
