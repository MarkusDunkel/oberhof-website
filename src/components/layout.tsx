import { Outlet } from "react-router-dom";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-16">
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
