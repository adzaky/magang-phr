"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavbarList from "./nav-list";
import NavbarMobile from "./navbar-mobile";
import { navList } from "@/datas";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsActive(window.scrollY > 60);
    });
  });
  return (
    <header
      className={`${isActive ? "bg-white text-gray-500 shadow-md" : "bg-none"} fixed top-0 z-10 w-full transition-all`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <NavbarMobile />
            <Link href="/">
              <Image
                width={140}
                height={40}
                alt="Logo"
                src={`${isActive ? "/phr-logo-color.png" : "/phr-logo-white.png"}`}
              />
            </Link>
          </div>
          <nav className="ml-4 hidden items-center gap-1 md:flex">
            {navList.map(({ id, href, title }) => (
              <NavbarList key={id} href={href} title={title} />
            ))}
          </nav>
        </div>
        <Button asChild className="rounded-md bg-[#f1bc00] px-4 py-2 hover:bg-[#f1bc00]/80">
          <Link href="" className="text-sm font-semibold">
            Login
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
