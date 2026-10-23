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

/* ------------------------------- hero -------------------------------- */

const promise = ["Digitalise records", "Predict risk", "Prevent disease", "Live better"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* A quiet grid, and one warm bloom behind the phone. Enough to
          stop the section being a white rectangle, far short of the
          purple gradient every health startup opens with. */}
      <div className="grid-ground pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute right-[-12%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-amber/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.08fr_0.92fr] md:py-28">
        <div>
          {/* Not a status pill. A pulsing green dot is the convention
              for "service is up", which is not what this sentence is
              about - it is a claim, so it gets a mark that reads as AI.
              The tracking is also eased off: at 0.1em the hyphen in
              "AI-driven" opened into a dash and the line read as two. */}
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.07em] text-slate backdrop-blur">
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
            Preventive health, powered by AI
          </p>

          <h1 className="font-display mt-6 max-w-[16ch] text-[clamp(2.2rem,5.2vw,3.5rem)] leading-[1.06] text-ink text-balance">
            Your health records, read together for once
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate">
            Ayussetu brings scattered paper and digital records into one place
            and uses AI to show where your risk is building, so something
            can be done about it early rather than explained afterwards.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {promise.map((p) => (
              <li
                key={p}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.82rem] font-medium text-navy"
              >
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(255,139,11,0.9)] transition hover:bg-amber-deep"
            >
              Download the app
              <span className="transition group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="#audiences"
              className="rounded-full border border-line bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-navy transition hover:border-navy"
            >
              Doctors, clinics and insurers
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-[0.8rem] text-slate">
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

        <PhoneShowcase />
      </div>
    </section>
  );
}

/* ------------------------------ counts ------------------------------- */

const counts = [
  { n: "10", l: "vitals tracked", s: "BP, pulse, sugar, SpO2, temperature, respiratory rate, weight, BMI, sleep, steps" },
  { n: "14", l: "lab markers read", s: "Cholesterol, LDL, HDL, triglycerides, glucose, HbA1c, liver, kidney, haemoglobin, platelets, WBC, sodium, potassium, vitamin D" },
  { n: "17", l: "fields on a prescription", s: "From chief complaint and diagnosis codes to tests, immunisations and the follow up" },
  { n: "3", l: "ways to consult", s: "In person, video call or voice call, booked against the doctor's own slots" },
];

export function Counts() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {counts.map((c) => (
          <div key={c.l} className="bg-ink px-6 py-8">
            <p className="font-display text-[2.1rem] leading-none tabular-nums text-amber">
              {c.n}
            </p>
            <p className="mt-2 text-[0.88rem] font-semibold text-white">{c.l}</p>
            <p className="mt-1.5 text-[0.74rem] leading-relaxed text-white/45">
              {c.s}
            </p>
          </div>
        ))}
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
    b: "A single LDL means little. LDL rising across three reports while HDL falls and fasting glucose creeps up is a direction - and a direction is something you can still act on.",
  },
];

