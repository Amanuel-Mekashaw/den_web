"use client";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

import { navLinks } from "./navlinks";

export default function NavBar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companySubMenuOpen, setCompanySubMenuOpen] = useState(false);
  const [productsSubMenuOpen, setProductsSubMenuOpen] = useState(false);
  const [resourcesSubMenuOpen, setResourcesSubMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (key: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // const toggleSubMenu = (
  //   setSubMenuState: {
  //     (value: React.SetStateAction<boolean>): void;
  //     (value: React.SetStateAction<boolean>): void;
  //     (value: React.SetStateAction<boolean>): void;
  //     (arg0: boolean): void;
  //   },
  //   subMenuState: boolean,
  // ) => {
  //   if (isMobile) {
  //     setSubMenuState(!subMenuState); // Toggle the sub-menu open/close on mobile
  //   }
  // };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024); // Check if mobile or not
    if (window.innerWidth >= 1024) {
      setMenuOpen(false); // Close mobile menu on large screens
    }
  };

  useEffect(() => {
    handleResize(); // Check the initial window size on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (path: string) => {
    // Navigate with full page reload
    window.location.href = path;
  };

  return (
    <NavigationMenu.Root className="header top-0 left-0 w-full shadow-2xl bg-transparent p-0">
      <div className="flex w-full bg-darkBlue flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20">
        {/* NAV Denovo Logo */}
        <div className="relative z-[99] max-w-[250px] lg:w-full xl:max-w-[350px]">
          <Link href="/">
            <Image
              src="/images/logo/denovo-logo-new.png"
              alt="Denovo Security logo"
              className="hidden dark:block py-5"
              width={120}
              height={60}
            />
          </Link>
        </div>

        {/* NEW NAV Mobile navigations */}
        <div
          className={`menu-wrapper ${
            menuOpen ? "flex" : "hidden"
          } fixed top-0 left-0 z-50 h-screen w-full justify-center bg-white p-5 dark:bg-dark lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent`}
        >
          <div className="w-full self-center">
            <nav>
              <ul className="navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-x-10 lg:space-y-0">
                {navLinks.map((links, index) => (
                  <>
                    {/* Normal links */}
                    <NavigationMenu.List key={index}>
                      <Link
                        href={links.link || ""}
                        onClick={() => handleLinkClick(links.link || "")}
                        className="menu-scroll inline-flex items-center justify-center text-center font-heading text-base text-white hover:text-denovoYellow"
                      >
                        {links.name}
                      </Link>
                    </NavigationMenu.List>

                    {/* Links with sub menu */}
                    {links.submenus &&
                      links.submenus.map((submenu, index) => (
                        <NavigationMenu.List
                          key={index}
                          className={`submenu space-y-5 pt-5 transition duration-300 lg:absolute lg:top-[120%] lg:w-[350px] lg:rounded lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#2C3443] ${
                            companySubMenuOpen || !isMobile ? "block" : "hidden"
                          }`}
                        >
                          {/* BUTTON */}
                          <button
                            type="button"
                            onClick={() => toggleSubMenu(links.name)}
                            className="submenu-toggler inline-flex items-center justify-center text-center font-heading text-base text-white hover:text-denovoYellow"
                          >
                            {links.name}
                            <span className="pl-3">
                              <CaretDownIcon
                                className={` transition-transform duration-[250] ease-in ${
                                  openSubmenus ? "-rotate-180" : ""
                                }`}
                                aria-hidden
                              />
                            </span>
                          </button>
                          <NavigationMenu.Item>
                            <Link
                              href={submenu.link || ""}
                              onClick={() =>
                                handleLinkClick(submenu.link || "")
                              }
                              className="inline-flex items-center justify-center text-center font-heading text-base text-white hover:text-denovoYellow"
                            >
                              {submenu.name}
                            </Link>
                          </NavigationMenu.Item>
                        </NavigationMenu.List>
                      ))}
                  </>
                ))}
              </ul>
            </nav>
          </div>

          {/* NAV Mobile Toggler */}
          <div className="absolute top-1/2 right-5 z-50 flex -translate-y-1/2 items-center lg:static lg:translate-y-0 overflow-y-auto max-h-[400px]">
            <button
              className="menu-toggler relative z-50 text-dark dark:text-white lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                className={`cross ${
                  menuOpen ? "block" : "hidden"
                } fill-current`}
              >
                <path d="M14.0002 11.8226L21.6228 4.20001L23.8002 6.37745L16.1776 14L23.8002 21.6226L21.6228 23.8L14.0002 16.1774L6.37763 23.8L4.2002 21.6226L11.8228 14L4.2002 6.37745L6.37763 4.20001L14.0002 11.8226Z" />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                className={`menu ${menuOpen ? "hidden" : "block"} fill-current`}
              >
                <path d="M2.75 3.66666H19.25V5.49999H2.75V3.66666ZM2.75 10.0833H19.25V11.9167H2.75V10.0833ZM2.75 16.5H19.25V18.3333H2.75V16.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Script src="../vendors/sticky.js"></Script>
    </NavigationMenu.Root>
  );
}
