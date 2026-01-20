import PageShell from "../../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-white">About</h1>
          <p className="max-w-prose text-slate-300">
            Passionate software developer with a background in healthcare data systems and expertise in building modern,
            responsive, and scalable web applications. I focus on creating solutions that solve real business problems while
            ensuring user-friendly experiences.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">What I build</h2>
            <p className="mt-2 text-sm text-slate-300">
              Modern frontends with React/Next.js, REST API integrations, and clean UI with Tailwind CSS.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">How I work</h2>
            <p className="mt-2 text-sm text-slate-300">
              I prioritize maintainable code, responsive design, and performance. I collaborate with clear communication and
              Agile basics.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Experience</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Frontend Developer</span> · Personal & Academic Projects · May 2025–Present
              </p>
              <p>
                <span className="font-semibold text-white">Healthcare Data Enumerator</span> · RESAFESIA Project · 2023
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Education</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Certificate in Orthopedic & Trauma Medicine</span> · Kenya Medical Training Centre · 2023
              </p>
              <p>
                <span className="font-semibold text-white">Software Engineering Studies</span> · Moringa School · Ongoing
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
