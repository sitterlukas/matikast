export default function Home() {
  return (
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
        Podcast, který dělá z matematiky srozumitelný a občas i vtipný zážitek —
        žádné biflování vzorců, jen dobré otázky a jasná vysvětlení pro každého,
        koho čísla někdy vyděsila ve škole.
      </p>
      <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-500">
        Hodí se hlavně žákům, kteří se připravují na přijímačky na střední
        školy, ale poslechne si ho klidně každý, kdo si chce matematiku oblíbit.
      </p>
      <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-500">
        První epizody vycházejí už brzy. Sledujte Matikast na Herohero nebo
        YouTube, ať vám nic neuteče.
      </p>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://herohero.co/matikast"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          Sledovat na Herohero
        </a>
        <a
          href="https://youtube.com/@matikastcz"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          Sledovat na YouTube
        </a>
      </div>
      <a
        href="https://herohero.co/matikast/gifts"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-teal-600 hover:underline dark:text-neutral-500 dark:hover:text-teal-400"
      >
        Chcete dát dárek? Darujte předplatné Matikastu 🎁
      </a>
    </main>
  );
}
