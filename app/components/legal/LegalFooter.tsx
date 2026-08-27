import Link from 'next/link';

export function LegalFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-semibold text-zinc-900 dark:text-white">MyBlogs</span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              An independent full-stack web and AI demonstration platform.
            </p>
          </div>
          <nav aria-label="Legal and Site Links" className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</Link>
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-zinc-900 dark:hover:text-white">Terms & Conditions</Link>
            <Link href="mailto:ajaychandel730@gmail.com" className="hover:text-zinc-900 dark:hover:text-white">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-zinc-200/80 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
          © 2026 MyBlogs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}