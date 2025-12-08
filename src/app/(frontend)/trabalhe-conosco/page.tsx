import BoxedSection from "@/components/BoxedSection";

import { createMetadata } from "@/utilities/create-metadata";
import Image from "next/image";

import { Button } from "@/components/Button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import imageHero from "./images/hero.webp";

export function generateMetadata() {
  return createMetadata({
    path: "/trabalhe-conosco",
    title: "Trabalhe conosco",
    description: "Na Mil Cópias, procuramos profissionais dispostos a evoluir, compartilhar ideias e atuar com dedicação em um ambiente que valoriza colaboração e qualidade.",
  });
}

export default function Page() {
  return (
    <BoxedSection>
      <div className="container">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2">
          <div className="space-y-10 lg:mt-10">
            <h1 className="flex flex-col gap-3">
              <span className="uppertitle">Trabalhe conosco</span>
              <span className="title-lg">Quer participar de nossa equipe?</span>
            </h1>
            <p className="text-secondary text-xl">Na Mil Cópias, procuramos profissionais dispostos a evoluir, compartilhar ideias e atuar com dedicação em um ambiente que valoriza colaboração e qualidade.</p>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="subheading">Como enviar seu currículo</h2>
                <hr className="border-brand-secondary w-16" />
                <div className="space-y-0.5 pt-2">
                  <p>Envie suas informações para:</p>
                  <Button className="-ml-3" variant="ghost" size="sm" asChild>
                    <Link href="mailto:contato@milcopias.com.br" target="_blank" rel="noopener noreferrer">
                      contato@milcopias.com.br
                      <ExternalLink />
                    </Link>
                  </Button>
                  <p>Analisaremos seu perfil e entraremos em contato quando houver uma oportunidade compatível.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image className="rounded-xl" src={imageHero} alt="Homem com headset sorrindo no escritório" placeholder="blur" />
          </div>
        </div>
      </div>
    </BoxedSection>
  );
}