export function Thesis() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
          <div>
            <h2 className="max-w-lg font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-ink text-balance">
              Prevention needs the whole picture, not the latest page
            </h2>
            <div className="mt-10 space-y-8">
              {thesis.map((t) => (
                <div key={t.n} className="border-l-2 border-line pl-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                    {t.n}
                  </p>
                  <h3 className="mt-1.5 text-[1.05rem] font-semibold text-navy">
                    {t.t}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate">
                    {t.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 self-center">
            <RecordsMock />
            <RiskMock />
          </div>
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
    body: "Ask about a medicine, a reading or a report and Ayu answers against what Ayussetu already knows about you - the markers in your last lab, the medicines you are on, the appointment you have on Tuesday. Clear summaries for faster decisions.",
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
    body: "Blood pressure, pulse, sugar, SpO2, temperature, respiratory rate, weight, BMI, sleep and steps. Scored into a health score with its own confidence figure, and flagged the day a reading falls out of range - not a week later.",
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
    body: "Find a doctor by department, see the slots they actually have, and book the kind of consultation that suits. Join the call from the app, and keep the prescription that comes out of it - with your doses scheduled from it automatically.",
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
    body: "A care group shares exactly what each person chooses to share - their score, their readings, how much of their medication they took. Privacy by design: every member controls their own sharing, and can stop it.",
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
    <section id="features" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
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
              <div>
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
              </div>
              <div>{b.mock}</div>
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
    <section id="audiences" className="border-b border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
            Who it is for
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-balance">
            The same record, read three different ways
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.who} className="bg-ink p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                {a.who}
              </p>
              <h3 className="mt-2 font-display text-[1.3rem] leading-snug text-balance">
                {a.line}
              </h3>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-white/60">
                {a.body}
              </p>
              <ul className="mt-4 space-y-1.5">
                {a.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[0.84rem] text-white/85">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-amber" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
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
    body: "Today, this week, this month, this quarter, this year, or dates you pick. Consultations split by how they were seen, what is paid and what is owed, and referral share alongside - with a summary sheet to hand to a lab or an accountant.",
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
    <section id="doctors" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            The doctor app
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-ink text-balance">
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
              <div>
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
              </div>
              <div>{b.mock}</div>
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
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <h2 className="max-w-xl font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-ink text-balance">
          Three steps, and then it looks after itself
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-line pt-5">
              <span className="font-display text-[1.6rem] tabular-nums text-amber">
                {s.n}
              </span>
              <h3 className="mt-2 text-[1.02rem] font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">
                {s.body}
              </p>
            </li>
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
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-line bg-white p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              Coming soon
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,3.2vw,2.1rem)] leading-tight text-ink text-balance">
              One health ID, all your records
            </h2>
            <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-slate">
              Ayussetu is being readied for the Ayushman Bharat Digital
              Mission, so your records can be linked to your ABHA and read by
              any hospital on the national network, with your consent each
              time.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["ABHA linking", "Consent-led", "Interoperable"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-[0.78rem] font-semibold text-slate"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- team ------------------------------- */

const team = [
  { n: "Sandeep Konda", r: "Founder & CEO" },
  { n: "Preeti Kotha", r: "Advisor" },
];

export function Team() {
  return (
    <section id="team" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] leading-tight text-ink">
          The people behind it
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:w-2/3">
          {team.map((m) => (
            <div key={m.n} className="bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-[0.9rem] font-semibold text-white">
                {m.n
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-[1rem] font-semibold text-navy">
                {m.n}
              </h3>
              <p className="text-[0.84rem] text-mute">{m.r}</p>
            </div>
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
    body: "Records are encrypted in transit and at rest, and shared only with the people you choose - family or clinician.",
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
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            Privacy and safety
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-ink text-balance">
            A record is only useful if the person it belongs to controls it
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {security.map((t) => (
            <div key={t.title} className="bg-white p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-wash">
                <span className="h-2.5 w-2.5 rounded-full bg-sage" />
              </div>
              <h3 className="mt-4 text-[0.98rem] font-semibold text-navy">
                {t.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                {t.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-[0.8rem] leading-relaxed text-mute">
          Ayussetu provides AI-powered insights to support preventive health
          actions. It is not a diagnostic or treatment tool, and does not
          replace the judgement of a qualified clinician. AI can make
          mistakes, so always consult a healthcare professional.
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-full bg-amber px-7 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-amber-deep"
            >
              Google Play
            </a>
            <a
              href="#"
              className="rounded-full border border-white/25 px-7 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-white/10"
            >
              App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- faq -------------------------------- */

const faqs = [
  {
    q: "How does Ayussetu track my vitals?",
    a: "Log them in the app in one sitting - blood pressure, pulse, sugar, SpO2, temperature, respiratory rate, weight, BMI, sleep and steps - or let a connected smartwatch fill in what it can. Each reading is scored and compared with your own history.",
  },
  {
    q: "How does it read my lab report?",
    a: "Photograph or upload it and the markers are pulled out, placed against their reference ranges and scored. Anything it cannot read stays as the document you uploaded, so nothing is lost.",
  },
  {
    q: "Can I book appointments online as well as in person?",
    a: "Yes. Find a doctor by department, see the slots they actually have, and book in person, by video or by voice. Everything stays in sync with your record.",
  },
  {
    q: "Who can see my records?",
    a: "You, and any doctor you grant access to. Access is per doctor, you are asked each time, and it can be withdrawn afterwards. A family group shares only what each member chooses.",
  },
  {
    q: "Is my data secure?",
    a: "Records are encrypted in transit and at rest, and the architecture is private by design. Nothing is shared without consent, and health data is never sold.",
  },
  {
    q: "Do I need an ABHA to use it?",
    a: "No. Ayussetu works on its own today, and ABHA linking is being added so your records can travel with you to any hospital on the national network.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-18 sm:px-8 md:py-24">
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-ink">
          Questions people ask
        </h2>
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="text-[0.98rem] font-semibold text-navy">{f.q}</dt>
              <dd className="mt-2 text-[0.9rem] leading-relaxed text-slate">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
