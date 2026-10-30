"use client";

import { play, TurnCards, type Art, type Card } from "./TurnCards";

/* The three things Ayussetu holds to, each with a picture of the belief
   at work: a hospital asking and the person deciding, one lab value set
   against its range and explained, and a slow rise caught years before
   it crossed the line. */

const Consent: Art = ({ on }) => {
  const a = play(on, 0);
  const b = play(on, 2);
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <div className={`flex items-center justify-between text-[0.72rem] ${a.className}`} style={a.style}>
        <span className="text-navy">
          <span className="font-semibold">City Hospital</span> asks to see your reports
        </span>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-center text-[0.68rem] font-semibold">
        <span className="rounded-md border border-line py-1.5 text-slate">Decline</span>
        <span className={`rounded-md py-1.5 transition-colors duration-500 ${on ? "bg-cta text-white" : "bg-mist text-navy"}`}>Allow 7 days</span>
      </div>
      <p className={`mt-2 text-[0.6rem] text-mute ${b.className}`} style={b.style}>
        Your choice, logged and revocable
      </p>
    </div>
  );
};

const Explained: Art = ({ on }) => {
  const a = play(on, 3);
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <div className="flex items-baseline justify-between">
        <span className="text-[0.72rem] font-semibold text-navy">HbA1c</span>
        <span className="text-[0.95rem] font-semibold text-ink">6.9%</span>
      </div>
      <div className="relative mt-2.5">
        <div className="flex h-1.5 overflow-hidden rounded-full">
          <span className="w-[45%] bg-[#7FD3A8]" />
          <span className="w-[25%] bg-amber-light" />
          <span className="flex-1 bg-[#F08A87]" />
        </div>
        <span
          key={on ? "on" : "off"}
          className={`absolute -top-1 h-3.5 w-1 rounded-full bg-ink ${on ? "belief-mark" : ""}`}
          style={{ left: "62%" }}
        />
      </div>
      <div className="mt-1 flex justify-between text-[0.54rem] text-mute">
        <span>Normal</span>
        <span>Borderline</span>
        <span>High</span>
      </div>
      <p className={`mt-2 text-[0.66rem] leading-snug text-slate ${a.className}`} style={a.style}>
        A little above target. Worth a recheck in three months.
      </p>
    </div>
  );
};

const Early: Art = ({ on }) => {
  const a = play(on, 6);
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <svg viewBox="0 0 200 64" className="h-16 w-full" aria-hidden="true">
        <line x1="0" y1="14" x2="200" y2="14" stroke="#F08A87" strokeWidth="1" strokeDasharray="3 3" />
        <path
          key={on ? "on" : "off"}
          className={on ? "doc-sign" : undefined}
          d="M4 56 C40 54 60 50 90 44 S140 30 150 26"
          fill="none"
          stroke="#1F3050"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
        />
        <circle cx="150" cy="26" r="4.5" fill="#FF8B0B" className={a.className} style={a.style} />
      </svg>
      <div className="flex justify-between text-[0.54rem] text-mute">
        <span>2019</span>
        <span>2022</span>
        <span>2026</span>
      </div>
      <p className={`mt-1.5 text-[0.66rem] font-semibold text-amber-deep ${a.className}`} style={a.style}>
        Seen rising, before it crossed the line
      </p>
    </div>
  );
};

const beliefs: Card[] = [
  {
    t: "Your record belongs to you",
    b: "Not to the clinic that printed it. Everything in Ayussetu is held by you, and shared only when you say yes.",
    icon: "M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z",
    Art: Consent,
  },
  {
    t: "Every number, explained",
    b: "Each value is shown against its healthy range, in plain language, alongside your other readings.",
    icon: "M4 19h16M7 15l3-4 3 2 4-6",
    Art: Explained,
  },
  {
    t: "Early is when prevention works best",
    b: "Changes build slowly across years of reports. Reading them together helps you spot them while there is still time to act.",
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
    Art: Early,
  },
];

export function BeliefCards() {
  return <TurnCards cards={beliefs} />;
}
