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
  const { el } = useScroll();
  return (
    <Scroll html>
      <div className="text-white [text-shadow:_2px_0_14px_rgb(255_255_255)] text-center">
        <TextSection classOverwride="text-xl sm:text-5xl text-white relative top-[20svh] [text-shadow:_2px_0_14px_rgb(100_100_100)]">
          <h2>{`Hi, I'm Shaun!`}</h2>
          <h2>{`Welcome to my site :)`}</h2>
        </TextSection>
        <TextSection>
          <h1>{`I'm a software dev born and raised in South Africa`}</h1>
          <h1>{`I love Japan, nature, playing games & making cool things`}</h1>
        </TextSection>
        <TextSection>
          <h1>{`Most of my professional experience is in web & mobile development`}</h1>
          <h1>{`but outside of work I love learning new things and messing around in other domains`}</h1>
        </TextSection>
        <TextSection>
          <h1>{`It's my dream to one day open my own indie game studio in Japan`}</h1>
        </TextSection>
        <TextSection>Until then, these are my skills</TextSection>
        <TextSection></TextSection>
        <TextSection>And these are some projects</TextSection>
        <TextSection>Contact Me</TextSection>
        <TextSection>Credits n stuff</TextSection>
      </div>
    </Scroll>
  );
}
