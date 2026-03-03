import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Clock, Star } from 'lucide-react';
import { getPrayer } from '../data/prayers';

const POSITION_ICONS: Record<string, string> = {
  standing: '🧍',
  bowing: '🙇',
  prostration: '🙏',
  sitting: '🧘',
};

export function PrayerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const prayer = getPrayer(id ?? '');

  if (!prayer) {
    return (
      <div className="flex items-center justify-center h-64">
        <p style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif' }}>Prayer not found.</p>
      </div>
    );
  }

  return (
    <div style={{ background: '#07070F', minHeight: '100%' }}>
      {/* Hero header */}
      <div
        className="relative px-6 pt-14 pb-10 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0F0F1E 0%, #07070F 100%)' }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-48 pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${prayer.color}14 0%, transparent 70%)` }}
        />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/prayers')}
          className="flex items-center gap-2 mb-8"
          style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
        >
          <ArrowLeft size={18} />
          All Prayers
        </motion.button>

        {/* Arabic name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Amiri, serif', fontSize: '48px', color: prayer.color, lineHeight: 1, marginBottom: '4px' }}
        >
          {prayer.arabicName}
        </motion.p>

        {/* English name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: 300, color: '#EDE7D6', lineHeight: 1.1, marginBottom: '8px' }}
        >
          {prayer.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.6, maxWidth: '280px' }}
        >
          {prayer.description}
        </motion.p>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-6 mb-6 grid grid-cols-3 gap-3"
      >
        {[
          { label: 'Time', value: prayer.time, sub: prayer.timeLabel, icon: Clock },
          {
            label: 'Rakats',
            value: `${prayer.rakats_sunnah > 0 ? prayer.rakats_sunnah + '+' : ''}${prayer.rakats_fard}`,
            sub: prayer.rakats_sunnah > 0 ? 'Sunnah+Fard' : 'Fard',
            icon: Star,
          },
          { label: 'Duration', value: `~${prayer.total_duration_minutes}m`, sub: 'estimated', icon: Clock },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center py-4 px-2 rounded-2xl text-center"
            style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#EDE7D6', fontWeight: 400 }}>
              {stat.value}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#4A4A68', marginTop: '2px', letterSpacing: '0.06em' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Start button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="px-6 mb-8"
      >
        <button
          onClick={() => navigate(`/flow/${prayer.id}`)}
          className="w-full py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98]"
          style={{
            background: `linear-gradient(135deg, ${prayer.color}CC 0%, ${prayer.color}88 100%)`,
            color: '#07070F',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            boxShadow: `0 8px 32px ${prayer.color}30`,
          }}
        >
          <Play size={18} fill="currentColor" />
          START LEARNING
        </button>
      </motion.div>

      {/* Steps list */}
      <div className="px-6">
        <p
          style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}
          className="uppercase mb-4"
        >
          {prayer.steps.length} Steps · One Rakat
        </p>

        <div className="space-y-2">
          {prayer.steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.04 }}
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{ background: '#0C0C1A', border: '1px solid rgba(255,255,255,0.03)' }}
            >
              {/* Step number */}
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#4A4A68' }}>
                  {i + 1}
                </span>
              </div>

              {/* Step info */}
              <div className="flex-1 min-w-0">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#C8C2B4', fontWeight: 400 }}>
                  {step.name}
                </p>
                <p
                  style={{ fontFamily: 'Amiri, serif', fontSize: '15px', color: prayer.color, opacity: 0.7, marginTop: '1px' }}
                  className="truncate"
                >
                  {step.arabic}
                </p>
              </div>

              {/* Position */}
              <span className="text-lg flex-shrink-0">
                {POSITION_ICONS[step.position ?? 'standing'] ?? ''}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
}
