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
      <article className="my-6 md:my-12 flex flex-col gap-4 md:gap-8">
        <MdxWrapper code={project.body.code} />
      </article>
      <div className="pt-6">
        <span className="text-gray-light flex items-center gap-2 font-medium">
          {project.tags.map((tag: string) => {
            return (
              <p
                key={tag}
                className="whitespace-nowrap rounded-lg bg-gray-light/10 px-4 py-1.5 text-sm capitalize"
              >
                {tag}
              </p>
            );
          })}
        </span>
      </div>
    </>
  );
}