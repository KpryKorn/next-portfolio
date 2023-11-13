import HeroTitle from "@/components/HeroTitle";
import Image from "next/image";
import imgArticle1 from "@/assets/unsplash-degrade-1.jpg";
import imgArticle2 from "@/assets/unsplash-degrade-2.jpg.jpg";
import imgArticle3 from "@/assets/unsplash-degrade-3.jpg.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <HeroTitle
        title="Projects"
        subtitle="Here are some of the projects I've worked on"
      />
      <div className="my-6 md:my-12 py-6 md:py-12 flex flex-col gap-12">
        <article>
          <Link href={"/"}>
            <figure className="flex gap-8">
              <Image
                src={imgArticle1}
                width={300}
                height={169}
                alt="Couverture de l'article du blog"
                className="rounded-lg object-cover object-center aspect-video"
              />
              <figcaption className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <h2 className="text-xl font-medium">My portfolio</h2>
                  <span className="text-sm">•</span>
                  <span className="text-gray-light">2023</span>
                </div>
                <p className="text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptate vero, fugit dolore debitis quae enim
                  veritatis beatae deserunt ab. Alias commodi assumenda rerum
                  reprehenderit eum a, deleniti quisquam eaque.
                </p>
              </figcaption>
            </figure>
          </Link>
        </article>
        <article>
          <Link href={"/"}>
            <figure className="flex gap-8">
              <Image
                src={imgArticle2}
                width={300}
                height={169}
                alt="Couverture de l'article du blog"
                className="rounded-lg object-cover object-center aspect-video"
              />
              <figcaption className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <h2 className="text-xl font-medium">Project n°2</h2>
                  <span className="text-sm">•</span>
                  <span className="text-gray-light">2023</span>
                </div>
                <p className="text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptate vero, fugit dolore debitis quae enim
                  veritatis beatae deserunt ab. Alias commodi assumenda rerum
                  reprehenderit eum a, deleniti quisquam eaque.
                </p>
              </figcaption>
            </figure>
          </Link>
        </article>
        <article>
          <Link href={"/"}>
            <figure className="flex gap-8">
              <Image
                src={imgArticle3}
                width={300}
                height={169}
                alt="Couverture de l'article du blog"
                className="rounded-lg object-cover object-center aspect-video"
              />
              <figcaption className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <h2 className="text-xl font-medium">
                    How to self-host a NextJS app
                  </h2>
                  <span className="text-sm">•</span>
                  <span className="text-gray-light">2023</span>
                </div>
                <p className="text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptate vero, fugit dolore debitis quae enim
                  veritatis beatae deserunt ab. Alias commodi assumenda rerum
                  reprehenderit eum a, deleniti quisquam eaque.
                </p>
              </figcaption>
            </figure>
          </Link>
        </article>
      </div>
    </>
  );
}
