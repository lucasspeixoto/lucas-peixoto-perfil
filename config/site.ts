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
  ],
  links: {
    whatsapp: "https://api.whatsapp.com/send?phone=5519982621117&text=Ol%C3%A1%21+Lucas, tudo bem ?&lang=pt_pt",
    linkedin: "https://www.linkedin.com/in/lucassacramoni/",
    github: "https://github.com/lucasspeixoto",
    facebook: "https://www.facebook.com/lspeixotof/",
    medium: "https://medium.com/@lspeixotodev",
  },
};
