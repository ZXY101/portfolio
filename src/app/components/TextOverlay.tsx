import { Scroll } from '@react-three/drei';
import { HTMLAttributes, PropsWithChildren } from 'react';

type TextSectionProps = PropsWithChildren<{
  classOverwride?: HTMLAttributes<HTMLDivElement>['className'];
}>;

function TextSection({ classOverwride, children }: TextSectionProps) {
  const className =
    classOverwride ?? 'text-2xl sm:text-4xl p-2 flex flex-col gap-2  px-5';

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
    <div className="flex flex-col gap-2 justify-center w-[100svw] h-[50svh] sm:h-[100svh] items-center ">
      <h1 className="text-white text-2xl sm:text-3xl text-center ">{title}</h1>
      <a target="_blank" href={url} className="sm:max-w-[70svw] max-w-[90svw]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="object-contain " />
      </a>
      <p className="text-3xl ">{description}</p>
    </div>
  );
}

function Link({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      className=" hover:[text-shadow:_2px_0_14px_rgb(100_255_255)]"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function TextOverlay() {
  return (
    <Scroll html>
      <div className="text-white [text-shadow:_2px_0_14px_rgb(255_255_255)] text-center">
        <TextSection classOverwride="text-3xl sm:text-5xl text-white relative top-[20svh] [text-shadow:_2px_0_14px_rgb(100_100_100)]">
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
          <h1>{`I'm still a long ways off from fulfilling that dream...`}</h1>
        </TextSection>
        <TextSection>{`So until then, here's what I can do:`}</TextSection>
        <TextSection></TextSection>
        <div className="text-xl sm:text-4xl  ">
          <h1>{`And here's some stuff I've made`}</h1>
          <Project
            title="Mokuro Reader - Online manga reader"
            description="An online manga reader, gallery and stat tracker for mokuro processed manga"
            url="https://github.com/ZXY101/mokuro-reader"
            image="/images/mokuro-reader.gif"
          />
          <Project
            title="Quick image - Browser extension"
            description="Browser extension to instantly add an image to your last created anki card"
            url="https://github.com/ZXY101/quick-image"
            image="/images/quick-image.gif"
          />
          <Project
            title="Drumfish - Band website"
            description={`Webpage for the band "drumfish"`}
            url="https://github.com/ZXY101/drum-fish"
            image="/images/drumfish.gif"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-2 justify-around items-center h-[200svh] sm:h-[100svh] text-2xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Contact me:</h1>
            <Link href="mailto:tennershaun@gmail.com">
              tennershaun@gmail.com
            </Link>
            <Link href="https://www.linkedin.com/in/shaun-tenner-851b90193/">
              my linkedin
            </Link>
            <Link href="https://github.com/ZXY101">my github</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Attribution:</h1>
            <div>
              <p>This website was made using nextjs & threejs</p>
              <Link href="https://github.com/ZXY101/portfolio">
                You can find the full source code here
              </Link>
            </div>
            <Link href="https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/">
              {`"Building a Vaporwave scene with Three.js" by Maximeheckel`}
            </Link>
            <Link href="https://sketchfab.com/3d-models/torii-eae805e8cce94250b8e36b5e459f988d">
              Tori gate model by yankobe
            </Link>
          </div>
        </div>
      </div>
    </Scroll>
  );
}
