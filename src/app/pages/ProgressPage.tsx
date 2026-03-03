import { motion } from 'motion/react';
import { Flame, Star, CheckCircle2, Circle } from 'lucide-react';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const WEEK_DATA = [5, 4, 5, 5, 5, 3, 4];

const TODAY_PRAYERS = [
  { name: 'Fajr', arabicName: 'الفَجْر', done: true, color: '#6B8FC4' },
  { name: 'Dhuhr', arabicName: 'الظُّهْر', done: true, color: '#C4A450' },
  { name: 'Asr', arabicName: 'العَصْر', done: false, color: '#C4825A' },
  { name: 'Maghrib', arabicName: 'المَغْرِب', done: false, color: '#B05E8C' },
  { name: "Isha'", arabicName: 'العِشَاء', done: false, color: '#7B6BC4' },
];

const BADGES = [
  { icon: '🌙', label: 'First Fajr', earned: true },
  { icon: '⭐', label: '7 Day Streak', earned: true },
  { icon: '📿', label: 'All Five', earned: true },
  { icon: '🕌', label: 'Full Week', earned: false },
  { icon: '✨', label: '30 Day Streak', earned: false },
  { icon: '🌟', label: 'Scholar', earned: false },
];

export function ProgressPage() {
  const totalThisWeek = WEEK_DATA.reduce((a, b) => a + b, 0);

  return (
    <div style={{ background: '#07070F', minHeight: '100%' }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <p
            style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em' }}
            className="uppercase mb-3"
          >
            Your Journey
          </p>
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, color: '#EDE7D6', lineHeight: 1.15 }}
          >
            Progress
          </h1>
        </motion.div>
      </div>

      {/* Streak + stats */}
      <div className="px-6 mb-6 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-3xl flex flex-col items-center justify-center gap-1"
          style={{
            background: 'linear-gradient(135deg, #1A1008 0%, #0F0A03 100%)',
            border: '1px solid rgba(196,164,80,0.2)',
            boxShadow: '0 0 40px rgba(196,164,80,0.04)',
          }}
        >
          <Flame size={28} style={{ color: '#C4A450' }} strokeWidth={1.5} />
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', color: '#C4A450', lineHeight: 1, fontWeight: 400 }}>7</p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#8A7040', letterSpacing: '0.1em' }}>DAY STREAK</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="flex-1 p-4 rounded-2xl flex flex-col items-center justify-center"
            style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: '#EDE7D6', lineHeight: 1 }}>
              {totalThisWeek}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#4A4A68', letterSpacing: '0.08em', marginTop: '2px' }}>
              THIS WEEK
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 p-4 rounded-2xl flex flex-col items-center justify-center"
            style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: '#EDE7D6', lineHeight: 1 }}>
              2
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#4A4A68', letterSpacing: '0.08em', marginTop: '2px' }}>
              TODAY
            </p>
          </motion.div>
        </div>
      </div>

      {/* Today's prayers */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mx-6 mb-6 p-5 rounded-3xl"
        style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
      >
        <p
          style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '16px' }}
          className="uppercase"
        >
          Today's Prayers
        </p>

        <div className="flex justify-between">
          {TODAY_PRAYERS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              {p.done ? (
                <CheckCircle2 size={26} style={{ color: p.color }} strokeWidth={1.5} />
              ) : (
                <Circle size={26} style={{ color: '#1E1E30' }} strokeWidth={1.5} />
              )}
              <span style={{ fontFamily: 'Amiri, serif', fontSize: '14px', color: p.done ? p.color : '#2A2A40' }}>
                {p.arabicName}
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: p.done ? '#6A6A88' : '#2A2A40' }}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weekly chart */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-6 mb-6 p-5 rounded-3xl"
        style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
      >
        <p
          style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '20px' }}
          className="uppercase"
        >
          This Week
        </p>

        <div className="flex items-end justify-between gap-2" style={{ height: '80px' }}>
          {WEEK_DATA.map((count, i) => (
            <div key={i} className="flex flex-col items-center gap-2 flex-1">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                style={{ transformOrigin: 'bottom' }}
                className="w-full rounded-t-lg"
              >
                <div
                  className="w-full rounded-lg"
                  style={{
                    height: `${(count / 5) * 56}px`,
                    background:
                      i === 6
                        ? 'rgba(196,164,80,0.3)'
                        : count === 5
                        ? 'rgba(196,164,80,0.6)'
                        : 'rgba(255,255,255,0.08)',
                    transition: 'background 0.2s',
                  }}
                />
              </motion.div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#3A3A58' }}>
                {DAYS[i]}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(196,164,80,0.6)' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#4A4A68' }}>All 5 prayers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#4A4A68' }}>Partial</span>
          </div>
        </div>
      </motion.div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mx-6 mb-6"
      >
        <p
          style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '14px' }}
          className="uppercase"
        >
          Achievements
        </p>

        <div className="grid grid-cols-3 gap-3">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: badge.earned ? 1 : 0.35, scale: 1 }}
              transition={{ delay: 0.45 + i * 0.05 }}
              className="p-4 rounded-2xl flex flex-col items-center gap-2"
              style={{
                background: badge.earned ? 'rgba(196,164,80,0.06)' : '#0A0A15',
                border: `1px solid ${badge.earned ? 'rgba(196,164,80,0.18)' : 'rgba(255,255,255,0.03)'}`,
              }}
            >
              <span className="text-2xl">{badge.icon}</span>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  color: badge.earned ? '#9090A8' : '#2A2A40',
                  textAlign: 'center',
                  lineHeight: 1.4,
                }}
              >
                {badge.label}
              </p>
              {badge.earned && (
                <Star size={10} style={{ color: '#C4A450' }} fill="#C4A450" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Inspirational quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mx-6 mb-6 p-6 rounded-3xl text-center"
        style={{
          background: 'rgba(196,164,80,0.04)',
          border: '1px solid rgba(196,164,80,0.1)',
        }}
      >
        <p
          style={{ fontFamily: 'Amiri, serif', fontSize: '22px', color: 'rgba(196,164,80,0.7)', marginBottom: '8px', direction: 'rtl' }}
        >
          إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
        </p>
        <p
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A68', fontStyle: 'italic', lineHeight: 1.6 }}
        >
          "Indeed, prayer has been decreed upon the believers a decree of specified times."
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#333348', marginTop: '8px' }}>
          — Quran 4:103
        </p>
      </motion.div>
    </div>
  );
}
