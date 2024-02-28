import { Scroll, useScroll } from '@react-three/drei';
import { HTMLAttributes, PropsWithChildren } from 'react';

type TextSectionProps = PropsWithChildren<{
  classOverwride?: HTMLAttributes<HTMLDivElement>['className'];
}>;

function TextSection({ classOverwride, children }: TextSectionProps) {
  const className =
    classOverwride ??
    'text-xl sm:text-4xl top-[33svh] p-2 flex flex-col gap-3 px-10';

  return (
    <section className="h-screen w-screen">
      <div className={className}>{children}</div>
    </section>
  );
}

export function TextOverlay() {
  return (
    <Scroll html>
      <div className="text-white [text-shadow:_2px_0_14px_rgb(255_255_255)] text-center">
        <TextSection classOverwride="text-xl sm:text-5xl text-white relative top-[20svh] [text-shadow:_2px_0_14px_rgb(100_100_100)]">
          <h2>{`Hi, I'm Shaun!`}</h2>
          <h2>{`Welcome to my site :)`}</h2>
        </TextSection>
        <TextSection>
          <h1>{`I'm a software dev born and raised in South Africa`}</h1>
          <h1>{`I love Japan, nature, playing games, and making cool things`}</h1>
        </TextSection>
        <TextSection>
          <h1>{`Most of my experience is in mobile & web development`}</h1>
          <h1>{`Professionally I have around 3 years of work experience - mainly in react native development`}</h1>
          <h1>{`Outside of work I love learning and making stuff to make my life easier`}</h1>
        </TextSection>
        <TextSection>
          <h1>{`All of my free time goes into learning Japanese & upskilling`}</h1>
          <br />
          <h1>{`My dream is to one day create my own indie game studio in Japan`}</h1>
          <h1>{`I'm still a long ways off from fufilling that dream...`}</h1>
        </TextSection>
        <TextSection>{`So until then, here's what I can do:`}</TextSection>
        <TextSection></TextSection>
        <TextSection>And these are some projects</TextSection>
        <TextSection>Contact Me</TextSection>
        <TextSection>Credits n stuff</TextSection>
      </div>
    </Scroll>
  );
}
