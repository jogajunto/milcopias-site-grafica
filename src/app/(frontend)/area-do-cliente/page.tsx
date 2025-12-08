import BoxedSection from "@/components/BoxedSection";

import { createMetadata } from "@/utilities/create-metadata";
import Image from "next/image";

import { Button } from "@/components/Button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import imageHero from "./images/hero.webp";

export function generateMetadata() {
  return createMetadata({
    path: "/area-do-cliente",
    title: "Área do cliente",
    description: "Precisa de ajuda com seu equipamento, serviço ou tem alguma dúvida? Entre em contato conosco e responderemos o mais rápido possível.",
  });
}

export default function Page() {
  return (
    <BoxedSection>
      <div className="container">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2">
          <div className="space-y-10 lg:mt-10">
            <h1 className="flex flex-col gap-3">
              <span className="uppertitle">Área do cliente</span>
              <span className="title-lg">Tudo o que você precisa em um só lugar</span>
            </h1>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="subheading">Para suporte técnico</h2>
                <hr className="border-brand-secondary w-16" />
                <ul className="-ml-3">
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://wa.me/552733727171?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20aluguel%20de%20equipamentos%20e%20tecnologia.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                        <ExternalLink />
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="http://databitbh.com:54235/newdataservice/" target="_blank" rel="noopener noreferrer">
                        Sistema de chamados online
                        <ExternalLink />
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="mailto:contato@milcopias.com.br" target="_blank" rel="noopener noreferrer">
                        contato@milcopias.com.br
                        <ExternalLink />
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="tel:+552733727171" target="_blank" rel="noopener noreferrer">
                        (27) 3372-7171
                        <ExternalLink />
                      </Link>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="subheading">Para acesso remoto</h2>
                <hr className="border-brand-secondary w-16" />
                <p className="text-secondary">Para que possamos te ajudar de forma rápida e eficiente, é necessário que você instale a ferramenta Team Viewer. Com ela, nossa equipe poderá acessar seu computador e resolver problemas de forma remota.</p>
                <Button className="-ml-3" variant="ghost" size="sm">
                  Baixar Team Viewer
                  <ExternalLink />
                </Button>
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
