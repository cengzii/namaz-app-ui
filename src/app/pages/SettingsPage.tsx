import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Bell, MapPin, BookOpen, Moon, ChevronRight, Type, Volume2, RotateCcw } from 'lucide-react';

function Toggle({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="relative flex-shrink-0 transition-all duration-300"
      style={{
        width: '48px',
        height: '28px',
        borderRadius: '14px',
        background: checked ? '#C4A450' : '#1A1A2E',
        border: `1px solid ${checked ? '#A8882E' : 'rgba(255,255,255,0.08)'}`,
      }}
    >
      <motion.div
        animate={{ x: checked ? 20 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute top-[3px] w-5 h-5 rounded-full"
        style={{ background: checked ? '#07070F' : '#3A3A58' }}
      />
    </button>
  );
}

function SettingRow({
  icon,
  label,
  sub,
  toggle,
  chevron,
  value,
}: {
  icon: ReactNode;
  label: string;
  sub?: string;
  toggle?: { checked: boolean; onToggle: () => void };
  chevron?: boolean;
  value?: string;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      className="flex items-center gap-4 px-4 py-4"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#C8C2B4', fontWeight: 400 }}>
          {label}
        </p>
        {sub && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A68', marginTop: '1px' }}>
            {sub}
          </p>
        )}
      </div>
      {value && (
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#5A5A78' }}>{value}</span>
      )}
      {toggle && <Toggle checked={toggle.checked} onToggle={toggle.onToggle} />}
      {chevron && <ChevronRight size={16} style={{ color: '#2A2A40' }} />}
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <p
        style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 500 }}
        className="uppercase px-6 mb-2"
      >
        {title}
      </p>
      <div
        className="mx-6 rounded-2xl overflow-hidden"
        style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.04)' }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function SettingsPage() {
  const [notifications, setNotifications] = useState(false);
  const [adhan, setAdhan] = useState(true);
  const [transliteration, setTransliteration] = useState(true);
  const [audioGuide, setAudioGuide] = useState(false);
  const [darkMode] = useState(true);

  return (
    <div style={{ background: '#07070F', minHeight: '100%' }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <p
            style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em' }}
            className="uppercase mb-3"
          >
            Preferences
          </p>
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, color: '#EDE7D6', lineHeight: 1.15 }}
          >
            Settings
          </h1>
        </motion.div>
      </div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mx-6 mb-8 p-5 rounded-3xl flex items-center gap-4"
        style={{ background: 'linear-gradient(135deg, #141428 0%, #0E0E1E 100%)', border: '1px solid rgba(196,164,80,0.12)' }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(196,164,80,0.12)', border: '1px solid rgba(196,164,80,0.2)' }}
        >
          <span style={{ fontFamily: 'Amiri, serif', fontSize: '24px', color: '#C4A450' }}>م</span>
        </div>
        <div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#EDE7D6', fontWeight: 400 }}>
            Learner
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A68' }}>
            7-day streak · Fajr & Dhuhr learned
          </p>
        </div>
      </motion.div>

      {/* Learning */}
      <Section title="Learning">
        <SettingRow
          icon={<Type size={16} style={{ color: '#9090A8' }} />}
          label="Show Transliteration"
          sub="Display phonetic pronunciation"
          toggle={{ checked: transliteration, onToggle: () => setTransliteration(v => !v) }}
        />
        <SettingRow
          icon={<Volume2 size={16} style={{ color: '#9090A8' }} />}
          label="Audio Guide"
          sub="Listen to Arabic recitation"
          toggle={{ checked: audioGuide, onToggle: () => setAudioGuide(v => !v) }}
        />
        <SettingRow
          icon={<BookOpen size={16} style={{ color: '#9090A8' }} />}
          label="Learning Mode"
          sub="How detailed the steps appear"
          value="Simple"
          chevron
        />
      </Section>

      {/* Notifications */}
      <Section title="Notifications">
        <SettingRow
          icon={<Bell size={16} style={{ color: '#9090A8' }} />}
          label="Prayer Reminders"
          sub="Remind me before each salah"
          toggle={{ checked: notifications, onToggle: () => setNotifications(v => !v) }}
        />
        <SettingRow
          icon={<Volume2 size={16} style={{ color: '#9090A8' }} />}
          label="Adhan"
          sub="Play call to prayer"
          toggle={{ checked: adhan, onToggle: () => setAdhan(v => !v) }}
        />
      </Section>

      {/* Location & Calculation */}
      <Section title="Location">
        <SettingRow
          icon={<MapPin size={16} style={{ color: '#9090A8' }} />}
          label="Location"
          value="New York, US"
          chevron
        />
        <SettingRow
          icon={<Moon size={16} style={{ color: '#9090A8' }} />}
          label="Calculation Method"
          value="ISNA"
          chevron
        />
      </Section>

      {/* Display */}
      <Section title="Display">
        <SettingRow
          icon={<Moon size={16} style={{ color: '#9090A8' }} />}
          label="Dark Mode"
          sub="Always on — best for night"
          toggle={{ checked: darkMode, onToggle: () => {} }}
        />
      </Section>

      {/* About */}
      <Section title="About">
        <SettingRow
          icon={<RotateCcw size={16} style={{ color: '#9090A8' }} />}
          label="Reset Progress"
          sub="Start your journey anew"
          chevron
        />
        <SettingRow
          icon={
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#9090A8" strokeWidth="1.5" />
              <text x="10" y="14" textAnchor="middle" fill="#9090A8" fontSize="10" fontFamily="serif">ي</text>
            </svg>
          }
          label="Learn Prayer"
          sub="Version 1.0"
          value="v1.0"
        />
      </Section>

      {/* Footer */}
      <div className="px-6 pb-6 text-center mt-2">
        <p
          style={{ fontFamily: 'Amiri, serif', fontSize: '18px', color: 'rgba(196,164,80,0.3)', marginBottom: '4px' }}
        >
          بِسْمِ اللَّهِ
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#2A2A3C' }}>
          Made with sincerity · For the ummah
        </p>
      </div>
    </div>
  );
}