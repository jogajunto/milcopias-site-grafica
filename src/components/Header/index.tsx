import Link from "next/link";

import { Button } from "@/components/Button";

import { fetchAllCases } from "@/collections/Cases/data";
import { fetchAllServices } from "@/collections/Services/data";
import { Menu } from "../Menu";

type TMenuItem = {
  label: string;
  href?: string;
  external?: boolean;
};

export type TMenu = {
  submenu?: TMenuItem[];
} & TMenuItem;

export async function Header() {
  const services = await fetchAllServices();
  const cases = await fetchAllCases();

  const servicesMenuItems = services.map((service) => ({
    label: service.title,
    href: service.relPermalink,
  }));

  const casesMenuItems = cases.map((service) => ({
    label: service.title,
    href: service.relPermalink,
  }));

  const menu: TMenu[] = [
    { label: "Início", href: "/" },
    {
      label: "Soluções",
      submenu: [...servicesMenuItems],
    },
    {
      label: "Casos de sucesso",
      submenu: [...casesMenuItems],
    },
    { label: "Área do cliente", href: "/area-do-cliente" },
  ];
  return (
    <header>
      <Button variant="primary" size="md" className="skip-to-main" asChild>
        <Link href="#conteudo">Pular para o conteúdo</Link>
      </Button>
      <Menu items={menu} />
    </header>
  );
}
