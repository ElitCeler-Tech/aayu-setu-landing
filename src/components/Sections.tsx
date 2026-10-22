import { PhoneMock } from "./PhoneMock";
import {
  DoseMock,
  VitalsMock,
  ReportMock,
  PrescriptionMock,
  EarningsMock,
  GroupMock,
} from "./Mocks";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Built for Indian clinics
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.3rem,6vw,3.6rem)] font-semibold leading-[1.08] tracking-tight text-ink text-balance">
            Your health, kept in one place
          </h1>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-slate">
            Ten vitals, fourteen lab markers, every medicine and every
            prescription &mdash; tracked in one record, reminded at the right
            hour, and handed to the doctor treating you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="rounded-full bg-amber px-6 py-3 text-[0.9rem] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(255,139,11,0.8)] transition hover:bg-amber-deep"
            >
              Download the app
            </a>
            <a
              href="#doctors"
              className="rounded-full border border-line bg-white px-6 py-3 text-[0.9rem] font-semibold text-navy transition hover:border-navy"
            >
              I am a doctor
            </a>
          </div>
          <p className="mt-5 text-[0.8rem] text-mute">
            Free for patients · Android and iPhone · No card needed
          </p>
        </div>

        <PhoneMock />
      </div>
    </section>
  );
}

const counts = [
  { n: "10", l: "vitals tracked", s: "BP, pulse, sugar, SpO2, temperature, respiratory rate, weight, BMI, sleep, steps" },
  { n: "14", l: "lab markers read", s: "Cholesterol, LDL, HDL, triglycerides, glucose, HbA1c, liver, kidney, haemoglobin, platelets, WBC, sodium, potassium, vitamin D" },
  { n: "17", l: "fields on a prescription", s: "From chief complaint and diagnosis codes to tests, immunisations and follow-up" },
  { n: "3", l: "ways to consult", s: "In person, video call or voice call, booked against the doctor's own slots" },
];

