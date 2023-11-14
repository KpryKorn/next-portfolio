import HeroTitle from "@/components/HeroTitle";
import ShowLastPosts from "@/components/ShowLastPosts";
import { allPosts } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
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
    <>
      <HeroTitle title={post.title} subtitle={post.summary} />
      <div className="pt-6 flex gap-2">
        <p className="font-medium">Sacha Roffini</p>
        <span>•</span>
        <p className="text-gray-light">
          <time className="mr-2" dateTime={post.publishedAt}>
            {post.publishedAt}
          </time>
          {post.updatedAt ? `(Updated at ${post.updatedAt})` : ""}
        </p>
      </div>
      <article className="my-6 md:my-12 flex flex-col gap-4 md:gap-8">
        <MDXContent />
      </article>
      <ShowLastPosts />
    </>
  );
}
