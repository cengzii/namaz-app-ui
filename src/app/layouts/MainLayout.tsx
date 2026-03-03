import { Outlet } from 'react-router';
import { BottomNav } from '../components/BottomNav';

export function MainLayout() {
  return (
    <div
      className="min-h-screen w-full flex items-start justify-center"
      style={{ background: '#04040C' }}
    >
      <div
        className="relative w-full max-w-[390px] min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#07070F' }}
      >
        <main className="flex-1 overflow-y-auto pb-28">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
