import React from 'react';
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';

const colors = [
  { id: '01', primary: '152 169 151', primaryForeground: '230 232 231', secondary: '208 209 199', secondaryForeground: '133 156 127' },
  { id: '02', primary: '95 128 192', primaryForeground: '230 211 191', secondary: '230 211 191', secondaryForeground: '88 106 220' },
];

interface ColorChangerProps {
  setPrimary: React.Dispatch<React.SetStateAction<string>>;
  setSecondary: React.Dispatch<React.SetStateAction<string>>;
  setPrimaryForeground: React.Dispatch<React.SetStateAction<string>>;
  setSecondaryForeground: React.Dispatch<React.SetStateAction<string>>;
}

const ColorChanger : React.FC<ColorChangerProps> = ({ setPrimary, setSecondary, setPrimaryForeground, setSecondaryForeground }) => {
  const primary = useMotionValue('169 102 65');

  function ChangCol(e: React.MouseEvent<HTMLButtonElement>) {
    const primaryColor = e.currentTarget.getAttribute('primary-color') as string;
    const secondaryColor = e.currentTarget.getAttribute('secondary-color') as string;
    const primaryForegroundColor = e.currentTarget.getAttribute('primary-foreground-color') as string;
    const secondaryForegroundColor = e.currentTarget.getAttribute('secondary-foreground-color') as string;
    const root = document.documentElement;
    root.style.setProperty('--primary', primaryColor);
    root.style.setProperty('--secondary', secondaryColor);
    root.style.setProperty('--primary-foreground', primaryForegroundColor);
    root.style.setProperty('--secondary-foreground', secondaryForegroundColor);
    setPrimary(primaryColor);
    setSecondary(primaryForegroundColor);
    setPrimaryForeground(primaryForegroundColor)
    setSecondaryForeground(secondaryForegroundColor)
    animate(primary, primaryColor, { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] });
    animate(primary, primaryForegroundColor, { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] });
  }

  return (
    <motion.section className=''>
      <div className='container  transition-colors duration-1000 pt-4'>
        {colors.map(color => (
          <button
            key={color.id}
            className='border-4 p-2 px-3 border-primary-foreground rounded-full font-semibold transition-colors duration-1000'
            onClick={ChangCol}
            primary-color={color.primary}
            secondary-color={color.secondary}
            secondary-foreground-color={color.secondaryForeground}
            primary-foreground-color={color.primaryForeground}>
            {color.id}
          </button>
        ))}
      </div>
    </motion.section>
  );
}

export default ColorChanger;
