import Link from "next/link";
import { notFound } from "next/navigation";

import { createMetadata } from "@/utilities/create-metadata";

import { fetchPostBySlug } from "@/collections/Posts/data";
import BoxedSection from "@/components/BoxedSection";
import { PayloadImage } from "@/components/Payload/Image";
import { RichText } from "@/components/RichText";
import { Facebook, LinkedIn, Threads, WhatsApp, X } from "@/components/SocialIcon";
import { Media } from "@/payload-types";
import { CallToAction } from "@/sections/CallToAction";

type PageArgs = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageArgs) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  return createMetadata({
    path: `/blog/${slug}`,
    title: post.meta?.title || post.title || process.env.NEXT_PUBLIC_SITE_URL!,
    description: post.meta?.description || "",
  });
}

export default async function Page({ params }: PageArgs) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        <BoxedSection>
          <div className="container">
            <div className="grid items-center gap-x-10 gap-y-10 lg:grid-cols-9">
              <div className="space-y-10 lg:col-span-4">
                <div className="space-y-3">
                  <span className="uppertitle block">Blog Mil Cópias</span>
                  <h1 className="title-lg">{post.title}</h1>
                </div>
                <div className="space-y-6">
                  <p className="subheading text-secondary text-balance">
                    6 minutos <br />
                    Publicado em {new Date(post.publishedDate).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-max">
                  <PayloadImage className="aspect-square rounded-2xl object-cover" image={post.image as Media} />
                </div>
              </div>
            </div>
          </div>
        </BoxedSection>

        <div className="container max-w-6xl space-y-16 pt-10">
          <div className="grid gap-x-8 gap-y-10 lg:grid-cols-8">
            <div className="flex flex-col items-center gap-6 lg:col-span-2">
              <p className="text-overline text-primary">Compartilhar</p>
              <ul className="flex gap-4 lg:flex-col">
                <li>
                  <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(!post.relPermalink)}`} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(!post.relPermalink)}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(!post.relPermalink)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                    <X className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://www.threads.net/intent/post?text=${encodeURIComponent(post.title + " " + !post.relPermalink)}`} target="_blank" rel="noopener noreferrer">
                    <Threads className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + !post.relPermalink)}`} target="_blank" rel="noopener noreferrer">
                    <WhatsApp className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="prose max-w-full lg:col-span-6">{post.content && <RichText data={post.content} />}</div>
          </div>
        </div>
      </article>

      <CallToAction />
    </main>
  );
}
