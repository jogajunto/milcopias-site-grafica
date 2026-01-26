export const organizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://grafica.milcopias.com.br/#localbusiness",
    url: process.env.SITE_URL,
    logo: `${process.env.SITE_URL}/schema.png`,
    image: `${process.env.SITE_URL}/opengraph-image.png`,
    name: "Mil Cópias Gráfica Rápida",
    description: "Garantimos uma entrega ágil, qualidade consistente e soluções completas para materiais gráficos personalizados. Cartão de visita, banners e muito mais.",
    email: "graficarapida@milcopias.com.br",
    telephone: "+55 (27) 3372-7171",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Augusto de Carvalho, 1435, Centro",
      addressLocality: "Linhares",
      addressCountry: "BR",
      addressRegion: "Espírito Santo",
      postalCode: "29900153",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Mil Cópias",
      url: "https://milcopias.com.br/",
    },
    sameAs: ["https://www.facebook.com/milcopias/", "https://www.instagram.com/milcopias/"],
  };
};
