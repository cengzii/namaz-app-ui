import { useLocation, Link } from 'react-router';
import { Home, Moon, BarChart2, Settings } from 'lucide-react';

const tabs = [
  { to: '/home', icon: Home, label: 'Home' },
  { to: '/prayers', icon: Moon, label: 'Prayers' },
  { to: '/progress', icon: BarChart2, label: 'Progress' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function BottomNav() {
  const { pathname } = useLocation();

  const isActive = (to: string) => pathname === to || pathname.startsWith(to + '/');

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50"
      style={{
        background: 'rgba(6,6,14,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {tabs.map(({ to, icon: Icon, label }) => {
          const active = isActive(to);
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-1 px-5 py-2 rounded-2xl transition-all duration-200"
              style={{ opacity: active ? 1 : 0.38, textDecoration: 'none' }}
            >
              <div
                className="p-2 rounded-xl transition-all duration-200"
                style={active ? { background: 'rgba(196,164,80,0.14)' } : {}}
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  style={{ color: active ? '#C4A450' : '#EDE7D6' }}
                />
              </div>
              <span
                style={{
                  color: active ? '#C4A450' : '#9090A8',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.04em',
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
