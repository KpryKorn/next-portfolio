import ShowLastPosts from "@/components/ShowLastPosts";
import { allPosts } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface generateMetadataProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: generateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { title, summary: description } = post;

  const metadata: Metadata = {
    title: `${title} | Sacha Roffini`,
    description,
  };

  return metadata;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex animate-in flex-col gap-8">
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {post.title}
            </h1>
            <p className="text-lg leading-tight text-secondary md:text-xl">
              {post.summary}
            </p>
          </div>

          <div className="flex max-w-none items-center gap-4">
            <div className="leading-tight">
              <p className="font-medium text-primary">Brian Ruiz</p>
              <p className="text-secondary">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                {post.updatedAt ? `(Updated ${post.updatedAt})` : ""}
              </p>
            </div>
          </div>
        </div>

        {post.image && (
          <>
            <div className="h-8" />
            <Image
              src={post.image}
              alt={`${post.title} post image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
              priority
              quality={100}
            />
          </>
        )}

        <div className="h-16" />
        <div className="prose prose-neutral animate-in">
          <MDXContent />
        </div>
      </article>
      <ShowLastPosts />

      <Link href="/blog">← All Posts</Link>
    </div>
  );
}
