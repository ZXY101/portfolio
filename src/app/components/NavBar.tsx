import { PropsWithChildren, useContext, useState } from 'react';
import { ScrollContext } from '../util';
import Image from 'next/image';

function NavItem({
  page,
  afterScroll,
  children,
}: PropsWithChildren<{ page: number; afterScroll?: () => void }>) {
  const { el } = useContext(ScrollContext);

  function onClick() {
    if (el) {
      el.scrollTo(0, window.innerHeight * page);
      afterScroll?.();
    }
  }

  return (
    <button
      className="[text-shadow:_2px_0_14px_rgb(255_255_255)] hover:bg-slate-50 hover:bg-opacity-[0.05] px-2 py-4 flex-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function NavItems({ afterScroll }: { afterScroll?: () => void }) {
  return (
    <>
      <NavItem afterScroll={afterScroll} page={0}>
        About me
      </NavItem>
      <NavItem afterScroll={afterScroll} page={4.4}>
        Skills
      </NavItem>
      <NavItem afterScroll={afterScroll} page={6.5}>
        Projects
      </NavItem>
      <NavItem afterScroll={afterScroll} page={7.8}>
        Contact
      </NavItem>
      <NavItem afterScroll={afterScroll} page={9}>
        Credits
      </NavItem>
    </>
  );
}

export function NavBar() {
  const [open, setOpen] = useState(false);

  function onBurgerButton() {
    setOpen((state) => !state);
  }

  function afterScroll() {
    setOpen(false);
  }

  return (
    <>
      <nav className="transition-opacity ease-in-out delay-150  bg-slate-700 bg-opacity-[0.05] fixed  w-screen z-10 sm:flex hidden justify-around text-2xl text-white">
        <NavItems />
      </nav>
      {open ? (
        <nav className="bg-slate-500 bg-opacity-90 fixed h-[100svh] w-screen z-10 flex flex-col justify-between gap-2 text-2xl text-white sm:hidden">
          <NavItems afterScroll={afterScroll} />
        </nav>
      ) : null}
      <div className="fixed z-10 top-0 right-0 sm:hidden p-2 bg-slate-300 active:bg-opacity-10 bg-opacity-0">
        <Image
          width={42}
          height={42}
          src="/svgs/burger-button.svg"
          alt="burger-button"
          onClick={onBurgerButton}
        />
      </div>
    </>
  );
}
