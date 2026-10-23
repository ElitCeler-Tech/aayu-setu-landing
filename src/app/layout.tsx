import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/* One face, the product's own. The serif that was here read as a
   teaching hospital's annual report; Poppins is what both apps are set
   in, and at display sizes with the tracking pulled in it is the
   modern half of the brand rather than the soft one. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
