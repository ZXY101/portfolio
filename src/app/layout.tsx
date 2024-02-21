import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactThreeFiber } from '@react-three/fiber';
import { Water } from 'three-stdlib';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
