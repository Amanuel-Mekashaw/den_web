'use client';
import Link from "next/link";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    // Ensure the menu state is updated on resize
    if (window.innerWidth >= 1024) {
      setMenuOpen(false); // Close mobile menu on large screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavigationMenu.Root className="absolute header top-0 left-0 w-full">
      <div className="flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20">
        <div className="relative z-[99] max-w-[250px] lg:w-full xl:max-w-[350px]">
          <Link href="/">
            <img src="../images/logo/logo-removebg-preview.png" alt="logo" className="hidden h-[100px] dark:block" />
          </Link>
        </div>
        <div className={`menu-wrapper ${menuOpen ? 'flex' : 'hidden'} fixed top-0 left-0 z-50 h-screen w-full justify-center bg-white p-5 dark:bg-dark lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent`}>
          <div className="w-full self-center">
            <nav>
              <ul className="navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-x-10 lg:space-y-0">
                <NavigationMenu.List>
                  <Link href="/" className="menu-scroll inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                    Home
                  </Link>
                </NavigationMenu.List>
                <NavigationMenu.List>
                  <Link href="/blog" className="menu-scroll inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                    Blog
                  </Link>
                </NavigationMenu.List>
                <NavigationMenu.List className="submenu-item group relative">
                  <Link href="/about" className="submenu-taggler inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                    Company
                    <span className="pl-3">
                      <CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </span>
                  </Link>
                  <NavigationMenu.List className="submenu hidden space-y-5 pt-5 transition duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[350px] lg:rounded lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#2C3443]">
                    <NavigationMenu.Item>
                      <Link href="/about" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        About
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/about/contact" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Contact
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link href="/about/career" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Career at Denovo
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/about/partnership" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Partnership
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/about" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        founded by senior security experts
                      </Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu.List>
                <NavigationMenu.List className="submenu-item group relative">
                  <Link href="/products" className="submenu-taggler inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                    Products
                    <span className="pl-3">
                      <CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </span>
                  </Link>
                  <NavigationMenu.List className="submenu hidden space-y-5 pt-5 transition duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[350px] lg:rounded lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#2C3443]">
                    <NavigationMenu.Item>
                      <Link href="/products" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Overview
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/products/denovo-core-zero-trust" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Denovo Core Zero trust
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/products/browser-isolation" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Browser Isolation
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/products/data-loss-prevention" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Data Loss Prevention
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/products/ai-powered-threat-analysis" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        AI-powered Threat Analysis
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/products/aa-policy-gen" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        AI-Assisted Policy Gen
                      </Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu.List>
                <NavigationMenu.List className="submenu-item group relative">
                  <Link href="/papers" className="submenu-taggler inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                    Resources
                    <span className="pl-3">
                      <CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </span>
                  </Link>
                  <NavigationMenu.List className="submenu hidden space-y-5 pt-5 transition duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[350px] lg:rounded lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#2C3443]">
                    <NavigationMenu.Item>
                      <Link href="/papers" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        papers
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link href="/video-links" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Video links
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/video-links" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Webinars
                      </Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <Link href="/video-links" className="inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white">
                        Guide lines
                      </Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu.List>
                <li className="submenu-item group relative"></li>
              </ul>
            </nav>
          </div>
          &nbsp;&nbsp;
          <div className="absolute bottom-0 left-0 flex w-full items-center justify-between space-x-5 self-end p-5 lg:static lg:w-auto lg:self-center lg:p-0">
            <Link href="/request_demo" className="w-ful whitespace-nowrap rounded bg-primary py-2 px-6 text-center font-heading text-white hover:bg-opacity-90 lg:w-auto">
              Request Demo
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 right-5 z-50 flex -translate-y-1/2 items-center lg:static lg:translate-y-0 overflow-y-auto max-h-[400px]">
          <button className="menu-toggler relative z-50 text-dark dark:text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="28" height="28" viewBox="0 0 28 28" className={`cross ${menuOpen ? 'block' : 'hidden'} fill-current`}>
              <path d="M14.0002 11.8226L21.6228 4.20001L23.8002 6.37745L16.1776 14L23.8002 21.6226L21.6228 23.8L14.0002 16.1774L6.37763 23.8L4.2002 21.6226L11.8228 14L4.2002 6.37745L6.37763 4.20001L14.0002 11.8226Z" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 22 22" className={`menu ${menuOpen ? 'hidden' : 'block'} fill-current`}>
              <path d="M2.75 3.66666H19.25V5.49999H2.75V3.66666ZM2.75 10.0833H19.25V11.9167H2.75V10.0833ZM2.75 16.5H19.25V18.3333H2.75V16.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </NavigationMenu.Root>
  );
}
