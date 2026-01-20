import Image from "next/image";
import Link from "next/link";
import PageShell from "../components/PageShell";

export default function LandingPage() {
  return (
    <PageShell>
      <section className="mt-6 grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="mb-4 flex w-full justify-center">
            <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-3">
              <Image
                src="/images/logo.jpg"
                alt="Gideon Kimaiyo logo"
                width={100}
                height={100}
                sizes="(min-width: 768px) 64px, (min-width: 640px) 56px, 48px"
                className="h-auto w-12 sm:w-14 md:w-16"
                priority
              />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              Frontend & Fullstack Developer · React · JavaScript · Python · Tailwind CSS
            </p>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hello, I&apos;m Gideon Kimaiyo
          </h1>

          <p className="mt-3 text-sm text-slate-400">Kenya</p>

          <p className="mt-4 max-w-prose text-slate-300">
            Passionate software developer with a background in healthcare data systems.
            I build modern, responsive, and scalable web applications with clean, maintainable code.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <Link
              href="mailto:gideonkimaiyo254@gmail.com"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/10"
            >
              Email
            </Link>
            <Link
              href="tel:+254799009365"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/10"
            >
              Call
            </Link>
            <Link
              href="https://wa.me/254799009365"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/10"
            >
              WhatsApp
            </Link>
            <Link
              href="https://github.com/Gideon-Kipserem"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/10"
            >
              GitHub
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-brand-600/30 via-white/5 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/image.png"
              alt="Gideon Kimaiyo"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
