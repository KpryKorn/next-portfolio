"use client";

// TODO: read https://nextjs.org/docs/app/api-reference/functions/use-params
// accéder aux params de l'URL pour sélectionner le single post qui correspond post.slug et params.slug

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { allPosts } from "@/.contentlayer/generated";

import imgArticle1 from "@/assets/unsplash-degrade-1.jpg";
import imgArticle2 from "@/assets/unsplash-degrade-2.jpg.jpg";
import imgArticle3 from "@/assets/unsplash-degrade-3.jpg.jpg";

export default function ShowLastPosts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const imageStyle = {
    top: mousePosition.y - 200,
    left: mousePosition.x - 150,
  };

  const post = allPosts.find;

  return (
    <section className="py-6 md:py-12 flex flex-col gap-12 text-gray-light">
      <h2>Latest Posts</h2>
      <ul className="flex flex-col gap-6 group/container">
        <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover/container:opacity-60 hover:!opacity-100 transition-opacity group/item">
          <div
            className="max-w-[300px] absolute z-10 scale-0 group-hover/item:scale-100 origin-bottom transition-transform ease-[cubic-bezier(.25,.75,.5,1.25)]"
            style={imageStyle}
          >
            <Image
              loading="eager"
              src={imgArticle1}
              width={300}
              height={169}
              alt="Couverture de l'article du blog"
              className="rounded-lg object-cover object-center aspect-video"
            />
          </div>
          <span className="md:w-32">Oct 17, 2023</span>
          <Link href={"#"} className="text-black-light font-medium">
            My last blog post
          </Link>
        </li>
      </ul>
      <Link
        href={"/blog"}
        className="underline-offset-4 underline hover:text-black"
      >
        See All
      </Link>
    </section>
  );
}
