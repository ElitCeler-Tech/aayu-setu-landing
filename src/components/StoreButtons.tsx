import Image from "next/image";

/* The official badges, as published by Google and Apple for exactly
   this purpose, rather than lookalikes drawn by hand. The Google file
   came with a transparent margin baked in, which made it look a size
   smaller than Apple's at the same height; it is trimmed to the badge's
   own edge, so both now stand at exactly the same height. Apple's
   minimum is 40px on screen; these sit above it. */
export function StoreButtons({ size = "md" }: { size?: "md" | "lg" }) {
  const h = size === "lg" ? "h-[3.25rem]" : "h-11";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#" aria-label="Get it on Google Play" className="inline-block transition hover:opacity-85">
        <Image
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={564}
          height={168}
          className={`${h} w-auto`}
        />
      </a>
      <a href="#" aria-label="Download on the App Store" className="inline-block transition hover:opacity-85">
        <Image
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          className={`${h} w-auto`}
        />
      </a>
    </div>
  );
}
