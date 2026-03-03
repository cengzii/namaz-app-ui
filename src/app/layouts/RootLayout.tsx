import { Outlet, Link } from "react-router";
import { TabBar } from "../components/ui/TabBar";

export function RootLayout() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-50 antialiased selection:bg-emerald-500/30">
      <div className="mx-auto max-w-md min-h-screen flex flex-col relative bg-slate-950 shadow-2xl overflow-hidden">
        <main className="flex-1 overflow-y-auto pb-24 px-4 sm:px-6 md:px-8 pt-6">
          <Outlet />
        </main>
        <TabBar />
      </div>
    </div>
  );
}
