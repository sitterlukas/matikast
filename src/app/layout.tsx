import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeToggle } from "./theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matikast — matematický podcast",
  description: "Matematika srozumitelně a s nadhledem.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white dark:bg-neutral-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="relative z-10 flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-50"
            >
              Matikast
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/kontakt"
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400"
              >
                Kontakt
              </Link>
              <ThemeToggle />
            </nav>
          </header>

          <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6">
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

            {children}
          </div>

          <footer className="relative z-10 flex flex-col items-center gap-3 pb-8 text-sm text-neutral-400 dark:text-neutral-600">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://herohero.co/matikast"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                Herohero
              </a>
              <span
                aria-hidden
                className="text-neutral-300 dark:text-neutral-700"
              >
                ·
              </span>
              <a
                href="https://youtube.com/@matikastcz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                YouTube
              </a>
              <span
                aria-hidden
                className="text-neutral-300 dark:text-neutral-700"
              >
                ·
              </span>
              <a
                href="https://www.instagram.com/matikastcz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                Instagram
              </a>
              <span
                aria-hidden
                className="text-neutral-300 dark:text-neutral-700"
              >
                ·
              </span>
              <a
                href="https://www.facebook.com/people/Matikast/61593916472310/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                Facebook
              </a>
              <span
                aria-hidden
                className="text-neutral-300 dark:text-neutral-700"
              >
                ·
              </span>
              <a
                href="https://x.com/matikastcz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                X
              </a>
            </div>
            <span>© 2026 Matikast</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
