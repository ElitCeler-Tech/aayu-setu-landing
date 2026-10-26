"use client";

import { useState } from "react";

const API =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.ayussetu.com/api";

const roles = [
  "I am a patient",
  "I am a doctor",
  "I run a clinic or hospital",
  "I run a diagnostic lab",
  "I run a scan or imaging centre",
  "I run a pharmacy",
  "Partnership or press",
];

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;

    const form = new FormData(e.currentTarget);
    setState("sending");
    setError(null);

    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          role: form.get("role"),
          message: form.get("message"),
          // Hidden from people, irresistible to bots.
          company: form.get("company"),
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
    <section id="contact" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <p className="eyebrow text-amber-deep">
              Contact us
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-ink text-balance">
              Tell us what you need it to do
            </h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-slate">
              Whether you are a patient with a question, a doctor who wants to
              consult on Ayussetu, or a clinic weighing it up for a whole
              practice, write to us and a person will answer.
            </p>

            <dl className="mt-8 space-y-4 text-[0.88rem]">
              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-mute">
                  Email
                </dt>
                <dd className="mt-0.5">
                  <a
                    className="font-medium text-navy underline-offset-4 hover:underline"
                    href="mailto:support@ayussetu.com"
                  >
                    support@ayussetu.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-mute">
                  Labs, scans and clinics
                </dt>
                <dd className="mt-0.5 text-slate">
                  Ask for a walkthrough and we will set up a demo account for
                  your team.
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgba(22,35,61,0.45)] sm:p-8">
            {state === "sent" ? (
              <div className="flex h-full min-h-[18rem] flex-col items-start justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-wash">
                  <span className="h-3 w-3 rounded-full bg-sage" />
                </div>
                <h3 className="mt-4 font-display text-[1.3rem] text-navy">
                  Thank you, it reached us
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">
                  Somebody will write back to you. If it is urgent and about
                  your own health, please speak to your doctor rather than
                  wait for us.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-[0.74rem] font-semibold text-navy"
                    >
                      You are
                    </label>
                    {/* The native arrow sits differently in every
                        browser and ignores the field's own type scale,
                        so it is removed and drawn here instead. */}
                    <div className="relative mt-1.5">
                      <select
                        id="role"
                        name="role"
                        defaultValue={roles[0]}
                        className="h-[2.85rem] w-full appearance-none rounded-xl border border-line bg-paper pl-3.5 pr-10 text-[0.88rem] text-navy outline-none transition focus:border-navy"
                      >
                        {roles.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-mute"
                      >
                        <path
                          d="m2.5 4.5 3.5 3.5 3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[0.74rem] font-semibold text-navy"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full resize-y rounded-xl border border-line bg-mist px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition placeholder:text-faint focus:border-navy"
                    placeholder="A sentence or two is plenty."
                  />
                </div>

                {/* Not display:none - some bots skip what is hidden that
                    way. Off-screen and out of the tab order instead. */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <p className="text-[0.74rem] leading-relaxed text-mute">
                  Please do not send medical details here. This form is not
                  monitored for emergencies.
                </p>

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
                  {state === "sending" ? "Sending…" : "Send message"}
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
      <label
        htmlFor={name}
        className="block text-[0.74rem] font-semibold text-navy"
      >
        {label}
        {!required && <span className="font-normal text-faint"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 h-[2.85rem] w-full rounded-xl border border-line bg-mist px-3.5 text-[0.88rem] text-navy outline-none transition placeholder:text-faint focus:border-navy"
      />
    </div>
  );
}
