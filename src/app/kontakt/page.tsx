import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Matikast",
  description: "Napište nám na Matikast.",
};

export default function Kontakt() {
  return (
    <main className="relative z-10 flex max-w-xl flex-col items-center gap-6 py-32 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
        Kontakt
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
        Ozvěte se nám
      </h1>
      <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-500">
        Máte tip na téma, otázku z matematiky, nebo chcete jen pozdravit?
        Napište nám na e-mail.
      </p>
      <a
        href="mailto:info@matikast.cz"
        className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
      >
        info@matikast.cz
      </a>
    </main>
  );
}
