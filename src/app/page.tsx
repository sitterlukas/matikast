export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-white px-6 dark:bg-neutral-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none overflow-hidden text-neutral-100 dark:text-neutral-900"
      >
        <span className="absolute -left-10 top-10 font-serif text-[10rem] italic">
          ∑
        </span>
        <span className="absolute right-0 top-1/3 font-serif text-[14rem] italic">
          π
        </span>
        <span className="absolute bottom-0 left-1/4 font-serif text-[12rem] italic">
          ∞
        </span>
        <span className="absolute -right-8 bottom-10 font-serif text-[9rem] italic">
          √
        </span>
      </div>

      <main className="relative z-10 flex max-w-xl flex-col items-center gap-6 py-32 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          Podcast
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl">
          Matikast
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Matematika srozumitelně a s nadhledem.
        </p>
        <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-500">
          Sem přibude krátké představení podcastu — o čem je, kdo ho dělá a
          proč stojí za poslech. Epizody a další obsah budou brzy k
          dispozici.
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://herohero.co/matikast"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Poslouchat na Herohero
          </a>
          <a
            href="https://youtube.com/@matikast"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            Sledovat na YouTube
          </a>
        </div>
      </main>

      <footer className="relative z-10 pb-8 text-sm text-neutral-400 dark:text-neutral-600">
        © 2026 Matikast
      </footer>
    </div>
  );
}
