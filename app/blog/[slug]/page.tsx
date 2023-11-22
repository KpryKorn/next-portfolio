import HeroTitle from "@/components/HeroTitle";
import MdxWrapper from "@/components/mdx/MdxWrapper";
import { allPosts } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";
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

  return (
    <>
      <HeroTitle title={post.title} subtitle={post.summary} />
      <div className="pt-6 flex gap-2">
        <p className="font-medium">Sacha Roffini</p>
        <span>•</span>
        <p className="text-gray-light dark:text-gray-dark">
          <time className="mr-2" dateTime={post.publishedAt}>
            {post.publishedAt}
          </time>
          {post.updatedAt ? `(Updated ${post.updatedAt})` : ""}
        </p>
      </div>
      {post.image && (
        <>
          <div className="h-8" />
          <Image
            src={post.image}
            alt={post.title}
            width={850}
            height={480}
            className="md:-ml-6 md:w-[calc(100%+48px)] max-w-full mx-auto md:max-w-none rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)] aspect-video object-cover object-center"
            priority={true}
            quality={100}
          />
        </>
      )}
      <article className="my-6 md:my-12 flex flex-col markdown">
        <MdxWrapper code={post.body.code} />
      </article>
      <Link
        href={"/blog"}
        className="text-black-light dark:text-white-dark font-medium"
      >
        ←{" "}
        <span className="underline-offset-4 underline">
          Return to blog page
        </span>
      </Link>
    </>
  );
}
