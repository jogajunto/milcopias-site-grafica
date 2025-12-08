import { createMetadata } from "@/utilities/create-metadata";

import { RichText } from "@/components/RichText";
import { SubpageHero } from "@/components/SubpageHero";
import { fetchPrivacyPolicy } from "@/globals/PrivacyPolicy/data";

export function generateMetadata() {
  return createMetadata({
    path: "/politica-de-privacidade",
    title: "Política de privacidade",
    description: "Conheça histórias de empresas que aumentaram a eficiência, reduziram custos e modernizaram seus processos com o apoio das soluções da Mil Cópias.",
  });
}

export default async function Page() {
  const page = await fetchPrivacyPolicy();

  return (
    <main>
      <SubpageHero uppertitle={`Atualizada em ${new Date(page.updatedAt!).toLocaleDateString("pt-BR")}`} title="Política de privacidade" description="Informações a respeito do modo como tratamos os dados pessoais dos usuários que acessam nosso site." />

      <section className="pt-12 pb-24">
        <div className="container max-w-4xl">
          <RichText data={page.content} />
        </div>
      </section>
    </main>
  );
}
