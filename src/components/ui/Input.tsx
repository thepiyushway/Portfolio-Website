import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const baseClass =
  'h-11 w-full rounded-md border border-slate-200 bg-surface-base px-4 text-sm text-text-primary placeholder:text-text-muted transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/25';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn(baseClass, className)} {...props} />;
});

Input.displayName = 'Input';
