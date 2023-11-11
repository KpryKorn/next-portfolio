import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Sacha Roffini",
  description:
    "Portfolio de Sacha Roffini, ingénieur d'études et développement chez MGEN Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={
          inter.className +
          " container antialiased max-w-3xl bg-bg-light text-black-light dark:bg-bg-dark dark:text-white-dark"
        }
      >
        {/* <Header /> */}
        <main className="my-6 md:my-12 flex flex-col items-center justify-center gap-12 h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
