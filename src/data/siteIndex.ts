/* The one list of what this site contains. The header bar, the menu and
   the search all read it, so a page can never appear in one and be
   missing from another.

   It lives here rather than in HeaderActions because that file is a
   client component: a plain array exported from a "use client" module
   reaches a server component as a client reference, not an array, and
   .map on it fails at build time. */
export type SiteEntry = { label: string; href: string; hint: string };

export const SITE_INDEX: SiteEntry[] = [
  { label: "How it works", href: "/#how", hint: "Bring records in, read them, see what changes" },
  { label: "Health intelligence", href: "/#intelligence", hint: "Swasth Score, lab trends, markers" },
  { label: "Ayu AI", href: "/#ai", hint: "Answers drawn from your own record" },
  { label: "For doctors and clinics", href: "/for-doctors", hint: "The doctor app and the clinic portal" },
  { label: "About us", href: "/about", hint: "Why Ayussetu exists, and the team" },
  { label: "Privacy and safety", href: "/#trust", hint: "Consent, access, what is never sold" },
  { label: "ABHA and ABDM", href: "/#abha", hint: "One health ID, planned" },
  { label: "FAQs", href: "/faq", hint: "Questions people actually ask" },
  { label: "Contact us", href: "/contact", hint: "Talk to a person" },
  { label: "Download the app", href: "/#download", hint: "Android and iPhone, free for patients" },
];

/** What fits across the bar itself on a wide screen. */
export const NAV = SITE_INDEX.slice(0, 5);
