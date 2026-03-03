import { Link, useLocation } from 'react-router';
import { Home, List, BarChart2, Settings, BookOpen } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'motion/react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isFlow = location.pathname.startsWith('/flow');

  if (isFlow) {
    return <div className="h-full w-full bg-zinc-950 text-zinc-50">{children}</div>;
  }

  return (
    <div className="flex h-screen w-full flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30">
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-900 bg-zinc-950/90 backdrop-blur-md pb-safe">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          <NavItem to="/" icon={Home} label="Home" isActive={location.pathname === '/'} />
          <NavItem to="/prayers" icon={BookOpen} label="Prayers" isActive={location.pathname.startsWith('/prayers')} />
          <NavItem to="/progress" icon={BarChart2} label="Progress" isActive={location.pathname === '/progress'} />
          <NavItem to="/settings" icon={Settings} label="Settings" isActive={location.pathname === '/settings'} />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ to, icon: Icon, label, isActive }: { to: string; icon: any; label: string; isActive: boolean }) {
  return (
    <Link to={to} className="flex flex-col items-center justify-center w-full h-full group relative">
      <div className={clsx("transition-all duration-300 p-1 rounded-full", isActive ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-300")}>
        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
      </div>
      <span className={clsx("text-[10px] font-medium mt-1 transition-colors", isActive ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-300")}>
        {label}
      </span>
      {isActive && (
        <motion.div 
          layoutId="nav-indicator"
          className="absolute -top-[1px] w-8 h-[2px] bg-emerald-500 rounded-full"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
}
