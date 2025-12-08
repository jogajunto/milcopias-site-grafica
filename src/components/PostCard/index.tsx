import { Media, Post } from "@/payload-types";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button";
import { PayloadImage } from "../Payload/Image";

export type PostCardProps = Partial<Post>;

export function PostCard({ relPermalink, image, publishedDate, meta, title }: PostCardProps) {
  return (
    <Link className="border-primary bg-secondary group relative overflow-hidden rounded-lg border" href={relPermalink!}>
      <article className="flex h-full">
        <div className="flex h-full flex-col gap-6">
          <div className="relative aspect-4/3 h-auto w-auto overflow-hidden rounded">
            <PayloadImage className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105" image={image as Media} />
          </div>
          <div className="flex flex-1 flex-col gap-6 p-6">
            <h2 className="subheading flex-1">{title}</h2>
            <p>
              <span className="text-tertiary block">6min</span>
              <time dateTime={publishedDate}>{new Date(publishedDate!).toLocaleDateString("pt-BR")}</time>
            </p>
            <Button className="absolute right-6 bottom-6 z-10 size-9 rounded-full p-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" size="icon" asChild>
              <span>
                <ArrowUpRight />
              </span>
            </Button>
          </div>
        </div>
      </article>
    </Link>
  );
}
