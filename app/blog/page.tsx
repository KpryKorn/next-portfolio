import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import HeroTitle from "@/components/HeroTitle";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <HeroTitle
        title="Blog"
        subtitle="Here are some of the articles I've written."
      />
      <div
        className="my-6 md:my-12 py-6 md:py-12 flex flex-col gap-12 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        {allPosts
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .filter((_, i) => i < 3)
          .map((post) => {
            return (
              <article key={post._id}>
                <Link href={`/blog/${post.slug}`}>
                  <figure className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <Image
                      loading="eager"
                      src={post.image}
                      width={500}
                      height={400}
                      alt={post.title}
                      className="rounded-lg w-full md:w-2/5 object-cover object-center aspect-video"
                    />
                    <figcaption className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-xl font-medium">{post.title}</h2>
                        <span className="text-sm">•</span>
                        <span className="text-gray-light dark:text-gray-dark">
                          {post.publishedAt}
                        </span>
                      </div>
                      <p className="text-gray-light dark:text-gray-dark">
                        {post.summary}
                      </p>
                    </figcaption>
                  </figure>
                </Link>
              </article>
            );
          })}
      </div>
    </>
  );
}
