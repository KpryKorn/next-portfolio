import { allProjects } from "@/.contentlayer/generated";
import HeroTitle from "@/components/HeroTitle";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Sacha Roffini",
  description: "Here are some of the projects I've worked on.",
};

export default function Page() {
  return (
    <>
      <HeroTitle
        title="Projects"
        subtitle="Here are some of the projects I've worked on."
      />
      <div className="my-6 md:my-12 py-6 md:py-12 flex flex-col-reverse gap-12">
        {allProjects.map((project) => {
          return (
            <article key={project._id}>
              <Link href={`/projects/${project.slug}`}>
                <figure className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <Image
                    src={project.image}
                    width={500}
                    height={400}
                    alt={project.title}
                    className="rounded-lg w-full md:w-2/5 object-cover object-center aspect-video"
                  />
                  <figcaption className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <h2 className="text-xl font-medium">{project.title}</h2>
                      <span className="text-sm">•</span>
                      <span className="text-gray-light">
                        {project.publishedAt}
                      </span>
                    </div>
                    <p className="text-gray-light">{project.summary}</p>
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
