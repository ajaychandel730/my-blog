import Link from 'next/link';

export function LegalHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white dark:bg-white dark:text-zinc-900">
            M
          </span>
          MyBlogs
        </Link>
        <nav aria-label="Main Navigation" className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="transition hover:text-zinc-900 dark:hover:text-white">
            Home
          </Link>
          <Link href="/blog" className="transition hover:text-zinc-900 dark:hover:text-white">
            Blog
          </Link>
          <Link href="mailto:ajaychandel730@gmail.com" className="transition hover:text-zinc-900 dark:hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}