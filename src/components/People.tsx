import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";
import { Reveal } from "./Motion";

/* The people, laid out the way the reference lays out its board, but
   only with people who are really here. The third place is an
   invitation to doctors, which is true today: the registration form on
   the doctors page is live. Nobody is invented to fill the row. */
export function People({ intro = true }: { intro?: boolean }) {
  return (
    <section id="about" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        {intro ? (
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end md:gap-14">
          <div>
            <p className="eyebrow text-amber">About Ayussetu</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
              Personal health intelligence, <em className="text-amber">built for India</em>
            </h2>
          </div>
          <div className="text-[1rem] leading-relaxed text-slate">
            <p>
              Most families in India keep years of health records across paper
              files, WhatsApp chats and inboxes, and almost none of it is read
              together. Ayussetu exists to change that, so risk is seen while
              there is still time to act.
            </p>
            <p className="mt-3">
              It began with a pharmacist. Sandeep Konda brings twenty years of
              pharmacy leadership, and the idea he took from building
              iCancerCare: that the record, rather than the visit, is what
              carries a patient's care.
            </p>
            <a href="/about" className="mt-5 inline-block font-semibold text-navy underline decoration-line-strong underline-offset-[6px] transition hover:decoration-navy">
              Our vision &rarr;
            </a>
          </div>
        </div>
        ) : (
          <div>
            <p className="eyebrow text-amber">The team</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.04] text-ink">
              The people <em className="text-amber">behind it</em>
            </h2>
          </div>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 110}>
              <Link href={`/founders/${m.slug}`} className="group block">
                <span className="relative block aspect-[1/1.05] overflow-hidden rounded-[1.15rem] bg-line">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 17rem, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="mt-4 block text-[1.15rem] font-semibold text-ink">{m.name}</span>
                <span className="eyebrow mt-1.5 block text-amber">{m.role}</span>
                <span className="mt-2.5 block text-[0.88rem] leading-relaxed text-slate">{m.lede}</span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={team.length * 110}>
            <Link
              href="/for-doctors#join"
              className="group flex aspect-[1/1.05] flex-col rounded-[1.15rem] border-[1.5px] border-dashed border-line-strong bg-paper p-7 transition hover:border-navy/40"
            >
              <span className="eyebrow text-mute">For doctors</span>
              <span className="mt-auto font-display text-[2.1rem] leading-[1.05] text-ink">
                Are you a <em className="text-amber">doctor?</em>
              </span>
              <span className="mt-3 text-[0.88rem] leading-relaxed text-slate">
                Consult, prescribe and follow your patients on Ayussetu. Tell us
                about your practice and we will set you up.
              </span>
              <span className="mt-5 text-[0.9rem] font-semibold text-navy">
                Join as a doctor <span className="inline-block transition group-hover:translate-x-0.5">&rarr;</span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
