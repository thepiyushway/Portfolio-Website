import { ArrowRight } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { cn } from '../../../lib/cn';
import { openSocialWithMobileFallback } from '../../../lib/socialLink';
import { SOCIAL_ICON_MAP } from '../iconMap';
import type { Social } from '../types';

type SocialCardProps = {
  social: Social;
};

const iconToneClasses: Record<Social['icon'], string> = {
  youtube: 'bg-red-50 text-red-500',
  linkedin: 'bg-blue-50 text-[#0063c2]',
  instagram: 'bg-pink-50 text-pink-500',
  twitter: 'bg-slate-100 text-slate-700'
};

export function SocialCard({ social }: SocialCardProps) {
  const Icon = SOCIAL_ICON_MAP[social.icon];

  return (
    <a
      href={social.href}
      onClick={(event) => openSocialWithMobileFallback(event, social.href)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow on ${social.name}`}
      className="group block h-full"
    >
      <Card className="flex h-full flex-col rounded-xl border border-slate-100 p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-slate-200 hover:shadow-md">
        <span
          className={cn(
            'mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg',
            iconToneClasses[social.icon]
          )}
        >
          <Icon size={18} />
        </span>
        <p className="mb-1 text-sm font-semibold text-slate-900">{social.name}</p>
        <p className="mb-3 text-xs leading-relaxed text-slate-500">{social.description}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[#0063c2] transition-all duration-200 group-hover:gap-2">
          {social.cta} <ArrowRight size={12} />
        </span>
      </Card>
    </a>
  );
}
