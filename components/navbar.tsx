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

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import Image from "./Image";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-1 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="hover:underline hidden sm:block font-bold text-primary">
              Sobre mim
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-2 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:underline"
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
        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
            <Image
              src={`/static/images/youtube.png`}
              alt="Youtube Link"
              width={25}
              height={25}
            />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <Image
              src={`/static/images/github.png`}
              alt="Github Link"
              width={25}
              height={25}
            />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
          >
            <Image
              src={`/static/images/linkedin.png`}
              alt="Linkedin Link"
              width={25}
              height={25}
            />
          </Link>

          <Link isExternal href={siteConfig.links.facebook} aria-label="Medium">
            <Image
              src={`/static/images/medium.png`}
              alt="Medium Link"
              width={25}
              height={25}
            />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="gap-2 sm:hidden basis-1 pl-1" justify="end">
        <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
          <Image
            src={`/static/images/youtube.png`}
            alt="Youtube Link"
            width={18}
            height={18}
          />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <Image
            src={`/static/images/github.png`}
            alt="Github Link"
            width={18}
            height={18}
          />
        </Link>
        <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
          <Image
            src={`/static/images/linkedin.png`}
            alt="Linkedin Link"
            width={18}
            height={18}
          />
        </Link>
        <Link isExternal href={siteConfig.links.facebook} aria-label="Medium">
          <Image
            src={`/static/images/medium.png`}
            alt="Medium Link"
            width={18}
            height={18}
          />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
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
