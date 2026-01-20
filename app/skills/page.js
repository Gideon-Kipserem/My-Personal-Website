import PageShell from "../../components/PageShell";

export default function SkillsPage() {
  return (
    <PageShell>
      <section className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-white">Skills</h1>
          <p className="max-w-prose text-slate-300">A quick overview of the tools and technologies I work with.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Frontend</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Backend</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "Node.js", "Express.js", "JSON Server"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Databases</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["MySQL", "MongoDB (Basics)"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-white">Tools</h2>
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
    </PageShell>
  );
}
