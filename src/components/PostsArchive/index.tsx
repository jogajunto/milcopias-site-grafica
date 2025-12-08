import { Post } from "@/payload-types";

import { PostCard } from "@/components/PostCard";

type PostArchiveProps = {
  posts: Post[];
};

export function PostArchive({ posts }: PostArchiveProps) {
  return (
    <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
