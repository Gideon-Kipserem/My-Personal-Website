import Link from "next/link";
import PageShell from "../../components/PageShell";

const projects = [
  {
    title: "Smart POS System",
    stack: "Next.js, Tailwind CSS",
    description: "Built a POS system with currency toggle, inventory alerts, and sales analytics.",
    liveHref: "https://smart-duka.vercel.app/"
  },
  {
    title: "Smart Goal Planner",
    stack: "React, JSON Server",
    description: "CRUD-based savings tracker with category management and progress visualization.",
    liveHref: "https://smart-goal-planner-3onc.onrender.com/",
    repoHref: "https://github.com/Gideon-Kipserem/smart-goal-planner"
  },
  {
    title: "Blog CRUD App",
    stack: "JavaScript, JSON Server",
    description: "Blog management app supporting create, edit, and delete functions.",
    repoHref: "https://github.com/Gideon-Kipserem/Code-Challenge-3"
  },
  {
    title: "Python Data Processor",
    stack: "Python, Pandas",
    description: "Script to clean, process, and analyze CSV healthcare datasets.",
    repoHref: "https://github.com/Gideon-Kipserem"
  }
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <h1 className="text-3xl font-semibold tracking-tight text-white">Projects</h1>
      <p className="mt-4 max-w-prose text-slate-300">
        Selected projects that highlight my work across frontend and fullstack development.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <h2 className="text-base font-semibold text-white">{project.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{project.stack}</p>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.liveHref ? (
                <Link
                  href={project.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-500"
                >
                  Live
                </Link>
              ) : null}

              {project.repoHref ? (
                <Link
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  GitHub
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-base font-semibold text-white">More projects</h2>
        <p className="mt-2 text-sm text-slate-300">Explore additional repositories on my GitHub profile.</p>
        <Link
          href="https://github.com/Gideon-Kipserem"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200"
        >
          github.com/Gideon-Kipserem
        </Link>
      </div>
    </PageShell>
  );
}
