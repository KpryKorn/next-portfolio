import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import HeroTitle from "@/components/HeroTitle";
import ShowLastPosts from "@/components/ShowLastPosts";

export default function Page() {
  return (
    <>
      <HeroTitle
        title="Blog"
        subtitle="Here are some of the articles I've written."
      />
      <ShowLastPosts />
    </>
  );
}
