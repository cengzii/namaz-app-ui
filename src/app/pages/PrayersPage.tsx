import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PRAYERS } from '../data/prayers';

export function PrayersPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col" style={{ background: '#07070F', minHeight: '100%' }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 500 }}
            className="uppercase mb-3"
          >
            The Five Pillars · Prayer
          </p>
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, color: '#EDE7D6', lineHeight: 1.15 }}
          >
            The Five<br />Daily Prayers
          </h1>
          <p
            style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '14px', marginTop: '8px', lineHeight: 1.6 }}
          >
            Learn each prayer, step by step.
          </p>
        </motion.div>
      </div>

      {/* Hijri date banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-6 mb-6 px-4 py-3 rounded-2xl flex items-center justify-between"
        style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
      >
        <span style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>Today</span>
        <span style={{ color: '#9090A8', fontFamily: 'Amiri, serif', fontSize: '16px' }}>٣ رجب ١٤٤٧</span>
        <span style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>3 Rajab 1447</span>
      </motion.div>

      {/* Prayer list */}
      <div className="px-6 space-y-3 pb-6">
        {PRAYERS.map((prayer, i) => (
          <motion.button
            key={prayer.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.09, duration: 0.4, ease: 'easeOut' }}
            onClick={() => navigate(`/prayers/${prayer.id}`)}
            className="w-full text-left rounded-3xl overflow-hidden transition-all duration-200 active:scale-[0.98] group"
            style={{
              background: '#0F0F1C',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  {/* Arabic name */}
                  <p
                    style={{
                      fontFamily: 'Amiri, serif',
                      fontSize: '26px',
                      color: prayer.color,
                      lineHeight: 1,
                      marginBottom: '2px',
                    }}
                  >
                    {prayer.arabicName}
                  </p>
                  {/* English name */}
                  <h2
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '28px',
                      fontWeight: 400,
                      color: '#EDE7D6',
                      lineHeight: 1.1,
                    }}
                  >
                    {prayer.name}
                  </h2>
                </div>

                <div className="flex flex-col items-end">
                  <span
                    className="px-3 py-1 rounded-full text-xs mb-2"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      color: '#6A6A88',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {prayer.timeLabel}
                  </span>
                  <span
                    style={{ color: '#9090A8', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
                  >
                    {prayer.time}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="mb-4"
                style={{
                  color: '#5A5A78',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                {prayer.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {prayer.rakats_sunnah > 0 && (
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        color: '#6A6A88',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {prayer.rakats_sunnah} Sunnah
                    </span>
                  )}
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs"
                    style={{
                      background: `${prayer.color}18`,
                      color: prayer.color,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {prayer.rakats_fard} Fard
                  </span>
                  <span
                    style={{ color: '#333348', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
                  >
                    ~{prayer.total_duration_minutes}m
                  </span>
                </div>

                <div
                  className="p-2 rounded-xl transition-all duration-200 group-hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <ChevronRight size={14} style={{ color: '#3A3A58' }} />
                </div>
              </div>
            </div>

            {/* Accent bar at bottom */}
            <div
              className="h-0.5 w-full"
              style={{ background: `linear-gradient(90deg, transparent, ${prayer.color}40, transparent)` }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
