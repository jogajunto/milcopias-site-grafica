import { createMetadata } from "@/utilities/create-metadata";

import { Button } from "@/components/Button";

import GraficaRapida from "@/components/GraficaRapida";
import { WhatsApp } from "@/components/SocialIcon";
import { contactWhatsAppUrl, quoteWhatsAppUrl } from "@/utilities/generate-whatsapp-link";
import { organizationSchema } from "@/utilities/schema";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return createMetadata({
    path: "/",
    title: "Mil Cópias Gráfica Rápida | Atendimento em Linhares e região",
    description: "Garantimos uma entrega ágil, qualidade consistente e soluções completas para materiais gráficos personalizados. Cartão de visita, banners e muito mais.",
  });
}

export default async function Page() {
  const service = [
    {
      title: "Serviços de impressão",
      list: [
        "Adesivos (refletivo, perfurado, leitoso e transparente)",
        "Apostilas",
        "Banners",
        "Blocos sem carbono",
        "Calendários",
        "Cardápios",
        "Cartão de visita",
        "Cartões de ponto",
        "Confecção de troféus e placas em acrílico",
        "Convites em geral",
        "Cópias e scan",
        "Envelopes personalizados",
        "Imãs",
        "Impressão A4/A3",
        "Impressão de adesivos em alto relevo (DTF)",
        "Impressões e cópias a laser (coloridas ou P&B)",
        "Impressos em geral",
        "Lonas e backdrop",
        "Marca página",
        "Marcadores de mesa",
        "Panfletos",
        "Pasta reta",
        "Plotagem de projetos",
        "PVC adesivado",
        "Receituários",
        "Revelação de foto",
        "Tags",
        "Timbrados",
      ],
    },
    {
      title: "Itens complementares",
      list: ["Acabamento", "Bolsa plástica", "Carimbos automáticos", "Cordões", "Crachás em PVC", "Encadernação", "Plastificação", "Presilhas", "Suporte para banner", "Suporte para crachá", "Tinta para carimbo"],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />

      <main>
        <section className="relative grid sm:min-h-screen">
          <div className="bg-primary border-primary relative grid items-center overflow-hidden border pt-32 pb-24 shadow-2xs sm:m-8 lg:p-0 lg:pt-40">
            <div className="container h-full">
              <div className="grid h-full grid-rows-1 items-center gap-x-10">
                <div className="flex h-full flex-col space-y-10">
                  <GraficaRapida />
                  <div className="h-lg:absolute bottom-14 max-w-[60ch] space-y-6 max-lg:static!">
                    <p className="subheading-lg text-balance">Impressão com qualidade profissional e agilidade em Linhares (ES) e região</p>
                    <Button asChild>
                      <Link href={quoteWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                        Solicitar orçamento
                      </Link>
                    </Button>
                  </div>
                  <Image className="relative -right-9 object-contain object-right transition-transform hover:rotate-6 sm:absolute sm:bottom-[10%] sm:h-[50%] sm:w-[55%]" src="/hand.webp" alt="Mão segurando o cartão de visita da Mil Cópias" width={960} height={509} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex h-8 w-full items-center justify-center text-center text-xs max-sm:hidden">
            <span>af-header-milcopias_grafica_rapida.pdf</span>
          </div>

          <div className="absolute top-0 left-8 h-7 w-px bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute top-8 left-0 h-px w-7 bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute bottom-0 left-8 h-7 w-px bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute bottom-8 left-0 h-px w-7 bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute top-0 right-8 h-7 w-px bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute top-8 right-0 h-px w-7 bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute right-8 bottom-0 h-7 w-px bg-neutral-900 max-sm:hidden"></div>
          <div className="absolute right-0 bottom-8 h-px w-7 bg-neutral-900 max-sm:hidden"></div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="grid gap-x-16 gap-y-10 md:grid-cols-13">
              <div className="py-4 max-md:hidden md:col-span-4">
                <hr className="border-brand-primary border-t-[1.5px]" />
              </div>
              <div className="space-y-4 md:col-span-9">
                <div className="text-secondary space-y-4 text-xl">
                  <p>
                    Com <strong>mais de 40 anos de experiência</strong>, a Mil Cópias Gráfica Rápida possui uma estrutura para atender todas as suas necessidades de impressão e comunicação visual. Garantimos uma entrega ágil, qualidade consistente e soluções completas para materiais gráficos personalizados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary relative pt-24 md:pb-24" id="tipos-de-materiais">
          <div className="container">
            <div className="space-y-10">
              <h2 className="flex flex-col gap-2 text-center">
                <span className="uppertitle text-secondary">Tipos de materiais</span>
                <span className="heading-lg text-brand-primary">Materiais impressos e personalizados</span>
              </h2>
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <li className="col-span-2 space-y-4">
                  <h3 className="text-xl font-semibold">{service[0].title}</h3>
                  <ul className="space-y-2 md:columns-2">
                    {service[0].list.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <CheckCircle className="icon-brand-secondary size-5" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="space-y-4">
                  <h3 className="text-xl font-semibold">{service[1].title}</h3>
                  <ul className="space-y-2">
                    {service[1].list.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <CheckCircle className="icon-brand-secondary size-5" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className="max-sm:text-center lg:text-center">
                <Button size="lg" asChild>
                  <Link href={quoteWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsApp />
                    Solicitar orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <Image className="right-0 bottom-0 ml-auto md:absolute" src="/servicos.webp" alt="Cartão de visita da Mil Cópias" width={310} height={300} />
        </section>

        <section className="bg-secondary pt-24">
          <div className="container">
            <div className="bg-brand-secondary grid overflow-hidden rounded-2xl md:grid-cols-2">
              <div className="space-y-6 px-6 py-10 md:p-8 lg:p-16">
                <h2 className="heading text-on-brand-primary">Garanta a qualidade e agilidade da sua impressão com a nossa Gráfica Rápida</h2>
                <Button size="sm" asChild>
                  <Link href={quoteWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsApp />
                    Solicitar orçamento
                  </Link>
                </Button>
              </div>
              <div>
                <Image className="h-full object-contain object-bottom-right max-lg:pl-10" src="/cta.webp" alt="Mão segurando cartão de visita da Mil Cópias" width={768} height={370} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="heading">Tire suas dúvidas</h2>
                <p>Preencha o formulário abaixo com seus dados e a descrição do serviço desejado ou dúvida. Em breve, entraremos em contato com você.</p>
                <Button asChild>
                  <Link href={contactWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsApp />
                    Entrar em contato
                  </Link>
                </Button>
              </div>
              <div className="space-y-2">
                <h2 className="subheading">Contato e informações</h2>
                <hr className="border-brand-secondary w-16" />
                <ul className="text-secondary -ml-3">
                  <li>
                    <Button variant="ghost" size="sm">
                      <Link href={quoteWhatsAppUrl}>WhatsApp</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="mailto:graficarapida@milcopias.com.br" target="_blank" rel="noopener noreferrer">
                        graficarapida@milcopias.com.br
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="tel:+552733727171" target="_blank" rel="noopener noreferrer">
                        (27) 3372-7171
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://maps.app.goo.gl/9gvBDJ5S6juLyLs69" target="_blank" rel="noopener noreferrer">
                        Av. Augusto de Carvalho, 1435 Centro, Linhares/ES CEP: 29900-153
                      </Link>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
