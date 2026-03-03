import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, MapPin, Sliders, Moon, Sun, Monitor, ChevronRight } from 'lucide-react';

export function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-24 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-light text-slate-100 font-serif tracking-tight mb-2">
          Settings
        </h1>
      </motion.div>

      <Section title="Preferences">
        <SettingItem
          icon={<Bell size={20} />}
          label="Adhan Notifications"
          action={
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          }
        />
        <SettingItem
          icon={<MapPin size={20} />}
          label="Location"
          value="New York, USA"
          action={<ChevronRight size={16} className="text-slate-500" />}
        />
      </Section>

      <Section title="Calculation">
        <SettingItem
          icon={<Sliders size={20} />}
          label="Calculation Method"
          value="ISNA"
          action={<ChevronRight size={16} className="text-slate-500" />}
        />
        <SettingItem
          icon={<Sliders size={20} />}
          label="Asr Calculation"
          value="Standard"
          action={<ChevronRight size={16} className="text-slate-500" />}
        />
      </Section>

      <Section title="Theme">
        <SettingItem
          icon={<Moon size={20} />}
          label="Appearance"
          value="Dark"
          action={<ChevronRight size={16} className="text-slate-500" />}
        />
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-slate-500 text-xs font-bold tracking-widest uppercase pl-2">
        {title}
      </h2>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

function SettingItem({ icon, label, value, action }: { icon: React.ReactNode; label: string; value?: string; action?: React.ReactNode }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-4 text-slate-300">
        {icon}
        <span className="font-medium text-slate-200">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        {value && <span className="text-slate-500 text-sm">{value}</span>}
        {action}
      </div>
    </motion.div>
  );
}

function Switch({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (checked: boolean) => void }) {
  return (
    <div
      onClick={() => onCheckedChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
        checked ? 'bg-emerald-500' : 'bg-slate-700'
      }`}
    >
      <motion.div
        layout
        className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm"
        animate={{ x: checked ? 20 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
