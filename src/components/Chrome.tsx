import Link from "next/link";
import Image from "next/image";
import { HeaderFrame } from "./HeaderFrame";
import { legal } from "@/data/legal";

const nav = [
  { label: "What it reads", href: "/#tracked" },
  { label: "How it works", href: "/#how" },
  { label: "FAQs", href: "/#faq" },
  { label: "For doctors", href: "/for-doctors" },
  { label: "About us", href: "/about" },
];

/* The doctor app's mark: the orange heart on a white tile. White reads
   on the dark hero without help; on the white header a hairline keeps
   the tile from dissolving into the page. */
function Mark({ size = 34 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[0.65rem] bg-white shadow-[0_2px_8px_-2px_rgba(22,35,61,0.35)] ring-1 ring-line group-data-[dark=true]:ring-white/20"
      style={{ width: size, height: size }}
    >
      <Image
        src="/ayussetu-logo-white.png"
        alt=""
        width={size}
        height={size}
        priority
      />
    </span>
  );
}

/* `overlay` is for the home page only: the header floats over the dark
   hero and turns back into the paper header once it has scrolled by. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <HeaderFrame overlay={overlay}>
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-8 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="text-[1.2rem] font-semibold tracking-[-0.02em] text-navy transition-colors group-data-[dark=true]:text-white">
            Ayussetu
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-[0.84rem] font-medium text-slate transition hover:bg-mist hover:text-navy group-data-[dark=true]:text-white/70 group-data-[dark=true]:hover:bg-white/10 group-data-[dark=true]:hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden rounded-full px-4 py-2 text-[0.84rem] font-medium text-slate transition hover:text-navy group-data-[dark=true]:text-white/70 group-data-[dark=true]:hover:text-white sm:block"
          >
            Contact
          </a>
          <a
            href="/#download"
            className="rounded-full bg-navy px-5 py-2.5 text-[0.82rem] font-semibold text-white transition hover:bg-ink group-data-[dark=true]:bg-cta group-data-[dark=true]:text-ink group-data-[dark=true]:hover:bg-cta-deep"
          >
            Get the app
          </a>
        </div>
      </div>
    </HeaderFrame>
  );
}

const footerCols = [
  {
    h: "Product",
    links: [
      ["What it reads", "/#tracked"],
      ["How it works", "/#how"],
      ["Download", "/#download"],
    ],
  },
  {
    h: "Company",
    links: [
      ["About us", "/about"],
      ["FAQs", "/#faq"],
      ["Contact us", "/#contact"],
    ],
  },
];

/* Each one is a section of /legal. Terms of use and a privacy policy
   go back in here once there is real text for them: the live site's
   privacy page is a single sentence, and it has no terms at all. */
const policies = legal.map((l) => [l.short, `/legal#${l.slug}`]);

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark size={32} />
              <span className="text-[1.15rem] font-semibold tracking-[-0.02em] text-white">
                Ayussetu
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[0.86rem] leading-relaxed text-white/55">
              An AI driven healthcare assistant. Records in one place, risk
              understood early, prevention made possible.
            </p>
          </div>

          {footerCols.map((c) => (
            <div key={c.h}>
              <h3 className="eyebrow text-white/40">
                {c.h}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[0.86rem]">
                {c.links.map(([l, href]) => (
                  <li key={l}>
                    <a className="text-white/70 transition hover:text-white" href={href}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow text-white/40">
              Reach us
            </h3>
            <ul className="mt-4 space-y-2.5 text-[0.86rem] text-white/70">
              <li>
                <a className="transition hover:text-white" href="mailto:info@ayussetu.com">
                  info@ayussetu.com
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="/#contact">
                  Send us a message
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Kept together and named, so none of it reads as small print
            buried in a paragraph. */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <h3 className="eyebrow text-white/40">
            Disclaimers and policies
          </h3>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem]">
            {policies.map(([d, href]) => (
              <li key={d}>
                <a className="text-white/55 transition hover:text-white" href={href}>
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.78rem] text-white/45 sm:flex-row sm:items-start sm:justify-between">
          <p>© {new Date().getFullYear()} Ayussetu. All rights reserved.</p>
          <p className="max-w-md sm:text-right">
            AI powered insights to support preventive health actions. Not a
            diagnostic or treatment tool.
          </p>
        </div>
      </div>
    </footer>
  );
}
