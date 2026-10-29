import Image from "next/image";

/* The official badges, as published by Google and Apple for exactly
   this purpose, rather than lookalikes drawn by hand. The Google file
   came with a transparent margin baked in, which made it look a size
   smaller than Apple's at the same height; it is trimmed to the badge's
   own edge, so both stand at exactly the same height.

   They always sit side by side, never wrapped: the pair is about 6.4
   times as wide as it is tall, so on a phone both step down together to
   40px (Apple's minimum on screen), which fits the narrowest common
   phone inside a padded card, and grow again on wider screens. */
const heights = {
  md: "h-10 sm:h-11",
  lg: "h-10 sm:h-12 lg:h-[3.25rem]",
};

export function StoreButtons({ size = "md" }: { size?: "md" | "lg" }) {
  const h = heights[size];
  return (
    <div className="flex flex-nowrap items-center gap-2.5 sm:gap-3">
      <a href="#" aria-label="Get it on Google Play" className="inline-block shrink-0 transition hover:opacity-85">
        <Image
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={564}
          height={168}
          className={`${h} w-auto`}
        />
      </a>
      <a href="#" aria-label="Download on the App Store" className="inline-block shrink-0 transition hover:opacity-85">
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
