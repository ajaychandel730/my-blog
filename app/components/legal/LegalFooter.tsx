import Link from "next/link";
import LogoButton from "../homePage/HeaderButtons/LogoButton";

export function LegalFooter() {
  return (
    <footer className="border-t w-full border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="w-full  flex flex-col">
        <div className="flex px-4 md:px-10 flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            aria-label="Go to BlogSpace home page"
            href="/"
            className="flex items-center"
          >
            <div
              aria-hidden="true"
              className="text-xl bg-gradient-to-br bg-clip-text from-blue-600   to-purple-600 rounded-lg flex items-center justify-center text-transparent"
            >
              BlogSpace
            </div>
          </Link>
          <nav
            aria-label="Legal and Site Links"
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <Link
              href="/privacy-policy"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              href="mailto:ajaychandel730@gmail.com"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* <div className="mt-8 px-4  border-t border-zinc-200/80 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
          © 2026 MySpace. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
}
