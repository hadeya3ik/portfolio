import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import { Spectral } from 'next/font/google'
import localfont from "next/font/local";
import { Noto_Serif } from 'next/font/google';
import "./globals.css";

const notoSerif = Noto_Serif({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: "--font-notoSerif"
});

const ppNeueMontreal = localfont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-ppneuemonteal', 
});

const inter = Inter({ subsets: ["latin"] });

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], 
  style: ["normal", "italic"], 
  variable: "--font-spectral"
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "Hadeya Ikram",
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className={`${ppNeueMontreal.className} ${notoSerif.variable} ${spectral.variable} text-primary-foreground`}>{children}</body>
    </html>
  );
}
