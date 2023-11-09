import Link from "next/link";

export default async function ShowLastPosts() {
  return (
    <section className="py-6 md:py-12 flex flex-col gap-12 text-gray-light">
      <h3>Latest Posts</h3>
      <ul className="flex flex-col gap-6 group">
        <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover:opacity-60 hover:!opacity-100 transition-opacity">
          <span className="md:w-32">Oct 17, 2023</span>
          <Link href={"#"} className="text-black-light font-medium">
            My last blog post
          </Link>
        </li>
        <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover:opacity-60 hover:!opacity-100 transition-opacity">
          <span className="md:w-32">Nov 19, 2023</span>
          <Link href={"#"} className="text-black-light font-medium">
            My second blog post
          </Link>
        </li>
        <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 group-hover:opacity-60 hover:!opacity-100 transition-opacity">
          <span className="md:w-32">Oct 31, 2023</span>
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
