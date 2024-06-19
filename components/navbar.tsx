"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "@styled-icons/evaicons-solid/Menu";
import { Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";
import { ThemeButton } from "./theme-button";
import { motion } from "framer-motion";

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/project",
  },
  {
    title: "Posts",
    href: "/post",
  },
  {
    title: "GitHub",
    href: "https://github.com/ChristopherHaris",
  },
];

function Navbar() {
  return (
    <div className="fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="flex justify-between px-5 py-3 relative">
        <>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded">
                  <Menu className="h-6 w-6 md:h-8 md:w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full justify-between mt-5">
                  <div className="flex flex-col w-full gap-3">
                    {menu.map((menuItem) => (
                      <div key={menuItem.title}>
                        {menuItem.href && (
                          <Suspense
                            fallback={
                              <div className="flex justify-center items-center h-screen">
                                <BarLoader
                                  color={"#000000"}
                                  loading={true}
                                  height={4}
                                />
                              </div>
                            }
                          >
                            <SheetClose asChild>
                              <Link
                                href={menuItem.href}
                                className="block px-2 py-1 text-base sm:text-lg"
                              >
                                {menuItem.title}
                              </Link>
                            </SheetClose>
                          </Suspense>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="pb-6">
                    <ThemeButton />
                  </div>
                </div>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex lg:hidden">
            <Link href="/" passHref className="flex justify-center">
              <motion.div
                whileHover={{ rotate: 10 }} // Adjust the angle as needed
              >
                <Image
                  className="pr-2"
                  src="/assets/sakana.png"
                  width={50}
                  height={50}
                  alt="sakana"
                />
              </motion.div>
              <h1 className="text-lg font-semibold my-auto">Sakana</h1>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Link href="/" passHref className="flex justify-center">
              <motion.div
                className="flex justify-center"
                whileHover={{ rotate: 10 }} // Adjust the angle as needed
              >
                <Image
                  className="pr-2"
                  src="/assets/sakana.png"
                  width={50}
                  height={50}
                  alt="sakana"
                />
              </motion.div>
              <h1 className="text-lg font-semibold my-auto">Sakana</h1>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="pr-10">
                <NavigationMenuItem>
                  <Link href="/project" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/post" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Posts
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="https://github.com/ChristopherHaris"
                    target="_blank"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      GitHub
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
              <ThemeButton />
            </NavigationMenu>
          </div>
        </>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
