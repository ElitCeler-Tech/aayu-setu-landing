import { PhoneMock } from "./PhoneMock";

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
            Medicines you are on, readings you take, reports you collect and
            the doctors you see. Ayussetu keeps them together, reminds you
            when a dose is due, and puts the whole record in front of the
            doctor treating you.
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

const patientFeatures = [
  {
    title: "Doses you actually take",
    body: "A reminder at the time it is due, a record of what was taken, and a missed list you can still answer the next morning.",
  },
  {
    title: "Readings that mean something",
    body: "Blood pressure, sugar, weight, sleep. Ayussetu says when one is out of range today, and nothing when it is not.",
  },
  {
    title: "Reports in one folder",
    body: "Photograph a lab report and it is filed, read and tracked - so the trend is there the next time somebody asks.",
  },
  {
    title: "Consultations, in person or on video",
    body: "Book a slot, join the call from the app, and keep the prescription that came out of it.",
  },
  {
    title: "Family who can see it too",
    body: "Share with a parent or a child, and see how their week went without ringing to ask whether they took anything.",
  },
  {
    title: "Ask Ayu about any of it",
    body: "A question about a medicine, a reading or a report, answered against your own record rather than the internet's.",
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

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {patientFeatures.map((f) => (
            <div key={f.title} className="bg-white p-6">
              <h3 className="text-[0.98rem] font-semibold text-navy">
                {f.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const doctorFeatures = [
  {
    title: "Write a prescription in a minute",
    body: "Medicines, dosage, directions and a signature drawn with a finger. The patient gets it on their phone and their doses are scheduled from it.",
  },
  {
    title: "The patient's record, with permission",
    body: "Ask for access, and once it is granted you see their readings, reports and what they are already on - before the consultation, not after.",
  },
  {
    title: "What you earned, and from what",
    body: "Consultations and referral commission in one place, by week, month, quarter or year, with a sheet you can hand over.",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
              For doctors
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight text-balance">
              A consultation that ends in a record, not a paper slip
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-white/70">
              Ayussetu is a practice in your pocket: your day&rsquo;s
              appointments, each patient&rsquo;s history, the prescription you
              write at the end of it, and what the month came to.
            </p>
            <a
              href="#download"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-[0.9rem] font-semibold text-ink transition hover:bg-white/90"
            >
              Get the doctor app
            </a>
          </div>

          <div className="space-y-px overflow-hidden rounded-2xl bg-white/10">
            {doctorFeatures.map((f) => (
              <div key={f.title} className="bg-ink p-6">
                <h3 className="text-[0.98rem] font-semibold">{f.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-white/65">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Put your health in it",
    body: "Add the medicines you take and photograph the reports you already have. It takes one sitting, and only once.",
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
    <section id="how" className="border-y border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <h2 className="max-w-xl font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight text-ink text-balance">
          Three steps, and then it looks after itself
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="font-display text-[1.6rem] font-semibold text-amber tabular-nums">
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

const trust = [
  {
    title: "Your record is yours",
    body: "A doctor sees it when you say so, and not before. You can withdraw that at any time.",
  },
  {
    title: "Built for ABDM",
    body: "Ayussetu is being readied for India's health data network, so your records travel with your ABHA.",
  },
  {
    title: "Nothing sold",
    body: "We do not sell health data. The record exists to be read by you and the clinician you choose.",
  },
];

export function Trust() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-wash">
                <span className="h-2.5 w-2.5 rounded-full bg-sage" />
              </div>
              <h3 className="mt-4 text-[0.98rem] font-semibold text-navy">
                {t.title}
              </h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-slate">
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
    q: "Do I need an ABHA to use it?",
    a: "No. Ayussetu works on its own today, and ABHA linking is being added so records can travel with you to any hospital on the network.",
  },
  {
    q: "What if my doctor is not on Ayussetu?",
    a: "You can still keep your whole record and carry the prescription PDF to any consultation. Your doctor can join and read it directly.",
  },
  {
    q: "Can I look after a parent with it?",
    a: "Yes. A group lets a family share readings and medication, so you can see how somebody's week went without ringing to ask.",
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
