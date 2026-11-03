"use client";

import { useEffect, useRef } from "react";
import "./scan-story.css";

/* The Download section's scene, as approved in the design file: a
   cabinet drawer holds four documents (a prescription, a discharge
   summary, a medication report and an MRI report). One at a time each
   rises out, is scanned by the camera frame, and flies into the app,
   where it is saved with a tick. When all four are in, the app says so,
   and it loops. The three steps beside it light up in time; they are
   found by data-scan-step on the page. Reduced motion shows the end. */

const ICON: Record<string, string> = {
  rx: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7ZM8.5 8.5l7 7"/></svg>',
  ds: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4"/></svg>',
  md: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5"/></svg>',
  mri: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>',
};

const DOCS = [
  { k: "rx", hd: "Dr. Mehta's Clinic", t: "Prescription", d: "14 Feb 2024", tilt: -5,
    body: '<div class="rx">Rx</div><div class="item"><span>Metformin 500 mg</span><b>1-0-1</b></div><div class="item"><span>Atorvastatin 10 mg</span><b>0-0-1</b></div><div class="ln"></div>' },
  { k: "ds", hd: "City Hospital", t: "Discharge summary", d: "02 Jun 2024", tilt: -1,
    body: '<div class="item"><span>Admitted</span><b>28 May</b></div><div class="item"><span>Discharged</span><b>02 Jun</b></div><div class="ln"></div><div class="ln" style="width:85%"></div><div class="ln" style="width:65%"></div>' },
  { k: "md", hd: "Apollo Pharmacy", t: "Medication report", d: "18 Sep 2024", tilt: 3,
    body: '<div class="item"><span>Current medicines</span><b>4</b></div><div class="item"><span>Refill due</span><b>25 Sep</b></div><div class="ln"></div><div class="ln" style="width:75%"></div>' },
  { k: "mri", hd: "Vijaya Imaging", t: "MRI report", d: "07 Jan 2025", tilt: -2,
    body: '<div class="scan"></div><div class="ln"></div><div class="ln" style="width:70%"></div>' },
];

const MARKUP = "<div class=\"cab\"><div class=\"body\"></div><div class=\"lower\"><span>FILES</span></div><div class=\"inside\"></div><div class=\"files\"><i></i><i></i><i></i><i></i></div><div class=\"front\"><span>REPORTS</span></div></div><div class=\"doc\" id=\"doc\"></div><div class=\"frame\" id=\"frame\"><b></b><b></b><b></b><b></b><div class=\"line\"></div><div class=\"chip\">Scanning</div></div><div class=\"phone\"><div class=\"screen\"><div class=\"notch\"></div><div class=\"app-h\"><img src=\"/icon.png\" alt=\"\"><b>Ayussetu</b></div><div class=\"app-t\">My records</div><div class=\"app-s\" id=\"count\">Nothing saved yet</div><div class=\"list\" id=\"list\"></div><div class=\"done\" id=\"done\"><i><svg width=\"10\" height=\"10\" viewBox=\"0 0 16 16\"><path d=\"M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z\" fill=\"#fff\"/></svg></i><div>All 4 saved<span>Kept safe, in one place</span></div></div><div class=\"flash\" id=\"flash\"></div></div></div>";

export function ScanStory() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let alive = true;
    const q = <T extends Element>(s: string) => el.querySelector(s) as T;
    const doc = q<HTMLDivElement>("#doc"), frame = q<HTMLDivElement>("#frame"), list = q<HTMLDivElement>("#list");
    const done = q<HTMLDivElement>("#done"), count = q<HTMLDivElement>("#count"), flash = q<HTMLDivElement>("#flash");
    const files = el.querySelectorAll(".files i");
    const steps = document.querySelectorAll<HTMLElement>("[data-scan-step]");
    const wait = (ms: number) => new Promise<void>((r, x) => setTimeout(() => (alive ? r() : x()), ms));
    const step = (n: number) => steps.forEach((s) => s.classList.toggle("on", Number(s.dataset.scanStep) === n));
    const saved = (n: number) => (count.textContent = n ? `${n} saved` : "Nothing saved yet");

    const addRow = (r: (typeof DOCS)[number]) => {
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `<span class="ic">${ICON[r.k]}</span><span class="tx">${r.t}<small>${r.d.slice(3)}</small></span><span class="st"></span>`;
      list.appendChild(row);
      requestAnimationFrame(() => row.classList.add("in"));
      return row;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      DOCS.forEach((r) => addRow(r).classList.add("in", "saved"));
      files.forEach((f) => f.classList.add("gone"));
      saved(DOCS.length);
      done.classList.add("in");
      return;
    }

    (async () => {
      for (;;) {
        list.innerHTML = "";
        done.classList.remove("in");
        saved(0);
        files.forEach((f) => f.classList.remove("gone"));
        await wait(700);
        for (let i = 0; i < DOCS.length; i++) {
          const r = DOCS[i];
          doc.innerHTML = `<div class="hd"><span>${r.hd}</span><i></i></div><div class="t">${r.t}</div><div class="d">${r.d}</div><div class="body">${r.body}</div><div class="sign"></div>`;
          step(0);
          doc.className = "doc";
          doc.style.transform = `rotate(${r.tilt}deg)`;
          files[DOCS.length - 1 - i].classList.add("gone");
          await wait(60);
          doc.classList.add("out");
          await wait(50);
          doc.style.transform = "";
          doc.classList.add("at-scan");
          await wait(1000);
          step(1);
          frame.classList.add("on");
          await wait(1150);
          flash.classList.remove("go");
          void flash.offsetWidth;
          flash.classList.add("go");
          frame.classList.remove("on");
          step(2);
          doc.classList.add("into-app");
          await wait(500);
          const row = addRow(r);
          await wait(800);
          row.classList.add("saved");
          saved(i + 1);
          await wait(500);
        }
        done.classList.add("in");
        step(-1);
        await wait(3400);
      }
    })().catch(() => {});

    return () => {
      alive = false;
    };
  }, []);

  return <div ref={root} className="ss" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
