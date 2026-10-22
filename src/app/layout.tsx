import type { Metadata } from "next";
import { Poppins, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

/* Poppins is the face both apps are set in, and the serif is the one on
   the prescription letterhead - so the website is typeset out of the
   product rather than out of a template. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayussetu — your health, in one place",
  description:
    "Ayussetu keeps your medicines, readings, reports and consultations together, and puts them in front of the doctor treating you. Free for patients, on Android and iPhone.",
  openGraph: {
    title: "Ayussetu — your health, in one place",
    description:
      "Medicines, readings, reports and consultations in one place, and in front of the doctor treating you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
