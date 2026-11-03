"use client";

import { useEffect, useState } from "react";

/* The footer's social icons. Ayussetu has no published accounts yet, so
   a click shows a small Coming soon note above the icon instead of going
   anywhere. When a real handle exists, give it an `href` and it becomes
   a normal link. */

type Social = { name: string; d: string; fill?: boolean; href?: string };

export function SocialLinks({ socials }: { socials: Social[] }) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setOpen(null), 1800);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <ul className="mt-6 flex gap-2">
      {socials.map((x) => (
        <li key={x.name} className="relative">
          <a
            href={x.href ?? "#"}
            aria-label={x.href ? x.name : `${x.name}, coming soon`}
            onClick={(e) => {
              if (x.href) return;
              e.preventDefault();
              setOpen(x.name);
            }}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.07] text-white/70 transition hover:bg-white/15 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill={x.fill ? "currentColor" : "none"} stroke={x.fill ? "none" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={x.d} />
            </svg>
          </a>
          {open === x.name && (
            <span role="status" className="who-in absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cta px-3 py-1 text-[0.72rem] font-semibold text-white">
              Coming soon
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
