import React from 'react';
import { Card, Typography } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Header } from '../components/layout/BottomSheet';
import { Play, Sun, Moon, Calendar, ChevronRight } from 'lucide-react';

export function HomeScreen() {
  return (
    <div className="pb-24 bg-slate-950 min-h-screen">
      <Header 
        title="Salam, Ahmed" 
        subtitle="Tuesday, 14 Ramadan" 
        rightElement={
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <span className="text-emerald-400 font-bold">A</span>
          </div>
        }
      />

      <div className="px-6 space-y-8">
        {/* Hero Card - Next Prayer */}
        <section>
          <Typography variant="caption" className="mb-3 block text-emerald-500">Next Prayer</Typography>
          <Card className="bg-gradient-to-br from-emerald-900 to-slate-900 border-emerald-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sun size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Typography variant="h2" className="text-white mb-1">Asr</Typography>
                  <Typography variant="body" className="text-emerald-200">15:42</Typography>
                </div>
                <div className="bg-emerald-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="text-emerald-300 font-medium text-sm">In 45 min</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-3/4 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
                <Typography variant="body" className="text-sm text-slate-400 flex justify-between">
                  <span>Dhuhr 12:30</span>
                  <span>Maghrib 18:15</span>
                </Typography>
              </div>
            </div>
          </Card>
        </section>

        {/* Continue Learning */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <Typography variant="h3">Continue Learning</Typography>
            <Typography variant="caption" className="text-emerald-500 cursor-pointer">View All</Typography>
          </div>
          
          <Card hover className="flex items-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-emerald-900/50 transition-colors">
              <Play className="text-emerald-500 fill-emerald-500" size={24} />
            </div>
            <div className="flex-1">
              <Typography variant="body-lg" className="font-medium text-white mb-1">Surah Al-Fatiha</Typography>
              <Typography variant="body" className="text-sm text-slate-400">Step 3 of 7 • Recitation</Typography>
            </div>
            <ChevronRight className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
          </Card>
        </section>

        {/* Daily Hadith */}
        <section>
          <Typography variant="h3" className="mb-4">Daily Wisdom</Typography>
          <Card className="bg-slate-900/50 border-slate-800/50">
            <div className="flex gap-4 mb-4 text-emerald-500">
              <Moon size={24} />
            </div>
            <Typography variant="body-lg" className="italic text-slate-300 mb-4 font-serif leading-loose">
              "The most beloved of deeds to Allah are those that are most consistent, even if they are small."
            </Typography>
            <Typography variant="caption" className="text-slate-500">— Sahih Bukhari</Typography>
          </Card>
        </section>
      </div>
    </div>
  );
}
