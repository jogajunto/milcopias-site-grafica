import Link from "next/link";

import { getCurrentYear } from "@/utilities/get-current-year";

import { fetchAllServices } from "@/collections/Services/data";
import { Button } from "@/components/Button";
import { MilCopiasTecnologia } from "@/components/MilCopias";
import { Social } from "@/components/Social";

const MENU_INSTITUTIONAL = [
  { label: "Sobre nós", href: "/empresa/" },
  { label: "Casos de sucesso", href: "/casos-de-sucesso" },
  { label: "Área do cliente", href: "/area-do-cliente/" },
  { label: "Blog", href: "/blog/" },
  { label: "Política de privacidade", href: "/politica-de-privacidade/" },
];

const MENU_CONTACT = [
  { label: "Orçamento", href: "/contato" },
  { label: "Suporte técnico", href: "/area-do-cliente/" },
  { label: "Trabalhe conosco", href: "/trabalhe-conosco/" },
  { label: "contato@milcopias.com.br", href: "mailto:contato@milcopias.com.br" },
  { label: "(27) 3372-7171", href: "tel:+552733727171" },
  { label: "Av. Augusto de Carvalho, 1435 Centro, Linhares/ES CEP: 29900-153", href: "https://maps.app.goo.gl/9gvBDJ5S6juLyLs69" },
];

export async function Footer() {
  const services = await fetchAllServices();

  return (
    <footer className="bg-primary text-on-brand-primary py-12" data-theme="dark">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <Link className="block" href="/" aria-label="Mil Cópias Tecnologia">
            <MilCopiasTecnologia className="w-44" mono />
          </Link>
          <div className="text-secondary space-y-2 text-sm">
            <p>A Mil Cópias Tecnologia tem mais de 40 anos de experiência oferecendo soluções completas de outsourcing com aluguel de equipamentos e tecnologia sob demanda.</p>
            <p>Distribuidor autorizado da Kyocera e Canon, revenda autorizada M-Files e Topdata.</p>
            <p className="text-sm">
              Todos os direitos reservados. © {getCurrentYear()} Mil Cópias. <br />
              Site criado por Jogajunto
            </p>
          </div>
          <Social />
        </div>
        <div className="space-y-2">
          <h2 className="text-primary-secondary border-b border-neutral-600 pb-3 font-semibold">A Mil Cópias Tecnologia</h2>
          <ul className="-translate-x-3">
            {MENU_INSTITUTIONAL.map((item) => (
              <li key={item.label}>
                <Button size="md" variant="subtle" fullWidth asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-primary-secondary border-b border-neutral-600 pb-3 font-semibold">Contato e informações</h2>
          <ul className="-translate-x-3">
            {MENU_CONTACT.map((item) => (
              <li key={item.label}>
                <Button size="md" variant="subtle" fullWidth asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 lg:col-span-3">
          <h2 className="text-primary-secondary border-b border-neutral-600 pb-3 font-semibold">Soluções</h2>
          <ul className="grid -translate-x-3 gap-x-10 gap-y-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.id}>
                <Button size="md" variant="subtle" fullWidth asChild>
                  <Link href={service.relPermalink}>{service.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
