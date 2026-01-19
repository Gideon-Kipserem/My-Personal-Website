import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
