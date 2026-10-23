import { PhoneShowcase } from "./PhoneShowcase";
import {
  DoseMock,
  VitalsMock,
  ReportMock,
  PrescriptionMock,
  EarningsMock,
  GroupMock,
} from "./Mocks";
import { AyuMock, RecordsMock, RiskMock, ConsultMock } from "./Mocks2";
import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/team";
import { Reveal, Parallax } from "./Motion";
import { StoreButtons } from "./StoreButtons";

/* ------------------------------- hero -------------------------------- */

const promise = ["Digitalise records", "Predict risk", "Prevent disease", "Live better"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* A quiet grid, and one warm bloom behind the phone. Enough to
          stop the section being a white rectangle, far short of the
          purple gradient every health startup opens with. */}
      <div className="grid-ground grid-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute right-[-18%] top-[-22%] h-[44rem] w-[44rem] rounded-full bg-amber/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-15%] h-[34rem] w-[34rem] rounded-full bg-sage/[0.05] blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-28 xl:gap-20">
        <div>
          {/* Not a status pill. A pulsing green dot is the convention
              for "service is up", which is not what this sentence is
              about: it is a claim, so it gets a mark that reads as AI.
              The tracking is also eased off: at 0.1em the hyphen in
              "AI-driven" opened into a dash and the line read as two. */}
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-mute backdrop-blur [animation-delay:90ms]">
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="text-amber"
            >
              <path
                d="M6 0.5 7.1 4.2 10.8 5.3 7.1 6.4 6 10.1 4.9 6.4 1.2 5.3 4.9 4.2Z"
                fill="currentColor"
              />
            </svg>
            Preventive health, powered by Ayu AI
          </p>

          <h1 className="rise font-display mt-6 max-w-[16ch] [animation-delay:170ms] text-[clamp(2.2rem,5.2vw,3.5rem)] leading-[1.06] text-ink text-balance">
            Your health records, read together for once
          </h1>

          <p className="rise mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate [animation-delay:250ms]">
            Ayussetu brings scattered paper and digital records into one place
            and uses AI to show where your risk is building, so something
            can be done about it early rather than explained afterwards.
          </p>

          <ul className="rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.86rem] font-medium text-navy [animation-delay:330ms]">
            {promise.map((p, i) => (
              <li key={p} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-faint" />}
                {p}
              </li>
            ))}
          </ul>

          <div className="rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:410ms]">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(255,139,11,0.9)] transition hover:bg-amber-deep"
            >
              Download the app
              <span className="transition group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="/for-doctors"
              className="rounded-full border border-line bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-navy transition hover:border-navy"
            >
              For doctors and clinics
            </a>
          </div>

          <ul className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-[0.8rem] text-slate [animation-delay:530ms]">
            {[
              "Free for patients",
              "Android and iPhone",
              "Nothing shared without your consent",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true" className="text-sage">
                  <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                </svg>
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-md text-[0.76rem] leading-relaxed text-mute">
            AI powered insights to support preventive health actions. Not a
            diagnostic or treatment tool.
          </p>
        </div>

        <div className="rise [animation-delay:300ms]">
          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ counts ------------------------------- */

const counts = [
  { n: "10", l: "vitals tracked", s: "From blood pressure to sleep" },
  { n: "14", l: "lab markers read", s: "Lipids, sugar, liver, kidney, blood" },
  { n: "17", l: "fields on a prescription", s: "Complaint to follow up" },
  { n: "3", l: "ways to consult", s: "In person, video, voice", exact: true },
];

export function Counts() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          {counts.map((c, i) => (
            <Reveal key={c.l} delay={i * 80}>
              <div className="flex items-baseline gap-4 py-8 md:block md:px-7 md:py-10 md:first:pl-0 md:last:pr-0">
                <p className="font-display text-[clamp(2.4rem,4.4vw,3rem)] leading-none tabular-nums text-white">
                  {c.n}
                  {!("exact" in c) && (
                    <span className="text-amber">+</span>
                  )}
                </p>
                <div className="md:mt-4">
                  <p className="text-[0.92rem] font-semibold text-white">
                    {c.l}
                  </p>
                  <p className="mt-1 text-[0.8rem] text-white/45">{c.s}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ thesis ------------------------------- */

const thesis = [
  {
    n: "The problem",
    t: "Your health is written down in a dozen places",
    b: "A lab in one clinic, a prescription in a drawer, a discharge summary on a phone, a sugar reading nobody wrote down. No one of them is wrong; together they are unreadable, and the pattern across them is what matters.",
  },
  {
    n: "What we do",
    t: "Read them as one record",
    b: "Upload what you have and Ayussetu pulls the markers out, places each against its range, and keeps every document alongside the medicines you take and the readings you log.",
  },
  {
    n: "Why it matters",
    t: "Risk shows up in the trend, not the test",
    b: "A single LDL means little. LDL rising across three reports while HDL falls and fasting glucose creeps up is a direction, and a direction is something you can still act on.",
  },
];

/* Each stage of the argument gets a picture, because "scattered",
   "together" and "a trend" are three shapes before they are three
   sentences. */
function Scattered() {
  const bits = [
    { t: "Lab, March", x: "4%", y: "6%", r: "-7deg" },
    { t: "Prescription", x: "52%", y: "0%", r: "5deg" },
    { t: "Sugar, unwritten", x: "20%", y: "40%", r: "3deg" },
    { t: "Discharge summary", x: "48%", y: "56%", r: "-4deg" },
    { t: "Lab, August", x: "2%", y: "74%", r: "6deg" },
  ];
  return (
    <div className="relative h-[10.5rem]">
      {bits.map((b) => (
        <span
          key={b.t}
          className="absolute rounded-lg border border-line bg-white px-2.5 py-1.5 text-[0.62rem] font-medium text-slate shadow-[0_6px_14px_-10px_rgba(22,35,61,0.6)]"
          style={{ left: b.x, top: b.y, transform: `rotate(${b.r})` }}
        >
          {b.t}
        </span>
      ))}
    </div>
  );
}

function Stacked() {
  return (
    <div className="relative h-[10.5rem]">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute left-1/2 w-[70%] -translate-x-1/2 rounded-xl border border-line bg-white shadow-[0_8px_18px_-14px_rgba(22,35,61,0.6)]"
          style={{ top: `${i * 10}px`, height: "6.5rem", zIndex: 3 - i, opacity: 1 - i * 0.22 }}
        />
      ))}
      <div className="absolute left-1/2 top-0 z-10 w-[70%] -translate-x-1/2 rounded-xl border border-line bg-white p-3">
        <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-mute">
          One record
        </p>
        {["LDL 164", "HbA1c 6.1", "Metformin 500mg"].map((t) => (
          <p key={t} className="mt-1.5 text-[0.64rem] font-medium text-navy">
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

function Trend() {
  return (
    <div className="relative h-[10.5rem] rounded-2xl border border-line bg-white p-3">
      <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-mute">
        LDL across three reports
      </p>
      <svg viewBox="0 0 200 86" className="mt-2 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="trendfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8B0B" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FF8B0B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 42, 64].map((y) => (
          <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#EDF0F5" strokeWidth="1" />
        ))}
        <path d="M8 66 L100 48 L192 16 L192 86 L8 86 Z" fill="url(#trendfill)" />
        <path d="M8 66 L100 48 L192 16" stroke="#FF8B0B" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[[8, 66], [100, 48], [192, 16]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="3.4" fill="#fff" stroke="#FF8B0B" strokeWidth="2" />
        ))}
      </svg>
      <div className="flex justify-between text-[0.56rem] text-mute">
        <span>Mar 128</span>
        <span>Jun 146</span>
        <span className="font-semibold text-amber-deep">Oct 164</span>
      </div>
    </div>
  );
}

const thesisArt = [<Scattered key="a" />, <Stacked key="b" />, <Trend key="c" />];

export function Thesis() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-amber/[0.05] blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              Why Ayussetu exists
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,2.7rem)] leading-tight text-ink text-balance">
              Prevention needs the whole picture, not the latest page
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {thesis.map((t, i) => (
            <Reveal key={t.n} delay={i * 130}>
              <article className="relative flex h-full flex-col">
                {/* the picture first: scattered, then stacked, then a line */}
                <div className="rounded-3xl border border-line bg-mist/50 p-4">
                  {thesisArt[i]}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-display text-[0.7rem] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mute">
                    {t.n}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[1.25rem] leading-snug text-navy text-balance">
                  {t.t}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                  {t.b}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- features ------------------------------ */

const features = [
  {
    eyebrow: "Unified health records",
    title: "Every report in one place, and read, not just stored",
    body: "Photograph a lab report and Ayussetu pulls the markers out of it, places each against its reference range and scores the set. The next report is compared with the last, so what you see is the direction of travel rather than a page of numbers to interpret alone.",
    points: [
      "Markers extracted and ranged automatically",
      "This report against the previous one",
      "Prescriptions, lab reports and hospital documents in one folder",
    ],
    mock: <ReportMock />,
  },
  {
    eyebrow: "Smart medication management",
    title: "Doses you actually take, and the ones you did not",
    body: "Add a medicine once and the rest works itself out: how many days the quantity covers, which days it is taken on, what time each dose falls. Reminders arrive at the hour, with Take, Skip and Snooze. A dose missed yesterday is still answerable this morning.",
    points: [
      "End date calculated from the quantity prescribed",
      "Missed doses logged late, as taken or skipped",
      "Refills, course history and interaction cautions",
    ],
    mock: <DoseMock />,
  },
  {
    eyebrow: "Ayu, the AI assistant",
    title: "Answers drawn from your record, not from the internet",
    body: "Ask about a medicine, a reading or a report and Ayu answers against what Ayussetu already knows about you: the markers in your last lab, the medicines you are on, the appointment you have on Tuesday. Clear summaries for faster decisions.",
    points: [
      "Reads your own reports, medicines and readings",
      "Plain language summaries of what a marker means",
      "Says plainly that it can be wrong, and to ask your doctor",
    ],
    mock: <AyuMock />,
  },
  {
    eyebrow: "Vitals tracking",
    title: "Ten readings, logged in one sitting",
    body: "Blood pressure, pulse, sugar, SpO2, temperature, respiratory rate, weight, BMI, sleep and steps. Scored into a health score with its own confidence figure, and flagged the day a reading falls out of range, not a week later.",
    points: [
      "One form for several readings at a time",
      "Readings outside their range flagged the same day",
      "Trends read against your own history",
    ],
    mock: <VitalsMock />,
  },
  {
    eyebrow: "Doctor consultations",
    title: "Book in person, on video or by voice",
    body: "Find a doctor by department, see the slots they actually have, and book the kind of consultation that suits. Join the call from the app, and keep the prescription that comes out of it, with your doses scheduled from it automatically.",
    points: [
      "Real slots, not a request form",
      "Video and voice calls inside the app",
      "The prescription lands in your records",
    ],
    mock: <ConsultMock />,
  },
  {
    eyebrow: "Family health tracking",
    title: "See how a parent's week went without ringing to ask",
    body: "A care group shares exactly what each person chooses to share: their score, their readings, how much of their medication they took. Privacy by design: every member controls their own sharing, and can stop it.",
    points: [
      "Join with a code, share by choice",
      "Adherence and readings by day, week, month or year",
      "Shared with family or a clinician, on the patient's terms",
    ],
    mock: <GroupMock />,
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden border-b border-line bg-mist">
      <div className="grid-ground pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            What it does
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-ink text-balance">
            Everything a hospital asks you to remember, remembered for you
          </h2>
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {features.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-mute">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.3rem,2.6vw,1.75rem)] leading-snug text-navy text-balance">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">
                  {b.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[0.86rem] text-navy">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Parallax speed={i % 2 === 0 ? 0.34 : 0.46}>{b.mock}</Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- markers ------------------------------- */

const markers = [
  {
    k: "LDL cholesterol",
    w: "The cholesterol that collects in artery walls. Watched over years rather than weeks, because the damage is cumulative and quiet.",
  },
  {
    k: "HbA1c",
    w: "Your average blood sugar over about three months. One fasting reading can be a bad morning; this one cannot.",
  },
  {
    k: "Fasting glucose",
    w: "Sugar after a night without food. Read alongside HbA1c, it separates a single high reading from a pattern.",
  },
  {
    k: "Creatinine and eGFR",
    w: "How well the kidneys are clearing waste. It moves slowly and silently, which is exactly why it is worth tracking.",
  },
];

export function Markers() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              Understanding your numbers
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.6vw,2.3rem)] leading-tight text-ink text-balance">
              A marker is only useful if you know what it is for
            </h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-slate">
              Ayussetu explains each one in plain language where it appears,
              so a number on a report stops being somebody else&rsquo;s
              vocabulary.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {markers.map((m) => (
              <div key={m.k} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <dt className="text-[0.95rem] font-semibold text-navy">
                  {m.k}
                </dt>
                <dd className="text-[0.88rem] leading-relaxed text-slate">
                  {m.w}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- audiences ------------------------------ */

const audiences = [
  {
    who: "For patients",
    line: "Take control of your health early",
    body: "Understand what your reports are saying, see where risk is building, and act on it before it becomes a diagnosis. Your record travels with you to whichever doctor you choose.",
    points: [
      "One record, every clinic",
      "Reminders that keep a course on track",
      "Risk explained in plain language",
    ],
  },
  {
    who: "For doctors",
    line: "The patient's history, before the consultation",
    body: "Ask for access and read their own readings and reports before they sit down. Write the prescription into the record, sign it with a finger, and their doses schedule themselves from it.",
    points: [
      "Record access, with consent",
      "A prescription written in a minute",
      "Earnings, referrals and the day's list",
    ],
  },
  {
    who: "For clinicians and clinics",
    line: "The whole practice, in one console",
    body: "Departments and the doctors who sit in them, the day's appointments across all of them, the patient list, every prescription written on your roster, and what has been billed.",
    points: [
      "Departments, doctors and staff",
      "The clinic's book for the day",
      "Prescriptions and billing in one place",
    ],
  },
];

export function Audiences() {
  return (
    <section id="audiences" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                Who it is for
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,4.4vw,2.7rem)] leading-tight text-ink text-balance">
                One record, read three different ways
              </h2>
            </div>
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-slate">
              The same history serves the person it belongs to, the doctor
              treating them and the clinic they walk into. Nobody is asked to
              keep a second copy.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.who} delay={i * 110}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 transition duration-500 hover:border-amber/50 hover:shadow-[0_26px_60px_-42px_rgba(22,35,61,0.7)]">
                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber/0 blur-2xl transition duration-500 group-hover:bg-amber/15" />

                <span className="font-display text-[0.8rem] tracking-[0.14em] text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-mute">
                  {a.who}
                </p>
                <h3 className="mt-2 font-display text-[1.28rem] leading-snug text-navy text-balance">
                  {a.line}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-slate">
                  {a.body}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {a.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[0.84rem] text-navy">
                      <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-amber" aria-hidden="true">
                        <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ----------------------------- practice ------------------------------ */

const doctorBlocks = [
  {
    eyebrow: "Consultation",
    title: "A prescription written in a minute, delivered in seconds",
    body: "Medicine by name with its generic resolved as you type, strength, quantity, times of day and days of the week, and the end date worked out from the quantity. Around it sits the rest of the visit: complaint, diagnosis with ICD codes, vitals, history, tests, immunisations, advice and a follow-up that books itself.",
    points: [
      "Seventeen clinical fields, and a draft to come back to",
      "Signed with a finger, delivered as a PDF",
      "The patient's doses are created from what you prescribed",
    ],
    mock: <PrescriptionMock />,
  },
  {
    eyebrow: "Practice",
    title: "What you earned, by the period you actually think in",
    body: "Today, this week, this month, this quarter, this year, or dates you pick. Consultations split by how they were seen, what is paid and what is owed, and referral share alongside, with a summary sheet to hand to a lab or an accountant.",
    points: [
      "Paid and outstanding kept apart",
      "Referral partners, percentages and a shareable summary",
      "Patients today and all time, prescriptions still to write",
    ],
    mock: <EarningsMock />,
  },
];

export function Practice() {
  return (
    <section id="doctors" className="relative overflow-hidden border-b border-line bg-ink text-white">
      <span className="pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-amber/10 blur-[140px]" />
      <span className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sage/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
            The doctor app
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-balance">
            A consultation that ends in a record, not a paper slip
          </h2>
        </div>
        <div className="mt-14 space-y-16 md:space-y-24">
          {doctorBlocks.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.3rem,2.6vw,1.75rem)] leading-snug text-balance">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {b.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[0.86rem] text-white/85">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Parallax speed={i % 2 === 0 ? 0.36 : 0.48}>{b.mock}</Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- steps ------------------------------- */

const steps = [
  {
    n: "01",
    title: "Bring what you already have",
    body: "Photograph the reports in the drawer and add the medicines you take. One sitting, and only once.",
  },
  {
    n: "02",
    title: "Let it keep up with you",
    body: "Log a reading when you take one. Ayussetu reminds you about doses, reads each new report, and says when something is out of range.",
  },
  {
    n: "03",
    title: "Act on it with your doctor",
    body: "Grant access at the consultation. The doctor reads the record, writes the prescription into it, and your doses update themselves.",
  },
];

export function How() {
  return (
    <section id="how" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-xl font-display text-[clamp(1.9rem,4.4vw,2.7rem)] leading-tight text-ink text-balance">
            Three steps, and then it looks after itself
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-y-14 md:grid-cols-3 md:gap-x-8">
          {steps.map((st, i) => (
            <Reveal key={st.n} delay={i * 140}>
              <li className="relative">
                {/* The rule runs to the next step and stops at the last,
                    so the row reads as a sequence rather than as three
                    boxes that happen to be beside each other. */}
                {i < steps.length - 1 && (
                  <span className="absolute left-14 top-6 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-line to-transparent md:block" />
                )}
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-navy font-display text-[1rem] text-white">
                  {st.n}
                  <span className="absolute inset-0 animate-pulse rounded-2xl bg-amber/0" />
                </span>
                <h3 className="mt-5 font-display text-[1.2rem] text-navy">
                  {st.title}
                </h3>
                <p className="mt-2 max-w-sm text-[0.92rem] leading-relaxed text-slate">
                  {st.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
/* ---------------------------- testimonial ---------------------------- */

export function Testimonial() {
  return (
    <section id="testimonials" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-20">
        <blockquote className="font-display text-[clamp(1.3rem,3vw,1.9rem)] font-medium leading-snug text-ink text-balance">
          &ldquo;This app has completely changed how I manage my health. I
          never miss a medication, and the AI chat gives instant answers to all
          my questions.&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-[0.86rem] text-mute">
          Ria Singh · Ayussetu user
        </figcaption>
      </div>
    </section>
  );
}

/* ------------------------------- ABHA -------------------------------- */

export function Abha() {
  return (
    <section id="abha" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink px-7 py-12 text-white md:px-14 md:py-16">
            <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  Coming soon
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.4rem)] leading-tight text-balance">
                  One health ID, all your records
                </h2>
                <p className="mt-4 max-w-xl text-[0.94rem] leading-relaxed text-white/65">
                  Ayussetu is being readied for the Ayushman Bharat Digital
                  Mission, so your records can be linked to your ABHA and read
                  by any hospital on the national network, with your consent
                  each time.
                </p>
              </div>

              {/* The thing itself, rather than three words in pills. */}
              <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-5">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                  Your ABHA
                </p>
                <p className="mt-2 font-display text-[1.3rem] tabular-nums tracking-[0.08em] text-white">
                  12 3456 7890 1234
                </p>
                <p className="mt-1 text-[0.8rem] text-white/50">lakshmi@abdm</p>

                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                  {[
                    "Linked to the records you already keep here",
                    "Shared only against a consent you approve",
                    "Readable by any hospital on the network",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5 text-[0.82rem] text-white/75">
                      <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-sage" aria-hidden="true">
                        <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
/* -------------------------------- team ------------------------------- */

export function Team() {
  return (
    <section id="team" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            About the founder
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-ink text-balance">
            Get to know the Ayussetu team
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 110}>
              <Link
                href={`/founders/${m.slug}`}
                className="group flex h-full gap-6 rounded-3xl border border-line bg-white p-6 transition hover:border-navy/25 hover:shadow-[0_24px_55px_-38px_rgba(22,35,61,0.65)] sm:p-7"
              >
                <span className="relative h-[8.5rem] w-[7.4rem] shrink-0 overflow-hidden rounded-2xl bg-mist">
                  <Image
                    src={m.photo}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </span>

                <span className="flex min-w-0 flex-col">
                  <span className="font-display text-[1.2rem] leading-snug text-navy">
                    {m.name}
                  </span>
                  <span className="mt-0.5 text-[0.82rem] font-medium text-amber-deep">
                    {m.role}
                  </span>
                  <span className="mt-3 text-[0.86rem] leading-relaxed text-slate">
                    {m.lede}
                  </span>
                  <span className="mt-auto pt-4 text-[0.8rem] font-semibold text-navy">
                    Read more
                    <span className="ml-1.5 inline-block transition group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ privacy ------------------------------ */

const security = [
  {
    title: "Access is asked for, never assumed",
    body: "A doctor requests your record and sees nothing until you approve it. Approval is per doctor, and can be withdrawn afterwards.",
  },
  {
    title: "Encrypted, and private by design",
    body: "Records are encrypted in transit and at rest, and shared only with the people you choose, whether family or clinician.",
  },
  {
    title: "Built towards ABDM",
    body: "Consent, care contexts and interoperable records are on the roadmap, so your record can travel with your ABHA.",
  },
  {
    title: "Nothing sold on",
    body: "Health data is not a product here. It exists to be read by you and the clinician you choose.",
  },
];

export function Security() {
  return (
    <section id="security" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                Privacy and safety
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,4.4vw,2.6rem)] leading-tight text-ink text-balance">
                A record is only useful if the person it belongs to controls it
              </h2>
            </div>
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-slate">
              Every claim below is something you can see happening in the app,
              rather than a padlock drawn on a website.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* 1. consent, shown as the request itself */}
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                A doctor has to ask
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Nothing of yours is visible to a clinician until you approve
                it, and the request names who is asking and why.
              </p>
              <div className="mt-auto rounded-2xl border border-line bg-mist/60 p-3.5 pt-3">
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-mute">
                  Access request
                </p>
                <p className="mt-1.5 text-[0.76rem] font-semibold text-navy">
                  Dr S. Rao wants to see your records
                </p>
                <p className="mt-0.5 text-[0.66rem] text-mute">
                  Documents, prescriptions and past readings
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="flex-1 rounded-lg bg-navy py-1.5 text-center text-[0.64rem] font-semibold text-white">
                    Approve
                  </span>
                  <span className="flex-1 rounded-lg border border-line bg-white py-1.5 text-center text-[0.64rem] font-semibold text-slate">
                    Not now
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 2. sharing, shown as the switches */}
          <Reveal delay={110}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                You choose what a group sees
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                A care group is not all or nothing. Each person decides what
                travels to it, and can change their mind.
              </p>
              <div className="mt-auto space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5">
                {[
                  ["Medication adherence", true],
                  ["Vitals and readings", true],
                  ["Lab reports", false],
                ].map(([label, on]) => (
                  <div
                    key={label as string}
                    className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2"
                  >
                    <span className="text-[0.7rem] font-medium text-navy">
                      {label as string}
                    </span>
                    <span
                      className={`flex h-4 w-7 items-center rounded-full px-0.5 ${
                        on ? "justify-end bg-sage" : "justify-start bg-line"
                      }`}
                    >
                      <span className="h-3 w-3 rounded-full bg-white" />
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* 3. the record of who looked */}
          <Reveal delay={220}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                Access is logged, and withdrawable
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Every grant is recorded with the date it was given, and you can
                take it back without asking anybody.
              </p>
              <div className="mt-auto space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5">
                {[
                  ["Dr S. Rao", "Granted 14 Oct", true],
                  ["Dr K. Menon", "Withdrawn 02 Oct", false],
                ].map(([n, when, active]) => (
                  <div
                    key={n as string}
                    className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-2"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        active ? "bg-sage" : "bg-faint"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.7rem] font-semibold text-navy">
                        {n as string}
                      </span>
                      <span className="block text-[0.6rem] text-mute">
                        {when as string}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 grid gap-6 rounded-3xl border border-line bg-mist/60 p-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Encrypted in transit and at rest", "Records move over TLS and are stored encrypted."],
              ["Nothing sold on", "Health data is not a product here, and never will be."],
              ["Private by design", "The architecture shares nothing by default."],
              ["Built towards ABDM", "Consent and interoperability are on the roadmap, not claimed today."],
            ].map(([t, b]) => (
              <div key={t}>
                <h4 className="text-[0.88rem] font-semibold text-navy">{t}</h4>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-slate">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-8 max-w-3xl text-[0.8rem] leading-relaxed text-mute">
          Ayussetu provides AI powered insights to support preventive health
          actions. It is not a diagnostic or treatment tool, and does not
          replace the judgement of a qualified clinician. AI can make mistakes,
          so always consult a healthcare professional.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- download ------------------------------ */

export function Download() {
  return (
    <section id="download" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-14">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-white text-balance">
            Start with the reports already in your drawer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
            Free for patients, on Android and iPhone. Doctors and clinics have
            tools of their own.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
