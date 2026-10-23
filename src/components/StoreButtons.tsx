import Image from "next/image";

/* The official badges, as published by Google and Apple for exactly
   this purpose, rather than lookalikes drawn by hand. Both have
   published minimum sizes and clear space rules; these are set well
   above the minimum and given their own padding. */
export function StoreButtons({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href="#"
        aria-label="Get it on Google Play"
        className="inline-block transition hover:opacity-85"
      >
        <Image
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={180}
          height={54}
          className="h-[3.75rem] w-auto"
        />
      </a>
      <a
        href="#"
        aria-label="Download on the App Store"
        className={`inline-block transition hover:opacity-85 ${
          tone === "dark" ? "" : ""
        }`}
      >
        <Image
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={160}
          height={53}
          className="h-[2.6rem] w-auto"
        />
      </a>
    </div>
  );
}
