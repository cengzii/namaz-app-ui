import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full p-6 pt-12 space-y-8">
      <header className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light tracking-tight text-white"
        >
          Are you ready<br />for prayer?
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-zinc-400 font-light"
        >
          If you're ready, let's begin together.
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Sparkles size={120} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-medium text-emerald-400">Preparation Mode</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Pause. Take a breath. Renew your intention before you stand.
            </p>
          </div>
          <button 
            onClick={() => navigate('/prayers')}
            className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl py-3 px-4 font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles size={18} />
            Begin Preparation
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-zinc-800/50 border border-zinc-800 rounded-3xl p-6"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-white">Quick Start</h3>
            <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded-full">Fajr • Simple</span>
          </div>
          <p className="text-zinc-400 text-sm">Resume where you left off.</p>
          <button 
            onClick={() => navigate('/prayers/fajr')}
            className="w-full bg-white text-black hover:bg-zinc-200 rounded-xl py-3 px-4 font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Play size={18} fill="currentColor" />
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
