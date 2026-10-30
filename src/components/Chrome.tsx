import Link from "next/link";
import Image from "next/image";
import { HeaderFrame } from "./HeaderFrame";
import { HeaderActions } from "./HeaderActions";
import { NAV } from "@/data/siteIndex";
import { legal } from "@/data/legal";


/* The brand mark: the solid orange heart with its pulse line, the
   doctor app's icon without the white tile around it. Two cuts, chosen by
   the ground: on light bars the pulse is knocked out of the heart
   (logo.png); on the dark hero and footer the pulse is drawn in white
   (ayussetu-heart.png). `tone` fixes one for a ground that never changes;
   left unset it follows the header's own dark state. */
function Mark({ size = "h-[30px]", tone }: { size?: string; tone?: "light" | "dark" }) {
  const onLight = <Image src="/logo.png" alt="" width={429} height={354} priority className={`w-auto shrink-0 ${size} ${tone ? "" : "group-data-[dark=true]:hidden"}`} />;
  const onDark = <Image src="/ayussetu-heart.png" alt="" width={512} height={361} priority className={`w-auto shrink-0 ${size} ${tone ? "" : "hidden group-data-[dark=true]:block"}`} />;
  if (tone === "light") return onLight;
  if (tone === "dark") return onDark;
  return (
    <>
      {onLight}
      {onDark}
    </>
  );
}

/* `overlay` is for the home page only: the header floats over the dark
   hero and turns back into the paper header once it has scrolled by. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <HeaderFrame overlay={overlay}>
      {/* Shorter and wider than it was: 3.5rem tall against the old
          4.25, and running to max-w-7xl so the bar reaches across the
          page instead of stopping short of it.

          The wordmark is the logo's own lettering, cut from
          ayussetu-logo-full.png and recoloured, rather than Lastica set
          live — the typeface is licensed and not installed here, and a
          near-miss substitute in the one place the brand is named is
          worse than using the real artwork. Two files because the bar
          turns dark over the hero and light everywhere else. */}
      <div className="mx-auto grid h-11 max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-5 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Mark size="h-[24px] sm:h-[28px]" />
          <Image
            src="/wordmark-dark.png"
            alt="Ayus Setu"
            width={181}
            height={17}
            priority
            style={{ height: "0.82rem", width: "auto" }}
            className="group-data-[dark=true]:hidden"
          />
          <Image
            src="/wordmark-light.png"
            alt="Ayus Setu"
            width={181}
            height={17}
            priority
            style={{ height: "0.82rem", width: "auto" }}
            className="hidden group-data-[dark=true]:block"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-2.5 py-1.5 text-[0.78rem] font-medium text-slate transition hover:bg-mist hover:text-navy group-data-[dark=true]:text-white/70 group-data-[dark=true]:hover:bg-white/10 group-data-[dark=true]:hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <HeaderActions />
      </div>
    </HeaderFrame>
  );
}

const footerCols = [
  {
    h: "Product",
    links: [
      ["How it works", "/#how"],
      ["Health intelligence", "/#intelligence"],
      ["Ayu AI", "/#ai"],
      ["Who we serve", "/#who"],
      ["Download", "/#download"],
    ],
  },
  {
    h: "Company",
    links: [
      ["About us", "/about"],
      ["Privacy and safety", "/#trust"],
      ["FAQs", "/faq"],
      ["Contact us", "/contact"],
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
              <Mark size="h-[30px]" tone="dark" />
              <Image src="/wordmark-light.png" alt="Ayus Setu" width={181} height={17} style={{ height: "0.95rem", width: "auto" }} />
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
                <a className="transition hover:text-white" href="/contact">
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
