import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-white">Contact</h1>
          <p className="max-w-prose text-slate-300">Kenya · Open to opportunities and collaborations.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Email</h2>
            <Link
              href="mailto:gideonkimaiyo254@gmail.com"
              className="mt-2 inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              gideonkimaiyo254@gmail.com
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Phone / WhatsApp</h2>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="tel:+254799009365" className="inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200">
                Call +254799009365
              </Link>
              <Link
                href="https://wa.me/254799009365"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">GitHub</h2>
            <Link
              href="https://github.com/Gideon-Kipserem"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              github.com/Gideon-Kipserem
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
