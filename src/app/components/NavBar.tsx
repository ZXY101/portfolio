import { PropsWithChildren, useContext } from 'react';
import { ScrollContext } from '../util';

function NavItem({ page, children }: PropsWithChildren<{ page: number }>) {
  const { el } = useContext(ScrollContext);

  function onClick() {
    if (el) {
      el.scrollTo(0, window.innerHeight * page);
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

export function NavBar() {
  return (
    <nav className="hover:opacity-100 opacity-0 transition-opacity ease-in-out delay-150  bg-slate-700 bg-opacity-[0.05] fixed  w-screen z-10 sm:flex hidden justify-around text-2xl text-white">
      <NavItem page={0}>About me</NavItem>
      <NavItem page={4.4}>Skills</NavItem>
      <NavItem page={6.5}>Projects</NavItem>
      <NavItem page={7.8}>Contact</NavItem>
      <NavItem page={9}>Credits</NavItem>
    </nav>
  );
}
