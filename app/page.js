import Image from "next/image";
import Link from "next/link";
import PageShell from "../components/PageShell";

export default function LandingPage() {
  return (
    <PageShell>
      <div >
        <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3">
          <Image src="/images/logo.jpg" alt="Gideon Kimaiyo logo" width={80} height={80} align="left" priority />
        </div>
      </div>

      <section className="relative -mt-16 grid items-center gap-10 md:grid-cols-2">

        <div>
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Frontend & Fullstack Developer · React · JavaScript · Python · Tailwind CSS
          </p>

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
              href="/#contact"
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
              src="/images/myimage.jpg"
              alt="Gideon Kimaiyo"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-white">About</h2>
        <p className="mt-4 max-w-prose text-slate-300">
          Passionate software developer with a background in healthcare data systems and expertise in building modern,
          responsive, and scalable web applications. I focus on creating solutions that solve real business problems
          while ensuring user-friendly experiences.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">What I build</h3>
            <p className="mt-2 text-sm text-slate-300">
              Modern frontends with React/Next.js, REST API integrations, and clean UI with Tailwind CSS.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">How I work</h3>
            <p className="mt-2 text-sm text-slate-300">
              I prioritize maintainable code, responsive design, and performance.
              I collaborate with clear communication and Agile basics.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Core Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Frontend</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Backend</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "Node.js", "Express.js", "JSON Server"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Databases</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["MySQL", "MongoDB (Basics)"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Git/GitHub", "Postman", "VS Code", "REST API Integration", "Responsive Design"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Contact</h2>
        <p className="mt-4 max-w-prose text-slate-300">Kenya · Open to opportunities and collaborations.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Email</h3>
            <Link
              href="mailto:gideonkimaiyo254@gmail.com"
              className="mt-2 inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              gideonkimaiyo254@gmail.com
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Phone / WhatsApp</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="tel:+254799009365"
                className="inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
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
            <h3 className="text-base font-semibold text-white">GitHub</h3>
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
