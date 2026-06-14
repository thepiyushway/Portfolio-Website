import { socials } from '@/content/site';
import { SOCIAL_LOGOS } from '@/lib/socials';

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
            <nav aria-label="Footer" className="flex gap-5 text-sm font-medium text-slate-600">
              <a href="#home"    className="rounded-sm transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">Home</a>
              <a href="#about"   className="rounded-sm transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">About</a>
              <a href="#work"    className="rounded-sm transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">Work</a>
            </nav>

            <div className="flex gap-3.5">
              {socials.map(({ id, name, href }) => {
                const logo = SOCIAL_LOGOS[id];
                if (!logo) return null;
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="rounded-sm transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                  >
                    <img src={logo} alt="" className="h-4 w-4 rounded object-contain" />
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
