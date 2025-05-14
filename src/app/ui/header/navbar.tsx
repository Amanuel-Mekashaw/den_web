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

export function Navbar() {
  return (
    <div className="hidden w-full items-center justify-between bg-denovoDarkblue px-40 shadow-2xl md:flex">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo/denovo-logo-new.png"
          alt="Denovo Security logo"
          className="hidden py-3 dark:block"
          width={120}
          height={200}
        />
      </Link>

      {/* Navigation links */}
      <NavigationMenu className="flex h-fit items-center gap-3">
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-white hover:text-denovoYellow text-md"
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Blog */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-white hover:text-denovoYellow text-md"
                )}
              >
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Company */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-denovoYellow text-md">
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-denovoDarkblue">
              <ul className="grid gap-3 border-none bg-darkBlue p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md border-denovoPink border-2 bg-denovoDarkblue text-white p-6 no-underline outline-none hover:bg-denovoYellow hover:text-denovoDarkblue focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-md font-medium">
                        Denovo
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Denovo Security is a next-generation, AI-powered cloud
                        based security solution.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {navLinks.map((link) =>
                  link.submenus?.map((menu) =>
                    link.name === "Company" ? (
                      <ListItem
                        key={menu.name}
                        title={menu.name}
                        href={menu.link}
                      >
                        {link?.decription}
                      </ListItem>
                    ) : (
                      ""
                    )
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Products */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-denovoYellow text-md">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="flex w-[350px] flex-col gap-3 bg-darkBlue p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {navLinks.map((link) =>
                  link.submenus?.map((menu) =>
                    link.name === "Products" ? (
                      <ListItem
                        key={menu.name}
                        title={menu.name}
                        href={menu.link}
                      >
                        {/* {link.name} */}
                      </ListItem>
                    ) : (
                      ""
                    )
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Request Button */}
      <div className="">
        <Link
          href="/request_demo"
          className="w-full whitespace-nowrap rounded bg-denovoYellow px-6 py-2 text-center font-heading text-darkBlue hover:bg-opacity-90 lg:w-auto"
        >
          Request Demo
        </Link>
      </div>
    </div>
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
