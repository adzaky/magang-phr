"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navList } from "@/datas";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0">
      <div className="relative md:hidden">
        <Button
          onClick={handleShowMenu}
          className="rounded-md border-2 bg-white p-1 backdrop-blur-sm hover:bg-white/80"
        >
          <Menu className="text-blue-400" />
        </Button>

        <div
          className={`w-100 fixed ${showMenu ? "opacity-100" : "-left-full opacity-0"} duration-[400ms] top-0 min-h-screen w-full transition-all ease-out`}
        >
          <div
            className={`fixed ${showMenu ? "left-0 ease-out" : "-left-full -ml-8 ease-in"} duration-[400ms] flex w-full justify-start drop-shadow-2xl transition-all`}
          >
            <div className="border-r-primary-dark-600 min-h-screen w-2/3 border-r bg-white">
              <div className="p-4">
                <Button
                  onClick={handleShowMenu}
                  className="ml-auto rounded-md border-2 bg-white p-1 backdrop-blur-sm hover:bg-white/80"
                >
                  <X className="text-gray-800 transition-transform duration-300 ease-out hover:rotate-90 hover:text-blue-400" />
                </Button>
              </div>
              <nav className="px-5 pb-10">
                <ul className="flex flex-col gap-4">
                  {navList.map(({ id, href, title }) => (
                    <Link key={id} href={href} onClick={handleShowMenu}>
                      <li className="group relative text-sm">
                        <span className="relative inline-block text-gray-800 hover:text-sky-600">
                          {title}
                          <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100" />
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
