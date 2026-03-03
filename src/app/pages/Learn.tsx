import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Droplet, Moon, Sun, Volume2, BookOpen, Layers } from 'lucide-react';

const modules = [
  { id: 'wudu', title: 'Wudu', subtitle: 'Purification', icon: Droplet, color: 'text-sky-400' },
  { id: 'salah', title: 'Salah', subtitle: 'Steps of Prayer', icon: Moon, color: 'text-indigo-400' },
  { id: 'dhikr', title: 'Dhikr', subtitle: 'Remembrance', icon: Sun, color: 'text-amber-400' },
  { id: 'adhan', title: 'Adhan', subtitle: 'Call to Prayer', icon: Volume2, color: 'text-emerald-400' },
  { id: 'quran', title: 'Quran', subtitle: 'Recitation', icon: BookOpen, color: 'text-rose-400' },
  { id: 'sunnah', title: 'Sunnah', subtitle: 'Traditions', icon: Layers, color: 'text-violet-400' },
];

export function Learn() {
  return (
    <div className="flex flex-col gap-6 px-6 pt-12 pb-24 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4"
      >
        <h1 className="text-3xl font-light text-slate-100 font-serif tracking-tight mb-2">
          Learn
        </h1>
        <p className="text-slate-400">
          Master the essentials of prayer and faith.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {modules.map((module, index) => (
          <Link to={`/learn/${module.id}`} key={module.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl"
            >
              <div className={`absolute top-0 right-0 p-4 opacity-10 ${module.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                <module.icon size={80} strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10 flex items-center gap-5">
                <div className={`p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-inner ${module.color}`}>
                  <module.icon size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-100 mb-1">{module.title}</h3>
                  <p className="text-slate-500 text-sm tracking-wide">{module.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
