import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Features", href: "#features" },
  { label: "Who it's for", href: "#audiences" },
  { label: "How it works", href: "#how" },
  { label: "FAQs", href: "#faq" },
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

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-[0.86rem] sm:grid-cols-3">
            <div>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                Product
              </h3>
              <ul className="mt-3 space-y-2 text-slate">
                <li><a className="hover:text-navy" href="#features">Features</a></li>
                <li><a className="hover:text-navy" href="#audiences">Who it&rsquo;s for</a></li>
                <li><a className="hover:text-navy" href="#how">How it works</a></li>
                <li><a className="hover:text-navy" href="#download">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-slate">
                <li><a className="hover:text-navy" href="#team">Team</a></li>
                <li><a className="hover:text-navy" href="#testimonials">Testimonials</a></li>
                <li><a className="hover:text-navy" href="#faq">FAQs</a></li>
                <li><a className="hover:text-navy" href="#contact">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                Reach us
              </h3>
              <address className="mt-3 space-y-2 not-italic text-slate">
                <p className="leading-relaxed">
                  11-29-79 2nd Bank Colony,<br />Warangal, Telangana 506002
                </p>
                <p>
                  <a className="hover:text-navy" href="mailto:info@ayussetu.com">
                    info@ayussetu.com
                  </a>
                </p>
                <p>
                  <a className="hover:text-navy" href="tel:+917794864334">
                    +91 7794 864 334
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* The disclaimer set the product is obliged to publish, kept
            together so none of it reads as small print hidden in a
            paragraph. */}
        <div className="mt-12 border-t border-line pt-6">
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
            Disclaimers and policies
          </h3>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] text-slate">
            {[
              "Medical",
              "AI use",
              "Health records",
              "Patient use",
              "Clinical use",
              "Outcomes",
              "Third-party data",
              "Regulatory",
              "Terms of use",
              "Privacy policy",
            ].map((d) => (
              <li key={d}>
                <a className="hover:text-navy" href="/legal">
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.78rem] text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ayussetu. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            AI-powered insights to support preventive health actions. Not a
            diagnostic or treatment tool.
          </p>
        </div>
      </div>
    </footer>
  );
}
