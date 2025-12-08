import { fetchCaseBySlug } from "@/collections/Cases/data";
import BoxedSection from "@/components/BoxedSection";
import { Button } from "@/components/Button";
import { PayloadImage } from "@/components/Payload/Image";
import { RichText } from "@/components/RichText";
import { Media } from "@/payload-types";
import { CallToAction } from "@/sections/CallToAction";
import { createMetadata } from "@/utilities/create-metadata";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = await fetchCaseBySlug(slug);

  return createMetadata({
    path: page.relPermalink,
    title: `Caso de sucesso em ${page.title}`,
    description: page.hero.description,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = await fetchCaseBySlug(slug);

  return (
    <main>
      <BoxedSection>
        <div className="container">
          <div className="grid items-center gap-x-10 gap-y-10 lg:grid-cols-9">
            <div className="space-y-10 lg:col-span-4">
              <h1 className="flex flex-col gap-3">
                <span className="uppertitle">Caso de sucesso</span>
                <span className="title-lg">{page.title}</span>
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
                {/* <Image className="" src="/mil-copias-stroke.svg" alt="..." height={1920} width={1440} /> */}
                <PayloadImage className="rounded-2xl" image={page.hero.image as Media} />
              </div>
            </div>
          </div>
        </div>
      </BoxedSection>

      <section className="pt-24" id="case">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            <RichText data={page.content} />
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
