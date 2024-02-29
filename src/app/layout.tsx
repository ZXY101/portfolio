import type { Metadata } from 'next';
import { Amatic_SC } from 'next/font/google';
import './globals.css';
import { ReactThreeFiber } from '@react-three/fiber';
import { Water } from 'three-stdlib';
import { Analytics } from '@vercel/analytics/react';

const amaticSC = Amatic_SC({ weight: ['700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shaun Tenner | Portfolio',
  description: "Shaun Tenner's 3D Portfolio Website",
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: ReactThreeFiber.Object3DNode<Water, typeof Water>;
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={amaticSC.className}>{children}</body>
      <Analytics />
    </html>
  );
}
