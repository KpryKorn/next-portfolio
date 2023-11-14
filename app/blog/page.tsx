import Link from "next/link";
import { allPosts } from "contentlayer/generated";

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    a.publishedAt > b.publishedAt ? -1 : a.publishedAt < b.publishedAt ? 1 : 0
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
    </div>
  );
}
