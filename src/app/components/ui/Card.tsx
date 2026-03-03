import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Typography Component
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'body-lg' | 'caption';
  as?: React.ElementType;
}

export function Typography({
  variant = 'body',
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as || 
    (variant === 'h1' ? 'h1' : 
     variant === 'h2' ? 'h2' : 
     variant === 'h3' ? 'h3' : 'p');

  const styles = {
    h1: "text-3xl font-bold tracking-tight text-slate-50",
    h2: "text-2xl font-semibold tracking-tight text-slate-100",
    h3: "text-xl font-medium text-emerald-400",
    'body-lg': "text-lg leading-relaxed text-slate-200", // Large body text for reading
    body: "text-base leading-normal text-slate-300",
    caption: "text-sm text-slate-400 font-medium uppercase tracking-wider"
  };

  return (
    <Component className={cn(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
}

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl",
        hover && "transition-transform active:scale-[0.98] hover:border-emerald-500/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
