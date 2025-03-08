import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import "@/assets/globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Portfolio | Sacha Roffini",
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
          GeistSans.className +
          " container antialiased bg-bg-light text-black-light dark:bg-bg-dark dark:text-white-dark"
        }
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="max-w-3xl mx-auto my-6 md:my-12">{children}</main>
        </ThemeProvider>
      </body>

    <Script defer src="https://analytics.kprykorn.dev/script.js" data-website-id="249dfb84-b5d0-4e3a-aa42-4a1962fa087a" />
    </html>
  );
}
