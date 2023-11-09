import ExternalLink from "@/components/ExternalLink";
import HeroImage from "@/components/HeroImage";
import HeroTitle from "@/components/HeroTitle";

export default function Home() {
  return (
    <article className="my-6 md:my-12 flex flex-col gap-8">
      <HeroTitle
        title="Sacha Roffini"
        subtitle="I write code and ride motorcycles."
      />
      <HeroImage />
      <p className="max-w-lg">
        Hi, I'm Sacha Roffini, a software engineer (in the making) who loves
        building cool things with code. In addition to coding, I am also
        passionate about tech, creative design and motorcycles.
      </p>
      <div className="flex items-center gap-8">
        <ExternalLink href="mailto:sacha@utopiaz.net" text="Email me" />
        <ExternalLink href="#" text="More ways to connect" />
      </div>
    </article>
  );
}
