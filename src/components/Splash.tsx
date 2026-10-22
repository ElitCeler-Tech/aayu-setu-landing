"use client";

import { useEffect, useRef, useState } from "react";

/* The app's own splash, on the website.
   It is the same file the patient app plays on launch, so the first
   thing somebody sees here is the first thing they will see there.
   Shown once a session: a brand animation on every navigation is a
   brand animation people learn to resent. */
export function Splash() {
  const [done, setDone] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem("ayussetu-splash") === "1";
    } catch {
      // Private browsing, or storage refused. Skip it rather than
      // trap somebody behind an animation that cannot remember itself.
      seen = true;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (seen || reduced) return;
    setDone(false);
    try {
      sessionStorage.setItem("ayussetu-splash", "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (done) return;
    // Nothing may strand a visitor on the splash - a codec the browser
    // will not open, autoplay refused, a frame that never arrives. The
    // same rule the app's own splash screen keeps.
    const bail = setTimeout(() => finish(), 4500);
    video.current?.play().catch(() => finish());
    return () => clearTimeout(bail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function finish() {
    setLeaving(true);
    setTimeout(() => setDone(true), 420);
  }

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-400 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <video
        ref={video}
        src="/splash.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
        className="max-h-[42vh] w-auto max-w-[78vw]"
      />
      <button
        onClick={finish}
        className="absolute bottom-10 text-[0.74rem] font-medium text-mute underline-offset-4 hover:underline"
      >
        Skip
      </button>
    </div>
  );
}
