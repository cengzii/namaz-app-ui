import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { MosqueSilhouette } from '../components/MosqueSilhouette';
import { PRAYERS } from '../data/prayers';

const PRAYER_TIMES = [
  { id: 'fajr', name: 'Fajr', time: '05:12', done: true },
  { id: 'dhuhr', name: 'Dhuhr', time: '12:30', current: true },
  { id: 'asr', name: 'Asr', time: '15:42', done: false },
  { id: 'maghrib', name: 'Maghrib', time: '18:15', done: false },
  { id: 'isha', name: "Isha'", time: '19:45', done: false },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 5) return 'Good night';
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  if (hour < 21) return 'Good evening';
  return 'Good night';
}

export function HomePage() {
  const navigate = useNavigate();
  const greeting = getGreeting();
  const currentPrayer = PRAYER_TIMES.find(p => p.current) ?? PRAYER_TIMES[1];
  const nextPrayer = PRAYERS.find(p => p.id === currentPrayer.id)!;

  return (
    <div className="flex flex-col min-h-full" style={{ background: '#07070F' }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '13px', letterSpacing: '0.12em', fontWeight: 400 }}
            className="mb-1 uppercase"
          >
            {greeting}
          </p>
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, color: '#EDE7D6', lineHeight: 1.2 }}
          >
            Assalamu Alaykum
          </h1>
          <p
            style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '13px', marginTop: '4px' }}
          >
            Tuesday · 3 Rajab 1447
          </p>
        </motion.div>
      </div>

      {/* Next Prayer Card */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="rounded-3xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #141426 0%, #0F0F20 100%)',
            border: '1px solid rgba(196,164,80,0.18)',
            boxShadow: '0 0 60px rgba(196,164,80,0.05)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,164,80,0.08) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
          />

          <p
            style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 500 }}
            className="mb-3 uppercase"
          >
            Next Prayer
          </p>

          <div className="flex items-end justify-between relative z-10">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h2
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '46px', fontWeight: 400, color: '#EDE7D6', lineHeight: 1 }}
                >
                  {nextPrayer.name}
                </h2>
                <span
                  style={{ fontFamily: 'Amiri, serif', fontSize: '22px', color: 'rgba(196,164,80,0.7)' }}
                >
                  {nextPrayer.arabicName}
                </span>
              </div>
              <p
                style={{ color: '#9090A8', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
              >
                {nextPrayer.timeLabel} · {currentPrayer.time}
              </p>
            </div>

            <div className="text-right">
              <p
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', fontWeight: 300, color: '#C4A450', lineHeight: 1 }}
              >
                2h 14m
              </p>
              <p style={{ color: '#4A4A68', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>remaining</p>
            </div>
          </div>

          <div
            className="mt-5 pt-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex justify-between">
              {PRAYER_TIMES.map((p) => (
                <div key={p.id} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: p.done
                        ? '#C4A450'
                        : p.current
                        ? '#C4A450'
                        : 'rgba(255,255,255,0.12)',
                      boxShadow: p.current ? '0 0 6px rgba(196,164,80,0.6)' : 'none',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'Inter, sans-serif',
                      color: p.done || p.current ? '#C4A450' : '#333348',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mosque silhouette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="px-6 mb-6"
        style={{ color: 'rgba(255,255,255,0.025)' }}
      >
        <MosqueSilhouette className="w-full" />
      </motion.div>

      {/* Quick Actions */}
      <div className="px-6 space-y-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: '#4A4A68', fontSize: '11px', letterSpacing: '0.12em', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          className="uppercase mb-2"
        >
          Learn
        </motion.p>

        {PRAYERS.slice(0, 3).map((prayer, i) => (
          <motion.button
            key={prayer.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.08 }}
            onClick={() => navigate(`/prayers/${prayer.id}`)}
            className="w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 active:scale-[0.98] group"
            style={{
              background: '#0F0F1C',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <BookOpen size={16} style={{ color: prayer.color }} strokeWidth={1.8} />
              </div>
              <div className="text-left">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#EDE7D6', fontWeight: 400 }}>
                  {prayer.name}
                </p>
                <p style={{ fontSize: '12px', color: '#4A4A68', fontFamily: 'Inter, sans-serif' }}>
                  {prayer.timeLabel} · {prayer.rakats_sunnah > 0 ? `${prayer.rakats_sunnah}+` : ''}{prayer.rakats_fard} rakats
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                style={{ fontFamily: 'Amiri, serif', fontSize: '18px', color: 'rgba(196,164,80,0.4)' }}
              >
                {prayer.arabicName}
              </span>
              <ChevronRight size={16} style={{ color: '#2A2A40' }} className="group-hover:text-[#C4A450] transition-colors" />
            </div>
          </motion.button>
        ))}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/prayers')}
          className="w-full py-3 rounded-2xl transition-all duration-200 active:scale-[0.98]"
          style={{
            border: '1px solid rgba(196,164,80,0.2)',
            color: '#C4A450',
            background: 'rgba(196,164,80,0.04)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            letterSpacing: '0.05em',
          }}
        >
          View All Five Prayers →
        </motion.button>
      </div>

      <div className="h-8" />
    </div>
  );
}
