import { LegalHeader } from './LegalHeader';
import { LegalFooter } from './LegalFooter';
import { TableOfContents } from './TableOfContents';
import type { LegalLayoutProps } from '@/types/legal';
import Header from '../Header';

export function LegalLayout({
  title,
  description,
  lastUpdated,
  tocItems,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-zinc-900 antialiased dark:bg-background dark:text-zinc-100">
      {/* <LegalHeader /> */}
      <Header/>
      {/* Hero Header */}
      <header className="border-b border-zinc-200 bg-zinc-50/50 py-12 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Legal & Compliance
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Last Updated: {lastUpdated}
          </div>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky Table Of Contents on Desktop */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4 scrollbar-thin">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Legal Document Content */}
          <main className="lg:col-span-9">
            {/* Informational Disclaimer Banner */}
            <aside aria-label="Disclaimer" className="mb-8 rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-xs leading-relaxed text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-300">
              <strong>Notice:</strong> MyBlogs is an independent full-stack web and AI demonstration project. This document transparently outlines our technical and data handling practices for informational purposes and does not constitute formal legal advice.
            </aside>

            {/* Mobile TOC Collapsible / Stacked */}
            <div className="mb-8 block rounded-lg border border-zinc-200 p-4 lg:hidden dark:border-zinc-800">
              <TableOfContents items={tocItems} />
            </div>

            <article className="prose-zinc max-w-none">
              {children}
            </article>
          </main>
        </div>
      </div>

      <LegalFooter />
    </div>
  );
}