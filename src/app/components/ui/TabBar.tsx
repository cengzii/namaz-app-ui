import { Link, useLocation } from "react-router";
import { Home, Moon, BarChart2, Settings, Smartphone } from "lucide-react";
import { cn } from "@/app/lib/utils";

export function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "Prayers", path: "/prayers", icon: Moon }, // Moon fits "Prayer" well for Islamic context (crescent)
    { name: "Progress", path: "/progress", icon: BarChart2 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-lg border-t border-slate-800 pb-safe pt-2">
      <div className="mx-auto max-w-md flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.path || (tab.path !== "/" && currentPath.startsWith(tab.path));
          const Icon = tab.icon;
          
          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
                isActive ? "text-emerald-400" : "text-slate-500 hover:text-slate-400"
              )}
            >
              <div className={cn("p-1.5 rounded-xl transition-all", isActive && "bg-emerald-500/10")}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn("text-[10px] font-medium tracking-wide", isActive ? "text-emerald-400" : "text-slate-500")}>
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
