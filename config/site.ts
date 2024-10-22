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
      href: "/artigos-e-apresentacoes",
    },
    {
      label: "Meu canal",
      href: "/meu-canal",
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
      href: "/artigos-e-apresentacoes",
    },
    {
      label: "Meu canal",
      href: "/meu-canal",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/lspeixotodev/",
    github: "https://github.com/lucasspeixoto",
    medium: "https://medium.com/@lspeixotodev",
    youtube: "https://www.youtube.com/channel/UC6LY6Xw5ff_KaHwjHWRA9oA?sub_confirmation=1",
  },
};
