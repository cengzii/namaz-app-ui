import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Compass, MapPin } from 'lucide-react';

export function Qibla() {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    // Simulate compass movement
    const interval = setInterval(() => {
      const wobble = Math.random() * 5 - 2.5; // Small random wobble
      setDegree(prev => prev + wobble);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-12 pb-24 max-w-md mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-900 to-slate-950 opacity-50 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="text-3xl font-light text-slate-100 font-serif tracking-tight mb-2">Qibla</h1>
        <div className="flex items-center justify-center gap-2 text-emerald-400">
          <MapPin size={16} />
          <span className="text-sm font-medium tracking-wide">Mecca, Saudi Arabia</span>
        </div>
      </motion.div>

      {/* Compass UI */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-slate-800 shadow-2xl shadow-emerald-900/20" />
        
        {/* Degree Marks */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-slate-700 top-2 left-1/2 -translate-x-1/2 origin-bottom transform"
            style={{ transform: `rotate(${i * 30}deg) translateY(-4px)` }}
          />
        ))}

        {/* Rotating Compass */}
        <motion.div
          animate={{ rotate: 125 + degree }} // Qibla direction approx for US/Europe often varies, just a mock
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* North Indicator */}
          <div className="absolute top-8 text-slate-600 font-bold text-xs tracking-widest">N</div>
          
          {/* The Needle */}
          <div className="relative w-4 h-32 md:h-40 bg-gradient-to-b from-rose-500 to-slate-700 rounded-full shadow-lg origin-bottom transform -translate-y-1/2">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-l-transparent border-r-transparent border-b-emerald-500 -mt-3" />
          </div>
          
          {/* Center Point */}
          <div className="absolute w-4 h-4 bg-slate-200 rounded-full border-4 border-slate-900 z-20 shadow-lg" />
        </motion.div>

        {/* Kaaba Icon Direction Hint */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {/* This would be dynamically positioned in a real app */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="text-5xl font-light text-slate-100 font-mono tracking-widest">
          {Math.round(125 + degree)}°
        </div>
        <p className="text-slate-500 text-xs uppercase tracking-widest mt-2">
          From North
        </p>
      </motion.div>
    </div>
  );
}
