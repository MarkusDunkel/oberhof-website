import { Outlet } from "react-router-dom";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
