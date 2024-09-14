import React from "react";
import { motion } from "framer-motion";
import { MaskedText } from "./MaskedText";

const DURATION = 0.35;
const STAGGER = 0.01;

interface RollLinkProps {
  children: string;
  href: string;
  openInNewTab?: boolean;
}

export const RollLink: React.FC<RollLinkProps> = ({ children, href, openInNewTab = true }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target={openInNewTab ? "_blank" : "_self"} 
      rel={openInNewTab ? "noopener noreferrer" : undefined} 
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