export function Counts() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-px bg-white/10 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {counts.map((c) => (
          <div key={c.l} className="bg-ink px-6 py-8">
            <p className="font-display text-[2.1rem] font-semibold leading-none text-amber tabular-nums">
              {c.n}
            </p>
            <p className="mt-2 text-[0.88rem] font-semibold text-white">
              {c.l}
            </p>
            <p className="mt-1.5 text-[0.74rem] leading-relaxed text-white/45">
              {c.s}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const patientBlocks = [
  {
    eyebrow: "Medicines",
    title: "Doses you actually take, and the ones you did not",
    body: "Add a medicine once and Ayussetu works out the rest: how many days the quantity covers, which days of the week it is taken on, and what time each dose falls. A reminder arrives at the hour it is due, with Take, Skip and Snooze on it. A dose missed yesterday is still there this morning, and can be logged as taken late or skipped - so the record stays true rather than tidy.",
    points: [
      "End date calculated from the quantity prescribed",
      "Refill ordering, course history and interaction cautions",
      "Missed doses answerable the next day",
    ],
    mock: <DoseMock />,
  },
  {
    eyebrow: "Readings",
    title: "Numbers that say something, on the days you take them",
    body: "Blood pressure, pulse, sugar, SpO2, temperature, respiratory rate, weight, BMI, sleep and steps - logged in one sitting rather than ten screens. Ayussetu scores them into a health score with its own confidence figure, and tells you when a reading is out of range today. A tile with nothing logged says so, instead of showing a green tick over a week-old number.",
    points: [
      "One form for several readings at a time",
      "Out-of-range flagged the day it happens, not later",
      "Trends read against your own history, not a textbook average",
    ],
    mock: <VitalsMock />,
  },
  {
    eyebrow: "Reports",
    title: "A lab report, read and filed the moment you photograph it",
    body: "Photograph a report and Ayussetu pulls the markers out of it - cholesterol, liver, kidney, haemoglobin, thyroid, vitamin D - places each against its reference range, and scores the set. The next report is compared against the last one, so what you see is the direction of travel rather than a page of numbers you have to interpret alone.",
    points: [
      "Markers extracted and ranged automatically",
      "Lab score, and this report against the previous one",
      "Every report kept in one folder, by category",
    ],
    mock: <ReportMock />,
  },
  {
    eyebrow: "Family",
    title: "See how a parent's week went without ringing to ask",
    body: "A care group shares exactly what each person chooses to share - their score, their readings, how much of their medication they took. A son in another city sees that his mother took eighteen of twenty-one doses this week, and nothing more private than that unless she allows it.",
    points: [
      "Join with a code, share by choice",
      "Adherence, readings and scores by day, week, month or year",
      "Every member controls their own sharing",
    ],
    mock: <GroupMock />,
  },
];

export function Patients() {
  return (
    <section id="patients" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            For patients
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight text-ink text-balance">
            Everything a hospital asks you to remember, remembered for you
          </h2>
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {patientBlocks.map((b, i) => (
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
                <h3 className="mt-2 font-display text-[clamp(1.3rem,2.6vw,1.75rem)] font-semibold leading-snug text-navy text-balance">
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

const doctorBlocks = [
  {
    eyebrow: "Consultation",
    title: "A prescription written in a minute, delivered in seconds",
    body: "Medicine by name with its generic resolved as you type, strength, quantity, the times of day and the days of the week. The end date works itself out from the quantity. Around it sits the rest of the visit - chief complaint, diagnosis with ICD codes, vitals, history, tests, immunisations, advice and a follow-up that books itself. Sign with a finger and it is done: the patient has the PDF, and their doses are already scheduled from it.",
    points: [
      "Seventeen clinical fields, and a draft you can come back to",
      "Follow-up date books the next appointment automatically",
      "The patient's doses are created from what you prescribed",
    ],
    mock: <PrescriptionMock />,
  },
  {
    eyebrow: "Practice",
    title: "What you earned, by the period you actually think in",
    body: "Today, this week, this month, this quarter, this year, or dates you pick. Consultations split by how they were seen, what has been paid and what is still owed, and the referral share alongside it - with a summary sheet you can hand to a lab or an accountant.",
    points: [
      "Paid and outstanding kept as separate figures",
      "Referral partners, agreed percentages and a shareable summary",
      "Patients today and all time, and prescriptions still to write",
    ],
    mock: <EarningsMock />,
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
            For doctors
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight text-balance">
            A consultation that ends in a record, not a paper slip
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-white/60">
            The day&rsquo;s appointments one at a time, each patient&rsquo;s
            own readings and reports with their permission, and the
            prescription you write at the end of it.
          </p>
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
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.3rem,2.6vw,1.75rem)] font-semibold leading-snug text-balance">
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
              </div>
              <div>{b.mock}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-white/10 pt-10">
          <p className="text-[0.95rem] text-white/70">
            Consulting on Ayussetu takes a phone and a registration number.
          </p>
          <a
            href="#download"
            className="rounded-full bg-white px-6 py-3 text-[0.9rem] font-semibold text-ink transition hover:bg-white/90"
          >
            Get the doctor app
          </a>
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    area: "Medication",
    items: [
      "Schedules by time and weekday",
      "Reminders with take, skip and snooze",
      "Missed doses logged late",
      "Course history and inactive medicines",
      "Refill ordering",
      "Duplicate and interaction cautions",
    ],
  },
  {
    area: "Readings and labs",
    items: [
      "Ten vitals, logged several at a time",
      "Health score with confidence",
      "Lab reports read and ranged",
      "Lab score and report-to-report comparison",
      "Out-of-range alerts the same day",
      "Smartwatch and Fitbit sync",
    ],
  },
  {
    area: "Care",
    items: [
      "Find a doctor by department",
      "Book in person, video or voice",
      "Join the consultation in the app",
      "Visit history with a summary",
      "Prescriptions kept as PDFs",
      "Record access granted per doctor",
    ],
  },
  {
    area: "Practice",
    items: [
      "Day's appointments and missed list",
      "Prescription builder with draft",
      "Record vitals for a patient",
      "Book a slot on a patient's behalf",
      "Earnings by period, paid and unpaid",
      "Referral partners and commission",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <h2 className="max-w-xl font-display text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-tight text-ink text-balance">
          What is actually in it
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.area}>
              <h3 className="border-b border-line pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-amber-deep">
                {c.area}
              </h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((i) => (
                  <li
                    key={i}
                    className="text-[0.86rem] leading-snug text-slate"
                  >
                    {i}
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

const steps = [
  {
    n: "01",
    title: "Put your health in it",
    body: "Add the medicines you take and photograph the reports you already have. One sitting, and only once.",
  },
  {
    n: "02",
    title: "Let it keep up with you",
    body: "Log a reading when you take one. Ayussetu reminds you about doses, flags what is out of range, and leaves the rest alone.",
  },
  {
    n: "03",
    title: "Hand it to your doctor",
    body: "At the consultation, grant access. The doctor reads the record, writes the prescription into it, and your doses update themselves.",
  },
];

export function How() {
  return (
    <section id="how" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <h2 className="max-w-xl font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight text-ink text-balance">
          Three steps, and then it looks after itself
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-line pt-5">
              <span className="font-display text-[1.6rem] font-semibold tabular-nums text-amber">
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

/* Three audiences, said once and early. Ayussetu is a patient app, a
   doctor app and a clinic console, and a visitor who cannot tell which
   one they are reading about leaves. */
const audiences = [
  {
    who: "Patients",
    line: "Keep your medicines, readings and reports in one place, and hand them to whoever treats you.",
    cta: "What you get",
    href: "#patients",
  },
  {
    who: "Doctors",
    line: "Consult, prescribe and get paid from one app, with the patient's own record in front of you.",
    cta: "For your practice",
    href: "#doctors",
  },
  {
    who: "Clinics",
    line: "Run departments, doctors, appointments and billing from a console built for the front desk.",
    cta: "For your clinic",
    href: "#clinics",
  },
];

export function Audiences() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {audiences.map((a) => (
            <a
              key={a.who}
              href={a.href}
              className="group bg-white p-7 transition hover:bg-mist/60"
            >
              <h3 className="font-display text-[1.35rem] font-semibold text-navy">
                {a.who}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                {a.line}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-amber-deep">
                {a.cta}
                <span className="transition group-hover:translate-x-0.5">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const clinicBlocks = [
  {
    title: "Every department, every doctor, one console",
    body: "Add departments and the doctors who sit in them, see the whole clinic's appointment book for the day, and keep the patient list in one place rather than in four registers.",
  },
  {
    title: "Prescriptions and records that stay with the clinic",
    body: "Every prescription written by a doctor on your roster is filed against the clinic as well as the patient, so a visit is still findable when the doctor who took it is not on shift.",
  },
  {
    title: "Billing and staff",
    body: "Consultation fees, what has been collected and what is outstanding, and the front-desk staff who need access without being clinicians.",
  },
];

export function Clinics() {
  return (
    <section id="clinics" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              For clinics
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight text-ink text-balance">
              A console for the people who run the place
            </h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-slate">
              Doctors get an app. The clinic gets a browser console: the
              day&rsquo;s book across every department, the roster, the
              patients, the prescriptions written, and what has been billed.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-navy px-6 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-ink"
            >
              Ask for a walkthrough
            </a>
          </div>

          <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {clinicBlocks.map((c) => (
              <div key={c.title} className="bg-white p-6">
                <h3 className="text-[0.98rem] font-semibold text-navy">
                  {c.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const security = [
  {
    title: "Access is asked for, never assumed",
    body: "A doctor requests a patient's record and sees nothing until the patient approves it. Approval is per doctor, and can be withdrawn afterwards.",
  },
  {
    title: "Readings stay where they belong",
    body: "A clinic sees its own patients, a doctor sees theirs, and a family group shares exactly what each member chooses to share.",
  },
  {
    title: "Built towards ABDM",
    body: "Consent, care contexts and FHIR records are on the roadmap so an Ayussetu record can travel with an ABHA to any hospital on the national network.",
  },
  {
    title: "Nothing sold on",
    body: "Health data is not a product here. It exists to be read by the patient and the clinician they choose.",
  },
];

export function Security() {
  return (
    <section id="security" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            Privacy
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-tight text-ink text-balance">
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
      </div>
    </section>
  );
}

export function Download() {
  return (
    <section id="download" className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-14">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-tight text-white text-balance">
            Start with the medicines you are on today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
            Free for patients, on Android and iPhone. Doctors have an app of
            their own.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-full bg-amber px-7 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-amber-deep"
            >
              Android
            </a>
            <a
              href="#"
              className="rounded-full border border-white/25 px-7 py-3 text-[0.9rem] font-semibold text-white transition hover:bg-white/10"
            >
              iPhone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Does it cost anything?",
    a: "The patient app is free. Doctors pay for the practice tools, and a consultation booked through Ayussetu carries the doctor's own fee.",
  },
  {
    q: "Who can see my records?",
    a: "You, and any doctor you grant access to. Access is per doctor, you are asked each time, and you can withdraw it afterwards.",
  },
  {
    q: "How does it read my lab report?",
    a: "Photograph or upload it and the markers are pulled out, placed against their reference ranges and scored. Anything it cannot read stays as the document you uploaded.",
  },
  {
    q: "Do I need an ABHA to use it?",
    a: "No. Ayussetu works on its own today, and ABHA linking is being added so records can travel with you to any hospital on the network.",
  },
  {
    q: "What if my doctor is not on Ayussetu?",
    a: "You can still keep your whole record and carry the prescription PDF to any consultation. Your doctor can join and read it directly.",
  },
  {
    q: "Can I look after a parent with it?",
    a: "Yes. A care group shares readings and medication adherence, so you can see how somebody's week went without ringing to ask.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-18 sm:px-8 md:py-24">
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-tight text-ink">
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
