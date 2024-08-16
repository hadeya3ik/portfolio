import  ParallaxText  from "./ParallaxText";
import React from "react";
import { RollLink } from "./RollLink";

type LinkItem = {
  href: string;
  label: string;
};

type LinkListProps = {
  links: LinkItem[];
};

const pageLinks: LinkItem[] = [
  { href: "mailto:h3ikram@uwaterloo.ca", label: "Contact" },
];

const socialLinks: LinkItem[] = [
  { href: "https://github.com/hadeya3ik", label: "Github" },
  { href: "https://www.linkedin.com/in/hadeya-ikram-23197622a/", label: "Linkedin" },
  { href: "https://dribbble.com/hdyik", label: "Dribble" },
];

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <RollLink key={index} href={link.href}>
          {link.label}
        </RollLink>
      ))}
    </div>
  );
};

const Footer : React.FC = () => {
    return (
      <div className="w-full bg-accent h-[70vh] text-accent-foreground" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className='fixed h-[70vh] bottom-0 py-12'>
          <div className="w-[100vw] text-nowrap text-2xl sm:text-4xl px-4 sm:px-12 flex  pb-12 uppercase items-center justify-between">
            <p>Lets Collaborate. </p>
            <p></p>
          </div>
          <div className="w-full text-[17vh]">
            <ParallaxText baseVelocity={3}>h3ikram@uwaterloo.ca</ParallaxText>
          </div>
          <div className="w-[100vw] flex px-12 pt-12 gap-8 text-4xl sm:text-5xl">
            <LinkList links={socialLinks} />
            <LinkList links={pageLinks} />
          </div>
          <div className="w-[100vw] text-nowrap text-2xl sm:text-4xl px-4 sm:px-12 flex pt-12 uppercase items-center justify-end">
            <p>Designed and coded by hadeya.</p>
          </div>
        </div>
      </div>
    );
}

export default Footer