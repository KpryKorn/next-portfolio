import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/globals.css";

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
          " container bg-bg-light text-black-light dark:bg-bg-dark dark:text-white-dark"
        }
      >
        <main className="my-6 md:my-12">{children}</main>
      </body>
    </html>
  );
}
