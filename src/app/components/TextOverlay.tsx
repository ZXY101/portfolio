import { Scroll } from '@react-three/drei';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function TextSection({ children }: PropsWithChildren) {
  return <section className="h-screen w-screen ">{children}</section>;
}

export function TextOverlay({ onClick }: { onClick: () => void }) {
  return (
    <Scroll html>
      <div className="text-white glow text-center">
        <TextSection>
          <div className="text-4xl text-white relative top-[20svh] ">
            <h2>{`Hi, I'm Shaun!`}</h2>
            <h2>{`Welcome to my site :)`}</h2>
          </div>
        </TextSection>
        <TextSection>
          <h2 className="text-3xl relative top-[33svh]">
            {`I'm a software developer from South Africa and I like making cool things.`}
          </h2>
        </TextSection>
        <TextSection>
          <h2 className="text-2xl relative top-[33svh]">
            Third page after camera pan and stuff, hmmm lorem
          </h2>
          <Link href="/playground">Moo</Link>
        </TextSection>
      </div>
    </Scroll>
  );
}
