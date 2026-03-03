import React from 'react';
import { Home, BookOpen, Activity, Settings } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TabKey = 'home' | 'prayers' | 'progress' | 'settings';

interface BottomBarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export function BottomBar({ activeTab, onTabChange }: BottomBarProps) {
  const tabs: { key: TabKey; icon: React.ElementType; label: string }[] = [
    { key: 'home', icon: Home, label: 'Home' },
    { key: 'prayers', icon: BookOpen, label: 'Prayers' },
    { key: 'progress', icon: Activity, label: 'Progress' },
    { key: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className="flex flex-col items-center justify-center w-full h-full py-1 relative group"
            >
              <div 
                className={cn(
                  "p-2 rounded-xl transition-all duration-300",
                  isActive ? "bg-emerald-500/10 text-emerald-400 -translate-y-1" : "text-slate-500 hover:text-slate-400"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              
              <span className={cn(
                "text-[10px] font-medium transition-opacity absolute bottom-1",
                isActive ? "opacity-100 text-emerald-500" : "opacity-0"
              )}>
                {tab.label}
              </span>
              
              {isActive && (
                <div className="absolute top-0 w-8 h-1 bg-emerald-500 rounded-b-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              )}
            </button>
          );
        })}
      </div>
      {/* Safe area spacer for notched phones handled by padding-bottom above but explicitly here if needed */}
      <div className="h-6 w-full bg-slate-900" /> 
    </div>
  );
}
