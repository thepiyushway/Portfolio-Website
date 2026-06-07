import { Instagram, Linkedin, X, Youtube } from 'lucide-react';
import { socials } from '../config/site';

const SOCIAL_ICONS = {
  youtube: { Icon: Youtube, hover: 'hover:text-red-500' },
  linkedin: { Icon: Linkedin, hover: 'hover:text-blue-600' },
  instagram: { Icon: Instagram, hover: 'hover:text-pink-500' },
  twitter: { Icon: X, hover: 'hover:text-slate-900' },
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-[min(94vw,1440px)] px-4 sm:px-6 py-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

          {/* Left — copyright + tagline */}
          <div className="text-center text-xs text-slate-500 sm:text-left">
            <p>© {year} Piyush Sharma · All rights reserved</p>
          </div>

          {/* Right — nav + social icons */}
          <div className="flex flex-col items-center gap-2.5 sm:items-end">
            <nav className="flex gap-5 text-sm font-medium text-slate-600">
              <a href="#home"    className="transition-colors hover:text-brand-primary">Home</a>
              <a href="#about"   className="transition-colors hover:text-brand-primary">About</a>
              <a href="#work"    className="transition-colors hover:text-brand-primary">Work</a>
            </nav>

            <div className="flex gap-3.5">
              {socials.map(({ id, name, href }) => {
                const entry = SOCIAL_ICONS[id as keyof typeof SOCIAL_ICONS];
                if (!entry) return null;
                const { Icon, hover } = entry;
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`text-slate-400 transition-colors ${hover}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
