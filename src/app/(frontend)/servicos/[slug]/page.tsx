import Link from "next/link";

import { RenderBlocks } from "@/blocks";
import { fetchServiceBySlug } from "@/collections/Services/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion";
import BoxedSection from "@/components/BoxedSection";
import { Button } from "@/components/Button";
import { PayloadImage } from "@/components/Payload/Image";
import { RichText } from "@/components/RichText";
import { Faq, Media, ServiceCategory } from "@/payload-types";
import { CallToAction } from "@/sections/CallToAction";
import { createMetadata } from "@/utilities/create-metadata";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = await fetchServiceBySlug(slug);

  return createMetadata({
    path: page.relPermalink,
    title: page.title,
    description: page.hero.description,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = await fetchServiceBySlug(slug);

  return (
    <main>
      <BoxedSection>
        <div className="container">
          <div className="grid items-center gap-x-10 gap-y-10 lg:grid-cols-9">
            <div className="space-y-10 lg:col-span-4">
              <h1 className="flex flex-col gap-3">
                <span className="uppertitle">{(page.category as ServiceCategory).title}</span>
                <span className="title-lg">{page.hero.title}</span>
              </h1>
              <div className="space-y-6">
                <p className="subheading text-secondary text-balance">{page.hero.description}</p>
                <Button asChild>
                  <Link href="/contato">Solicitar orçamento</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-max">
                <Image className="" src="/mil-copias-stroke.svg" alt="..." height={1920} width={1440} />
                <PayloadImage className="absolute inset-0 mx-auto size-full object-contain object-right lg:mr-0" image={page.hero.image as Media} />
              </div>
            </div>
          </div>
        </div>
      </BoxedSection>

      <RenderBlocks blocks={page.sections} />

      {(page.faq.faq?.docs as Faq[]).length > 0 && (
        <section className="pt-24">
          <div className="container">
            <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
              <div>
                <h2 className="flex flex-col gap-2">
                  <span className="uppertitle">Perguntas frequentes</span>
                  <span className="heading-lg">{page.faq.title}</span>
                </h2>
              </div>
              <Accordion>
                {(page.faq.faq?.docs as Faq[]).map((item) => (
                  <AccordionItem key={item.id} variant="light" value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <RichText data={item.content} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      <CallToAction title={page.cta.title} />
    </main>
  );
}
