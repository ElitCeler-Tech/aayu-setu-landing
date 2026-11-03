import { Instrument_Serif, Instrument_Sans, DM_Mono } from "next/font/google";

/* Three faces, each with a job, picked against the reference the client
   chose rather than by taste.

   Their headline face is Financier Display, a high contrast Scotch serif
   set light at a line height of 1. Instrument Serif is the closest thing
   to it that can be served: same sharp hairlines, same tight fit, and at
   68px its contrast reads as light without a light weight existing.

   Their text face is FT Base, a neutral grotesque. Instrument Sans was
   drawn alongside Instrument Serif and sits in the same place.

   And every small label on their page is mono, uppercase, eleven pixels,
   a tenth of an em apart. That detail is doing more work than it looks,
   so DM Mono takes the eyebrows and the figures. */
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

export const fontClasses = `${sans.variable} ${serif.variable} ${mono.variable}`;
