"use client";

import { useEffect, useRef, useState } from "react";

/* Search, Login and the menu — the three controls the header carries now
   that Contact and Get the app have come out of it.

   The search is real, not a decorative magnifier: it matches against the
   pages and sections this site actually has and navigates to the one
   picked. A box that looks like search and does nothing is worse than no
   box at all, and this site is small enough that a static index is the
   honest implementation rather than a stub pointing at a service that
   does not exist yet. */

import { SITE_INDEX as INDEX } from "@/data/siteIndex";

function Icon({ d, size = 18 }: { d: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function HeaderActions() {
  const [open, setOpen] = useState<"none" | "search" | "menu">("none");
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open === "search") inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen("none");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hits = q.trim()
    ? INDEX.filter((e) =>
        (e.label + " " + e.hint).toLowerCase().includes(q.trim().toLowerCase()),
      )
    : INDEX.slice(0, 6);

  const btn =
    "flex h-8 w-8 items-center justify-center rounded-full text-slate transition hover:bg-mist hover:text-navy group-data-[dark=true]:text-white/75 group-data-[dark=true]:hover:bg-white/10 group-data-[dark=true]:hover:text-white";

  return (
    <>
      <div className="flex shrink-0 items-center justify-end gap-0.5 sm:gap-1.5">
        <button
          type="button"
          aria-label="Search"
          onClick={() => setOpen(open === "search" ? "none" : "search")}
          className={btn}
        >
          <Icon d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4" />
        </button>

        <a
          href="/login"
          className="rounded-full border border-line px-3 py-1.5 text-[0.78rem] font-semibold text-navy sm:px-4 sm:text-[0.82rem] transition hover:border-navy group-data-[dark=true]:border-white/25 group-data-[dark=true]:text-white group-data-[dark=true]:hover:border-white/60"
        >
          Login
        </a>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open === "menu"}
          onClick={() => setOpen(open === "menu" ? "none" : "menu")}
          className={btn}
        >
          <Icon d={open === "menu" ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
        </button>
      </div>

      {open !== "none" && (
        <>
          {/* Click-away. Sits under the panel, over everything else. */}
          <button
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen("none")}
            className="fixed inset-0 top-[var(--header-h,3.5rem)] z-40 cursor-default bg-ink/20 backdrop-blur-[2px]"
          />
          <div className="absolute inset-x-0 top-full z-50 border-b border-line bg-paper shadow-[0_24px_50px_-28px_rgba(22,35,61,0.45)]">
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
              {open === "search" ? (
                <>
                  <div className="flex items-center gap-3 rounded-full border border-line bg-white px-4 py-2.5">
                    <span className="text-mute">
                      <Icon d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4" size={17} />
                    </span>
                    <input
                      ref={inputRef}
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Search Ayussetu"
                      className="w-full bg-transparent text-[0.95rem] text-ink outline-none placeholder:text-faint"
                    />
                  </div>
                  <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                    {hits.map((e) => (
                      <li key={e.href}>
                        <a
                          href={e.href}
                          onClick={() => setOpen("none")}
                          className="flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-mist"
                        >
                          <span className="text-[0.88rem] font-semibold text-navy">{e.label}</span>
                          <span className="text-[0.78rem] text-mute">{e.hint}</span>
                        </a>
                      </li>
                    ))}
                    {hits.length === 0 && (
                      <li className="px-3 py-2.5 text-[0.88rem] text-mute">
                        Nothing matches that. Try “records”, “doctors” or “ABHA”.
                      </li>
                    )}
                  </ul>
                </>
              ) : (
                <ul className="grid gap-1 sm:grid-cols-2">
                  {INDEX.map((e) => (
                    <li key={e.href}>
                      <a
                        href={e.href}
                        onClick={() => setOpen("none")}
                        className="flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-mist"
                      >
                        <span className="text-[0.92rem] font-semibold text-navy">{e.label}</span>
                        <span className="text-[0.78rem] text-mute">{e.hint}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
