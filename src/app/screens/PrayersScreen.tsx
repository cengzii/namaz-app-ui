import React from 'react';
import { Card, Typography } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Header } from '../components/layout/BottomSheet';
import { BookOpen, Check, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

const prayers = [
  { id: 1, name: 'Fajr', time: '05:30', status: 'completed', arabic: 'الفجر' },
  { id: 2, name: 'Dhuhr', time: '12:45', status: 'completed', arabic: 'الظهر' },
  { id: 3, name: 'Asr', time: '15:42', status: 'active', arabic: 'العصر' },
  { id: 4, name: 'Maghrib', time: '18:15', status: 'upcoming', arabic: 'المغرب' },
  { id: 5, name: 'Isha', time: '19:45', status: 'upcoming', arabic: 'العشاء' },
];

export function PrayersScreen() {
  return (
    <div className="pb-24 bg-slate-950 min-h-screen">
      <Header title="Daily Prayers" subtitle="Track Your Progress" />

      <div className="px-6 space-y-4">
        {prayers.map((prayer, index) => (
          <motion.div
            key={prayer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`flex items-center justify-between p-5 border-l-4 ${
                prayer.status === 'active' ? 'border-l-emerald-500 bg-emerald-900/10' : 
                prayer.status === 'completed' ? 'border-l-emerald-800 opacity-60' : 'border-l-slate-700'
              }`}
            >
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <Typography variant="h3" className={prayer.status === 'completed' ? 'text-slate-400' : 'text-white'}>
                    {prayer.name}
                  </Typography>
                  <span className="font-serif text-2xl text-slate-600 opacity-20">{prayer.arabic}</span>
                </div>
                <Typography variant="body" className="text-slate-400 font-mono text-sm tracking-widest uppercase">
                  {prayer.time}
                </Typography>
              </div>

              <div className="ml-4">
                {prayer.status === 'active' ? (
                  <Button size="sm" className="bg-emerald-600/20 text-emerald-400 border-emerald-500/50 hover:bg-emerald-600/30">
                    <PlayCircle size={20} className="mr-2" /> Start
                  </Button>
                ) : prayer.status === 'completed' ? (
                  <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Check size={20} />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-slate-800" />
                )}
              </div>
            </Card>
          </motion.div>
        ))}
        
        <div className="mt-8 p-6 bg-slate-900/50 rounded-3xl border border-dashed border-slate-800 text-center">
          <BookOpen className="mx-auto mb-3 text-slate-600" size={32} />
          <Typography variant="body" className="text-slate-500 max-w-[200px] mx-auto">
            Review prayer steps in the learning section
          </Typography>
        </div>
      </div>
    </div>
  );
}
