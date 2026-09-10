import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dárek — Matikast",
  description:
    "Darujte předplatné Matikastu někomu, koho chcete přivést k matematice.",
};

export default function Darek() {
  return (
    <main className="relative z-10 flex max-w-xl flex-col items-center gap-6 py-32 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
        Dárek
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
        Darujte matematiku
      </h1>
      <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-500">
        Chcete dát dárek, který má smysl? Darujte předplatné Matikastu. Skvělý
        tip pro deváťáky před přijímačkami, pro rodiče, kteří chtějí dětem
        pomoct, nebo pro kohokoli, kdo si chce matematiku konečně oblíbit.
      </p>
      <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-500">
        Dárkové předplatné vyřídíte za pár minut přes Herohero. Obdarovaný
        dostane přístup ke všem epizodám a vy máte dárek, který se nevybalí za
        chvíli, ale poslouchá celé měsíce.
      </p>
      <a
        href="https://herohero.co/matikast/gifts"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
      >
        Darovat předplatné
      </a>
    </main>
  );
}
