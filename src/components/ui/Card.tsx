import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type CardProps = HTMLAttributes<HTMLDivElement>;

const baseClass = 'rounded-xl border border-slate-100 bg-surface-base p-5 shadow-soft';

export function Card({ className, ...props }: CardProps) {
  return <div className={cn(baseClass, className)} {...props} />;
}
