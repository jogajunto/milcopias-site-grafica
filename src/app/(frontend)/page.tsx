import { createMetadata } from "@/utilities/create-metadata";

import { fetchAllServiceCategories } from "@/collections/ServiceCategories/data";
import { Button } from "@/components/Button";
import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";

import { CallToAction } from "@/sections/CallToAction";
import { ContentWithDivider, ContentWithDividerContent } from "@/sections/ContentWithDivider";

import BoxedSection from "@/components/BoxedSection";
import { Customers } from "@/components/Customers";
import { ArrowUpRight, ChartPie, HandCoins, Handshake, Headset, PiggyBank, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return createMetadata({
    path: "/",
    title: "Mil Cópias Tecnologia | Aluguel de equipamentos e tecnologia",
    description: "Soluções de outsourcing com aluguel de equipamentos e tecnologia sob demanda para o seu negócio reduzir custos operacionais e crescer com segurança.",
  });
}

export default async function Page() {
  const categories = await fetchAllServiceCategories();

  return (
    <main>
      <BoxedSection className="relative pb-6 lg:p-0">
        <div className="container h-full">
          <div className="grid h-full grid-rows-1 items-center gap-x-10 md:grid-cols-9">
            <div className="flex h-full flex-col justify-center space-y-10 md:col-span-4 lg:row-span-2 lg:py-24">
              <div>
                <h1 className="title-lg inline align-middle leading-[1.2]">Outsourcing inteligente, operação eficiente</h1>
                <Image className="bg-primary ml-3 inline-block rounded-4xl align-middle" src="/images/pagina-inicial/hero-avatars.webp" alt="..." width={137} height={56} />
              </div>
              <div className="h-lg:absolute bottom-14 max-w-64 space-y-6 max-lg:static!">
                <p className="text-secondary text-lg text-balance">
                  Reduza custos e otimize a sua operação com <strong>aluguel de equipamentos e tecnologia</strong>.
                </p>
                <Button asChild>
                  <Link href="#solucoes">Ver soluções</Link>
                </Button>
              </div>
            </div>
            <div className="relative grid h-full items-center md:col-span-5 lg:row-span-2">
              <Image className="max-lg:-mb-12" src="/images/pagina-inicial/m.webp" alt="M em 3D" width={866} height={698} />
            </div>
            <div className="max-lg:hidden lg:col-span-4"></div>
            <div className="relative h-full md:col-span-9 lg:col-span-5">
              <div className="h-lg:absolute bottom-8 grid gap-2 max-lg:static! md:grid-cols-2">
                <div className="from-neutral-0/15 to-neutral-0/5 relative flex flex-col gap-4 overflow-hidden rounded-lg bg-linear-to-t p-6 shadow backdrop-blur-xl">
                  <p className="title-lg text-brand-primary flex-1">+500</p>
                  <p className="subheading">Clientes atendidos na região de Linhares/ES</p>
                </div>
                <div className="bg-brand-secondary relative overflow-hidden rounded-lg p-6 pr-24">
                  <h3 className="subheading mb-8">Conheça o caso de sucesso do Hospital Rio Doce</h3>
                  <Button className="relative z-10 size-9 rounded-full p-0" size="icon" asChild>
                    <Link href="/casos-de-sucesso/hospital">
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Image className="absolute right-0 bottom-0 h-full object-contain object-right" src="/images/pagina-inicial/hero-case-hospital.webp" alt="..." width={380} height={459} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BoxedSection>

      <ContentWithDivider>
        <ContentWithDividerContent>
          <p className="text-lg">
            Com <strong>mais de 40 anos de experiência</strong>, a Mil Cópias Tecnologia oferece soluções completas de outsourcing com aluguel de equipamentos e tecnologia sob demanda para o seu negócio reduzir custos operacionais e crescer com segurança, flexibilidade e eficiência.
          </p>
        </ContentWithDividerContent>
      </ContentWithDivider>

      <section className="overflow-hidden pt-24">
        <Customers />
      </section>

      <section className="pt-24" id="solucoes">
        <div className="container">
          <div className="space-y-10">
            <h2 className="flex flex-col gap-2 text-center">
              <span className="uppertitle">Nossas soluções</span>
              <span className="heading-lg">Aluguel de equipamentos e tecnologia</span>
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <ServiceCategoryCard key={category.id} {...category} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="container">
          <div className="space-y-10">
            <h2 className="flex flex-col gap-2 text-center">
              <span className="uppertitle">Benefícios</span>
              <span className="heading-lg">Por que escolher a Mil Cópias Tecnologia?</span>
            </h2>
            <ul className="text-secondary flex flex-wrap justify-center gap-8 text-center">
              <li className="flex-1 basis-36 space-y-2 sm:basis-[165px] md:max-w-[165px]">
                <PiggyBank className="icon-brand-tertiary mx-auto size-16 stroke-1" />
                <p>Sem custo inicial em equipamentos</p>
              </li>
              <li className="flex-1 basis-36 space-y-2 sm:basis-[165px] md:max-w-[165px]">
                <Headset className="icon-brand-tertiary mx-auto size-16 stroke-1" />
                <p>Manutenção e suporte contínuo</p>
              </li>
              <li className="flex-1 basis-36 space-y-2 sm:basis-[165px] md:max-w-[165px]">
                <ChartPie className="icon-brand-tertiary mx-auto size-16 stroke-1" />
                <p>Relatórios e indicadores mensais</p>
              </li>
              <li className="flex-1 basis-36 space-y-2 sm:basis-[165px] md:max-w-[165px]">
                <RotateCcw className="icon-brand-tertiary mx-auto size-16 stroke-1" />
                <p>Equipamentos sempre atualizados</p>
              </li>
              <li className="flex-1 basis-36 space-y-2 sm:basis-[165px] md:max-w-[165px]">
                <HandCoins className="icon-brand-tertiary mx-auto size-16 stroke-1" />
                <p>Previsibilidade de custos</p>
              </li>
              <li className="flex-1 basis-36 space-y-2 sm:basis-[165px] md:max-w-[165px]">
                <Handshake className="icon-brand-tertiary mx-auto size-16 stroke-1" />
                <p>Mais foco no que importa: o seu negócio</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
