import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/cn';

type SectionWrapperProps = PropsWithChildren<{
  className?: string;
}>;

export function SectionWrapper({ className, children }: SectionWrapperProps) {
  return <div className={cn('section-wrapper', className)}>{children}</div>;
}
