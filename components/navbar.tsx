"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="ul" className="divide-x-2 gap-2 max-w-fit ml-2">
          <NextLink
            className={`select-none gap-1 hover:underline hidden sm:block text-secondary ${
              pathname === "/" ? "underline" : ""
            }`}
            href="/"
          >
            Sobre mim
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-2 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={`leading-tight tracking-wider font-medium select-none gap-1 hover:underline hidden sm:block ${
                  pathname === item.href ? "underline text-primary" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
            <Tooltip showArrow={true} content="Meu canal">
              <FaYoutube size="30" className="text-red-500" />
            </Tooltip>
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <Tooltip showArrow={true} content="Github">
              <FaGithub size="30" className="text-gray-500" />
            </Tooltip>
          </Link>
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
          >
            <Tooltip showArrow={true} content="Linkedin">
              <FaLinkedin size="30" className="text-blue-500" />
            </Tooltip>
          </Link>

          <Link isExternal href={siteConfig.links.medium} aria-label="Medium">
            <Tooltip showArrow={true} content="Meus Artigos">
              <FaMedium size="30" className="dark:text-white text-black" />
            </Tooltip>
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="gap-2 sm:hidden basis-1 pl-1" justify="end">
        <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
          <Tooltip showArrow={true} content="Meu canal">
            <FaYoutube size="20" className="text-red-500" />
          </Tooltip>
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <Tooltip showArrow={true} content="Github">
            <FaGithub size="20" className="text-gray-500" />
          </Tooltip>
        </Link>
        <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
          <Tooltip showArrow={true} content="Linkedin">
            <FaLinkedin size="20" className="text-blue-500" />
          </Tooltip>
        </Link>
        <Link isExternal href={siteConfig.links.medium} aria-label="Medium">
          <Tooltip showArrow={true} content="Meus artigos">
            <FaMedium size="20" className="dark:text-white text-black" />
          </Tooltip>
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`leading-tight tracking-wider select-none gap-1 hover:underline ${
                  pathname === item.href ? "underline text-primary" : "dark:text-white text-black"
                }`}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
