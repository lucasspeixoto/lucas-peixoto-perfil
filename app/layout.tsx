import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head />
      <Providers
        themeProps={{ attribute: "class", defaultTheme: "dark", children }}
      >
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-5xl py-2 px-6 flex-grow">
              {children}
            </main>
            <footer className="select-none w-full flex items-center justify-center py-3">
              <span className="text-default-600 mr-1">Desenvolvido com</span>
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextjs.org/"
                title="nextui.org homepage"
              >
                <p className="text-primary hover:underline">NextJs</p>
              </Link>
            </footer>
          </div>
        </body>
      </Providers>
    </html>
  );
}
