import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ToggleProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
}

export function Toggle({ checked, onCheckedChange, label }: ToggleProps) {
  return (
    <div 
      className="flex items-center justify-between py-4 cursor-pointer"
      onClick={() => onCheckedChange(!checked)}
    >
      {label && <span className="text-lg font-medium text-slate-200">{label}</span>}
      <div className={cn(
        "w-14 h-8 rounded-full transition-colors relative flex items-center px-1",
        checked ? "bg-emerald-600" : "bg-slate-700"
      )}>
        <div className={cn(
          "w-6 h-6 rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-6" : "translate-x-0"
        )} />
      </div>
    </div>
  );
}

// Checkbox Component for good measure
export function Checkbox({ checked, onCheckedChange, label }: ToggleProps) {
  return (
    <div 
      className="flex items-center gap-4 py-3 cursor-pointer group"
      onClick={() => onCheckedChange(!checked)}
    >
      <div className={cn(
        "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors",
        checked ? "bg-emerald-600 border-emerald-600" : "border-slate-600 group-hover:border-slate-500"
      )}>
        {checked && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
      </div>
      {label && <span className="text-lg text-slate-300">{label}</span>}
    </div>
  );
}
