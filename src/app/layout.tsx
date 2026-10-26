import type { Metadata } from "next";
import { Poppins, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

/* Two faces, with a job each.

   Poppins stays because it is what both apps are set in, so the
   interface language of the site matches the thing it is selling. What
   it cannot do is carry a headline: it is geometric and wide, which
   reads as friendly at 14px and as slack at 56px.

   Schibsted Grotesk takes the headlines. It is a newsroom grotesque,
   tighter and squarer than Poppins, with a double storey a against
   Poppins' single storey one, so the two are plainly different rather
   than almost the same. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayussetu, an AI healthcare assistant",
  description:
    "Ayussetu brings scattered paper and digital health records together and uses AI to show where your risk is building, so it can be acted on early. Free for patients, on Android and iPhone.",
  openGraph: {
    title: "Ayussetu, an AI healthcare assistant",
    description:
      "Digitalise your records, understand your risk, and act on it early.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
