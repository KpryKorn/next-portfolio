import ExternalLink from "@/components/ExternalLink";
import HeroImage from "@/components/HeroImage";
import HeroTitle from "@/components/HeroTitle";
import ShowLastPosts from "@/components/ShowLastPosts";

export default function Home() {
  return (
    <>
      <article className="my-6 md:my-12 flex flex-col gap-8">
        <HeroTitle
          title="Sacha Roffini"
          subtitle="I write code and ride motorcycles."
        />
        <HeroImage />
        <p
          className="max-w-lg animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Hi, I'm Sacha Roffini, a software engineer (in the making) who loves
          building cool things with code. <br /> In addition to coding, I am
          also passionate about tech, creative design and motorcycles.
        </p>
        <div
          className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <ExternalLink href="mailto:roffinisacha@gmail.com" text="Email me" />
          <ExternalLink href="/links" text="More ways to connect" />
        </div>
      </article>
      <ShowLastPosts />
    </>
  );
}
