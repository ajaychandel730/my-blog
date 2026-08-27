'use client';

import { useEffect, useState } from 'react';
import type { TocItem } from '@/types/legal';

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -65% 0%',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="w-full">
      <div className="mb-3 text-xs font-bold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
        On This Page
      </div>
      <ul className="space-y-1.5 border-l border-zinc-200 text-xs dark:border-zinc-800">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block -ml-px border-l-2 py-1 pl-3 transition-colors duration-150 ${
                  isActive
                    ? 'border-zinc-900 font-semibold text-zinc-900 dark:border-white dark:text-white'
                    : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}