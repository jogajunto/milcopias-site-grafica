import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Media } from "@/payload-types";

import { fetchAllCases } from "@/collections/Cases/data";
import { createMetadata } from "@/utilities/create-metadata";

import { Button } from "@/components/Button";
import { PayloadImage } from "@/components/Payload/Image";
import { SubpageHero } from "@/components/SubpageHero";

export function generateMetadata() {
  return createMetadata({
    path: "/casos-de-sucesso",
    title: "Casos de sucesso",
    description: "Conheça histórias de empresas que aumentaram a eficiência, reduziram custos e modernizaram seus processos com o apoio das soluções da Mil Cópias.",
  });
}

export default async function Page() {
  const cases = await fetchAllCases();

  return (
    <main>
      <SubpageHero uppertitle="Casos de sucesso" title="Soluções que transformam negócios" description="Conheça histórias reais de empresas que aumentaram a eficiência, reduziram custos e modernizaram seus processos com o apoio das soluções da Mil Cópias." />

      <section className="pt-12 pb-24">
        <div className="container">
          <ul className="items-top grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <li className="flex h-full flex-col items-start space-y-6" key={item.id}>
                <PayloadImage className="aspect-4/3 rounded-lg object-cover" image={item.hero.image as Media} />
                <div className="flex-1 space-y-2">
                  <h3 className="subheading">{item.title}</h3>
                  <p className="line-clamp-3">{item.hero.description}</p>
                </div>
                <Button size="md" variant="primary" asChild>
                  <Link href={item.relPermalink}>
                    Saiba mais <ArrowRight className="size" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
