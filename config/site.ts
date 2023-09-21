export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lucas Peixoto",
  description: "Meu perfil pessoal online com informações de meu currículo",
  navItems: [
    {
      label: "Experiências",
      href: "/experiencias",
    },
    {
      label: "Habilidades",
      href: "/habilidades",
    },
    {
      label: "Artigos",
      href: "/artigos-publicados",
    },
  ],
  navMenuItems: [
    {
      label: "Apresentação",
      href: "/",
    },
    {
      label: "Experiências",
      href: "/experiencias",
    },
    {
      label: "Habilidades",
      href: "/habilidades",
    },
    {
      label: "Artigos",
      href: "/artigos-publicados",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/lucassacramoni/",
    github: "https://github.com/lucasspeixoto",
    facebook: "https://www.facebook.com/lspeixotof/",
    medium: "https://medium.com/@lspeixotodev",
  },
};
