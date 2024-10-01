"use client";
import React, { useState } from "react";
import { Gutter } from "./Gutter";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ThemeSwithcer";
import Image from "next/image";
import { navlinks } from "@/constant";

type Props = {};

function Navbar({}: Props) {
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <Gutter className="w-full h-[80px] relative flex items-center justify-between">
      {/* Logo */}
      <Link href={"/"} className="">
        <Image
          src="/logo.png"
          alt="logo"
          height={500}
          width={500}
          className="h-[60px] w-[100px] "
        />
      </Link>

      {/* Nav-Desktop */}
      <div className="md:flex items-center gap-4 hidden">
        <ul className="flex items-center justify-between gap-6">
          {navlinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-text hover:text-hover text-lg duration-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <ModeToggle />
      </div>

      {/* Nav-Mobile */}
      <div className="flex items-center justify-center gap-2 md:hidden">
        <ModeToggle />
        <Button
          variant={"ghost"}
          onClick={() => setOpenMenu(true)}
          className=""
        >
          <Menu />
        </Button>
      </div>
      {OpenMenu && (
        <div className="absolute gap-8 top-0 left-0 flex flex-col md:hidden bg-background w-full h-screen py-6 px-2">
          <div className="flex items-end justify-end w-full">
            <Button
              variant={"ghost"}
              onClick={() => setOpenMenu(false)}
              className=""
            >
              <X />
            </Button>
          </div>

          <ul className="flex flex-col  items-center justify-center  w-full  gap-10">
            {navlinks.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                onClick={() => setOpenMenu(false)}
              >
                <Button variant={"ghost"} className="font-medium text-xl">
                  {item.name}
                </Button>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </Gutter>
  );
}

export default Navbar;
