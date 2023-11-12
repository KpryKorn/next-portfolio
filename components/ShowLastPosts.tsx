"use client";

import Image from "next/image";
import Link from "next/link";
import imgArticle1 from "@/assets/unsplash-degrade-1.jpg";
import imgArticle2 from "@/assets/unsplash-degrade-2.jpg.jpg";
import imgArticle3 from "@/assets/unsplash-degrade-3.jpg.jpg";
import { useState, useEffect } from "react";

export default function ShowLastPosts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
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
              alt="Couverture de l'article du blog"
              className="rounded-lg object-cover object-center aspect-video"
            />
          </div>
          <span className="md:w-32">Oct 17, 2023</span>
          <Link href={"#"} className="text-black-light font-medium">
            My last blog post
          </Link>
        </li>
        <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover/container:opacity-60 hover:!opacity-100 transition-opacity group/item">
          <div
            className="max-w-[300px] absolute z-10 scale-0 group-hover/item:scale-100 origin-bottom transition-transform ease-[cubic-bezier(.25,.75,.5,1.25)]"
            style={imageStyle}
          >
            <Image
              loading="eager"
              src={imgArticle2}
              width={300}
              alt="Couverture de l'article du blog"
              className="rounded-lg object-cover object-center aspect-video"
            />
          </div>
          <span className="md:w-32">Jan 10, 2023</span>
          <Link href={"#"} className="text-black-light font-medium">
            What is Tailwind CSS
          </Link>
        </li>
        <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover/container:opacity-60 hover:!opacity-100 transition-opacity group/item">
          <div
            className="max-w-[300px] absolute z-10 scale-0 group-hover/item:scale-100 origin-bottom transition-transform ease-[cubic-bezier(.25,.75,.5,1.25)]"
            style={imageStyle}
          >
            <Image
              loading="eager"
              src={imgArticle3}
              width={300}
              alt="Couverture de l'article du blog"
              className="rounded-lg object-cover object-center aspect-video"
            />
          </div>
          <span className="md:w-32">Oct 02, 2023</span>
          <Link href={"#"} className="text-black-light font-medium">
            My first blog post
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
