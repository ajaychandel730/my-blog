import type { LegalSectionProps } from '@/types/legal';

export function LegalSection({ id, number, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-zinc-100 pb-10 pt-8 first:pt-0 last:border-b-0 dark:border-zinc-800/60">
      <div className="group mb-4 flex items-baseline gap-3">
        <span className="font-mono text-sm font-semibold text-zinc-400 dark:text-zinc-600">
          {typeof number === 'number' && number < 10 ? `0${number}` : number}.
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          <a href={`#${id}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded-sm">
            {title}
          </a>
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}