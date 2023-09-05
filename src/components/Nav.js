"use client";

/* This example requires Tailwind CSS v2.0+ */
import { useContext, useEffect, useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.jpg";

export default function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="lg:absolute max-lg:top-0 max-lg:bg-logo-color relative max-sm:shadow max-w-[1200px] -bottom-8 w-full lg:h-12 h-24 shadow-xl bg-white">
        {/* desktop menu */}
        <div className="flex justify-between items-center h-full w-full px-4">
          <div className="flex gap-12">
            <Link
              href={""}
              className="lg:block hidden text-link-color font-medium"
            >
              Home
            </Link>
            <Link
              href={""}
              className="lg:block hidden text-link-color font-medium"
            >
              About Us
            </Link>
            <Link
              href={""}
              className="lg:block hidden text-link-color font-medium"
            >
              Services
            </Link>

            <Image height={90} src={Logo} alt="logo" className="lg:hidden" />
          </div>
          <div className="hidden lg:flex">
            <ul className="hidden lg:flex gap-4">
              <Link href={""}>
                <li className="text-link-color font-medium">Contact</li>
              </Link>
            </ul>
          </div>

          <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
            <Bars3Icon
              stroke="#fcfcfc"
              className="block h-8 w-8"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={
            isMenuOpen
              ? "fixed left-0 top-0 w-[35%] max-sm:w-[65%] lg:hidden h-screen bg-logo-color p-8 ease-in duration-500 z-20 text-white"
              : "fixed bg-logo-color w-[35%] max-sm:w-[65%] left-[-100%] h-screen top-0 p-10 ease-in duration-500 z-20 text-white"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <XMarkIcon
                className="block h-6 w-6"
                color="#fcfcfc"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href={""}>
                <li onClick={() => setIsMenuOpen(false)} className="py-4">
                  Home
                </li>
              </Link>
              <Link href={""}>
                <li onClick={() => setIsMenuOpen(false)} className="py-4">
                  about
                </li>
              </Link>
              <Link href={""}>
                <li onClick={() => setIsMenuOpen(false)} className="py-4">
                  services
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
