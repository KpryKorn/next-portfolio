import ExternalLink from "@/components/ExternalLink";
import HeroImage from "@/components/HeroImage";
import HeroTitle from "@/components/HeroTitle";
import ShowLastPosts from "@/components/ShowLastPosts";

export default function Home() {
  return (
    <>
      <span className="text-6xl md:text-8xl">👷‍♂️</span>
      <div className="flex space-x-2 justify-center items-end">
        <div className="h-3 w-3 bg-orange-500 dark:bg-white rounded-full animate-bounce [animation-delay:-0.45s]"></div>
        <div className="h-3 w-3 bg-orange-500 dark:bg-white rounded-full animate-bounce [animation-delay:-0.30s]"></div>
        <div className="h-3 w-3 bg-orange-500 dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      </div>
    </>
  );
}
