import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Patients", href: "#patients" },
  { label: "Doctors", href: "#doctors" },
  { label: "Clinics", href: "#clinics" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/ayussetu-mark.png" alt="" width={38} height={31} priority />
          <span className="font-display text-[1.3rem] font-semibold tracking-tight text-navy">
            Ayussetu
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.84rem] font-medium text-slate transition hover:text-navy"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="ml-auto rounded-full bg-navy px-5 py-2.5 text-[0.82rem] font-semibold text-white transition hover:bg-ink"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/ayussetu-mark.png" alt="" width={36} height={29} />
              <span className="font-display text-[1.2rem] font-semibold text-navy">
                Ayussetu
              </span>
            </div>
            <p className="mt-3 text-[0.86rem] leading-relaxed text-slate">
              A health record that belongs to the patient, and reaches the
              doctor treating them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-[0.86rem] sm:grid-cols-3">
            <div>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                Product
              </h3>
              <ul className="mt-3 space-y-2 text-slate">
                <li><a className="hover:text-navy" href="#patients">For patients</a></li>
                <li><a className="hover:text-navy" href="#doctors">For doctors</a></li>
                <li><a className="hover:text-navy" href="#clinics">For clinics</a></li>
                <li><a className="hover:text-navy" href="#download">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-slate">
                <li><a className="hover:text-navy" href="#how">How it works</a></li>
                <li><a className="hover:text-navy" href="#security">Security</a></li>
                <li><a className="hover:text-navy" href="#faq">Questions</a></li>
                <li><a className="hover:text-navy" href="#contact">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                Legal
              </h3>
              <ul className="mt-3 space-y-2 text-slate">
                <li><a className="hover:text-navy" href="/privacy">Privacy</a></li>
                <li><a className="hover:text-navy" href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.78rem] text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ayussetu. All rights reserved.</p>
          <p>
            Ayussetu supports your care. It does not replace your doctor&rsquo;s
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
