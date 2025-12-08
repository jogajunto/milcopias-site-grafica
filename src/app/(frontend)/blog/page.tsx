import { createMetadata } from "@/utilities/create-metadata";

import { fetchPaginatedPosts } from "@/collections/Posts/data";
import { Pagination } from "@/components/Pagination";
import { PaginationRange } from "@/components/PostRange";
import { PostArchive } from "@/components/PostsArchive";
import { SubpageHero } from "@/components/SubpageHero";
import Head from "next/head";

export function generateMetadata() {
  return createMetadata({
    path: "/blog",
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });
}

export default async function Page() {
  const posts = await fetchPaginatedPosts();

  return (
    <>
      <Head>{posts.page && posts.totalPages > 1 && <link rel="next" href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/pagina/${posts.page + 1}`} />}</Head>

      <main>
        <SubpageHero uppertitle="Blog" title="Insights sobre o mercado de impressão e tecnologia" description="Dicas simples de redução de custos para sua empresa, notícias sobre o mercado de impressão e imagem, atualizações das nossas soluções e eventos." />

        <section className="pt-10 pb-24">
          <div className="container space-y-10">
            <PaginationRange currentPage={posts.page || 1} totalPages={posts.totalPages} totalDocs={posts.totalDocs} />
            <PostArchive posts={posts.docs} />
            <Pagination page={posts.page} totalPages={posts.totalPages} path="/blog/pagina/" />
          </div>
        </section>
      </main>
    </>
  );
}
