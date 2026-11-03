import Image from "next/image";
import { StoreButtons } from "./StoreButtons";

/* What the public domain shows while the new site is still being
   reviewed. A build with NEXT_PUBLIC_COMING_SOON=1, set only on the
   Vercel project behind www.ayussetu.com, contains nothing but this page
   (see next.config.ts); the vercel.app preview never has the variable,
   so it keeps showing the full site. Removing the variable and
   redeploying is the launch. */
export function ComingSoon() {
  return (
    <main className="hero-room relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-8 sm:px-8">
        <div className="flex items-center gap-2.5">
          <Image src="/ayussetu-heart.png" alt="" width={40} height={28} style={{ height: "28px", width: "auto" }} priority />
          <Image src="/wordmark-light.png" alt="Ayus Setu" width={181} height={17} style={{ height: "1rem", width: "auto" }} priority />
        </div>

        <div className="my-auto max-w-3xl py-20">
          <p className="eyebrow text-amber-light">Coming soon</p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.98] text-balance">
            Something good is <em className="text-amber-light">on its way</em>
          </h1>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-white/70">
            We are getting our new website ready. In the meantime, the Ayussetu app is free for patients on
            Android and iPhone.
          </p>
          <div className="mt-9">
            <StoreButtons size="lg" />
          </div>
          <p className="mt-10 text-[0.95rem] text-white/60">
            Questions? Write to{" "}
            <a href="mailto:info@ayussetu.com" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              info@ayussetu.com
            </a>
          </p>
        </div>

        <p className="text-[0.8rem] text-white/40">&copy; {new Date().getFullYear()} Ayussetu. Connecting care for better health.</p>
      </div>
    </main>
  );
}
