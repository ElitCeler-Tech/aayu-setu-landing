/* Ayu, the assistant. Shown as one real exchange about the reader's own
   numbers rather than as a list of AI claims: the answer cites the
   record, explains the term, and ends at the doctor. The label under it
   is the same one the app shows. */

const can = [
  "Ask questions about your records",
  "Understand medical terminology",
  "Explore changes in your health markers",
  "Get explanations in context, not search results",
  "Receive reminders and follow ups that fit",
];

export function AyuAI() {
  return (
    <section id="ai" className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <p className="eyebrow text-amber">Ayu, your health companion</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            AI that understands <em className="text-amber">your health</em>
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.02rem] leading-relaxed text-slate">
            Ayu answers from your own record, not from the internet.
            Generative AI explains, machine learning reads your reports, and
            controlled workflows decide what Ayu will and will not say.
          </p>
          <ul className="mt-8 space-y-3">
            {can.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[0.95rem] text-navy">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C25E00" strokeWidth="1.5" className="mt-0.5 shrink-0" aria-hidden="true">
                  <circle cx="9" cy="9" r="7.5" />
                  <path d="m5.8 9 2.2 2.2 4.2-4.4" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <a href="#download" className="mt-9 inline-block rounded-full bg-navy px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-ink">
            Meet your health companion
          </a>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-mist p-5 sm:p-7">
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ayussetu-logo-white.png" alt="" width={40} height={40} />
            </span>
            <span>
              <span className="block text-[0.95rem] font-semibold text-ink">Ayu</span>
              <span className="block text-[0.72rem] text-mute">Reads from your record</span>
            </span>
          </div>

          {/* The exchange plays out: the question, Ayu typing, the answer,
              then the reports it was read from. Fixed height, so the card
              does not jump while it plays. */}
          <div className="relative mt-5 min-h-[22rem] space-y-4">
            <p className="chat-q ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-navy px-4 py-3 text-[0.88rem] leading-relaxed text-white">
              My LDL went up to 164. Should I worry?
            </p>
            <span className="chat-typing absolute left-0 top-[4.6rem] inline-flex gap-1 rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3.5" aria-hidden="true">
              <i className="typing-dot h-1.5 w-1.5 rounded-full bg-mute" />
              <i className="typing-dot h-1.5 w-1.5 rounded-full bg-mute [animation-delay:0.15s]" />
              <i className="typing-dot h-1.5 w-1.5 rounded-full bg-mute [animation-delay:0.3s]" />
            </span>
            <div className="chat-a max-w-[92%] rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3.5 text-[0.88rem] leading-relaxed text-navy">
              <p>
                LDL is the cholesterol that can build up in artery walls. Yours
                went from 128 in March to 164 in October, across three reports.
              </p>
              <p className="mt-2.5">
                Under 100 is the healthy range, so 164 is high. It is worth
                discussing with your doctor; your next appointment is on 2 Nov.
              </p>
              <div className="chat-chips mt-3.5 flex flex-wrap gap-1.5">
                {["Lipid profile, Mar", "Lipid profile, Jun", "Lipid profile, Oct"].map((s) => (
                  <span key={s} className="rounded-full border border-line bg-mist px-2.5 py-1 text-[0.68rem] text-slate">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[0.72rem] text-mute">AI can make mistakes. Always consult a healthcare professional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
