import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function BottomSheet({ isOpen, onClose, title, children }: BottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 rounded-t-[32px] z-50 p-6 pb-12 shadow-2xl h-[85vh] overflow-y-auto"
          >
            {/* Handle */}
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-6 opacity-50" />
            
            <div className="flex justify-between items-center mb-6">
              {title && <h2 className="text-2xl font-bold text-slate-100">{title}</h2>}
              <button 
                onClick={onClose}
                className="p-2 -mr-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6 text-slate-300">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Header Component
export function Header({ title, subtitle, rightElement }: { title: string, subtitle?: string, rightElement?: React.ReactNode }) {
  return (
    <div className="flex justify-between items-end px-6 pt-12 pb-6 bg-slate-950 sticky top-0 z-30 border-b border-slate-900/50 backdrop-blur-md">
      <div>
        {subtitle && <p className="text-sm font-medium text-emerald-500 mb-1 uppercase tracking-wider">{subtitle}</p>}
        <h1 className="text-3xl font-bold text-slate-50 leading-none">{title}</h1>
      </div>
      {rightElement && <div>{rightElement}</div>}
    </div>
  );
}
