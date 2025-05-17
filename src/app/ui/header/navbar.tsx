"use client";

import { navLinks } from "./navlinks";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { LucideMenu } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
      {/* Large navbar */}
      {/* Large navbar */}
      <div className="hidden w-full items-center justify-between bg-denovoDarkblue px-6 lg:px-20 xl:px-40 py-3 shadow-2xl md:flex">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/denovo-logo-new.png"
            alt="Denovo Security logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Navigation links */}
        <NavigationMenu className="flex items-center gap-6">
          <NavigationMenuList className="flex items-center gap-2">
            {/* Home */}
            <NavigationMenuItem>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white hover:text-denovoYellow text-sm"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Blog */}
            <NavigationMenuItem>
              <Link href="/blog" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white hover:text-denovoYellow text-sm"
                  )}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Company */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-denovoYellow text-sm">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-denovoDarkblue">
                <ul className="grid gap-3 bg-darkBlue p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="flex h-full w-full flex-col justify-end rounded-md bg-denovoDarkblue text-white p-6 hover:bg-denovoYellow hover:text-denovoDarkblue transition-colors"
                      >
                        <div className="mb-2 mt-4 text-md font-semibold">
                          Denovo
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Denovo Security is a next-generation, AI-powered
                          cloud-based security solution.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {navLinks.map((link) =>
                    link.name === "Company"
                      ? link.submenus?.map((menu) => (
                          <ListItem
                            key={menu.name}
                            title={menu.name}
                            href={menu.link}
                          >
                            {link?.decription}
                          </ListItem>
                        ))
                      : null
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Products */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-denovoYellow text-sm">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-denovoDarkblue">
                <ul className="grid gap-3 bg-darkBlue p-4 md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2">
                  {navLinks.map((link) =>
                    link.name === "Products"
                      ? link.submenus?.map((menu) => (
                          <ListItem
                            key={menu.name}
                            title={menu.name}
                            href={menu.link}
                          />
                        ))
                      : null
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-denovoYellow text-sm">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-denovoDarkblue">
                <ul className="grid gap-3 bg-darkBlue p-4 md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2">
                  {navLinks.map((link) =>
                    link.name === "Resources"
                      ? link.submenus?.map((menu) => (
                          <ListItem
                            key={menu.name}
                            title={menu.name}
                            href={menu.link}
                          />
                        ))
                      : null
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Request Demo Button */}
        <Link
          href="/request_demo"
          className="rounded bg-denovoYellow px-6 py-2 text-sm font-semibold text-denovoDarkblue hover:bg-opacity-90 transition"
        >
          Request Demo
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="relative flex items-center justify-between bg-denovoDarkblue px-4 py-3 md:hidden w-full z-50 shadow-md">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo/denovo-logo-new.png"
            alt="Denovo Security logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setToggleMenu((current) => !current)}
          className="text-white rounded-full p-2 hover:bg-white/10 transition"
        >
          <LucideMenu size={32} />
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={twMerge(
            "absolute left-0 top-full w-full bg-denovoDarkblue flex flex-col gap-1 px-4 py-4 transition-all duration-200",
            toggleMenu ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          {["Home", "Blog"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : "/blog"}
              className="w-full rounded px-3 py-2 text-lg text-denovoYellow font-medium hover:bg-white/10 transition-colors"
              onClick={() => setToggleMenu(false)}
            >
              {item}
            </Link>
          ))}

          {/* Submenus from navLinks */}
          {navLinks
            .filter((link) =>
              ["Company", "Products", "Resources"].includes(link.name)
            )
            .map((link) => (
              <div key={link.name} className="flex flex-col gap-1 pt-2">
                <span className="text-lg text-denovoYellow font-medium uppercase tracking-wide px-3">
                  {link.name}
                </span>
                {link.submenus?.map((submenu) => (
                  <Link
                    key={submenu.name}
                    href={submenu.link || ""}
                    className="w-full rounded px-8 py-2 text-white text-sm hover:bg-white/10 transition"
                    onClick={() => setToggleMenu(false)}
                  >
                    {submenu.name}
                  </Link>
                ))}
              </div>
            ))}

          {/* Request Demo Button */}
          <Link
            href="/request_demo"
            className="mt-4 w-full text-center rounded bg-denovoYellow px-4 py-2 text-sm font-bold text-denovoDarkblue hover:bg-opacity-90"
            onClick={() => setToggleMenu(false)}
          >
            Request Demo
          </Link>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "focus:bg-accent focus:text-accent-foreground block select-none rounded-md bg-denovoDarkblue text-white p-3 leading-none no-underline outline-none transition-colors hover:bg-denovoYellow hover:text-denovoDarkblue",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm">{children}</p>}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
