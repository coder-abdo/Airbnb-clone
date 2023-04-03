import Link from "next/link";
import { Container } from "../container";
import { Logo } from "./logo";
import { SearchBar } from "./search";
import { UserMenu } from "./userMenu";

export const Navbar = () => {
  return (
    <nav className="navbar px-4 fixed w-full bg-base-100 z-10 shadow-sm">
      <div className="flex-1">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center">
        <SearchBar />
      </div>
      <div className="navbar-end">
        <UserMenu />
      </div>
    </nav>
  );
};
