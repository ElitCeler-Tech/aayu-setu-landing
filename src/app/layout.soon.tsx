import type { Metadata } from "next";
import "./globals.css";
import { fontClasses } from "./fonts";

/* The Coming soon build's only layout. With NEXT_PUBLIC_COMING_SOON=1
   the build reads only *.soon.tsx files (see next.config.ts), so the
   real pages are not in that build at all: nothing of them can be read
   from the page source. */
export const metadata: Metadata = {
  title: "Ayussetu, coming soon",
  description: "Our new website is on its way. The Ayussetu app is free for patients on Android and iPhone.",
};

export default function SoonLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
