import BoxedSection from "@/components/BoxedSection";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Social } from "@/components/Social";
import { WhatsAppDialogButton } from "@/providers/whatsapp-dialog";

import { createMetadata } from "@/utilities/create-metadata";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function generateMetadata() {
  return createMetadata({
    path: "/contato",
    title: "Contato",
    description: "Entre em contato para tirar qualquer dúvida, solicitação, orçamento e informações sobre toda as nossas soluções, fale com nossa equipe técnica.",
  });
}

export default function Page() {
  return (
    <BoxedSection>
      <div className="container">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2">
          <div className="space-y-10">
            <h1 className="flex flex-col gap-3">
              <span className="uppertitle">Contato</span>
              <span className="title-lg">Fale conosco</span>
            </h1>
            <p className="text-secondary text-xl">Entre em contato para tirar qualquer dúvida, solicitação, orçamento e informações sobre toda as nossas soluções, fale com nossa equipe técnica.</p>
            <div className="space-y-2">
              <h2 className="subheading">Contato e informações</h2>
              <hr className="border-brand-secondary w-16" />
              <ul className="text-secondary -ml-3">
                <li>
                  <WhatsAppDialogButton variant="ghost" size="sm">
                    WhatsApp
                  </WhatsAppDialogButton>
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
                <li>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://maps.app.goo.gl/9gvBDJ5S6juLyLs69" target="_blank" rel="noopener noreferrer">
                      Av. Augusto de Carvalho, 1435 Centro, Linhares/ES CEP: 29900-153
                      <ExternalLink />
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="subheading">Redes sociais</h2>
              <hr className="border-brand-secondary w-16" />
              <Social />
            </div>
          </div>
          <div>
            <ContactForm type="contact" />
          </div>
        </div>
      </div>
    </BoxedSection>
  );
}
