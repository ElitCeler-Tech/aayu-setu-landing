import type { Metadata } from "next";
import { fontClasses } from "./fonts";
import "./globals.css";

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
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
