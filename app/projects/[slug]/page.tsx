import HeroTitle from "@/components/HeroTitle";
import MdxWrapper from "@/components/mdx/MdxWrapper";
import { allProjects } from "contentlayer/generated";
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
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  { params }: generateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { title, summary: description } = project;

  const metadata: Metadata = {
    title: `${title} | Sacha Roffini`,
    description,
  };

  return metadata;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <HeroTitle title={project.title} subtitle={project.summary} />
      {project.projectUrl && (
        <Link
          href={project.projectUrl}
          target="_blank"
          className="py-8 underline underline-offset-4 inline-flex gap-1 items-center"
        >
          Link to the project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      )}
      {project.image && (
        <>
          <div className="h-8" />
          <Image
            src={project.image}
            alt={project.title}
            width={850}
            height={480}
            className="md:-ml-6 md:w-[calc(100%+48px)] max-w-full mx-auto md:max-w-none rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)] aspect-video object-cover object-center"
            priority={true}
            quality={100}
          />
        </>
      )}
      <article className="my-6 md:my-12 flex flex-col markdown">
        <MdxWrapper code={project.body.code} />
      </article>
      <div className="py-6 flex flex-col gap-2 items-start">
        <p>Tags</p>
        <span className="text-gray-light dark:text-gray-dark flex items-center gap-2 font-medium">
          {project.tags.map((tag: string) => {
            return (
              <p
                key={tag}
                className="whitespace-nowrap rounded-lg bg-gray-light/10 dark:bg-gray-light/30 px-4 py-1.5 text-sm capitalize"
              >
                {tag}
              </p>
            );
          })}
        </span>
      </div>
      <Link
        href={"/projects"}
        className="text-black-light dark:text-white-dark font-medium"
      >
        ←{" "}
        <span className="underline-offset-4 underline">
          Return to projects page
        </span>
      </Link>
    </>
  );
}
