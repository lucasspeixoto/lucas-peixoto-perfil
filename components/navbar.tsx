import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  SearchIcon,
  LinkedinIcon,
  FacebookIcon,
  MediumIcon,
} from "@/components/icons";

import { FaWhatsapp } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-1 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="hidden sm:block font-bold text-cyan-500 dark:text-cyan-300">
              Sobre min
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-2 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
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
        <NavbarItem className="hidden sm:flex gap-6">
          <Link
            isExternal
            href={siteConfig.links.whatsapp}
            aria-label="Whatsapp"
          >
            <FaWhatsapp size={24} color="#858585" />
          </Link>

          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-[#858585]" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
          >
            <LinkedinIcon className="text-[#858585]" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.facebook}
            aria-label="Facebook"
          >
            <FacebookIcon className="text-[#858585]" />
          </Link>
          <Link isExternal href={siteConfig.links.facebook} aria-label="Medium">
            <MediumIcon className="text-[#858585]" />
          </Link>
          <ThemeSwitch />
          {/* <LanguageSwitcher /> */}
        </NavbarItem>
        {/* <NavbarItem className="hidden sm:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="gap-2 sm:hidden basis-1 pl-1" justify="end">
        <Link isExternal href={siteConfig.links.whatsapp} aria-label="Whatsapp">
        <FaWhatsapp size={24} className="text-[#858585]" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon size={18} className="text-[#858585]" />
        </Link>
        <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
          <LinkedinIcon size={18} className="text-[#858585]" />
        </Link>
        <Link isExternal href={siteConfig.links.facebook} aria-label="Facebook">
          <FacebookIcon size={18} className="text-[#858585]" />
        </Link>
        <Link isExternal href={siteConfig.links.facebook} aria-label="Medium">
          <MediumIcon size={18} className="text-[#858585]" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
        {/* <LanguageSwitcher /> */}
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
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
