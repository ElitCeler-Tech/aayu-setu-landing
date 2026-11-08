"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL ?? "https://api.ayussetu.com/api";

/* The official badges, as published by Google and Apple for exactly
   this purpose, rather than lookalikes drawn by hand. The Google file
   came with a transparent margin baked in, which made it look a size
   smaller than Apple's at the same height; it is trimmed to the badge's
   own edge, so both stand at exactly the same height.

   They always sit side by side, never wrapped: the pair is about 6.4
   times as wide as it is tall, so on a phone both step down together to
   40px (Apple's minimum on screen), which fits the narrowest common
   phone inside a padded card, and grow again on wider screens.

   The apps are in closed beta and not listed yet, so each badge opens a
   short form instead. It posts to the same enquiry endpoint as the
   contact form; the role line tells the team it is a beta request and
   for which phone. */
const heights = {
  md: "h-10 sm:h-11",
  lg: "h-10 sm:h-12 lg:h-[3.25rem]",
};

type Platform = "Android" | "iPhone";

export function StoreButtons({
  size = "md",
  app = "patient",
}: {
  size?: "md" | "lg";
  app?: "patient" | "doctor";
}) {
  const h = heights[size];
  const [open, setOpen] = useState<Platform | null>(null);

  return (
    <>
      <div className="flex flex-nowrap items-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => setOpen("Android")}
          aria-label="Get it on Google Play, join the closed beta"
          className="inline-block shrink-0 cursor-pointer transition hover:opacity-85"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={564}
            height={168}
            className={`${h} w-auto`}
          />
        </button>
        <button
          type="button"
          onClick={() => setOpen("iPhone")}
          aria-label="Download on the App Store, join the closed beta"
          className="inline-block shrink-0 cursor-pointer transition hover:opacity-85"
        >
          <Image
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={120}
            height={40}
            className={`${h} w-auto`}
          />
        </button>
      </div>
      {open && (
        <BetaForm platform={open} app={app} onClose={() => setOpen(null)} />
      )}
    </>
  );
}

function BetaForm({
  platform,
  app,
  onClose,
}: {
  platform: Platform;
  app: "patient" | "doctor";
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [phoneType, setPhoneType] = useState<Platform>(platform);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    d?.querySelector<HTMLInputElement>("input[name=name]")?.focus();
    return () => d?.close();
  }, []);

  const appName = app === "doctor" ? "doctor app" : "app";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const f = new FormData(e.currentTarget);
    setState("sending");
    setError(null);

    const who = app === "doctor" ? "Doctor app" : "Patient app";
    const message = [
      `Closed beta request: ${who}, ${phoneType}`,
      `City: ${f.get("city") || "-"}`,
      "",
      `${f.get("message") || `Would like to join the closed beta of the ${appName}.`}`,
    ].join("\n");

    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          email: f.get("email"),
          phone: f.get("phone"),
          role: `Closed beta, ${who}, ${phoneType}`,
          message,
          company: f.get("company"),
        }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok || body?.success !== true) {
        throw new Error(body?.message ?? "Could not send that just now");
      }
      setState("sent");
    } catch (err) {
      setState("error");
      setError(
        err instanceof Error ? err.message : "Could not send that just now",
      );
    }
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl border border-line bg-white p-0 text-left text-navy shadow-[0_30px_80px_-30px_rgba(18,29,51,0.55)] backdrop:bg-ink/55 backdrop:backdrop-blur-[2px]"
    >
      <div className="relative p-6 sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-mist text-slate transition hover:text-navy"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {state === "sent" ? (
          <div className="flex min-h-[16rem] flex-col items-start justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-wash">
              <span className="h-3 w-3 rounded-full bg-sage" />
            </div>
            <h3 className="mt-4 text-[1.2rem] font-semibold text-navy">
              You are on the list
            </h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">
              We will send you the {phoneType} beta invite as soon as a place
              opens up.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-navy px-6 py-2.5 text-[0.88rem] font-semibold text-white transition hover:bg-ink"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow text-amber-deep">Closed beta</p>
            <h3 className="mt-2 pr-10 text-[1.35rem] font-semibold leading-snug text-navy">
              The {appName} is in closed beta
            </h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
              It is not in the stores yet. Submit the form and we will send
              you an invite to try it early.
            </p>

            <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
              <div>
                <span className="block text-[0.74rem] font-semibold text-navy">
                  Your phone
                </span>
                <div className="mt-1.5 grid grid-cols-2 gap-1 rounded-xl bg-mist p-1">
                  {(["Android", "iPhone"] as Platform[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPhoneType(p)}
                      aria-pressed={phoneType === p}
                      className={`h-9 rounded-lg text-[0.86rem] font-semibold transition ${
                        phoneType === p
                          ? "bg-white text-navy shadow-[0_1px_4px_rgba(18,29,51,0.12)]"
                          : "text-mute hover:text-navy"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <Field label="Your name" name="name" required autoFocus />
              <Field
                label={phoneType === "iPhone" ? "Email (your Apple ID, for TestFlight)" : "Email (your Google Play account)"}
                name="email"
                type="email"
                required
              />
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" />
                <Field label="City" name="city" />
              </div>

              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="beta-company">Company</label>
                <input id="beta-company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              {error && (
                <p className="rounded-xl bg-amber-wash px-3.5 py-2.5 text-[0.82rem] text-amber-deep">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full rounded-full bg-navy px-6 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-ink disabled:opacity-60"
              >
                {state === "sending" ? "Sending…" : "Request beta access"}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoFocus = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
}) {
  const id = `beta-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[0.74rem] font-semibold text-navy">
        {label}
        {!required && <span className="font-normal text-faint"> (optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoFocus={autoFocus}
        className="mt-1.5 h-[2.75rem] w-full rounded-xl border border-line bg-mist px-3.5 text-[0.88rem] text-navy outline-none transition placeholder:text-faint focus:border-navy"
      />
    </div>
  );
}
