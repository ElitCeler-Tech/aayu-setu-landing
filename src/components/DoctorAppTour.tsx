"use client";

import { play, row, sub, TurnCards, type Art, type Card } from "./TurnCards";

/* The doctors page: the doctor app on light ground, the clinician
   portal on dark, each as a row of TurnCards. */

/* ------------------------------ doctor app ------------------------------ */

const Day: Art = ({ on, tone }) => {
  const list = [
    { t: "10:00", n: "Meena S.", s: "Seen", c: "bg-sage-wash text-sage" },
    { t: "10:30", n: "Arjun P.", s: "Up next", c: "bg-cta text-white" },
    { t: "08:45", n: "Suresh N.", s: "Missed", c: "bg-[#FDECEC] text-[#D9403D]" },
  ];
  return (
    <div className="space-y-1.5">
      {list.map((a, i) => {
        const p = play(on, i);
        return (
          <div key={a.t} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.74rem] ${row(tone)} ${p.className}`} style={p.style}>
            <span className={`w-9 font-mono text-[0.64rem] ${sub(tone)}`}>{a.t}</span>
            <span className="flex-1">{a.n}</span>
            <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-semibold ${a.c}`}>{a.s}</span>
          </div>
        );
      })}
    </div>
  );
};

const PatientArt: Art = ({ on, tone }) => {
  const r = play(on, 0);
  return (
    <div className={`rounded-lg p-3 ${row(tone)}`}>
      <div className="flex items-center justify-between">
        <span className="text-[0.76rem] font-semibold">Arjun P., 52</span>
        <span className={`rounded-full bg-sage-wash px-2 py-0.5 text-[0.58rem] font-semibold text-sage ${r.className}`} style={r.style}>
          Access granted
        </span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[
          ["BP", "132/84"],
          ["Sugar", "126"],
          ["HbA1c", "6.9"],
        ].map(([k, v], i) => {
          const p = play(on, i + 1);
          return (
            <span key={k} className={`rounded-md bg-mist px-2 py-1.5 ${p.className}`} style={p.style}>
              <span className="block text-[0.56rem] text-mute">{k}</span>
              <span className="block text-[0.74rem] font-semibold text-ink">{v}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

const Rx: Art = ({ on, tone }) => {
  const p = play(on, 0);
  const sent = play(on, 6);
  return (
    <div className={`rounded-lg p-3 ${row(tone)}`}>
      <div className={`flex items-center justify-between text-[0.72rem] ${p.className}`} style={p.style}>
        <span className="font-semibold">Once daily, 30 days</span>
        <span className="rounded-full bg-amber-wash px-2 py-0.5 text-[0.58rem] text-amber-deep">Ends 30 Nov</span>
      </div>
      <svg viewBox="0 0 160 30" className="mt-1.5 h-7 w-full" aria-hidden="true">
        <path
          key={on ? "on" : "off"}
          className={on ? "doc-sign" : undefined}
          d="M6 22c10-14 16-16 18-9s-4 10 2 5 10-14 14-9-2 10 4 7 8-10 12-7 0 9 6 5 12-12 18-9 2 9 8 6 14-7 22-5 20 2 28-2"
          fill="none"
          stroke="#1F3050"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
      </svg>
      <span className={`mt-1 flex items-center gap-1.5 text-[0.64rem] font-semibold text-sage ${sent.className}`} style={sent.style}>
        <svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M6.2 11.8 2.9 8.5l1.1-1.1 2.2 2.2 5.6-5.6 1.1 1.1z" fill="currentColor" />
        </svg>
        Doses scheduled in their app
      </span>
    </div>
  );
};

const doctorCards: Card[] = [
  {
    t: "The day, one patient at a time",
    b: "Appointments in order, with missed ones kept apart so they can be chased rather than lost.",
    icon: "M8 3v3M16 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
    Art: Day,
  },
  {
    t: "The patient, before they sit down",
    b: "Ask for access to their record. Once granted, their readings, reports and medicines are in front of you.",
    icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0",
    Art: PatientArt,
  },
  {
    t: "The prescription, in a minute",
    b: "The end date worked out for you, your signature drawn with a finger, and their doses scheduled from it.",
    icon: "M6 3h9l4 4v14H6zM9 12h7M9 16h4M15 3v4h4",
    Art: Rx,
  },
];

/* ---------------------------- clinician portal ---------------------------- */

const Roster: Art = ({ on, tone }) => {
  const depts = [
    ["Cardiology", "3 doctors"],
    ["General medicine", "5 doctors"],
    ["Front desk", "2 staff"],
  ];
  return (
    <div className="space-y-1.5">
      {depts.map(([d, n], i) => {
        const p = play(on, i);
        return (
          <div key={d} className={`flex items-center justify-between rounded-lg px-3 py-2 text-[0.74rem] ${row(tone)} ${p.className}`} style={p.style}>
            <span>{d}</span>
            <span className={`text-[0.64rem] ${sub(tone)}`}>{n}</span>
          </div>
        );
      })}
    </div>
  );
};

const Book: Art = ({ on, tone }) => {
  const bars = [
    ["Cardiology", 70],
    ["General", 92],
    ["Paediatrics", 45],
  ] as const;
  return (
    <div className={`rounded-lg p-3 ${row(tone)}`}>
      <div className="flex items-baseline justify-between">
        <span className="text-[0.74rem] font-semibold">Today, all departments</span>
        <span className={`font-mono text-[0.64rem] ${sub(tone)}`}>42</span>
      </div>
      <div className="mt-2.5 space-y-2">
        {bars.map(([k, w], i) => (
          <div key={k}>
            <span className={`block text-[0.6rem] ${sub(tone)}`}>{k}</span>
            <span className="mt-0.5 block h-1.5 overflow-hidden rounded-full bg-white/10">
              <span
                key={on ? "on" : "off"}
                className={`block h-full rounded-full bg-cta ${on ? "doc-bar" : ""}`}
                style={{ width: `${w}%`, animationDelay: on ? `${0.15 + i * 0.15}s` : undefined }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Billing: Art = ({ on, tone }) => {
  const a = play(on, 0);
  const b = play(on, 1);
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <div className={`rounded-lg px-3 py-2.5 ${row(tone)} ${a.className}`} style={a.style}>
        <span className={`block text-[0.6rem] ${sub(tone)}`}>Collected</span>
        <span className="block text-[0.95rem] font-semibold text-[#7FD3A8]">&#8377;48,200</span>
      </div>
      <div className={`rounded-lg px-3 py-2.5 ${row(tone)} ${b.className}`} style={b.style}>
        <span className={`block text-[0.6rem] ${sub(tone)}`}>Outstanding</span>
        <span className="block text-[0.95rem] font-semibold text-amber-light">&#8377;6,500</span>
      </div>
      <div className={`col-span-2 flex items-center justify-between rounded-lg px-3 py-2 text-[0.7rem] ${row(tone)} ${play(on, 2).className}`} style={play(on, 2).style}>
        <span>Prescriptions filed today</span>
        <span className="font-mono">27</span>
      </div>
    </div>
  );
};

const portalCards: Card[] = [
  {
    t: "Departments and doctors",
    b: "Set up the departments your clinic runs, the doctors who sit in them, and the front desk staff who need access.",
    icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4",
    Art: Roster,
  },
  {
    t: "The clinic's book",
    b: "Every appointment across every department for the day, and one patient list behind it, rather than four registers.",
    icon: "M8 3v3M16 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
    Art: Book,
  },
  {
    t: "Prescriptions and billing",
    b: "Every prescription written on your roster filed to the clinic, with fees collected and outstanding alongside.",
    icon: "M4 7h16v10H4zM4 11h16M8 15h3",
    Art: Billing,
  },
];

export function DoctorAppCards() {
  return <TurnCards cards={doctorCards} />;
}

export function PortalCards() {
  return <TurnCards cards={portalCards} tone="dark" />;
}
