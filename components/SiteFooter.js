export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Gideon Kipserem. All rights reserved.</p>
        <p className="text-slate-400">Built with React (Next.js) + Tailwind CSS</p>
      </div>
    </footer>
  );
}
