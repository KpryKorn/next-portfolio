"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { allPosts } from "@/.contentlayer/generated";

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

  return (
    <section
      className="py-6 md:py-12 flex flex-col gap-12 text-gray-light dark:text-gray-dark animate-in"
      style={{ "--index": 3 } as React.CSSProperties}
    >
      <h2>Latest Posts</h2>
      <ul className="flex flex-col gap-6 group/container">
        {allPosts
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .filter((_, i) => i < 3)
          .map((post) => {
            return (
              <li
                key={post._id}
                className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover/container:opacity-60 hover:!opacity-100 transition-opacity group/item"
              >
                <div
                  className="max-w-[300px] absolute z-10 scale-0 group-hover/item:scale-100 origin-bottom transition-transform ease-[cubic-bezier(.25,.75,.5,1.25)]"
                  style={imageStyle}
                >
                  <Image
                    src={post.image}
                    width={300}
                    height={169}
                    alt={post.title}
                    className="rounded-lg object-cover object-center aspect-video"
                  />
                </div>
                <span className="md:w-32">{post.publishedAt}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-black-light dark:text-white-dark font-medium"
                >
                  {post.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <Link
        href={"/blog"}
        className="underline-offset-4 underline hover:text-black dark:hover:text-white-dark"
      >
        See All
      </Link>
    </section>
  );
}
