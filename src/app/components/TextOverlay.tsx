import { Scroll } from '@react-three/drei';
import { HTMLAttributes, PropsWithChildren } from 'react';

type TextSectionProps = PropsWithChildren<{
  classOverwride?: HTMLAttributes<HTMLDivElement>['className'];
}>;

function TextSection({ classOverwride, children }: TextSectionProps) {
  const className =
    classOverwride ?? 'text-xl sm:text-4xl p-2 flex flex-col gap-3 px-10';

  return (
    <section className="h-screen w-screen">
      <div className={className}>{children}</div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

function Project({ title, description, image, url }: ProjectProps) {
  return (
    <a target="_blank" href={url}>
      <div className="flex flex-col gap-2 justify-center w-screen h-screen items-center ">
        <h1 className="text-white text-3xl text-center ">{title}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="object-contain h-3/4 w-2/3" />
        <p className="text-2xl ">{description}</p>
      </div>
    </a>
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
        <div className="text-xl sm:text-4xl top-[33svh] p-2 flex flex-col gap-3 px-10">
          <h1>{`And here's some stuff I've made`}</h1>
          <div className="flex flex-col gap-4 pt-4">
            <Project
              title="Mokuro Reade | Online manga reader"
              description="An online reader, gallery and stat tracker for mokuro processed manga."
              url="https://github.com/ZXY101/mokuro-reader"
              image="/images/mokuro-reader.gif"
            />
            <Project
              title="Quick image | Browser extension"
              description="Simple browser extension to instantly add an image to your last created anki card."
              url="https://github.com/ZXY101/quick-image"
              image="/images/quick-image.gif"
            />
            <Project
              title="Drumfish | Band website"
              description="Simple webpage for a friend."
              url="https://github.com/ZXY101/drum-fish"
              image="/images/drumfish.gif"
            />
          </div>
        </div>
        <TextSection classOverwride="text-xl sm:text-4xl p-2 flex flex-col gap-3 px-10 relative top-[33svh]">
          <h1>Contact me</h1>
          <h1>email: tennershaun@gmail.com</h1>
          <h1>github</h1>
          <h1>linked in</h1>
        </TextSection>
        <TextSection>sefklsd sdklfjklsd sdkf dsf</TextSection>
      </div>
    </Scroll>
  );
}
