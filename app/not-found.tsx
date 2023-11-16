import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Sacha Roffini",
  description: "Uh oh! This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="my-6 md:my-12 pt-12 flex flex-col items-center justify-center gap-2 text-center h-96">
    <h1 className="text-xl md:text-3xl font-semibold">404 - Page not found</h1>
    <p className="text-secondary">
      Uh oh! This page does not exist, maybe you clicked an old link or
      misspelled. Please try again…
    </p>
    <div className="h-2" />
    <Link href="/" className="underline underline-offset-4">
      Return home
    </Link>
  </div>
);

export default Custom404;
