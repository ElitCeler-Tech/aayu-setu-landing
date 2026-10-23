"use client";

import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL ?? "https://api.ayussetu.com/api";

/* The registration form for clinicians.
   It posts to the same enquiry endpoint the contact form uses, with the
   clinical fields folded into the message: a doctor filling this in
   wants somebody to call them back, not an account provisioned by a
   form they cannot see the end of. */
export function JoinForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const f = new FormData(e.currentTarget);
    setState("sending");
    setError(null);

    const role = `${f.get("kind")}`;
    const message = [
      `Qualification: ${f.get("qualification") || "-"}`,
      `Specialisation: ${f.get("specialisation") || "-"}`,
      `Registration number: ${f.get("registration") || "-"}`,
      `Clinic or hospital: ${f.get("clinic") || "-"}`,
      `City: ${f.get("city") || "-"}`,
      "",
      `${f.get("message") || "Would like to join Ayussetu."}`,
    ].join("\n");

    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          email: f.get("email"),
          phone: f.get("phone"),
          role,
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
      setError(err instanceof Error ? err.message : "Could not send that just now");
    }
  }

  return (
    <section id="join" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-amber-deep">
              Register
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.6vw,2.3rem)] leading-tight text-ink text-balance">
              Tell us about your practice
            </h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-slate">
              Leave your details and somebody will set you up: a doctor
              account, a clinic console, or a walkthrough of both. There is
              nothing to pay to look.
            </p>
            <p className="mt-6 text-[0.84rem] text-mute">
              Prefer to write?{" "}
              <a
                className="font-semibold text-navy underline decoration-amber underline-offset-4"
                href="mailto:info@ayussetu.com"
              >
                info@ayussetu.com
              </a>
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgba(22,35,61,0.45)] sm:p-8">
            {state === "sent" ? (
              <div className="flex min-h-[20rem] flex-col items-start justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-wash">
                  <span className="h-3 w-3 rounded-full bg-sage" />
                </div>
                <h3 className="mt-4 font-display text-[1.3rem] text-navy">
                  Thank you, it reached us
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">
                  Somebody will be in touch to set your account up.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Select
                    label="You are"
                    name="kind"
                    options={[
                      "A doctor",
                      "A clinic or hospital",
                      "A diagnostic lab",
                      "A scan or imaging centre",
                      "A pharmacy",
                    ]}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Qualification" name="qualification" />
                  <Field label="Specialisation" name="specialisation" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Medical registration number" name="registration" />
                  <Field label="City" name="city" />
                </div>
                <Field label="Clinic or hospital" name="clinic" />

                <div>
                  <label htmlFor="message" className="block text-[0.74rem] font-semibold text-navy">
                    Anything else
                    <span className="font-normal text-faint"> (optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1.5 w-full resize-y rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition placeholder:text-faint focus:border-navy"
                    placeholder="How many doctors, which departments, what you want it to do."
                  />
                </div>

                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                {error && (
                  <p className="rounded-xl bg-amber-wash px-3.5 py-2.5 text-[0.82rem] text-amber-deep">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full rounded-full bg-navy px-6 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-ink disabled:opacity-60 sm:w-auto"
                >
                  {state === "sending" ? "Sending…" : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.74rem] font-semibold text-navy">
        {label}
        {!required && <span className="font-normal text-faint"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 h-[2.85rem] w-full rounded-xl border border-line bg-paper px-3.5 text-[0.88rem] text-navy outline-none transition placeholder:text-faint focus:border-navy"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.74rem] font-semibold text-navy">
        {label}
      </label>
      <div className="relative mt-1.5">
        <select
          id={name}
          name={name}
          defaultValue={options[0]}
          className="h-[2.85rem] w-full appearance-none rounded-xl border border-line bg-paper pl-3.5 pr-10 text-[0.88rem] text-navy outline-none transition focus:border-navy"
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-mute"
        >
          <path d="m2.5 4.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
