import { Outlet, useLocation, Link } from "react-router";
import { Home, List, BarChart2, Settings } from "lucide-react";
import { cn } from "../../lib/utils";

export function AppLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Prayers", path: "/prayers", icon: List },
    { name: "Progress", path: "/progress", icon: BarChart2 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white font-sans overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-24">
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
                  isActive ? "text-emerald-400" : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
