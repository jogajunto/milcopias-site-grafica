import { createMetadata } from "@/utilities/create-metadata";

import { CallToAction } from "@/sections/CallToAction";
import { ContentWithDivider, ContentWithDividerContent } from "@/sections/ContentWithDivider";

export function generateMetadata() {
  return createMetadata({
    path: "/empresa",
    title: "Quem somos",
    description: "Representante autorizada da marca Kyocera®, a empresa atua no ramo de aluguel de equipamentos e soluções de impressão no estado do Espírito Santo.",
  });
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-8 m-6 grid items-center overflow-hidden rounded-xl pt-32 pb-24 lg:pt-40">
        <div className="container">
          <div className="grid items-end gap-10 lg:grid-cols-9">
            <div className="space-y-10 lg:col-span-4">
              <h1 className="flex flex-col gap-3">
                <span className="uppertitle">Sobre a empresa</span>
                <span className="heading-lg">Quem somos</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-max">
                <p className="subheading text-secondary text-balance">Representante autorizada da marca Kyocera®, a empresa atua no ramo de aluguel de equipamentos e soluções de impressão no estado do Espírito Santo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentWithDivider>
        <ContentWithDividerContent className="text-lg">
          <p>Fundada em 1984 e pioneira no ramo de aluguel de equipamentos e terceirização de impressão no estado do Espírito Santo, a Mil Cópias Tech oferece de soluções inovadoras em impressão e locação de equipamentos, sempre com foco em aumentar a eficiência e reduzir custos operacionais.</p>
          <p>
            Como distribuidora autorizada da Kyocera e Canon, revenda autorizada Positivo e Topdata, e parceira comercial da Zebra, a Mil Cópias Tech conta com pacotes completos de serviços que englobam desde a locação de equipamentos modernos até a terceirização de impressão. Nossa expertise também se estende à gráfica rápida, com serviços ágeis e de alta qualidade para
            cópias, digitalização, fax, banners e projetos personalizados.
          </p>
          <p>Contamos com um corpo técnico altamente qualificado, logística eficiente com entregas just-in-time, e um pós-venda dedicado para garantir a satisfação plena dos nossos clientes.</p>
          <p>Se você busca aluguel de equipamentos ou soluções de impressão, a Mil Cópias Tech está pronta para atender sua empresa com tecnologia de ponta e serviços de confiança.</p>
        </ContentWithDividerContent>
      </ContentWithDivider>

      <CallToAction />
    </main>
  );
}
